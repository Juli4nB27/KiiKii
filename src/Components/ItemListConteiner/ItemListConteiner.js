import Carrusel from "../Carrusel/Carrusel";
import React from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import Carta from "../libs/Carta";

import Task from "../utils/Task";

const ItemListConteiner = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      Task(Carta.filter(item => item.categoryId === parseInt(id)))
        .then((res) => setProducts(res))
        .catch((err) => console.log(err));
    } else {
      Task(Carta)
        .then((res) => setProducts(res))
        .catch((err) => console.log(err));
    }
  }, [id]);
  return (
    <main className='App-main'>
      <div className="divContMain">
        <Carrusel />
        <div>
          <ItemList item={products} />
        </div>
      </div>
    </main> 
  );
};

export default ItemListConteiner;
