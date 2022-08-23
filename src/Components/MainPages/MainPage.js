
import imgMedio from './assets/mdMainPag.jpg';

import imgIzquierda from './assets/izqMainPag.jpg';

import imgDerecha from './assets/drchMainPag.jpg';




const MainPage = () => {
    return (
        <div className='divContMain'>
            <img className='imgMain-Derecha' src= {imgDerecha} />
            <img className='imgMain-Medio' src= {imgMedio} />
            <img className='imgMain-Izquierda' src= {imgIzquierda} />
        </div>
    )
}

export default MainPage
