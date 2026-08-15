# routes/validation.py
import logging
import re

from fastapi import APIRouter, HTTPException, Depends, Path
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from starlette import status
from ..db import get_db
from ..models import Document
from ..schemas import DocumentValidationResponse

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/api/validate",
    tags=["Validation"]
)

VERIFICATION_CODE_PATTERN = re.compile(
    r"^[A-Za-z0-9_-]{8,128}$"
)

@router.get(
    "/{code}",
    response_model=DocumentValidationResponse,
    status_code=status.HTTP_200_OK,
    summary="Validar certificado",
    description=(
        "Verifica publicamente a autenticidade de um certificado "
        "através do seu código de verificação."
    ),
    responses={
        400: {"description": "Código de verificação inválido."},
        404: {"description": "Certificado não encontrado ou revogado."},
        500: {"description": "Erro interno durante a validação."},
    },
)
def validate_document(code: str = Path(
            ...,
            min_length=8, max_length=128,
            description="Código único de verificação do certificado.",
            examples=["CERT-8F4A2B91"],),db: Session = Depends(get_db)):
    """
    Validação pública de certificado.

    Esta rota não exige autenticação.

    Um certificado somente será considerado válido quando:
    1. O código existir;
    2. O documento não estiver revogado.
    """

    # ---------------------------------------------------------
    # 1. Normalização
    # ---------------------------------------------------------
    code = code.strip()

    if not code:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "error": "invalid_verification_code",
                "message": "O código de verificação não pode estar vazio.",
            },
        )

    # ---------------------------------------------------------
    # 2. Validação básica do formato
    # ---------------------------------------------------------
    if not VERIFICATION_CODE_PATTERN.fullmatch(code):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "error": "invalid_verification_code",
                "message": "O código de verificação possui um formato inválido.",
            },
        )

    # ---------------------------------------------------------
    # 3. Consulta ao banco
    # ---------------------------------------------------------
    try:
        certificate = (
            db.query(Document)
            .filter(Document.verification_code == code)
            .first()
        )
    except SQLAlchemyError:
        logger.exception(
            "Erro ao consultar certificado. verification_code=%s", code
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={
                "error": "validation_service_unavailable",
                "message": (
                    "Não foi possível concluir a validação "
                    "do certificado neste momento."
                ),
            },
        )

    # ---------------------------------------------------------
    # 4. Certificado inexistente
    # ---------------------------------------------------------
    if certificate is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={
                "error": "certificate_not_found",
                "message": (
                    "Nenhum certificado foi encontrado para "
                    "o código de verificação informado."
                ),
            },
        )

    # ---------------------------------------------------------
    # 5. Certificado revogado
    # ---------------------------------------------------------
    if certificate.is_revoked:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={
                "error": "certificate_revoked",
                "message": "Este certificado foi revogado e não pode ser considerado válido.",
            },
        )

    # ---------------------------------------------------------
    # 6. Resposta (schema flat, compatível com o frontend atual)
    # ---------------------------------------------------------
    return DocumentValidationResponse(
        name=certificate.name,
        student_name=certificate.recipient.name,
        student_email=certificate.recipient.email,
        city=certificate.recipient.city,
        verification_code=certificate.verification_code,
    )
