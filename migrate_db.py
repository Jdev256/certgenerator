import sqlite3
from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import Session

# Importe os modelos da nova estrutura (as classes declaradas no seu trecho de código)
from app.models import Base, User, Event, Destinatario, Document, RecipientType, DocumentType, EventStatus

# Configurações de Conexão
SQLITE_DB_PATH = "cert.db"
POSTGRES_URL = "postgresql://neondb_owner:npg_x9Zvlwd4EkhO@ep-autumn-dust-ac6p2jh1-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

# Inicialização dos Engines
pg_engine = create_engine(POSTGRES_URL, echo=False)

def run_migration():
    # Conecta ao SQLite antigo
    sqlite_conn = sqlite3.connect(SQLITE_DB_PATH)
    sqlite_conn.row_factory = sqlite3.Row
    sqlite_cursor = sqlite_conn.cursor()

    # Garante a criação das tabelas no PostgreSQL (se não existirem)
    Base.metadata.drop_all(pg_engine)
    Base.metadata.create_all(pg_engine)

    with Session(pg_engine) as session:
        try:
            print("[1/5] Garantindo usuário padrão no PostgreSQL...")
            default_user = session.query(User).filter_by(email="unitaatendimento@mail.com").first()
            if not default_user:
                default_user = User(
                    email="unitaatendimento@mail.com",
                    hashed_password="iesi2026",
                    is_active=True
                )
                session.add(default_user)
                session.flush()  # Gera o ID do usuário padrão

            user_id = default_user.id

            print("[2/5] Migrando 'students' -> 'recipients'...")
            sqlite_cursor.execute("SELECT * FROM students")
            students = sqlite_cursor.fetchall()

            # Dicionário de mapeamento: ID_antigo_student -> ID_novo_recipient
            student_id_map = {}

            for s in students:
                # Trata formatação de datas
                dob = None
                if s['date_of_birth']:
                    try:
                        dob = datetime.strptime(str(s['date_of_birth']).strip(), '%Y-%m-%d').date()
                    except ValueError:
                        dob = None

                # 2. Tratamento do Telefone (Evita o UniqueViolation no '0', '', 'nan')
                raw_phone = str(s['phone']).strip() if s['phone'] is not None else None
                clean_phone = raw_phone if raw_phone and raw_phone not in ("0", "nan", "None", "") else None

                # 3. Tratamento do E-mail (Evita UniqueViolation em e-mails vazios/inválidos)
                raw_email = str(s['email']).strip().lower() if s['email'] is not None else None
                clean_email = raw_email if raw_email and raw_email not in ("nan", "None", "") else None

                # 4. Tratamento do Nome
                clean_name = str(s['name']).strip()

                recipient = Destinatario(
                    user_id=user_id,
                    recipient_type=RecipientType.STUDENT,
                    name=clean_name,
                    date_of_birth=dob,
                    email=clean_email,
                    phone=clean_phone,
                    city=s['city']
                )
                session.add(recipient)
                session.flush()  # Obtém o novo ID gerado no Postgres
                student_id_map[s['id']] = recipient.id

            print("[3/5] Extraindo e migrando 'events' únicos das certificações antigas...")
            sqlite_cursor.execute("SELECT DISTINCT name, issuing_organization, issue_date FROM certifications")
            unique_events = sqlite_cursor.fetchall()

            # Dicionário de mapeamento: (nome_cert, organizacao) -> ID_novo_evento
            event_id_map = {}

            for ev in unique_events:
                issue_d = datetime.strptime(ev['issue_date'], '%Y-%m-%d').date() if isinstance(ev['issue_date'],
                                                                                               str) else ev[
                    'issue_date']

                event = Event(
                    user_id=user_id,
                    name=ev['name'],
                    issuing_organization=ev['issuing_organization'],
                    issue_date=issue_d,
                    status=EventStatus.COMPLETED
                )
                session.add(event)
                session.flush()

                key = (ev['name'], ev['issuing_organization'])
                event_id_map[key] = event.id

            print("[4/5] Migrando 'certifications' -> 'documents'...")
            sqlite_cursor.execute("SELECT * FROM certifications")
            certifications = sqlite_cursor.fetchall()

            for c in certifications:
                issue_d = datetime.strptime(c['issue_date'], '%Y-%m-%d').date() if isinstance(c['issue_date'], str) else \
                c['issue_date']
                exp_d = datetime.strptime(c['expiration_date'], '%Y-%m-%d').date() if c['expiration_date'] else None

                # Resolução de Chaves Estrangeiras
                mapped_recipient_id = student_id_map.get(c['student_id'])
                mapped_event_id = event_id_map.get((c['name'], c['issuing_organization']))

                if not mapped_recipient_id or not mapped_event_id:
                    print(f"Aviso: Registro FK não encontrado para certificação ID {c['id']}. Pulo executado.")
                    continue

                doc = Document(
                    user_id=user_id,
                    recipient_id=mapped_recipient_id,
                    event_id=mapped_event_id,
                    doc_type=DocumentType.CERTIFICATE,
                    name=c['name'],
                    issuing_organization=c['issuing_organization'],
                    issue_date=issue_d,
                    expiration_date=exp_d,
                    credential_id=c['credential_id'],
                    verification_code=c['verification_code'],
                    is_revoked=bool(c['is_revoked']),
                    credential_url=c['credential_url'],
                    qr_code_image=c['qr_code_image'],
                    pdf_file=c['pdf_file']
                )
                session.add(doc)

            print("[5/5] Efetivando transação (COMMIT)...")
            session.commit()
            print("Migração concluída com sucesso!")

        except Exception as e:
            session.rollback()
            print(f"Erro crítico durante a migração. Rollback executado. Detalhes: {e}")
            raise e
        finally:
            sqlite_conn.close()


if __name__ == "__main__":
    run_migration()