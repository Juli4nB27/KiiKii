
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {

    const OnAdd = (valor) => {
        console.log(`Agregaste ${valor} ${item.title} al carrito`)
    }

    return(
        <div className="contenedorCardDetail">
            <img src={item.image} className="imagenCardDetail"/>
            <h2 className="tituloCardDetail">{item.title}</h2>
            <p className="precioCardDetail">{item.precio}</p>
            <p className="precioDescDetail">{item.desc}</p>
            <ItemCount inicio={0} stock={item.stock} onAdd={OnAdd}/>
        </div>
    );
}

export default ItemDetail;
