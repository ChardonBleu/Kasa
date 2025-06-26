import { Link } from "react-router";

export default function HousingCard({ housing }) {
  return (
    <>
      <article key={housing.id} className="housingCard">
        <img src={housing.cover} alt="" className="housingCard__img" />
        <Link to={housing.id} className="housingCard__link">
          <p>{housing.title}</p>
        </Link>
      </article>
    </>
  );
}
