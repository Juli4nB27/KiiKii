import React from 'react'
import Item from '../Item/Item';
import Carta from '../libs/Carta';
import { useEffect } from 'react';
import { useState } from 'react';
import Task from '../utils/Task';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailConteiner = () =>{ 
    const [producto, setProducto] = useState([]);
    useEffect(() => {
        Task(Carta[2])
            .then(res => setProducto(res))
            .catch(err => console.log(err))
    }, [])
    return(
        <>{
            <ItemDetail item={producto} />
        }</>
    )
}

export default ItemDetailConteiner;
