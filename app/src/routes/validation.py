# routes/validation.py
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from starlette import status
from ..db import get_db
from ..models import Document
from ..schemas import DocumentValidationResponse

router = APIRouter(
    prefix="/api/validate",
    tags=["Validation"]
)

@router.get("/{code}", response_model=DocumentValidationResponse, status_code=status.HTTP_200_OK)
def validate_certificate(code: str, db: Session = Depends(get_db)):
    certificate = (db.query(Document)
                   .filter(
                        Document.verification_code == code,
                        Document.is_revoked.is_(False),
                    ).first()
                   )

    if certificate is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="codigo de validacao invalido"
        )

    return DocumentValidationResponse(
        name=certificate.name,
        student_name=certificate.recipient.name,
        student_email=certificate.recipient.email,
        city=certificate.recipient.city,
        verification_code=certificate.verification_code,
    )