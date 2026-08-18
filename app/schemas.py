from datetime import date, datetime
from typing import List, Optional
from pydantic import BaseModel, EmailStr, ConfigDict
from .models import RecipientType, DocumentType, EventStatus, Role


# ==========================================
# BASE CONFIG
# ==========================================
class BaseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)


# ==========================================
# USER SCHEMAS
# ==========================================
class UserBase(BaseModel):
    email: EmailStr
    is_active: bool = True

class UserCreate(UserBase):
    password: str
    role: Role

class UserResponse(UserBase, BaseSchema):
    id: int

class ListUsers(BaseModel):
    users: List[UserResponse]

class Token(BaseModel):
    access_token: str
    token_type: str
    role: Role


class TokenData(BaseModel):
    email: Optional[str] = None

# ==========================================
# EVENT SCHEMAS
# ==========================================
class EventBase(BaseModel):
    name: str
    description: Optional[str] = None
    event_type: Optional[str] = None
    issuing_organization: str = "IESI"
    workload_hours: Optional[float] = None
    location: Optional[str] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    issue_date: date
    template_svg_path: Optional[str] = None
    signatory_name: Optional[str] = None
    signatory_role: Optional[str] = None
    status: EventStatus = EventStatus.ACTIVE
    is_public_validation_enabled: bool = True

class EventCreate(EventBase):
    pass

class EventUpdate(BaseModel):
    """Schema para atualização (PUT/PATCH). Todos os campos são opcionais."""
    name: Optional[str] = None
    description: Optional[str] = None
    event_type: Optional[str] = None
    issuing_organization: Optional[str] = None
    workload_hours: Optional[float] = None
    location: Optional[str] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    issue_date: Optional[date] = None
    template_svg_path: Optional[str] = None
    signatory_name: Optional[str] = None
    signatory_role: Optional[str] = None
    status: Optional[EventStatus] = None
    is_public_validation_enabled: Optional[bool] = None

class EventResponse(EventBase, BaseSchema):
    id: int
    user_id: int
    created_at: datetime
    updated_at: datetime

class ListEvents(BaseModel):
    events: List[EventResponse]

# ==========================================
# RECIPIENT (DESTINATARIO) SCHEMAS
# ==========================================
class RecipientBase(BaseModel):
    name: str
    recipient_type: RecipientType = RecipientType.PARTICIPANT
    date_of_birth: Optional[date] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    city: Optional[str] = None

class RecipientCreate(RecipientBase):
    pass

class RecipientResponse(RecipientBase, BaseSchema):
    id: int
    user_id: int
    creation_at: datetime
    update_at: datetime

class ListRecipients(BaseModel):
    recipients: List[RecipientResponse]


# ==========================================
# DOCUMENT SCHEMAS
# ==========================================
class DocumentBase(BaseModel):
    doc_type: DocumentType = DocumentType.CERTIFICATE
    name: str
    issuing_organization: str
    issue_date: date
    expiration_date: Optional[date] = None
    credential_id: Optional[str] = None

class DocumentCreate(DocumentBase):
    recipient_id: int
    event_id: int

class DocumentResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    verification_code: str
    pdf_file: Optional[str] = None
    qr_code_image: Optional[str] = None
    recipient_id: int  # Mapeado de recipient_id (no model original estava student_id)


class DocumentValidationDocument(BaseModel):
    name: str
    issued_at: Optional[date] = None
    document_type: str


class DocumentValidationRecipient(BaseModel):
    name: str
    city: Optional[str] = None


class DocumentValidationVerification(BaseModel):
    code: str
    status: str
    revoked: bool


class DocumentValidationResponse(BaseModel):
    valid: bool
    message: str
    document: DocumentValidationDocument
    recipient: DocumentValidationRecipient
    verification: DocumentValidationVerification
    validated_at: datetime

