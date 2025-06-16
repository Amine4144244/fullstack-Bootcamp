import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel styles
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <Carousel
      showThumbs={true}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={false}
    >
      <div>
        <img src="/hongkong.jpeg" alt="Hong Kong" />
        <p className="legend">Hong Kong</p>
      </div>
      <div>
        <img src="/macao.jpg" alt="Macao" />
        <p className="legend">Macao</p>
      </div>
      <div>
        <img src="/japan.jpeg" alt="Japan" />
        <p className="legend">Japan</p>
      </div>
      <div>
        <img src="/lasvegas.jpeg" alt="Las Vegas" />
        <p className="legend">Las Vegas</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;