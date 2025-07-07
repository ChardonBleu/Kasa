export default function Carousel({
  housing,
  currentImage,
  navigateLeft,
  navigateRight,
}) {
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
      <div className="housing__carousel">
        <img src={currentImage} alt="photo logement" />
        {housing.pictures.length > 1 ? (
          <>
            <div className="housing__carousel-pagination">
              {housing.pictures.indexOf(currentImage) + 1}/
              {housing.pictures.length}
            </div>
            <Chevrons />
          </>
        ) : (
          ``
        )}
      </div>
    </>
  );
}
