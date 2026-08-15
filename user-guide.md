# CertGenerator — User Guide

## 1. Requirements

Before installing the project, make sure you have:

- Python 3.12+
- Node.js LTS
- npm
- Git

Check the versions:

```bash
python --version
node --version
npm --version
````

## 2. Backend Installation

From the project root:

```bash
python -m venv .venv
source .venv/bin/activate
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

## 3. Environment Configuration

Create a `.env` file in the project root:

```env
APP_ENV=development
DATABASE_URL=sqlite:///./cert.db
```

Do not commit `.env` to Git.

## 4. Database

Apply the database migrations:

```bash
alembic upgrade head
```

## 5. Frontend Installation

Enter the UI directory:

```bash
cd ui
```

Install the dependencies:

```bash
npm install
```

The frontend uses React, Vite, Tailwind CSS and Material Tailwind.

## 6. Run the Application

### Backend

From the project root:

```bash
uvicorn app.main:app --reload
```

Backend:
`http://localhost:8000`

API documentation:
`http://localhost:8000/docs`

### Frontend

In another terminal:

```bash
cd ui
npm run dev
```

Frontend:

`http://localhost:5173`

## 7. Testing API
Run the backend tests:

```bash
cd ~/Projects/CertGenerator
uvicorn app.src.api:app --reload
```


Test the frontend production build:

```bash
cd ui
npm run build
```

## 8. Project Structure

```text
cert-generator/
├── app/          # FastAPI backend
├── ui/           # React frontend
├── alembic/      # Database migrations
├── tests/        # Tests
├── .env          # Environment configuration
└── README.md
```

```
```
