import { useRef, useState } from "react";

import { memories } from "./data/memories";

import Welcome from "./Welcome";
import MemoryCard from "./Memorycard";
import QuizCard from "./QuizCard";
import Progress from "./Progress";
import FinalWish from "./FinalWish";

import perfectSong from "./music/perfect.mp3";

import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentMemory, setCurrentMemory] = useState(0);
  const [finished, setFinished] = useState(false);
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(null);

  const memory = memories[currentMemory];

  // --------------------------------
  // START STORY + MUSIC
  // --------------------------------

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

  // --------------------------------
  // MEMORY → QUIZ
  // --------------------------------

  const handleMemoryContinue = () => {
    setShowQuiz(true);
  };

  // --------------------------------
  // QUIZ → NEXT MEMORY
  // --------------------------------

  const handleCorrectAnswer = () => {
    if (currentMemory === memories.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentMemory((prev) => prev + 1);

    setShowQuiz(false);
  };

  // --------------------------------
  // MUSIC CONTROL
  // --------------------------------

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
      console.error("Music error:", error);
    }
  };

  return (
    <>
      {/* --------------------------------
          ONE AUDIO ELEMENT FOR ENTIRE APP
      -------------------------------- */}

      <audio ref={audioRef} src={perfectSong} loop preload="auto" />

      {/* --------------------------------
          WELCOME
      -------------------------------- */}

      {!started && <Welcome onStart={handleStart} />}

      {/* --------------------------------
          MEMORY / QUIZ
      -------------------------------- */}

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

      {/* --------------------------------
          FINAL PAGE
      -------------------------------- */}

      {finished && <FinalWish />}

      {/* --------------------------------
          MUSIC BUTTON
      -------------------------------- */}

      {started && (
        <button
          className="music-player"
          onClick={toggleMusic}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          <span>{playing ? "♫" : "♪"}</span>

          <div>
            <small>{playing ? "playing now" : "music paused"}</small>

            <strong>Perfect ♡</strong>
          </div>
        </button>
      )}
    </>
  );
}

export default App;
