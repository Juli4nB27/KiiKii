import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { items, removeItem, clearItems, totalS} = useContext(CartContext);
  console.log(items);
  let itemsInCart = 0;

  items.map((item) => {
    itemsInCart = itemsInCart + item.count;
  })

  return (
    <main className="App-main">
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
                <p className="precioCartDetail"> ${ item.price * item.count }</p>
                <button className="btnBorrar" onClick={() => removeItem(item.id)}>Borrar Producto</button>
              </div>
            </div>
          </div>
        ))} 
      </div>
      <div className="contDetallePago">
          <h3 className={items.length !== 0 ? 'detalleCant' : 'disable'}>Productos: {itemsInCart}</h3>  
          <p className={items.length !== 0 ? 'precioTotal' : 'disable'}> Total a pagar: ${totalS} </p>
          <button onClick={clearItems} className={items.length !== 0 ? 'btnBorrarTodo' : 'disable'}>Borrar todo</button>
          <Link className="linkVolverProd" to='/' ><button className={items.length === 0 ? 'botonVolverInicio' : 'disable'}>Volver a productos</button></Link>
        </div> 
    </main>
  );
};

export default Cart;
