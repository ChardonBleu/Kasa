import { useState } from "react";

export default function AboutCard({ title, text }) {
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
        <div className="aboutCard__title">
          <p>{title}</p>
          <img
            src="arrow.png"
            alt="chevron"
            className={
              isCollapsed
                ? "aboutCard__chevron"
                : "aboutCard__chevron-uncollapsed"
            }
            onClick={toggleCollapse}
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
