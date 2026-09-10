import { useRef, useState } from "react";
import perfectSong from "./music/perfect.mp3";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch (error) {
      console.error("Could not play music:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={perfectSong} loop preload="auto" />

      <button
        className="music-player"
        onClick={toggleMusic}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <span>{playing ? "♫" : "♪"}</span>

        <div>
          <small>{playing ? "playing now" : "our song"}</small>

          <strong>{playing ? "Perfect ♡" : "tap to play"}</strong>
        </div>
      </button>
    </>
  );
}

export default MusicPlayer;
