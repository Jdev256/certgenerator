from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..db import get_db
from ..models import Destinatario, User
from ..schemas import ListRecipients, RecipientCreate, RecipientResponse
from .users import get_current_user

router = APIRouter(prefix="/recipients", tags=["Recipients"])


@router.post(
    "/",
    response_model=RecipientResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Cadastrar novo destinatário",
)
def create_recipient(
    recipient_in: RecipientCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Cadastra um novo destinatário/participante associado ao usuário logado.
    Verifica duplicidade de e-mail ou nome se necessário.
    """
    # Verifica se já existe um destinatário com o mesmo e-mail vinculado ao usuário
    if recipient_in.email:
        existing = (
            db.query(Destinatario)
            .filter(
                Destinatario.email == recipient_in.email,
                Destinatario.user_id == current_user.id,
            )
            .first()
        )
        if existing:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Já existe um destinatário cadastrado com este e-mail.",
            )

    db_recipient = Destinatario(
        **recipient_in.model_dump(),
        user_id=current_user.id
    )
    db.add(db_recipient)
    db.commit()
    db.refresh(db_recipient)
    return db_recipient


@router.get(
    "/",
    response_model=ListRecipients,
    summary="Listar todos os destinatários do usuário",
)
def list_recipients(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Retorna a lista paginada dos destinatários cadastrados pelo usuário autenticado.
    """
    recipients = (
        db.query(Destinatario)
        .filter(Destinatario.user_id == current_user.id)
        .offset(skip)
        .limit(limit)
        .all()
    )
    return {"recipients": recipients}


@router.get(
    "/{recipient_id}",
    response_model=RecipientResponse,
    summary="Obter detalhes de um destinatário",
)
def get_recipient(
    recipient_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Obtém um destinatário pelo ID.
    """
    recipient = (
        db.query(Destinatario)
        .filter(
            Destinatario.id == recipient_id,
            Destinatario.user_id == current_user.id,
        )
        .first()
    )
    if not recipient:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Destinatário não encontrado.",
        )
    return recipient


@router.put(
    "/{recipient_id}",
    response_model=RecipientResponse,
    summary="Atualizar um destinatário",
)
def update_recipient(
    recipient_id: int,
    recipient_in: RecipientCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Atualiza as informações de um destinatário cadastrado.
    """
    db_recipient = (
        db.query(Destinatario)
        .filter(
            Destinatario.id == recipient_id,
            Destinatario.user_id == current_user.id,
        )
        .first()
    )
    if not db_recipient:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Destinatário não encontrado.",
        )

    for field, value in recipient_in.model_dump(exclude_unset=True).items():
        setattr(db_recipient, field, value)

    db.commit()
    db.refresh(db_recipient)
    return db_recipient


@router.delete(
    "/{recipient_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Remover um destinatário",
)
def delete_recipient(
    recipient_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Remove um destinatário do sistema.
    """
    db_recipient = (
        db.query(Destinatario)
        .filter(
            Destinatario.id == recipient_id,
            Destinatario.user_id == current_user.id,
        )
        .first()
    )
    if not db_recipient:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Destinatário não encontrado.",
        )

    db.delete(db_recipient)
    db.commit()
    return None