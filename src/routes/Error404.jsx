import { NavLink } from "react-router";

export default function Error404() {
  return (
    <>
      <div className="error">
        <h1 className="error__status">404</h1>
        <p className="error__message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/Kasa/">Retourner sur la page d'accueil</NavLink>
      </div>
    </>
  );
}
