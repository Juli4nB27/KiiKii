
import React from 'react'


import Item from '../Item/Item';

import { useEffect } from 'react';
import { useState } from 'react';

import image1 from './assets/image10.png';
import image2 from './assets/image11.png';
import image3 from './assets/image12.png';
import image4 from './assets/image13.png';
import image5 from './assets/image14.png';
import image6 from './assets/image15.png';

const carta = [
    {
        id:1,
        title:'Hoodie "School Kills Artists"',
        image: image1,
        precio: '$12.999'
    },
    {
        id:2,
        title:'Hoodie "Hello"',
        image: image2,
        precio: '$12.999'
    },
    {
        id:3,
        title:'Hoodie "Live Like Life"',
        image: image3,
        precio: '$12.999'
    },
    {
        id:4,
        title:'Hoodie "Good Vibes Only"',
        image: image4,
        precio: '$9.999'
    },
    {
        id:5,
        title:'Hoodie "Sha Da Fa Cup"',
        image: image5,
        precio: '$13.999'
    },
    {
        id:6,
        title:'Hoodie "Photo"',
        image: image6,
        precio: '$9.999'
    }
]
let task = (consult) =>{
    return new Promise((resolve, reject) => {
        if (run){
            setTimeout(() =>{
                resolve(consult)
            }, 2000);
        } else{
            reject("error!!")
        }
    })
}
let run = true;
const ItemList = () => {
    const [cartas, setCartas] = useState([]);
    useEffect(() => {
        task(carta)
            .then(res => setCartas(res))
            .catch(err => console.log(err))

    }, [])

    return(
        <div className="contenedorCards">
            {
                
                cartas.map((card) => (
                    <div className="cCard" key={card.id}>
                        <Item imagen={card.image} titulo={card.title} precio={card.precio}/>
                    </div>
                ))
            }
        </div>
    );
}




export default ItemList;