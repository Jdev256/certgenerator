import base64
import hashlib
import os.path
import re
import tempfile
import unicodedata
import uuid
from datetime import date
from io import BytesIO
import zipfile
from typing import Any
import pandas as pd
from pathlib import Path
import cairosvg
import qrcode
from fastapi import UploadFile
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
from app.models import Event
from app.db import SessionLocal
from app.models import Destinatario, Document, DocumentType


class Generator:
    BASE_DIR = Path(__file__).resolve().parents[3]

    def __init__(self,
                 excel: UploadFile | str,
                 template_path: UploadFile | str,
                 db: Session,
                 user_id: int,
                 event_id: int,
                 document_type: DocumentType = DocumentType.CERTIFICATE):
        self.db = db
        self.user_id = user_id
        self.event_id = event_id
        self.document_type = document_type

        self.event = self.db.execute(
            select(Event).where(
                Event.id == self.event_id,
                Event.user_id == self.user_id
            )
        ).scalars().first()

        if not self.event:
            raise ValueError(f"Evento com ID {event_id} nao encontrado")

        self.event_name = self.event.name
        self.name_organization = self.event.issuing_organization

        self.polo_dir_map = {}
        self.validation_base_url = "https://certgenerate.com.br/validate"

        if isinstance(excel, str):
            self.excel_path = excel
        else:
            self._excel_temp = tempfile.NamedTemporaryFile(delete=False, suffix=".xlsx")
            excel.file.seek(0)
            self._excel_temp.write(excel.file.read())
            self._excel_temp.close()
            self.excel_path = self._excel_temp.name

        if isinstance(template_path, str):
            self.template_path = Path(template_path)
        else:
            template_path.file.seek(0)
            self._template_temp = tempfile.NamedTemporaryFile(delete=False, suffix=".svg")
            self._template_temp.write(template_path.file.read())
            self._template_temp.close()
            self.template_path = Path(self._template_temp.name)

        self.df = pd.read_excel(self.excel_path)

    def __del__(self):
        if hasattr(self, '_excel_temp') and os.path.exists(self._excel_temp.name):
            os.unlink(self._excel_temp.name)
        if hasattr(self, '_template_temp') and os.path.exists(self._template_temp.name):
            os.unlink(self._template_temp.name)

    def _sanitize_folder_name(self, name: str) -> str:
        """Converte o nome da cidade em um nome seguro para pasta (ex: 'São Luís' -> 'Sao_Luis')."""
        if not name or pd.isna(name) or str(name).strip().lower() in ("nan", "none", ""):
            return "Geral"

        clean = unicodedata.normalize('NFKD', str(name)).encode('ASCII', 'ignore').decode('utf-8')
        clean = re.sub(r'[^\w\s-]', '', clean).strip()
        return re.sub(r'[-\s]+', '_', clean)

    def _clean_data(self):
        self.df["Nome Completo"] = (
            self.df["Nome Completo"]
            .astype(str)
            .fillna("")
            .str.strip()
            .str.lower()
            .str.title()
        )
        if "Email" in self.df.columns:
            self.df["Email"] = self.df["Email"].astype(str).fillna("").str.strip().str.lower()

        city_col = "Cidade Polo" if "Cidade Polo" in self.df.columns else (
            "Cidade" if "Cidade" in self.df.columns else None)

        if city_col:
            self.df[city_col] = (
                self.df[city_col]
                .astype(str)
                .fillna("Geral")
                .str.strip()
                .str.split("-").str[0]
                .str.split()
                .str[:2]
                .str.join(" ")
                .str.strip()
                .str.lower()
                .str.title()
                .fillna("Geral")
                .replace("", "Geral")
            )
        else:
            city_col = "Cidade Polo"
            self.df[city_col] = "Geral"

        if "Data de Nascimento" in self.df.columns:
            self.df["Data de Nascimento"] = self.df["Data de Nascimento"].astype(str).str.strip()

        unique_cities = self.df[city_col].unique()
        self.polo_dir_map = {
            city: self._sanitize_folder_name(city)
            for city in unique_cities
            if pd.notna(city) and str(city).strip() not in ("", "nan", "None")
        }

    def parse(self):
        self.df["Data de Nascimento"] = pd.to_datetime(
            self.df["Data de Nascimento"],
            errors="coerce",
            dayfirst=True,
            format="mixed"
        )

    def _remove_duplicates(self):
        initial_len = len(self.df)

        # Regra 1: Remove duplicatas exatas por Email (ignorando valores nulos/nan/vazios)
        if "Email" in self.df.columns:
            has_email_mask = self.df["Email"].notna() & (self.df["Email"] != "nan") & (self.df["Email"] != "")
            df_with_email = self.df[has_email_mask].drop_duplicates(subset=["Email"], keep="first")
            df_without_email = self.df[~has_email_mask]
            self.df = pd.concat([df_with_email, df_without_email], ignore_index=True)

        # Regra 2: Remove duplicatas por Nome Completo + Data de Nascimento (para pegar eventuais e-mails em branco)
        self.df = self.df.drop_duplicates(
            subset=["Nome Completo", "Data de Nascimento"],
            keep="first"
        ).reset_index(drop=True)

        removed_count = initial_len - len(self.df)
        if removed_count > 0:
            print(f"[Deduplicação] {removed_count} registro(s) duplicado(s) removido(s) da planilha.")

    def _generate_qr_code_base64(self, payloadLurl: str) -> str:
        qr = qrcode.QRCode(
            version=None,
            error_correction=qrcode.constants.ERROR_CORRECT_M,
            box_size=10,
            border=1
        )

        qr.add_data(payloadLurl)
        qr.make(fit=True)
        img = qr.make_image(fill_color="black",back_color="white")
        buferred = BytesIO()
        img.save(buferred, format="PNG")
        img_str = base64.b64encode(buferred.getvalue()).decode("utf-8")
        return f"data:image/png;base64,{img_str}"

    def _generate_unique_code(self, email: str) -> str:
        if email and email != "nan":
            hash_id = hashlib.sha256(email.encode("utf-8")).hexdigest()[:8].upper()
            return f"{self.name_organization}-{hash_id}"
        random_hash = uuid.uuid4().hex[:10].upper()
        return f"{self.name_organization}-U{random_hash}"

    def _get_or_create_recipient(self, name: str, email: str | None, phone: str | None, city: str,
                                 dob: date | None) -> None | Destinatario | Any:
        """Busca um destinatário existente para o usuário atual ou cria um novo."""
        recipient = None

        if email:
            recipient = self.db.execute(
                select(Destinatario).where(
                    Destinatario.email == email,
                    Destinatario.user_id == self.user_id
                )
            ).scalars().first()

        if recipient:
            if recipient.name != name:
                print(f"[Correção de Nome] {recipient.email}: de '{recipient.name}' para '{name}'")
                recipient.name = name
                recipient.city = city
                if dob:
                    recipient.date_of_birth = dob
                if phone:
                    recipient.phone = phone
                self.db.flush()
            return recipient

        recipient = self.db.execute(
            select(Destinatario).where(
                Destinatario.name == name,
                Destinatario.city == city,
                Destinatario.user_id == self.user_id
            )
        ).scalars().first()

        if not recipient:
            recipient = Destinatario(
                user_id=self.user_id,
                name=name,
                date_of_birth=dob,
                email=email,
                phone=phone,
                city=city
            )
            self.db.add(recipient)
            self.db.flush()

        return recipient

    def _get_or_create_document(self, recipient_id: int, email: str | None) -> tuple[Document, str, bool]:
        """Verifica se o documento já existe no evento ou cria um novo registro."""
        existing_doc = self.db.execute(
            select(Document).where(
                Document.recipient_id == recipient_id,
                Document.event_id == self.event_id,
                Document.user_id == self.user_id
            )
        ).scalars().first()

        if existing_doc:
            return existing_doc, existing_doc.verification_code, False

        cert_code = self._generate_unique_code(email)
        validation_url = f"{self.validation_base_url}?code={cert_code}"
        qr_base64 = self._generate_qr_code_base64(validation_url)

        doc = Document(
            user_id=self.user_id,
            event_id=self.event_id,
            recipient_id=recipient_id,
            doc_type=self.document_type,
            name=self.event_name,
            issuing_organization=self.name_organization,
            issue_date=date.today(),
            verification_code=cert_code,
            credential_url=validation_url,
            qr_code_image=qr_base64,
        )
        self.db.add(doc)
        self.db.flush()

        return doc, cert_code, True

    def main(self):
        self._clean_data()
        self.parse()
        self._remove_duplicates()

        with open(self.template_path, "r", encoding="utf-8") as f:
            template_content = f.read()

        zip_buffer = BytesIO()
        skipped_rows: list[tuple[int, str, str]] = []

        with zipfile.ZipFile(zip_buffer, mode="w", compression=zipfile.ZIP_DEFLATED) as zf:
            for index, row in self.df.iterrows():
                nome_destinatario = row["Nome Completo"]
                cidade = row.get("Cidade Polo", "Geral")

                raw_dob = row.get("Data de Nascimento")
                clean_dob = raw_dob.date() if pd.notna(raw_dob) else None

                raw_email = row.get("Email")
                clean_email = str(raw_email).strip().lower() if pd.notna(raw_email) else None

                raw_phone = row.get("Telefone")
                clean_phone = str(raw_phone).strip() if pd.notna(raw_phone) else None

                dir_name = self.polo_dir_map.get(cidade, "Geral")
                if not dir_name:
                    print(f"Alerta: Polo desconhecido")
                    continue

                try:
                    with self.db.begin_nested():
                        recipient = self._get_or_create_recipient(
                            name=nome_destinatario,
                            email=clean_email,
                            phone=clean_phone,
                            city=cidade,
                            dob=clean_dob
                        )

                        doc, cert_code, is_created = self._get_or_create_document(
                            recipient_id=recipient.id,
                            email=clean_email
                        )
                except IntegrityError as e:
                    reason = str(e.orig) if e.orig else str(e)
                    print(f"[Linha {index} ignorada] '{nome_destinatario}': conflito de dados - {reason}")
                    skipped_rows.append((index, nome_destinatario, reason))
                    continue

                validation_url = f"{self.validation_base_url}?code={cert_code}"
                qr_base64 = self._generate_qr_code_base64(validation_url)

                print(repr(cidade))
                print(self.polo_dir_map.keys())

                certificado_atualizado = (
                    template_content
                    .replace("{{NAME_RECIPIENT}}", nome_destinatario)
                    .replace("{{VALIDATION-CODE}}", cert_code)
                    .replace("__QR_CODE__", qr_base64)
                )

                pdf_bytes = cairosvg.svg2pdf(bytestring=certificado_atualizado.encode("utf-8"))

                s_nome = nome_destinatario.replace(" ", "_")
                filename = f"certificado_{index}_{dir_name}_{s_nome}.pdf"
                status_folder = "NOVOS" if is_created else "JA_EXISTENTES"
                zip_path = f"{status_folder}/{dir_name}/{filename}"
                zf.writestr(zip_path, pdf_bytes)
                print(f"Success: [{cert_code}] -> {zip_path}")

        try:
            self.db.commit()
        except Exception as e:
            self.db.rollback()
            raise RuntimeError(f"Falha na transacoa do banco {e}")

        zip_buffer.seek(0)

        print("Processamento concluido: 'certificados.zip' gerado")
        return zip_buffer

    @staticmethod
    def generate_documents(excel: UploadFile | str, template_path: UploadFile | str, db: Session, user_id:int, event_id: int) -> BytesIO:
        generator = Generator(excel=excel, template_path=template_path, db=db, user_id=user_id, event_id=event_id)
        return generator.main()

if __name__ == "__main__":
    #data_path = "../../../data/Base_Unificada_Alunos.xlsx"
    #template_path = "../../../data/certificado-participacao-iesi-2026.svg"
    #Base.metadata.create_all(bind=engine)
    with SessionLocal() as session:
        converter = Generator(excel="...", template_path="...", db=session)
        zip_data = converter.main()
