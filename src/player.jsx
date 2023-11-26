import React, { useState, useRef } from 'react';
import './audioplayer.css';

const AudioPlayer = ({ audioSrc, imageSrc, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='music-item'>
      <img src={imageSrc} alt={title} style={{ width: '100px', height: '100px' }} />
      <audio ref={audioRef} src={audioSrc} />
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;