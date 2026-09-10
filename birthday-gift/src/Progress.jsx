function Progress({ current, total }) {
  return (
    <div className="progress-container">
      <span>our story</span>

      <div className="progress-dots">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${index < current ? "active" : ""}`}
          />
        ))}
      </div>

      <span>
        {current}/{total}
      </span>
    </div>
  );
}

export default Progress;
