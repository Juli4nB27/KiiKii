

import React,{useState} from "react";



const ItemCount = ({inicio, stock, OnAdd}) => {
    const [count, setCount] = useState(inicio)

    const SumarContador = () => {
        setCount(count + 1)
    }
    const RestarContador = () => {
        setCount(count - 1 )
    }

    return(
        <div className="count" >
            <div className="contContador" >
                <button onClick={RestarContador} disabled={count <= 0}>-</button>
                <span>{count}</span>
                <button className="btnMas" onClick={SumarContador} disabled={count >= 6}>+</button>
            </div>
            <div className="divAgregarCarrito" onClick={() => OnAdd()}>
                <button className="btnAgregarCarrito">Agregar al carrito</button>
            </div>
            
        </div>
    )
}


export default ItemCount;