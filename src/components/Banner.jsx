export default function Banner({ text, url }) {
  return (
    <>
      <section className="banner">
        <img src={url} alt="banner" className="banner__img" />
        <div className="banner__text">
          <p>{text}</p>
        </div>
      </section>
    </>
  );
}
