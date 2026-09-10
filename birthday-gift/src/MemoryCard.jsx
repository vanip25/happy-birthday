function MemoryCard({ memory, onContinue }) {
  return (
    <section className="memory-section">
      <div className="chapter-label">CHAPTER {memory.chapter}</div>

      <div className="memory-card">
        <div className="photo-frame">
          <img src={memory.image} alt={memory.title} />

          <div className="photo-tape tape-left"></div>
          <div className="photo-tape tape-right"></div>
        </div>

        <div className="memory-content">
          <p className="memory-date">{memory.date}</p>

          <h2>{memory.title}</h2>

          <div className="tiny-line"></div>

          <p className="memory-message">{memory.message}</p>

          <button className="continue-button" onClick={onContinue}>
            I remember this ♡
          </button>
        </div>
      </div>

      <p className="swipe-hint">one memory at a time...</p>
    </section>
  );
}

export default MemoryCard;
