from fastapi import FastAPI
from database import engine, Base
from auth import router as auth_router


app = FastAPI(title="CalmCare SaaS Backend")

# Create DB tables
Base.metadata.create_all(bind=engine)

# Register routes
app.include_router(auth_router)

@app.get("/")
def root():
    return {"message": "CalmCare API is running ✅"}
