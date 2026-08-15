from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session

from schemas import EventUpdate
# Importações dos módulos da aplicação (ajuste os caminhos conforme sua estrutura)
from ..db import get_db
from ..models import Event, User, EventStatus
from ..schemas import EventCreate, EventResponse, ListEvents
from .users import get_current_user

router = APIRouter(prefix="/events", tags=["Events"])


@router.post(
    "/",
    response_model=EventResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Criar novo evento",
)
def create_event(
    event_in: EventCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Cria um novo evento vinculado ao usuário autenticado.
    """
    db_event = Event(
        **event_in.model_dump(),
        user_id=current_user.id
    )
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event


@router.get(
    "/",
    response_model=ListEvents,
    summary="Listar eventos do usuário autenticado",
)
def list_events(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=500),
    status_filter: Optional[EventStatus] = Query(None, alias="status"),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Retorna a lista de todos os eventos criados pelo usuário atualmente logado.
    """
    print(f"🔍 DEBUG DB Engine URL: {db.bind.url}")
    print(f"👤 DEBUG current_user.id: {current_user.id} ({current_user.email})")

    total_events_in_db = db.query(Event).count()
    print(f"📊 DEBUG Total de Eventos no Banco (sem filtro): {total_events_in_db}")
    # -----------------------------------------------------------------------------
    query = db.query(Event).filter(Event.user_id == current_user.id)

    if status_filter:
        query = query.filter(Event.status == status_filter)

    events = (
        query.offset(skip)
        .limit(limit)
        .all()
    )
    print(f"✅ DEBUG Eventos retornados pela Query: {len(events)}")
    return {"events": events}


@router.get(
    "/{event_id}",
    response_model=EventResponse,
    summary="Obter detalhes de um evento específico",
)
def get_event(
    event_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Busca um evento específico pelo ID. O evento deve pertencer ao usuário logado.
    """
    event = (
        db.query(Event)
        .filter(Event.id == event_id, Event.user_id == current_user.id)
        .first()
    )
    if not event:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Evento não encontrado ou acesso não permitido.",
        )
    return event


@router.put(
    "/{event_id}",
    response_model=EventResponse,
    summary="Atualizar dados de um evento",
)
def update_event(
    event_id: int,
    event_in: EventUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Atualiza as informações de um evento existente.
    """
    db_event = (
        db.query(Event)
        .filter(Event.id == event_id, Event.user_id == current_user.id)
        .first()
    )
    if not db_event:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Evento não encontrado.",
        )

    for field, value in event_in.model_dump(exclude_unset=True).items():
        setattr(db_event, field, value)

    db.commit()
    db.refresh(db_event)
    return db_event

@router.patch("/{event_id}/status", response_model=EventResponse)
def update_event_status(event_id: int,
                        new_status: EventStatus = Query(...,),
                        db: Session = Depends(get_db),
                        current_user: User = Depends(get_current_user),
                        ):
    db_event = (
        db.query(Event)
        .filter(Event.id ==  event_id, Event.user_id == current_user.id)
        .first()
    )
    if not db_event:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Evento",
        )
    db_event.status = new_status
    db.commit()
    db.refresh(db_event)
    return db_event

@router.delete(
    "/{event_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Remover um evento",
)
def delete_event(
    event_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Remove um evento pertencente ao usuário logado.
    """
    db_event = (
        db.query(Event)
        .filter(Event.id == event_id, Event.user_id == current_user.id)
        .first()
    )
    if not db_event:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Evento não encontrado.",
        )

    db.delete(db_event)
    db.commit()
    return None