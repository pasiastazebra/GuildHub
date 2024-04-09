import React from "react";
import "@/styles/carousel.scss";
interface CarouselProps {
  objectsArray: { title: string; image: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ objectsArray }) => {
  return (
    <div className="carousel">
      {objectsArray.map((object, index) => (
        <div className="carousel-element" key={index}>
          <p className="carousel-element-title">{object.title}</p>
          <img className="carousel-element-image" src={object.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
