function Welcome({ onStart }) {
  return (
    <main className="welcome-page">
      <div className="floating-heart heart-one">♡</div>
      <div className="floating-heart heart-two">♡</div>
      <div className="floating-star star-one">✦</div>
      <div className="floating-star star-two">✧</div>

      <div className="welcome-card">
        <div className="mini-label">a little something from your girl</div>

        <div className="welcome-heart">♡</div>

        <h2>
          My Dear,
          <br />
          Birthday Boy
        </h2>

        <p className="welcome-subtitle">
          Before you make another birthday wish...
        </p>

        <p className="welcome-text">
          I want to take you somewhere first.
          <br />
          Somewhere made of all my favourite memories of us.
        </p>

        <button className="start-button" onClick={onStart}>
          Walk through our story
          <span>→</span>
        </button>

        <p className="small-note">
          there are a few little surprises along the way ♡
        </p>
      </div>
    </main>
  );
}

export default Welcome;
