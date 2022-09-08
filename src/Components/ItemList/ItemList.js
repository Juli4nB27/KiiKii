import React from "react";
import Item from "../Item/Item";


const ItemList = ({item}) => {
  return (
    <div className="contenedorCards">{
        item.map(item=>
          <div >
            <div className="cCard" key={item.id}>
              <Item  item={item}/>
            </div>
          </div>
        ) 
      }
    </div>

  );
};
export default ItemList;
