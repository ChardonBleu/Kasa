export default function RatingStars({ rating }) {
  const notes = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="stars">
        {notes.map((note) => (
          <i
            key={note}
            className={`fa-solid fa-star stars__star ${note <= rating ? "stars__star-active" : ""} `}
          ></i>
        ))}
      </div>
    </>
  );
}
