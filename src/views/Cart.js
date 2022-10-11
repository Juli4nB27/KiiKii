import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Components/utils/firebaseConfig";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { items, removeItem, clearItems} = useContext(CartContext);
  console.log(items);
  let itemsInCart = 0;

  items.map((item) => {
    itemsInCart = itemsInCart + item.count;
  })
  const [total, setTotal] = useState(0);
  const sumaTotal = () =>{
        let totales =items.map(item => item.total)
        const sumaTotales = totales.reduce((anterior, actual) => anterior + actual, 0);
        console.log(sumaTotales)
        setTotal(sumaTotales);
    }

    useEffect(() => {
        sumaTotal();
    }, [items])
  const orden ={
    comprador:{
      nombre:'julian',
      apellido:'bouchet',
      telefono:'3442',
      direccion:'carlos thays'
    },
    productos: items.map(item => ({id:item.id, title:item.title, price:item.price}))
  }

  const terminarCompra =() => {
    const ordenCompra = collection(db, 'ordenes');
    addDoc(ordenCompra, orden)
      .then(({id}) => console.log(id))
  }



  return (
    <main className="App-mainCart">
      <div className="divContMainCart">
        {items.map((item) => (
          <div className="divContTotal" key={item.id}>
            <div className="cont" >
              <div className="contenedorCart">
                <img src={item.image} className="imagenCartDetail" />
              </div>
              <div className="CartContenido">
                <h2 className="tituloCartDetail">{item.name}</h2>
                <p className="precioDestDetail">{item.desc}</p>
                <h3 className="cantidadCartDetail">Cantidad: {item.count}</h3>
                <p className="precioCartDetail"> ${ item.count * item.price }</p>
                <button className="btnBorrar" onClick={() => removeItem(item.id)}>Borrar Producto</button>
              </div>
            </div>
          </div>
        ))} 
      </div>
      <div className="contDetallePago">
          <h3 className={items.length !== 0 ? 'detalleCant' : 'disable'}>Productos: {itemsInCart}</h3>  
          <p className={items.length !== 0 ? 'precioTotal' : 'disable'}> Total a pagar: ${total} </p>
          <button onClick={clearItems} className={items.length !== 0 ? 'btnBorrarTodo' : 'disable'}>Borrar todo</button>
          <button onClick={terminarCompra} className={items.length !== 0 ? 'btnFinalizarCompra' : 'disable'}>Finalizar Compra</button>
          <Link className="linkVolverProd" to='/' ><button className={items.length === 0 ? 'botonVolverInicio' : 'disable'}>Volver a productos</button></Link>
        </div> 
    </main>
  );
};

export default Cart;
