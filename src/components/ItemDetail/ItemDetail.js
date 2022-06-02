import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import {contexto} from "../CartContext/CartContext"

const ItemDetail = ({productos}) => {

  const {addItem} = useContext(contexto)

  const onAdd = (cantidad) =>{
    addItem(productos, cantidad)
  }

  return (
    <div className="cardContainer">
      <article>
        <div>
          <h3>{productos.nombre}</h3>
        </div>
        <img src={productos.imagen} alt="card"></img>
        <div>
          <p>{productos.descripcion}</p>
        </div>
        <div>
          <p>Precio: ${productos.precio}</p>
          <ItemCount onAdd={onAdd} stock={10} init={1}/>          
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
