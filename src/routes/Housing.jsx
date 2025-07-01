// import { useParams } from 'react-router';
import { useLoaderData } from "react-router";
import { Navigate } from "react-router";
import TagCard from "../components/TagCard.jsx";
import RatingStars from "../components/RatingStars.jsx";
import Collapse from "../components/Collapse.jsx";

export default function Housing() {
  const { housing } = useLoaderData();

  const firstName = housing.host.name.split(" ")[0];
  const lastName = housing.host.name.split(" ")[1];

  if (!housing) {
    return <Navigate to="/Kasa/404" replace />;
  }

  return (
    <>
      <section className="housing">
        <div className="housing__carousel">
          <img src={housing.pictures[0]} alt="photo logement" />
          <div className="housing__carousel-pagination">
            {housing.pictures.indexOf(housing.pictures[0]) + 1}/
            {housing.pictures.length}
          </div>
        </div>

        <div className="housing__title">
          <div>
            <h2 className="housing__title-name">{housing.title}</h2>
            <h3 className="housing__title-location">{housing.location}</h3>
            <div className="housing__title-tags">
              {housing.tags.map((tag) => (
                <TagCard tag={tag} />
              ))}
            </div>
          </div>

          <div className="housing__host">
            <div className="housing__host-hostname">
              <p>
                {firstName}
                <br />
                {lastName}
              </p>
              <img src={housing.host.picture} alt="photo hôte" />
            </div>
            <div className="housing__host-rating">
              <RatingStars rating={housing.rating} />
            </div>
          </div>
        </div>

        <div className="housing__collapses">
          <Collapse title="Description" text={housing.description} />
          <Collapse
            title="Equipement"
            text={housing.equipments.map((equipment) => (
              <p className="housing__collapses-equipment">{equipment}</p>
            ))}
          />
        </div>
      </section>
    </>
  );
}
