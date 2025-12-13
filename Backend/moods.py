from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from Backend.models import Mood, User
from Backend.database import get_db
from Backend.security import get_current_user
from datetime import datetime

class MoodRequest(BaseModel):
    mood: str

moods_router = APIRouter(prefix="/api/moods", tags=["Moods"])


# POST mood tracking
@moods_router.post("/track")
def track_mood(req: MoodRequest, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    # Save mood to database with the current timestamp
    new_mood = Mood(mood=req.mood, user_id=current_user.id, timestamp=datetime.utcnow())
    db.add(new_mood)
    db.commit()
    db.refresh(new_mood)

    return {"message": "Mood tracked successfully"}

# GET mood history
@moods_router.get("/history")
def get_mood_history(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    moods = db.query(Mood).filter(Mood.user_id == current_user.id).order_by(Mood.timestamp.desc()).all()
    
    # Return list of mood entries with proper formatting
    mood_history = [
        {
            "id": mood.id,
            "mood": mood.mood,
            "timestamp": mood.timestamp.isoformat() if mood.timestamp else None,
            "user_id": mood.user_id
        }
        for mood in moods
    ]
    return mood_history
