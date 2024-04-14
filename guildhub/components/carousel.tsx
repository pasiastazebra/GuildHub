"use client";

import "@/styles/carousel.scss";
import { useState } from "react";
interface CarouselProps {
  objectsArray: { id: number; title: string; image: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ objectsArray }) => {
  const [elements, setElements] = useState([objectsArray[0], objectsArray[1]]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      if (elements[0].id + 1 >= objectsArray.length) {
        setElements([objectsArray[0], objectsArray[elements[1].id + 1]]);
      } else if (elements[1].id + 1 >= objectsArray.length) {
        setElements([objectsArray[elements[0].id + 1], objectsArray[0]]);
      } else {
        setElements([
          objectsArray[elements[0].id + 1],
          objectsArray[elements[1].id + 1],
        ]);
      }
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <div
          className={`carousel-element next ${isAnimating ? "fadeOut" : ""}`}
        >
          <p className="carousel-element-title">{elements[1].title}</p>
          <img
            className="carousel-element-image"
            src={elements[1].image}
            alt=""
          />
        </div>

        <div
          className={`carousel-element current ${isAnimating ? "fadeOut" : ""}`}
        >
          <p className="carousel-element-title">{elements[0].title}</p>
          <img
            className="carousel-element-image"
            src={elements[0].image}
            alt=""
          />
        </div>
        <div className="carousel-element button">
          <button
            className="next-button"
            onClick={handleClick}
            disabled={isAnimating}
          >
            <img
              src="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
              alt=""
              className="next-button-image"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
