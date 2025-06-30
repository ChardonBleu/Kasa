// import { useParams } from 'react-router';
import { useLoaderData } from "react-router";
import { Navigate } from "react-router";
import TagCard from "../components/TagCard.jsx";
import RatingStars from "../components/RatingStars.jsx";
import Collapse from "../components/Collapse.jsx";

export default function Housing() {
  const { housing } = useLoaderData();

  if (!housing) {
    return <Navigate to="/Kasa/404" replace />;
  }

  return (
    <>
      <section className="housing">

        <div className="housing__carousel">
          <img src={housing.pictures[0]} alt="photo logement" />
          <div className="housing__carousel-pagination">{housing.pictures.indexOf(housing.pictures[0]) + 1}/{housing.pictures.length}</div>
        </div>

        <div  className="housing__title">
          <div>
            <h1 className="housing__title-name">{housing.title}</h1>
            <h2 className="housing__title-location">{housing.location}</h2>
          </div>
          <div className="housing__title-host">
            <p className="housing__title-hostname">{housing.host.name}</p>
            <img src={housing.host.picture} alt="photo hôte" />
          </div>
        </div>

        <div>      
          <div className="housing__tags">
            {housing.tags.map((tag) => <TagCard  tag={tag}/>)}
            <RatingStars rating={housing.rating} />
          </div>
          <div className="housing__collapses">
            <Collapse title="Description" text={housing.description} />
            <Collapse title="Equipement" text={housing.equipments.map((equipment) => `<p>${equipment}</p>`)} />
          </div>
        </div>


      </section>
    </>
  );
}
