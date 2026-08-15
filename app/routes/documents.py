from pathlib import Path

from fastapi import APIRouter, Depends, UploadFile, File, HTTPException, Query
from sqlalchemy.orm import Session
from starlette import status
from fastapi.responses import FileResponse

from .users import get_current_user
from ..models import User, Document, Event
from ..db import get_db
from ..schemas import DocumentResponse
from ..services.generator import Generator

router = APIRouter(
    prefix="/api/documents",
    tags=["Documents"]
)

STORAGE_DIR = Path("storage/zip_exports")
STORAGE_DIR.mkdir(parents=True, exist_ok=True)

STORAGE_TEMPLATES_DIR = Path("storage/templates")
STORAGE_TEMPLATES_DIR.mkdir(parents=True, exist_ok=True)

@router.get("/", response_model=list[DocumentResponse], status_code=status.HTTP_200_OK)
def list_user_documents(
    event_id: int = Query(..., description="ID do evento para filtrar os documentos"),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Filtra rigorosamente por usuário dono do evento e pelo evento selecionado
    documents = db.query(Document).join(Event).filter(
        Event.user_id == current_user.id,
        Event.id == event_id
    ).all()
    return documents

@router.post("/upload", status_code=status.HTTP_201_CREATED)
async def upload(
    event_id: int = Query(..., description="ID do evento ao qual os documentos pertencem"),
    excel: UploadFile = File(...),
    template: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """
    Processa a planilha e o SVG, cadastra os destinatários/documentos no banco de dados
    e retorna o status do processamento.
    """
    if not excel.filename.lower().endswith((".xlsx", ".xls", ".csv")):
        raise HTTPException(status_code=400, detail="Arquivo Excel/CSV inválido.")
    if not template.filename.lower().endswith(".svg"):
        raise HTTPException(status_code=400, detail="Template SVG inválido.")

    event = db.query(Event).filter(Event.id == event_id, Event.user_id == current_user.id).first()
    if not event:
        raise HTTPException(status_code=404, detail="Evento não encontrado ou não pertence ao usuário.")

    template_filename = f"template_event_{event_id}.svg"
    permanent_template_path = STORAGE_TEMPLATES_DIR / template_filename


    await template.seek(0)
    content = await template.read()
    with open(permanent_template_path, "wb") as f:
        f.write(content)

    event.template_svg_path = str(permanent_template_path)
    db.commit()

    await excel.seek(0)
    # Executa a geração e a persistência no banco via Generator
    zip_buffer = Generator.generate_documents(
        excel=excel,
        template_path=str(permanent_template_path),
        db=db,
        user_id=current_user.id,
        event_id=event_id
    )

    zip_path = STORAGE_DIR / f"event_{event_id}_certificados.zip"
    with open(zip_path, "wb") as f:
        f.write(zip_buffer.getbuffer())

    # Conta os documentos vinculados após o lote
    total_docs = db.query(Document).filter(
        Document.event_id == event_id,
        Document.user_id == current_user.id
    ).count()

    return {
        "message": "Planilha processada e documentos registrados com sucesso.",
        "event_id": event_id,
        "total_documents_in_event": total_docs
    }

@router.post('/download')
def download(
    event_id: int = Query(..., description="ID do evento ao qual os documentos pertencem"),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    event = db.query(Event).filter(Event.id == event_id, Event.user_id == current_user.id).first()
    if not event:
        raise HTTPException(status_code=404, detail="Evento não encontrado ou não pertence ao usuário.")

    zip_path = STORAGE_DIR / f"event_{event_id}_certificados.zip"

    if not zip_path.exists():
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Nenhum lote gerado para este evento. Faça o upload da planilha primeiro."
        )

    return FileResponse(
        path=zip_path,
        media_type='application/zip',
        headers={'Content-Disposition': 'attachment; filename="documentos.zip"'}
    )

# app/routes/documents.py
from fastapi.responses import StreamingResponse

@router.get('/download-all', summary="Baixar todos os certificados do banco de dados")
def download_all_from_db(
    event_id: int = Query(..., description="ID do evento ao qual os documentos pertencem"),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """
    Gera dinamicamente o arquivo ZIP com todos os documentos/certificados
    já gravados no banco de dados para o evento especificado.
    """
    try:
        zip_buffer = Generator.generate_zip_from_db(
            event_id=event_id,
            user_id=current_user.id,
            db=db
        )

        return StreamingResponse(
            zip_buffer,
            media_type="application/zip",
            headers={
                'Content-Disposition': f'attachment; filename="evento_{event_id}_certificados.zip"'
            }
        )
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=str(e))
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao processar o download dos documentos: {str(e)}"
        )