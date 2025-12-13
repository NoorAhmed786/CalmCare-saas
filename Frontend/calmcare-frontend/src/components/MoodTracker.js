// src/components/MoodTracker.js

import React, { useState } from 'react';
import axios from 'axios';

const MoodTracker = () => {
  const [mood, setMood] = useState(null);
  const [error, setError] = useState(null);
  
  const handleMoodSubmit = async (mood) => {
    const token = localStorage.getItem('accessToken'); // Get token from localStorage

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/moods/track',
        { mood: mood },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      
      alert(`Mood '${mood}' tracked successfully!`);
    } catch (err) {
      setError('Failed to track mood');
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={() => handleMoodSubmit('happy')}>Happy</button>
      <button onClick={() => handleMoodSubmit('sad')}>Sad</button>
      <button onClick={() => handleMoodSubmit('neutral')}>Neutral</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default MoodTracker;
