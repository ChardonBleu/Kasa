import { Link } from "react-router";
import { useLoaderData } from "react-router";
import Banner from "../components/Banner.jsx";

export default function Kasa() {
  const { housings } = useLoaderData();

  return (
    <>
      <Banner text="Chez vous, partout et ailleurs" url="bannerHome.png" />

      <section className="cards">
        {housings.map((housing) => (
          <Link key={housing.id} to={`${housing.id}`}>
            card logement {housing.id}
          </Link>
        ))}
      </section>
    </>
  );
}
