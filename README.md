# 🏡 Interior Designers Listing App

A full-stack single-page mobile web app for listing interior designers, built with React + Vite frontend and Flask backend.

---

## 📂 Project Structure
/assignment
├── /src # Frontend (React + Vite)
├── /server # Backend (Flask)
├── /public # Vite static files
├── package.json # Frontend dependencies
├── vite.config.js
├── .gitignore
└── README.md
---

## 🚀 Setup & Run

### 1️⃣ Backend (Flask)

```bash
cd server
# (Optional but recommended) Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run server
python app.py

---

⚠ CORS
Since the frontend and backend run on different ports, CORS headers are required on the backend.
Ensure your Flask app includes:

python
Copy
Edit
from flask_cors import CORS
CORS(app)

✨ Features
List interior designers with name, rating, tags, and phone numbers

Shortlist functionality

Filter to show shortlisted designers

Mobile-friendly SPA design
