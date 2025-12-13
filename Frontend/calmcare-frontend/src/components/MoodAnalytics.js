// src/components/MoodAnalytics.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required Chart.js components (v3+ requires explicit registration)
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MoodAnalytics = () => {
  const [moodData, setMoodData] = useState(null);
  
  useEffect(() => {
    const fetchMoodAnalytics = async () => {
      const token = localStorage.getItem('accessToken');
      
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/moods/history', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        
        // Backend returns array directly, not wrapped in 'moods' object
        const moods = Array.isArray(response.data) ? response.data : response.data.moods || [];
        const moodCounts = { happy: 0, sad: 0, neutral: 0, excellent: 0, anxious: 0, calm: 0 };
        
        moods.forEach((mood) => {
          if (moodCounts.hasOwnProperty(mood.mood)) {
            moodCounts[mood.mood]++;
          }
        });

        setMoodData(moodCounts);
      } catch (error) {
        console.error('Failed to fetch mood analytics', error);
      }
    };

    fetchMoodAnalytics();
  }, []);

  const chartData = {
    labels: ['Happy', 'Sad', 'Neutral', 'Excellent', 'Anxious', 'Calm'],
    datasets: [
      {
        label: 'Mood Count',
        data: moodData ? [moodData.happy, moodData.sad, moodData.neutral, moodData.excellent, moodData.anxious, moodData.calm] : [0, 0, 0, 0, 0, 0],
        backgroundColor: ['#3498db', '#e74c3c', '#95a5a6', '#2ecc71', '#f39c12', '#9b59b6'],
        borderColor: ['#2980b9', '#c0392b', '#7f8c8d', '#27ae60', '#e67e22', '#8e44ad'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Your Mood Analytics</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default MoodAnalytics;
