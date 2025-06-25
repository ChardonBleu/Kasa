import { Link } from "react-router";

export default function HousingCard({ housing }) {
  return (
    <>
      <article key={housing.id} className="card">
        <img src={housing.cover} alt="" className="card__img" />
        <Link to={housing.id} className="card__link">
          <p>{housing.title}</p>
        </Link>
      </article>
    </>
  );
}
