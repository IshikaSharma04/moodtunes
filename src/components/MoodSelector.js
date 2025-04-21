import React, { useContext } from 'react';
import { MoodContext } from '../context/MoodContext';

const MoodSelector = () => {
  const { setMood } = useContext(MoodContext);
  const moods = ['happy', 'sad', 'chill', 'party', 'romantic'];

  return (
    <div>
      <h3>Select a Mood:</h3>
      {moods.map(m => (
        <button key={m} onClick={() => setMood(m)}>
          {m}
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;
