import Banner from "../components/Banner.jsx";
import CollapseCard from "../components/CollapseCard.jsx"

export default function About() {
  return (
    <>
      <Banner text={null} url="bannerAbout.png" />
      <div className="collapses">
        < CollapseCard title="Fiabilité" text="premier texte" />
        < CollapseCard title="Respect" text="deuxième texte" />
        
      </div>
    </>
  );
}
