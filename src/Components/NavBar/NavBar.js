

import gatoDeLaSuerte from './assets/gatoDeLaSuerte.png';

import CarritoNavBar from '../cartWidget/carritoNav';


const NavBar = () => {
    return (
        <nav className='nav' >
            <div className='logo-namePag' >
                <img className='imgLogo' src= {gatoDeLaSuerte} />
                <h1 className='namPag'>KIIKII</h1>
            </div>

            <ul className="navHead">
                <a href='' className="navHeadNew">
                    <li>NEW</li>
                </a>
                <a href='' className="navHeadHoodies">
                    <li>HOODIES</li>
                </a>
                <a href='' className="navHeadRemeras">
                    <li>REMERAS</li>
                </a>
                <a href='' className="navHeadPantalones">
                    <li>PANTALONES</li>
                </a>
                <a href='' >
                    < CarritoNavBar/>
                </a>
            </ul>
        </nav>
    )
}

export default NavBar