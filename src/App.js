import React from 'react';
import MoodSelector from './components/MoodSelector';
import SongList from './components/SongList';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <h1>MoodTunes 🎵</h1>
      <MoodSelector />
      <SongList />
    </div>
  );
}

export default App;
