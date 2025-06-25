import { Link } from "react-router";
import { useLoaderData } from "react-router";

export default function Kasa() {
  const { housings } = useLoaderData();

  return (
    <>
      <div>
        <p>housing avec les cards logement</p>
        <div>
          <p>
            {housings.map((housing) => (
              <Link key={housing.id} to={`${housing.id}`}>
                card logement {housing.id}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
