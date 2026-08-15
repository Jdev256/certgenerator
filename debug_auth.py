from app.src.db import get_db  # Importa o mesmo DB da sua aplicação FastAPI
from app.src.models import User
from app.src.security import get_password_hash, verify_password

# 1. Teste isolado do algoritmo
pw_test = "iesi2026"
hash_test = get_password_hash(pw_test)
print(f"🔒 Teste de Hash Local: {verify_password(pw_test, hash_test)}")

db = get_db()

user = db.query(User).filter_by(email="unitaatendimento@gmail.com").first()

if not user:
    print("❌ ATENÇÃO: Usuário 'unitaatendimento@gmail.com' NÃO existe no banco usado pela API!")

    # Tenta listar para ver o que tem no banco da API
    all_users = db.query(User).all()
    print(f"👥 Usuários existentes no banco da API: {[u.email for u in all_users]}")
else:
    # Redefine e garante a sincronia
    user.hashed_password = get_password_hash("iesi2026")
    db.commit()
    db.refresh(user)

    # Valida diretamente a senha do usuário recém-salvo
    is_valid = verify_password("iesi2026", user.hashed_password)
    print(f"✅ Usuário encontrado! Validação no banco da API: {is_valid}")