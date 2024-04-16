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
    }, 900);
  };

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <div className="carousel invisible" />
        <div className="carousel-window">
          <div className="carousel-window-wrapper">
            <div
              className={`carousel-window-wrapper-element next ${
                isAnimating ? "fadeOut" : ""
              }`}
            >
              <p className="carousel-window-wrapper-element-title">
                {elements[1].title}
              </p>
              <img
                className="carousel-window-wrapper-element-image"
                src={elements[1].image}
                alt=""
              />
            </div>

            <div
              className={`carousel-window-wrapper-element current ${
                isAnimating ? "fadeOut" : ""
              }`}
            >
              <p className="carousel-window-wrapper-element-title">
                {elements[0].title}
              </p>
              <img
                className="carousel-window-wrapper-element-image"
                src={elements[0].image}
                alt=""
              />
            </div>
            <div className="carousel-window-wrapper-element invisible" />
          </div>
          <div className="carousel invisible" />
        </div>
      </div>
      <div className="carousel-wrapper">
        <div className="carousel-wrapper-button">
          <button
            className="next-button"
            onClick={handleClick}
            disabled={isAnimating}
          >
            <img
              src="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
              alt="Next slide arrow"
              className="next-button-image"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
