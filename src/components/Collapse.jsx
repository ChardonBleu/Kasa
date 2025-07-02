import { useState } from "react";

export default function Collapse({ title, text }) {
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
      <article className="collapse">
        <div className="collapse__title" onClick={toggleCollapse}>
          <p>{title}</p>
          <img
            src="arrow.png"
            alt="chevron"
            className={
              isCollapsed
                ? "collapse__chevron"
                : "collapse__chevron-uncollapsed"
            }
          />
        </div>

        <div
          className={`collapse__description ${hasInteracted ? "collapse__description-animate" : ""} ${isCollapsed ? "collapsed" : "uncollapsed"}`}
        >
          {text}
        </div>
      </article>
    </>
  );
}
