import React from 'react';

const SongCard = ({ song }) => {
  const handleClick = () => {
    const query = encodeURIComponent(`${song.title} ${song.artist}`);
    const url = `https://www.youtube.com/results?search_query=${query}`;
    window.open(url, '_blank');
  };

  return (
    <div className="song-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h3>{song.title}</h3>
      <p>Artist: {song.artist}</p>
      <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Click to play on YouTube ▶</p>
    </div>
  );
};

export default SongCard;
