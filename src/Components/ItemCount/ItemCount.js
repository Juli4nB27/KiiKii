

import React,{useState} from "react";
import Item from "../Item/Item";



const ItemCount = ({item, inicio, addItem}) => {
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
            {   
                count > 0 ?
                <div className="divAgregarCarrito" onClick={() => addItem(item, count)}>
                    <button className="btnAgregarCarrito">Agregar al carrito</button>
                </div>
                :
                <div className="divAgregarCarrito">
                    <button className="btnAgregarCarrito">Agregar al carrito</button>
                </div>
            }
        </div>
    )
}


export default ItemCount;