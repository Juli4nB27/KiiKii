import Carrusel from "../Carrusel/Carrusel"

import React from 'react'

import ItemList from "../ItemList/ItemList";




const ItemListConteiner = () => {
    return (
        <div className='divContMain'>
            < Carrusel/>
            <div>
                <ItemList/>
            </div>
        </div>
        
    )
}

export default ItemListConteiner
