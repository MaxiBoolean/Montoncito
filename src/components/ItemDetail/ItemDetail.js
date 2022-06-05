import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { contexto } from "../CartContext/CartContext";

const ItemDetail = ({ productos }) => {
  const { addItem } = useContext(contexto);
  let verificar = false;

  const onAdd = (cantidad) => {
    addItem(productos, cantidad);
  };
  const verificarStock = () => {
    let cantidad = productos.stock;

    if (cantidad === 0) {
      verificar = true;
      return verificar;
    }
  };
  verificarStock();

  return (
    <div className="cardDetailContainer">
      <article>
        <div>
          <img src={productos.imagen} alt="imagen producto"></img>
        </div>
        <div>
          <h3>{productos.nombre}</h3>
          <p>"{productos.descripcion}"</p>
          <p>
            Precio: <span>${productos.precio}</span>
          </p>
          <p>
            Disponibles: <span>{productos.stock}</span>
          </p>
          {verificar ? (
            <p className="sinStock">¡Sin Stock!</p>
          ) : (
            <ItemCount onAdd={onAdd} stock={productos.stock} init={1} />
          )}
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
