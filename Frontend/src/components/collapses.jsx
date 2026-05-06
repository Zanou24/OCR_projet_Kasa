import { useState } from "react";
import "./styles/Collapses.sass";
import arrow from "../assets/arrow.svg";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse_header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className={`collapse_arrow ${isOpen ? "open" : ""}`}>
          <img src={arrow} alt="Arrow" />
        </span>
      </button>
      <div className={`collapse_content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </div>
  );
}
