import Banner from "../components/Banner.jsx";
import AboutCard from "../components/AboutCard.jsx";

const fiabilityText =
  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
const respectText =
  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const serviceText =
  "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.";
const securityText =
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

export default function About() {
  return (
    <>
      <Banner text={null} url="bannerAbout.png" />
      <div className="collapses">
        <AboutCard title="Fiabilité" text={fiabilityText} />
        <AboutCard title="Respect" text={respectText} />
        <AboutCard title="Service" text={serviceText} />
        <AboutCard title="Sécurité" text={securityText} />
      </div>
    </>
  );
}
