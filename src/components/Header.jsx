import { NavLink } from "react-router";
import kasaLogo from "/logo.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="hello">
          <p>Projet 11 - header</p>
          <img src={kasaLogo} alt="logo kasa"></img>
        </div>
        <nav>
          <NavLink to="/Kasa/">Accueil - </NavLink>
          <NavLink to="/Kasa/about">A Propos</NavLink>
        </nav>
      </header>
    </>
  );
}
