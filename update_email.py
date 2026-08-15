from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from app.models import User

POSTGRES_URL = "postgresql://neondb_owner:npg_x9Zvlwd4EkhO@ep-autumn-dust-ac6p2jh1-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

engine = create_engine(POSTGRES_URL)

with Session(engine) as session:
    user = session.query(User).filter_by(email="unitaatendimento@mail.com").first()
    if user:
        user.email = "unitaatendimento@gmail.com"
        session.commit()
        print("E-mail atualizado com sucesso para unitaatendimento@gmail.com!")
    else:
        print("Usuário unitaatendimento@mail.com não foi encontrado.")