
import Context from "@mui/base/TabsUnstyled/TabsContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({item}) => {

    const [add, setAdd] = useState(false);
    
    const { addItem } = useContext(CartContext)
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
                    <ItemCount item={item} inicio={0} stock={item.stock} addItem={addItem} />     
                    
            }

            </div>
            
        </div>
    );
}

export default ItemDetail;
