from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Backend.database import engine, Base
from Backend.auth import auth_router  # Authentication routes
from Backend.moods import moods_router  # Mood tracking routes


app = FastAPI(title="CalmCare SaaS Backend")


# Enable CORS for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create DB tables
Base.metadata.create_all(bind=engine)

# Register routes
app.include_router(auth_router)
app.include_router(moods_router)

@app.get("/")
def root():
    return {"message": "CalmCare API is running ✅"}
