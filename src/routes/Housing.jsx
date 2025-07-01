import { useState } from "react";
import { useLoaderData } from "react-router";
import { Navigate } from "react-router";
import TagCard from "../components/TagCard.jsx";
import RatingStars from "../components/RatingStars.jsx";
import Collapse from "../components/Collapse.jsx";

export default function Housing() {
  const { housing } = useLoaderData();

  const [currentImage, setCurrentImage] = useState(
    housing ? housing.pictures[0] : "",
  );

  if (!housing) {
    return <Navigate to="/Kasa/404" replace />;
  }

  const maxIndex = housing ? housing.pictures.length - 1 : 0;

  const firstName = housing ? housing.host.name.split(" ")[0] : "";
  const lastName = housing ? housing.host.name.split(" ")[1] : "";

  function navigateLeft() {
    let currentIndex = housing.pictures.indexOf(currentImage);
    setCurrentImage(
      housing.pictures[currentIndex === 0 ? maxIndex : currentIndex - 1],
    );
  }

  function navigateRight() {
    let currentIndex = housing.pictures.indexOf(currentImage);
    setCurrentImage(
      housing.pictures[currentIndex === maxIndex ? 0 : currentIndex + 1],
    );
  }

  function Chevrons() {
    return (
      <>
        <i
          className="fa-solid fa-chevron-left housing__carousel-chevron-left"
          onClick={navigateLeft}
        ></i>
        <i
          className="fa-solid fa-chevron-right housing__carousel-chevron-right"
          onClick={navigateRight}
        ></i>
      </>
    );
  }

  return (
    <>
      <section className="housing">
        <div className="housing__carousel">
          <img src={currentImage} alt="photo logement" />
          <div className="housing__carousel-pagination">
            {housing.pictures.indexOf(currentImage) + 1}/
            {housing.pictures.length}
          </div>
          {housing.pictures.length > 1 ? <Chevrons /> : ``}
        </div>

        <div className="housing__title">
          <div>
            <h2 className="housing__title-name">{housing.title}</h2>
            <h3 className="housing__title-location">{housing.location}</h3>
            <div className="housing__title-tags">
              {housing.tags.map((tag) => (
                <TagCard key={housing.tags.indexOf(tag) + tag} tag={tag} />
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
              <p key={equipment} className="housing__collapses-equipment">
                {equipment}
              </p>
            ))}
          />
        </div>
      </section>
    </>
  );
}
