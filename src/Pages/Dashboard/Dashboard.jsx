import { useEffect, useRef, useState } from 'react';
import { route } from 'preact-router';
import aboutMusic from '../../assets/music/opening.mp3';
import About from '../../components/About';

export default function Dashboard() {
  const audioRef = useRef(null);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const shouldPlay = localStorage.getItem('shouldPlayMusic');

    if (!shouldPlay) {
      route('/');
      return;
    }

    const audio = audioRef.current;
    if (audio) {
      audio.volume = 1;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Audio berhasil diputar');
          })
          .catch((error) => {
            console.error('Gagal memutar audio:', error);
          });
      }
    }
    localStorage.removeItem('shouldPlayMusic');
  }, []);

  return (
    <div className="bg-black h-screen text-white flex flex-col items-center justify-center gap-4">
      <audio
        ref={audioRef}
        src={aboutMusic}
        loop
        preload="auto"
        type="audio/mpeg"
      />
      
      <h1 className="text-2xl font-bold">Dashboard Page</h1>
      
      <button
        onClick={() => setShowAbout(true)}
        className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600"
      >
        About
      </button>

      {showAbout && <About onClose={() => setShowAbout(false)} />}
    </div>
  );
}
