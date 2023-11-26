import React from 'react';
import AudioPlayer from './player';
import './App.css';
import './audioplayer.css'


const App = () => {
  const audioData = [
    {
      audioSource: './song/Jerry Di - Mi Cuarto.mp3',
      imageSource: './album/1.jpg',
      title: 'Musique 1',
    },
    {
      audioSource: './song/Lil Uzi Vert - Just Wanna Rock.mp3',
      imageSource: './album/lil.png',
      title: 'Musique 2',
    },
    {
      audioSource: './song/MW2.mp3',
      imageSource: './album/mw2.jpg',
      title: 'Musique 3',
    },
    {
      audioSource: './song/Jerry Di - Shorty.mp3',
      imageSource: './album/shorty.jpg',
      title: 'Musique 4',
    },
    {
      audioSource: './song/Kavinsky - Nightcall.mp3',
      imageSource: './album/night.jpg',
      title: 'Musique 5',
    }
  ];

  return (
    <>
      <header className='head'>
        <h1>Let Your Heart Beat</h1>
        <img className=" logo" src="./img/logo.png" alt="Logo" />
        {/* <button onClick={}>Connexion</button>
        <button onClick={}>S'inscrire</button> */}

      </header>
      <h2>Notre selection du moment:</h2>
      <div className="container">
        
        {audioData.map((data, index) => (
          <AudioPlayer
            key={index}
            audioSrc={data.audioSource}
            imageSrc={data.imageSource}
            title={data.title}
          />
        ))}
      </div>
      <footer className='foot'>
        © 2023 Nassim Tous droits réservés.
        Suivez-nous sur 
        Contactez-nous à travers la page de contact.
      </footer>
    </>
  );
};


export default App;