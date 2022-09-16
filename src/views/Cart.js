import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { items, removeItem, clearItems} = useContext(CartContext);
  console.log(items);

  return (
    <main className="App-main">
      <div className="divContMain">
        {items.map((item) => (
          <div key={item.id}>
            <div className="cont" >
              <div className="contenedorCart">
                <img src={item.image} className="imagenCartDetail" />
              </div>
              <div className="CartContenido">
                <h2 className="tituloCartDetail">{item.name}</h2>
                <p className="precioCartDetail">{item.price}</p>
                <p className="precioDestDetail">{item.desc}</p>
                <br></br><br></br><br></br><br></br>
                <h3 className="cantidadCartDetail">Cantidad: {item.count}</h3>
              </div>
              <div className="borrarProduct">
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <button className="btnBorrar" onClick={() => removeItem(item.id)}>Borrar Producto</button>
              </div>
            </div>
            
          </div>
          
        ))}
        <div className="borrarProduct">
            <br></br><br></br>
            <button className="btnBorrarTodo" onClick={() => clearItems()}>Vaciar Carrito</button>
            <br></br><br></br>
        </div>
      </div>
    </main>
  );
};

export default Cart;
