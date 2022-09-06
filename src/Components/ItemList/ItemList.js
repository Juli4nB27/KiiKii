/*
import React from 'react'
import Item from '../Item/Item';
import Carta from '../libs/Carta';
import { useEffect } from 'react';
import { useState } from 'react';
import Task from '../utils/Task';


const ItemList = () => {
    const ItemList = () => {
        const [carta, setCartas] = useState([]);
        useEffect(() => {
            Task({Carta})
                .then(res => setCartas(res))
                .catch(err => console.log(err))
    
        }, [])
    }
    return(
        <div className="contenedorCards">
            {
                Carta.map((card) => (
                    <div className="cCard" key={card.id}>
                        <Item imagen={card.image} titulo={card.title} precio={card.precio}/>
                    </div>
                ))
            }
        </div>
    );
}
export default ItemList;

*/



