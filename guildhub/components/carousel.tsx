"use client";

import "@/styles/carousel.scss";
import { useState } from "react";
interface CarouselProps {
  objectsArray: { id: number; title: string; image: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ objectsArray }) => {
  const [elements, setElements] = useState([objectsArray[0], objectsArray[1]]);

  const handleClick = () => {
    setElements([
      objectsArray[elements[0].id + 1],
      objectsArray[elements[1].id + 1],
    ]);
  };

  return (
    <div className="carousel">
      <div className="carousel-element next">
        <p className="carousel-element-title">{elements[0].title}</p>
        <p className="carousel-element-title">{elements[0].id}</p>
        <img
          className="carousel-element-image"
          src={elements[0].image}
          alt=""
        />
      </div>

      <div className="carousel-element current">
        <p className="carousel-element-title">{elements[1].title}</p>
        <p className="carousel-element-title">{elements[1].id}</p>
        <img
          className="carousel-element-image"
          src={elements[1].image}
          alt=""
        />
      </div>
      <button className="next-button" onClick={handleClick}>
        <img
          src="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
          alt=""
          className="next-button-image"
        />
      </button>
    </div>
  );
};

export default Carousel;
