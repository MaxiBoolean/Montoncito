import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {

  const[cartItems,setCartItems] = useState(0)

  const onAdd = (cantidad) =>{
    setCartItems(cantidad)
    console.log(cartItems) //Aca traigo cantidad de items desde ItemCount.js
  }

  return (
    <div className="cardContainer">
      <article>
        <div>
          <h3>{props.nombre}</h3>
        </div>
        <img src={props.imagen} alt="card"></img>
        <div>
          <p>{props.descripcion}</p>
        </div>
        <div>
          <p>Precio: ${props.precio}</p>
          <ItemCount onAdd={onAdd} stock={10} init={1}/>          
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
