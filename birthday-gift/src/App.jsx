import { useEffect, useRef, useState } from "react";
import { memories } from "./data/memories";
import Welcome from "./Welcome";
import MemoryCard from "./Memorycard";
import QuizCard from "./QuizCard";
import Progress from "./Progress";
import FinalWish from "./FinalWish";
import perfectSong from "./music/perfect.mp3";
import happyBirthdaySong from "./music/happy-birthday.mp3";

import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentMemory, setCurrentMemory] = useState(0);
  const [finished, setFinished] = useState(false);
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(null);
  const birthdayAudioRef = useRef(null);

  const memory = memories[currentMemory];

  // Start Perfect when he enters the experience
  const handleStart = async () => {
    setStarted(true);

    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error("Music could not start:", error);
      }
    }
  };

  // Move from memory → quiz
  const handleMemoryContinue = () => {
    setShowQuiz(true);
  };

  // Correct quiz answer
  const handleCorrectAnswer = () => {
    if (currentMemory === memories.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentMemory((prev) => prev + 1);
    setShowQuiz(false);
  };

  // Switch music when final birthday page appears
  useEffect(() => {
    if (!finished) return;

    const switchToBirthdaySong = async () => {
      // Stop Perfect
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      // Start Happy Birthday
      if (birthdayAudioRef.current) {
        try {
          birthdayAudioRef.current.currentTime = 0;
          await birthdayAudioRef.current.play();
          setPlaying(true);
        } catch (error) {
          console.error("Happy Birthday music could not start:", error);
        }
      }
    };

    switchToBirthdaySong();
  }, [finished]);

  // Music button
  const toggleMusic = async () => {
    const activeAudio = finished ? birthdayAudioRef.current : audioRef.current;

    if (!activeAudio) return;

    try {
      if (playing) {
        activeAudio.pause();
        setPlaying(false);
      } else {
        await activeAudio.play();
        setPlaying(true);
      }
    } catch (error) {
      console.error("Music error:", error);
    }
  };

  return (
    <>
      {/* Main song */}
      <audio ref={audioRef} src={perfectSong} loop preload="auto" />

      {/* Final birthday song */}
      <audio ref={birthdayAudioRef} src={happyBirthdaySong} preload="auto" />

      {!started && <Welcome onStart={handleStart} />}

      {started && !finished && (
        <main className="app">
          <div className="background-decoration">
            <span>✦</span>
            <span>♡</span>
            <span>✧</span>
            <span>♡</span>
            <span>✦</span>
          </div>

          <Progress current={currentMemory + 1} total={memories.length} />

          {!showQuiz ? (
            <MemoryCard memory={memory} onContinue={handleMemoryContinue} />
          ) : (
            <QuizCard quiz={memory.quiz} onCorrect={handleCorrectAnswer} />
          )}
        </main>
      )}

      {finished && <FinalWish />}

      {started && (
        <button
          className="music-player"
          onClick={toggleMusic}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          <span>{playing ? "♫" : "♪"}</span>

          <div>
            <small>
              {playing
                ? finished
                  ? "birthday song"
                  : "playing now"
                : "music paused"}
            </small>

            <strong>{finished ? "Happy Birthday ♡" : "Perfect ♡"}</strong>
          </div>
        </button>
      )}
    </>
  );
}

export default App;
