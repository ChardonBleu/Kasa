

export default function About({title, text}) {
  return (
    <>
      <article className="collapse">
        <div className="collapse__title">
            <p>{title}</p>
            <img src="arrow.png" alt="chevron" className="collapse__title-chevron"/>
        </div>
        
        <div className="collapse__description">
            {text}
        </div>
        
      </article>
    </>
  );
}