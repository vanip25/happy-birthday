import { useState } from "react";

function QuizCard({ quiz, onCorrect }) {
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState("");

  const handleAnswer = (option) => {
    setSelected(option);

    if (option === quiz.answer) {
      setMessage("You remembered! I knew you would. ♡");

      setTimeout(() => {
        onCorrect();
      }, 1200);
    } else {
      setMessage("Hmm... not quite, my love. Try again ♡");
    }
  };

  return (
    <section className="quiz-section">
      <div className="quiz-icon">♡</div>

      <p className="quiz-label">MEMORY CHECK</p>

      <h2>Wait...</h2>

      <p className="quiz-intro">
        You can't see the next memory yet.
        <br />
        You have to prove you remember this one. 👀
      </p>

      <div className="quiz-card">
        <h3>{quiz.question}</h3>

        <div className="options">
          {quiz.options.map((option) => (
            <button
              key={option}
              className={`quiz-option ${
                selected === option
                  ? option === quiz.answer
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              onClick={() => handleAnswer(option)}
            >
              <span className="option-heart">♡</span>
              {option}
            </button>
          ))}
        </div>

        {message && (
          <p
            className={selected === quiz.answer ? "quiz-success" : "quiz-error"}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default QuizCard;
