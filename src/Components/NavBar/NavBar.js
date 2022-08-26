import gatoDeLaSuerte from "./assets/gatoDeLaSuerte.png";

import CarritoNavBar from "../CartWidget/carritoNav";
import { useState } from "react";

const NavBar = () => {

  return (
    <nav className='nav'>
      <div className="logo-namePag">
        <img className="imgLogo" src={gatoDeLaSuerte} />
        <h1 className="namPag">KIIKII</h1>
      </div>
      <div>

      </div>

      <ul className="navHead">
        <a href="" className="navHeadNew">
          <li>new</li>
        </a>
        <a href="" className="navHeadHoodies">
          <li>productos</li>
        </a>
        <a href="" className="navHeadRemeras">
          <li>informacion</li>
        </a>
        <a href="" className="navHeadPantalones">
          <li>contacto</li>
        </a>
        <a href="">
          <CarritoNavBar />
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
