
import Context from "@mui/base/TabsUnstyled/TabsContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({item}) => {

    const [count, setCount] = useState(0)

    const SumarContador = () => {
        setCount(count + 1)
    }
    const RestarContador = () => {
        setCount(count - 1 )
    }


    let [add, setAdd] = useState(0)
    const onAdd = () => {
        add = add + count
        add === 1 ? console.log(`Se agrego ${add} objeto al carrito`) : console.log(`Se agregaron ${add} objetos al carrito`)
        setAdd(add)
        addItem(item, count)
    }
    const { addItem } = useContext(CartContext)
    return(
        <div className="contenedorCardDetail">
            <img src={item.image} className="imagenCardDetail"/>
            <h2 className="tituloCardDetail">{item.title}</h2>
            <p className="precioCardDetail">{item.precio}</p>
            <p className="precioDescDetail">{item.desc}</p>
            <div>
            {
                add > 1 ?
                    <Link to="/cart" className="divFinalizarCompra">
                        <div className="msjOnAdd">Producto añadido!</div>
                        <button className="btnFinalizarCompra">Finalizar Compra</button>
                    </Link>
                    : 
                <ItemCount onAdd={onAdd} RestarContador={RestarContador} SumarContador={SumarContador} count={count} item={item} inicio={0} stock={item.stock} addItem={addItem} />     
                    
            }

            </div>
            
        </div>
    );
}

export default ItemDetail;
