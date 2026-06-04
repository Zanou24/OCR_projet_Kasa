import "./styles/Slideshow.sass";
import { useState } from "react";
import arrow from "../assets/arrow.svg";

export default function Slideshow({ pictures, alt }) {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <img
          onClick={handlePrevious}
          src={arrow}
          alt="Arrow"
          className="prev arrow"
        />
      )}
      <img src={pictures[index]} alt={alt} className="pictures" />
      {pictures.length > 1 && (
        <img
          onClick={handleNext}
          src={arrow}
          alt="Arrow"
          className="next arrow"
        />
      )}
      {pictures.length > 1 && (
        <p className="count">
          {index + 1}/{pictures.length}
        </p>
      )}
    </div>
  );
}
