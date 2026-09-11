import "./css/finalwish.css";

function FinalWish() {
  const fallingItems = [
    { type: "flower", symbol: "🌸", className: "fall-1" },
    { type: "flower", symbol: "🌷", className: "fall-2" },
    { type: "heart", symbol: "♡", className: "fall-3" },
    { type: "star", symbol: "✦", className: "fall-4" },
    { type: "flower", symbol: "🌺", className: "fall-5" },
    { type: "heart", symbol: "♥", className: "fall-6" },
    { type: "star", symbol: "✧", className: "fall-7" },
    { type: "flower", symbol: "🌼", className: "fall-8" },
    { type: "heart", symbol: "♡", className: "fall-9" },
    { type: "star", symbol: "✦", className: "fall-10" },
    { type: "flower", symbol: "🌸", className: "fall-11" },
    { type: "heart", symbol: "♡", className: "fall-12" },
    { type: "star", symbol: "✧", className: "fall-13" },
    { type: "flower", symbol: "🌷", className: "fall-14" },
    { type: "heart", symbol: "♥", className: "fall-15" },
    { type: "star", symbol: "✦", className: "fall-16" },
  ];

  return (
    <main className="final-page">
      {/* DREAMY BACKGROUND */}
      <div className="final-glow glow-one"></div>
      <div className="final-glow glow-two"></div>
      <div className="final-glow glow-three"></div>

      {/* FALLING DECORATIONS */}
      <div className="falling-decorations">
        {fallingItems.map((item, index) => (
          <span
            key={index}
            className={`falling-item ${item.type} ${item.className}`}
          >
            {item.symbol}
          </span>
        ))}
      </div>

      {/* EXTRA SPARKLES */}
      <div className="sparkle-field">
        <span>✦</span>
        <span>✧</span>
        <span>⋆</span>
        <span>✦</span>
        <span>✧</span>
        <span>⋆</span>
        <span>✦</span>
        <span>✧</span>
      </div>

      {/* MAIN LETTER */}
      <div className="final-card">
        <div className="card-decoration top-left">🌸</div>
        <div className="card-decoration top-right">🌷</div>
        <div className="card-decoration bottom-left">🌺</div>
        <div className="card-decoration bottom-right">🌼</div>

        <p className="final-small">and now...</p>

        <div className="final-heart">♡</div>

        <p className="final-eyebrow">a little birthday letter</p>

        <h1>
          Happy Birthday,
          <br />
          <span>My Love</span>
        </h1>

        <div className="final-divider">
          <span>♡</span>
        </div>

        <p className="final-message">
          If you ever wonder what my favourite part of our story is, I don't
          think I could choose just one moment.
        </p>

        <p className="final-message">
          It's all of it. The laughs, the silly conversations, the little
          memories, the difficult days, and every ordinary moment that somehow
          became special because it was with you.
        </p>

        <p className="final-message">
          I hope this new year of your life brings you everything your heart is
          hoping for. And more than anything, I hope I get to be beside you for
          all the chapters still waiting for us.
        </p>

        <div className="final-signature">
          Always yours,
          <br />
          <span>your girl ♡</span>
        </div>

        <div className="cake-wrapper">
          <div className="cake-glow"></div>
          <div className="birthday-cake">🎂</div>
        </div>

        <p className="final-footer">Happy Birthday, handsome.</p>

        <div className="tiny-hearts">♡ &nbsp; ♡ &nbsp; ♡</div>
      </div>

      {/* BOTTOM PETALS */}
      <div className="bottom-petals">
        <span>🌸</span>
        <span>🌷</span>
        <span>🌺</span>
        <span>🌼</span>
        <span>🌸</span>
      </div>
    </main>
  );
}

export default FinalWish;
