import { useLoaderData } from "react-router";
import Banner from "../components/Banner.jsx";
import HousingCard from "../components/HousingCard.jsx";

export default function Kasa() {
  const { housings } = useLoaderData();

  if (!housings) {
    return <Navigate to="/Kasa/404" replace />;
  }

  return (
    <>
      <Banner text="Chez vous, partout et ailleurs" url="bannerHome.png" />

      <section className="cards">
        {housings.map((housing) => (
          <HousingCard key={housing.id} housing={housing} />
        ))}
      </section>
    </>
  );
}
