import gatoDeLaSuerte from "./assets/gatoDeLaSuerte.png";

import CarritoNavBar from "../CartWidget/carritoNav";

import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const NavBar = () => {
  return (
    <header className="App-header">
      <nav className="nav">
        <div className="logo-namePag">
          <Link to="/" className="navHeadNew">
            <img alt="" className="imgLogo" src={gatoDeLaSuerte} />
          </Link>
          <Link to="/" className="namPag">
            <h1 className="namPag">KIIKII</h1>
          </Link>
        </div>
        <ul className="navHead">
          <Dropdown />
          <Link to="/" className="navHeadNew">
            <li>new</li>
          </Link>
          <Link to="/category/5" className="navHeadRemeras">
            <li>informacion</li>
          </Link>
          <Link to="/category/6" className="navHeadPantalones">
            <li>contacto</li>
          </Link>
          <Link to="/cart">
            <CarritoNavBar />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
