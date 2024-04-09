import React from "react";

interface CarouselProps {
  objectsArray: { title: string; image: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ objectsArray }) => {
  return (
    <div className="carousel">
      {objectsArray.map((object, index) => (
        <div className="carousel-element" key={index}>
          <p>{object.title}</p>
          <img src={object.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
