import os
from pathlib import Path
import sqlalchemy
from sqlalchemy import create_engine, event
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://neondb_owner:npg_x9Zvlwd4EkhO@ep-autumn-dust-ac6p2jh1-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

engine = create_engine(
    DATABASE_URL, pool_pre_ping=True, pool_recycle=1800, pool_size=10, max_overflow=20
)

SessionLocal = sessionmaker(autoflush=False, autocommit=False, bind=engine)
Base = declarative_base()

def get_db():
    return SessionLocal()