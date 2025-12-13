// src/App.js

import React from 'react';
import MoodTracker from './components/MoodTracker';
import MoodAnalytics from './components/MoodAnalytics';

function App() {
  return (
    <div className="App">
      <h1>Welcome to CalmCare</h1>
      <MoodTracker />
      <MoodAnalytics />
    </div>
  );
}

export default App;
