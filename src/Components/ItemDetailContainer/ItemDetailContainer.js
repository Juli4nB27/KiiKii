
import React from 'react'
import Carta from '../libs/Carta';
import { useEffect } from 'react';
import { useState } from 'react';
import Task from '../utils/Task';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailConteiner = () =>{ 
    const [producto, setProducto] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        Task(Carta.find(item => item.id === parseInt(id)))
            .then(res => setProducto(res))
            .catch(err => console.log(err))
    }, [id])
    return(
        <>{
            <main className='App-main'>
                <ItemDetail item={producto} />
            </main>
        }</>
    )
}

export default ItemDetailConteiner;
