from fastapi import FastAPI, Depends, HTTPException, status, File, UploadFile, Request, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from .routes.users import router as users_router
from .routes.documents import router as certs_router
from .routes.validation import router as validation_router
from .routes.events import router as events_router
from .routes.recipients import router as recipients_router

app = FastAPI(title="CertGenerator")

origins = [
    "http://localhost:5173",
    "http://0.0.0.0:10000",
    "http://127.0.0.1:5173",
    "localhost:5173",
    "http://localhost:3000",
    "https://certgenerate.com.br",
    "https://www.certgenerate.com.br",
    "https://api.certgenerate.com.br"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

router = APIRouter(prefix="/api", tags=["API"])

#app.router.include_router(users_router)
app.include_router(validation_router)
#app.include_router(certs_router)
#app.include_router(events_router)
#app.include_router(recipients_router)