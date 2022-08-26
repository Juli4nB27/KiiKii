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
          src="https://i.postimg.cc/mDbJwxbp/Mesa-de-trabajo-1-Fondo1.png"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/qv3L6mdt/Mesa-de-trabajo-1-Fondo3.png"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/wv6cPgRJ/Mesa-de-trabajo-1-Fondo2.png"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default Carrusel;
