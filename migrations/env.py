import sys
from logging.config import fileConfig
from pathlib import Path

from alembic import context
from sqlalchemy import engine_from_config, pool

# Garante que o pacote "app" (raiz do projeto) seja importável,
# independente de onde o comando `alembic` for executado.
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

# Importa a MESMA Base e a MESMA DATABASE_URL usadas pela aplicação,
# para que o autogenerate compare o banco real com os modelos reais.
from app.db import DATABASE_URL
from app.models import Base  # noqa: F401  (garante que todos os models sejam registrados)

# Objeto de configuração do Alembic (lido do alembic.ini)
config = context.config

# Injeta a URL real do banco (vinda de app/db.py / variável de ambiente)
config.set_main_option("sqlalchemy.url", DATABASE_URL)

if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Metadata usada pelo --autogenerate para detectar diferenças
target_metadata = Base.metadata


def run_migrations_offline() -> None:
    """Gera SQL sem conectar no banco (útil para revisar antes de aplicar)."""
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
        compare_type=True,
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Conecta no banco e aplica/compara as migrações normalmente."""
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
            compare_type=True,       # detecta mudança de tipo de coluna
            compare_server_default=True,  # detecta mudança de default
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()