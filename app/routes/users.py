import jwt
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

# Importe sua sessão do banco (ajuste a importação conforme a estrutura do seu projeto)
from ..db import get_db
from ..models import User
from ..schemas import ListUsers, Token, UserCreate, UserResponse
from app.security import (
    ALGORITHM,
    SECRET_KEY,
    create_access_token,
    get_password_hash,
    verify_password,
)

router = APIRouter(prefix="/users", tags=["Users & Authentication"])

# Esquema para o Swagger UI e Injeção de Dependência da requisição
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/users/login")


# ==========================================
# DEPENDÊNCIA: GET_CURRENT_USER
# ==========================================
def get_current_user(
    token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)
) -> User:
    """Extrai e valida o token JWT do header 'Authorization: Bearer <token>'."""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Não foi possível validar as credenciais de acesso",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except jwt.PyJWTError:
        raise credentials_exception

    user = db.query(User).filter(User.email == email).first()
    if user is None:
        raise credentials_exception
    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Usuário inativo"
        )

    return user


# ==========================================
# ROTAS DE AUTENTICAÇÃO
# ==========================================


@router.post(
    "/login", response_model=Token, summary="Autenticação padrão Form-Data (OAuth2)"
)
def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    """Rota padrão OAuth2 usada pelo Swagger UI e formulários padrão."""
    user = db.query(User).filter(User.email == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="E-mail ou senha incorretos",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Registro público de novos usuários",
)
def register_user(user_in: UserCreate, db: Session = Depends(get_db)):
    """Rota de cadastro utilizada pelo React para criar novos usuários no sistema."""
    user_exists = db.query(User).filter(User.email == user_in.email).first()
    if user_exists:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="O e-mail informado já está cadastrado no sistema.",
        )

    new_user = User(
        email=user_in.email,
        hashed_password=get_password_hash(user_in.password),
        is_active=user_in.is_active,
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


# ==========================================
# ROTAS PROTEGIDAS / GESTÃO DE USUÁRIOS
# ==========================================


@router.get(
    "/me",
    response_model=UserResponse,
    summary="Obter dados do usuário autenticado",
)
def get_me(current_user: User = Depends(get_current_user)):
    """Retorna as informações do usuário atual logado (via token JWT)."""
    return current_user


@router.get(
    "/", response_model=ListUsers, summary="Listar todos os usuários do sistema"
)
def list_users(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Retorna a lista completa de usuários cadastrados (Exige Autenticação)."""
    users = db.query(User).offset(skip).limit(limit).all()
    return {"users": users}


@router.post(
    "/",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Adicionar usuário via painel administrativo",
)
def add_user(
    user_in: UserCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Cria um usuário internamente no painel administrativo (Exige Autenticação)."""
    return register_user(user_in=user_in, db=db)