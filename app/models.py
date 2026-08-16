import enum
import uuid
from datetime import date, datetime
from typing import List, Optional
from sqlalchemy import (
    Boolean,
    Date,
    DateTime,
    ForeignKey,
    Index,
    Integer,
    String,
    func,
    Enum as SQLEnum, Enum, Float, Text
)
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship


class Base(DeclarativeBase):
    pass

class RecipientType(str, enum.Enum):
    STUDENT = "estudante"
    SPEAKER = "orador"
    ORGANIZER = "organizador"
    PARTICIPANT = "participante"
    INSTRUCTOR = "instrutor"
    VOLUNTEER = "voluntario"
    MODERATOR = "moderador"
    HONORED_GUEST = "convidado_de_honra"
    COORDINATOR = "coordenador"
    RESEARCHER = "pesquisador"
    EXHIBITOR = "expositor"
    JUROR = "jurado"
    MENTOR = "mentor"
    TUTOR = "tutor"
    STAFF = "equipe_apoio"
    SPONSOR = "patrocinador"

class DocumentType(str, enum.Enum):
    CERTIFICATE = "certificate"
    DIPLOMA = "diploma"
    BADGE = "badge"
    DECLARATION = "declaration"
    ATTENDANCE_RECORD = "registro_presenca"
    WORKSHOP_CERTIFICATE = "certificado_workshop"
    AWARD_CERTIFICATE = "certificado_premiacao"
    CREDENTIAL_CARD = "credencial_acesso"
    COURSE_TRANSCRIPT = "historico_escolar"
    QUALIFICATION_STATEMENT = "declaracao_qualificacao"
    AUTHORIZATION_LETTER = "carta_autorizacao"
    FINAL_REPORT = "relatorio_final"
    MEMBERSHIP_CARD = "carteirinha_membro"
    COMPLETION_LETTER = "carta_conclusao"

class EventStatus(str, enum.Enum):
    DRAFT = "rascunho"
    ACTIVE = "ativo"
    IN_PROGRESS = "em_andamento"
    COMPLETED = "concluido"
    ARCHIVED = "arquivado"
    CANCELLED = "cancelado"

class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, nullable=False, index=True)
    hashed_password: Mapped[str] = mapped_column(String(255), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

    recipients: Mapped[list["Destinatario"]] = relationship("Destinatario", back_populates="user", cascade="all, delete-orphan")
    documents: Mapped[list["Document"]] = relationship("Document", back_populates="user", cascade="all, delete-orphan")
    events: Mapped[list["Event"]] = relationship("Event", back_populates="user", cascade="all, delete-orphan")

class Event(Base):
    __tablename__ = "events"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    event_type: Mapped[Optional[str]] = mapped_column(String(100),nullable=True)

    issuing_organization: Mapped[str] = mapped_column(String(255), nullable=False, default="IESI")
    workload_hours: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    location: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)

    start_date: Mapped[Optional[date]] = mapped_column(Date, nullable=True)
    end_date: Mapped[Optional[date]] = mapped_column(Date, nullable=True)
    issue_date: Mapped[date] = mapped_column(Date, nullable=False, default=date.today)

    # Configurações do Template / Customização
    template_svg_path: Mapped[Optional[str]] = mapped_column(String(512),
                                                             nullable=True)
    signatory_name: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    signatory_role: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)

    # Controle e Status
    status: Mapped[EventStatus] = mapped_column(Enum(EventStatus), default=EventStatus.ACTIVE, nullable=False)
    is_public_validation_enabled: Mapped[bool] = mapped_column(Boolean,
                                                               default=True)
    # Timestamps de Auditoria
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(),
                                                 onupdate=func.now(), nullable=False)
    user: Mapped["User"] = relationship("User", back_populates="events")
    documents: Mapped[list["Document"]] = relationship("Document", back_populates="event", cascade="all, delete-orphan")

class Destinatario(Base):
    __tablename__ = "recipients"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)

    recipient_type: Mapped[RecipientType] = mapped_column(
        SQLEnum(RecipientType),
        default=RecipientType.PARTICIPANT,
        nullable=False
    )

    name: Mapped[str] = mapped_column(String(255), nullable=False, unique=False)
    date_of_birth: Mapped[Optional[date]] = mapped_column(Date, nullable=True)
    email: Mapped[Optional[str]] = mapped_column(String(255), nullable=True, unique=False)
    phone: Mapped[Optional[str]] = mapped_column(String(20), nullable=True, unique=False)
    city: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)

    user: Mapped["User"] = relationship("User", back_populates="recipients")
    documents: Mapped[list["Document"]] = relationship("Document", back_populates="recipient",
                                                       cascade="all, delete-orphan")
    creation_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )
    update_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )


class Document(Base):
    __tablename__ = "documents"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    recipient_id: Mapped[int] = mapped_column(ForeignKey("recipients.id", ondelete="CASCADE"), nullable=False, index=True)
    event_id: Mapped[int] = mapped_column(ForeignKey("events.id", ondelete="CASCADE"), nullable=False, index=True)

    doc_type: Mapped[DocumentType] = mapped_column(SQLEnum(DocumentType), default=DocumentType.CERTIFICATE,
                                                   nullable=False)
    name: Mapped[str] = mapped_column(String(150), nullable=False, index=True)
    issuing_organization: Mapped[str] = mapped_column(String(100), nullable=False)
    issue_date: Mapped[date] = mapped_column(Date, nullable=False)
    expiration_date: Mapped[Optional[date]] = mapped_column(Date, nullable=True)
    credential_id: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)

    verification_code: Mapped[str] = mapped_column(String(64), unique=True, nullable=False, index=True)
    is_revoked: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)

    credential_url: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    qr_code_image: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    pdf_file: Mapped[Optional[str]] = mapped_column(Text, nullable=True)

    user: Mapped["User"] = relationship("User", back_populates="documents")
    recipient: Mapped["Destinatario"] = relationship("Destinatario", back_populates="documents")
    event: Mapped["Event"] = relationship("Event", back_populates="documents")

    __table_args__ = (
        Index("ix_certifications_recipient_revoked", "recipient_id", "is_revoked"),
    )
    def __repr__(self) -> str:
        return f"<Certification(id={self.id}, code='{self.verification_code}', revoked={self.is_revoked})>"

