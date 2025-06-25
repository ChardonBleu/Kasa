import { NavLink } from "react-router";

export default function Error404() {
  return (
    <>
      <div>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/Kasa/">Retourner sur la page d'accueil</NavLink>
      </div>
    </>
  );
}
