from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from app.src.security import get_password_hash
from app.src.models import User

POSTGRES_URL = "postgresql://neondb_owner:npg_x9Zvlwd4EkhO@ep-autumn-dust-ac6p2jh1-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

engine = create_engine(POSTGRES_URL)

with Session(engine) as session:
    # Busca qualquer um dos dois e-mails para garantir
    user = session.query(User).filter(
        (User.email == "unitaatendimento@gmail.com") | (User.email == "unitaatendimento@mail.com")
    ).first()

    if user:
        user.email = "unitaatendimento@gmail.com"
        user.hashed_password = get_password_hash("iesi2026")
        session.commit()
        print("✅ Usuário e senha (Bcrypt) atualizados com sucesso!")
        print(f"Email: {user.email}")
        print(f"Hash gerado: {user.hashed_password}")
    else:
        print("❌ Nenhum usuário encontrado no banco.")