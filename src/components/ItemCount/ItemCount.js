import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, init, onAdd }) => {
  const [contador, setContador] = useState(init);
  const [confirmado, setConfirmado] = useState(false);

  const sumar = () => {
    if (contador >= stock || stock === 0) {
      return;
    } else {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador <= 1) {
      return;
    } else {
      setContador(contador - 1);
    }
  };
  const confirmar = () => {
    if (stock < 1) {
      return console.log("No hay stock");
    } else {
      onAdd(contador); //Envio la cantidad de articulos a comprar al ItemDetail.js
      setConfirmado(true);
    }
  };
  if (!confirmado) {
    return (
      <div className="ItemCount">
        <div>
          <button onClick={restar} className="material-icons ItemCount__sumRes">
            remove_circle
          </button>
          <p className="ItemCount__contador">{contador}</p>
          <button onClick={sumar} className="material-icons ItemCount__sumRes">
            add_circle
          </button>
        </div>

        <button onClick={confirmar} className="ItemCount__confirmar">
          Comprar
        </button>
      </div>
    );
  } else {
    return (
      <div className="ItemCount">
        <button className="ItemCount__comprado">¡Agregado al carrito!</button>
        
      </div>
    );
    //Agregar boton que vaya al carrito
  }
};

export default ItemCount;
