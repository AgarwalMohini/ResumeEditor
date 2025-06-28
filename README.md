# Resume Editor

A simple full-stack Resume Editor built with **React (Vite)** and **FastAPI**.

---

## 📂 Project Structure

resumeEditor/
├── frontend # React (Vite) app
├── backend # FastAPI app
├── README.md # Project instructions
└── .gitignore

---

## 🚀 Setup Instructions

### ✅ Frontend (React)

1. Open your terminal in the `frontend` folder:
   ```bash
   cd frontend
   npm install
   npm run dev
2. Your frontend will run at http://localhost:5173

###✅ Backend (FastAPI)

1. Open your terminal in the backend folder:
cd backend
python -m venv venv   # Create virtual environment (optional but recommended)

# Activate the virtual environment
# Windows:
venv\Scripts\activate
pip install fastapi uvicorn
uvicorn main:app --reload
2. Your backend will run at http://127.0.0.1:8000
