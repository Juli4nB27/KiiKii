


import ItemCount from "../ItemCount/ItemCount";

const Card = ({imagen, titulo, precio, stock}) => {

    const OnAdd = (valor) => {
        console.log(`Agregaste ${valor} ${titulo} al carrito`)
    }

    return(
        <div className="contenedorCard">
            <img src={imagen} className="imagenCard"/>
            <h2 className="tituloCard">{titulo}</h2>
            <p className="precioCard">{precio}</p>
            < ItemCount inicio={0} stock={stock} onAdd={OnAdd}/>
        </div>
    );
}

export default Card;