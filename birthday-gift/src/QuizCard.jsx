import { useEffect, useState } from "react";

function QuizCard({ quiz, onCorrect }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const [textAnswer, setTextAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const question = quiz[currentQuestion];
  const totalQuestions = quiz.length;

  // Reset everything when a new memory/quiz is loaded
  useEffect(() => {
    setCurrentQuestion(0);
    setSelected("");
    setTextAnswer("");
    setMessage("");
    setIsCorrect(false);
  }, [quiz]);

  // Normalize text answers
  const normalizeAnswer = (value) => {
    return value.toLowerCase().trim().replace(/\s+/g, " ");
  };

  const checkAnswer = (answer) => {
    const correctAnswer = normalizeAnswer(question.answer);
    const userAnswer = normalizeAnswer(answer);

    return userAnswer === correctAnswer;
  };

  const handleCorrect = () => {
    setIsCorrect(true);
    setMessage("You remembered! I knew you would. ♡");

    setTimeout(() => {
      if (currentQuestion === totalQuestions - 1) {
        onCorrect();
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setSelected("");
        setTextAnswer("");
        setMessage("");
        setIsCorrect(false);
      }
    }, 1100);
  };

  const handleChoiceAnswer = (option) => {
    if (isCorrect) return;

    setSelected(option);

    if (checkAnswer(option)) {
      handleCorrect();
    } else {
      setIsCorrect(false);
      setMessage("Hmm... not quite, my love. Try again ♡");
    }
  };

  const handleTextAnswer = (e) => {
    e.preventDefault();

    if (!textAnswer.trim() || isCorrect) return;

    if (checkAnswer(textAnswer)) {
      handleCorrect();
    } else {
      setIsCorrect(false);
      setMessage("Hmm... think a little harder, my love 👀♡");
    }
  };

  return (
    <section className="quiz-section">
      {/* TOP ICON */}
      <div className="quiz-icon">♡</div>

      <p className="quiz-label">MEMORY CHECK</p>

      <h2>Wait...</h2>

      <p className="quiz-intro">
        You can't see the next memory yet.
        <br />
        You have to prove you remember this one. 👀
      </p>

      {/* QUESTION COUNTER */}
      <div className="quiz-progress">
        <span>Question {currentQuestion + 1}</span>

        <span>
          {currentQuestion + 1}/{totalQuestions}
        </span>
      </div>

      {/* QUESTION CARD */}
      <div className="quiz-card">
        <div className="question-number">0{currentQuestion + 1}</div>

        <h3>{question.question}</h3>

        {/* =========================
            MULTIPLE CHOICE
        ========================= */}

        {question.type === "choice" && (
          <div className="options">
            {question.options.map((option) => {
              const isSelected = selected === option;
              const correct = isSelected && isCorrect;
              const wrong = isSelected && !isCorrect;

              return (
                <button
                  key={option}
                  type="button"
                  className={`quiz-option ${
                    correct ? "correct" : ""
                  } ${wrong ? "wrong" : ""}`}
                  onClick={() => handleChoiceAnswer(option)}
                  disabled={isCorrect}
                >
                  <span className="option-heart">{correct ? "♥" : "♡"}</span>

                  <span>{option}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* =========================
            DATE INPUT
        ========================= */}

        {question.type === "date" && (
          <form className="text-answer-form" onSubmit={handleTextAnswer}>
            <div className="answer-icon">📅</div>

            <input
              type="text"
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
              placeholder="DD Month YYYY"
              className={isCorrect ? "input-correct" : ""}
              disabled={isCorrect}
              autoComplete="off"
            />

            <button
              type="submit"
              className="answer-button"
              disabled={!textAnswer.trim() || isCorrect}
            >
              I remember ♡
            </button>
          </form>
        )}

        {/* =========================
            TEXT INPUT
        ========================= */}

        {question.type === "text" && (
          <form className="text-answer-form" onSubmit={handleTextAnswer}>
            <div className="answer-icon">💭</div>

            <input
              type="text"
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
              placeholder="Type your answer..."
              className={isCorrect ? "input-correct" : ""}
              disabled={isCorrect}
              autoComplete="off"
            />

            <button
              type="submit"
              className="answer-button"
              disabled={!textAnswer.trim() || isCorrect}
            >
              I remember ♡
            </button>
          </form>
        )}

        {/* =========================
            MESSAGE
        ========================= */}

        {message && (
          <p className={isCorrect ? "quiz-success" : "quiz-error"}>{message}</p>
        )}

        {/* HINT */}
        {!message && question.type === "text" && (
          <p className="quiz-hint">
            Think carefully... I know you remember this. ♡
          </p>
        )}

        {!message && question.type === "date" && (
          <p className="quiz-hint">I want the date exactly right. 👀</p>
        )}
      </div>

      {/* BOTTOM PROGRESS */}
      <div className="question-dots">
        {quiz.map((_, index) => (
          <span
            key={index}
            className={
              index <= currentQuestion ? "question-dot active" : "question-dot"
            }
          />
        ))}
      </div>

      <p className="swipe-hint">remember carefully... ♡</p>
    </section>
  );
}

export default QuizCard;
