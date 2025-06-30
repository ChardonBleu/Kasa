import { useState } from "react";

export default function InfoCard({ title, text }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  function toggleCollapse() {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    setIsCollapsed(!isCollapsed);
  }

  return (
    <>
      <article className="aboutCard">
        <div className="aboutCard__title" onClick={toggleCollapse}>
          <p>{title}</p>
          <img
            src="arrow.png"
            alt="chevron"
            className={
              isCollapsed
                ? "aboutCard__chevron"
                : "aboutCard__chevron-uncollapsed"
            }
          />
        </div>

        <div
          className={`aboutCard__description ${hasInteracted ? "aboutCard__description-animate" : ""} ${isCollapsed ? "collapsed" : "uncollapsed"}`}
        >
          {text}
        </div>
      </article>
    </>
  );
}
