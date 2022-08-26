import React from "react";

import ImageCarousel1 from "./assets/imageCarousel1.png";

import ImageCarousel2 from "./assets/imageCarousel2.png";

import ImageCarousel3 from "./assets/imageCarousel3.png";

import { Carousel } from "react-bootstrap";

const Carrusel = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/Fs4SwDSv/Mesa-de-trabajo-1-Tercera4.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/yYsJLWqY/Mesa-de-trabajo-1-Tercera3.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/25b31ZWT/Mesa-de-trabajo-1.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
