
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({item}) => {

    const [add, setAdd] = useState(false);
    const OnAdd = () => {
        setAdd(!add)
    }

    return(
        <div className="contenedorCardDetail">
            <img src={item.image} className="imagenCardDetail"/>
            <h2 className="tituloCardDetail">{item.title}</h2>
            <p className="precioCardDetail">{item.precio}</p>
            <p className="precioDescDetail">{item.desc}</p>
            <div>
            {
                add ? 
                    <Link to="/cart" className="divFinalizarCompra">
                        <div className="msjOnAdd">Producto añadido!</div>
                        <button className="btnFinalizarCompra">Finalizar Compra</button>
                    </Link>
                    : 
                    <ItemCount inicio={0} stock={item.stock} OnAdd={OnAdd}/>     
            }

            </div>
            
        </div>
    );
}

export default ItemDetail;
