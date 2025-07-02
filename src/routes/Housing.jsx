import { useState } from "react";
import { useLoaderData } from "react-router";
import { Navigate } from "react-router";
import Collapse from "../components/Collapse.jsx";
import Carousel from "../components/Carousel.jsx";
import HousingDetails from "../components/HousingDetails.jsx";

export default function Housing() {
  const { housing } = useLoaderData();

  const [currentImage, setCurrentImage] = useState(
    housing ? housing.pictures[0] : "",
  );

  if (!housing) {
    return <Navigate to="/Kasa/404" replace />;
  }

  const maxIndex = housing ? housing.pictures.length - 1 : 0;
  let currentIndex = housing.pictures.indexOf(currentImage);

  function navigateLeft() {
    setCurrentImage(
      housing.pictures[currentIndex === 0 ? maxIndex : currentIndex - 1],
    );
  }

  function navigateRight() {
    setCurrentImage(
      housing.pictures[currentIndex === maxIndex ? 0 : currentIndex + 1],
    );
  }

  return (
    <>
      <section className="housing">
        <Carousel
          housing={housing}
          currentImage={currentImage}
          navigateLeft={() => navigateLeft()}
          navigateRight={() => navigateRight()}
        />

        <HousingDetails housing={housing} />

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
