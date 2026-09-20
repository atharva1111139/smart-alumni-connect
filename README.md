# Smart Alumni Connect

A full-stack web application built using **React + Vite** for the frontend and **Django REST Framework** for the backend.

---

## 📁 Project Structure

```text
Smart Alumni Connect/
│
├── backend/
│   ├── accounts/
│   ├── config/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

# 🚀 Repository Setup

## 1. Clone the Repository

Clone the repository:

```bash
git clone <https://github.com/atharva1111139/smart-alumni-connect>
```

Navigate into the project:

```bash
cd "Smart Alumni Connect"
```

---

# 🐍 Backend Setup

Open a terminal in the project root.

### 1. Navigate to Backend

```bash
cd backend
```

### 2. Create Virtual Environment

Windows:

```powershell
python -m venv venv
```

### 3. Activate Virtual Environment

PowerShell:

```powershell
venv\Scripts\Activate.ps1
```

If PowerShell activation is restricted, use:

```powershell
venv\Scripts\activate.bat
```

### 4. Install Dependencies

```powershell
pip install -r requirements.txt
```

### 5. Run Database Migrations

```powershell
python manage.py migrate
```

### 6. Start Django Backend

```powershell
python manage.py runserver
```

Backend will run at:

```text
http://127.0.0.1:8000/
```

**Keep this terminal running.**

---

# ⚛️ Frontend Setup

Open a **new terminal**.

### 1. Navigate to Frontend

```powershell
cd "Smart Alumni Connect\frontend"
```

### 2. Install Dependencies

```powershell
npm install
```

### 3. Start React Development Server

```powershell
npm run dev
```

Frontend will run at:

```text
http://localhost:5173/
```

---

# ▶️ Running the Project

You need **two terminals** running at the same time.

### Terminal 1 — Backend

```powershell
cd "Smart Alumni Connect\backend"
venv\Scripts\Activate.ps1
python manage.py runserver
```

Backend:

```text
http://127.0.0.1:8000/
```

### Terminal 2 — Frontend

```powershell
cd "Smart Alumni Connect\frontend"
npm run dev
```

Frontend:

```text
http://localhost:5173/
```

Open the frontend in your browser:

```text
http://localhost:5173/
```

---

# 🔐 First-Time Usage

After starting both servers:

1. Open `http://localhost:5173/`
2. Go to **Register**
3. Create a new account
4. Login using the created account
5. You will be redirected to the Dashboard

---

# 🛠️ Requirements

Make sure the following are installed:

* Python 3.10+
* Node.js
* npm
* Git

Check versions:

```bash
python --version
node --version
npm --version
git --version
```

---

# ⚠️ Important

The following files/folders are intentionally **not included in GitHub**:

```text
venv/
node_modules/
db.sqlite3
.env
```

After cloning the repository, create the virtual environment and run `pip install -r requirements.txt`.

For the frontend, run `npm install`.

Run:

```powershell
python manage.py migrate
```

to create the local database.

---

# 📌 Development

When working on the project, always run:

```text
Backend  → http://127.0.0.1:8000/
Frontend → http://localhost:5173/
```

Both servers must be running for the complete application to work.
