import React, { useContext, useEffect, useState } from 'react';
import { MoodContext } from '../context/MoodContext';
import songs from '../data/songs';
import SongCard from './SongCard';
import Pagination from './Pagination';

const SongList = () => {
  const { mood } = useContext(MoodContext);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 4;

  useEffect(() => {
    const moodSongs = songs.filter(song => song.mood === mood);
    setFilteredSongs(moodSongs);
    setCurrentPage(1);
  }, [mood]);

  const indexOfLast = currentPage * songsPerPage;
  const indexOfFirst = indexOfLast - songsPerPage;
  const currentSongs = filteredSongs.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      <h2>Songs for: {mood.toUpperCase()}</h2>
      <div className="song-list">
        {currentSongs.map(song => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
      <Pagination
        total={filteredSongs.length}
        perPage={songsPerPage}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
    </div>
  );
};

export default SongList;
