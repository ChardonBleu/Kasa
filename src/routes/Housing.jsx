// import { useParams } from 'react-router';
import { useLoaderData } from "react-router";
import { Navigate } from "react-router";

export default function Housing() {
  const { housing } = useLoaderData();

  if (!housing) {
    return <Navigate to="/Kasa/404" replace />;
  }

  return (
    <>
      <div>
        <p>Détail du logement {housing.title}</p>
      </div>
    </>
  );
}
