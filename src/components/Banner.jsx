import { useLocation } from "react-router";

export default function Banner({ text, url }) {
  let location = useLocation();

  return (
    <>
      <section className="banner">
        <img src={url} alt="banner" className="banner__img" />
        <div
          className={`banner__text ${location.pathname === "/Kasa/" ? "banner__text-shadow" : ""}`}
        >
          <p>{text}</p>
        </div>
      </section>
    </>
  );
}
