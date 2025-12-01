# CalmCare SaaS – Backend (FastAPI)

CalmCare is a **SaaS-based Mental Health Companion application**.  
This repository contains the **backend service** built using **FastAPI**, designed with real-world software engineering and security practices.

The backend currently focuses on **user authentication** (registration & login) and serves as the foundation for future features like mood tracking, analytics, AI assistance, and payments.

---

## 🚀 Features (Implemented)

✅ User Registration  
✅ User Login  
✅ Secure password hashing (bcrypt + passlib)  
✅ JWT-based authentication  
✅ SQLAlchemy ORM  
✅ FastAPI interactive API docs  

---

## 🧱 Tech Stack

- **Backend Framework:** FastAPI  
- **Language:** Python 3.13  
- **Database:** SQLite (for development)  
- **ORM:** SQLAlchemy  
- **Authentication:** JWT  
- **Password Security:** bcrypt + passlib  
- **Server:** Uvicorn  

---

## 📁 Project Structure

Backend/
│
├── main.py # FastAPI application entry point
├── auth.py # Authentication routes (register, login)
├── models.py # Database models
├── database.py # Database connection & session
├── security.py # Password hashing & JWT handling
├── requirements.txt # Project dependencies
├── .gitignore
└── README.md


---

## ⚙️ Setup Instructions (Run Locally)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/NoorAhmed786/CalmCare-saas.git
cd CalmCare-saas/Backend
```

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate
```
### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Run the Server
```bash 
python -m uvicorn main:app --host 127.0.0.1 --port 5000 --workers 1
```
### 5️⃣ Open API Documentation

Open browser and visit:

```bash
http://localhost:5000/docs
```
Here you can test all APIs directly.

### 🔐 Authentication APIs
Register User
```bash 
POST /api/auth/register
```
Parameters:

name

email

password

Security:

Password must be at least 6 characters

Password length capped at 72 bytes (bcrypt limit)

## Login User
```bash 
POST /api/auth/login
```
Returns:

JWT access token

User role

User name

 ### 🛡️ Security Practices Used

 Password hashing with bcrypt

JWT tokens instead of session-based auth

Input validation for passwords

Virtual environment isolation

Git ignored sensitive files (venv, .env, DB)

Version-pinned cryptography libraries

### 🐞 Known Issues & Fixes (Documented via GitHub Issues)

During development, real-world issues were faced and resolved, including:

SQLAlchemy import issues due to wrong interpreter

FastAPI relative import errors

Windows localhost networking issues

bcrypt compatibility with Python 3.13

Incorrect indentation causing logic failure

All issues are tracked in GitHub Issues with explanations and fixes.

### 👤 Author

Noor Ahmed
BS Student
Backend-focused SaaS Project (Academic Assignment)
