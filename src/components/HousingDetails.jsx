import TagCard from "../components/TagCard.jsx";
import RatingStars from "../components/RatingStars.jsx";

export default function HousingDetails({ housing }) {
  const firstName = housing ? housing.host.name.split(" ")[0] : "";
  const lastName = housing ? housing.host.name.split(" ")[1] : "";

  return (
    <>
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
    </>
  );
}
