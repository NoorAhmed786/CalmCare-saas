from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from Backend.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    role = Column(String, default="user")

    moods = relationship("Mood", back_populates="owner")

class Mood(Base):
    __tablename__ = "moods"

    id = Column(Integer, primary_key=True, index=True)
    mood = Column(String, index=True)
    timestamp = Column(DateTime)
    user_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="moods")