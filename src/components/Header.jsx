import { NavLink } from "react-router";
import kasaLogo from "/logo.png";
import kasaLogoLarge from "/logoLarge.png";

export default function Header() {
  return (
    <>
      <header className="header">

        <picture>
          <source media="(max-width: 768px)" srcset={kasaLogo}></source>
          <img src={kasaLogoLarge} alt="logo kasa" className="logo"></img>
        </picture>

        <nav className="header__nav">
          <NavLink 
            to="/Kasa/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            end
          >
            Accueil
          </NavLink>
          <NavLink
            to="/Kasa/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            
          >
            A Propos
          </NavLink>
        </nav>
      </header>
    </>
  );
}
