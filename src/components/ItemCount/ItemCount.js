import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    onAdd(contador); //Envio la cantidad de articulos a comprar al ItemDetail.js
    setConfirmado(true);
  };

  return (
    <>
      <div className="ItemCount">
        {!confirmado ? (
          <>
            <div>
              <button
                onClick={restar}
                className="material-icons ItemCount__sumRes"
              >
                remove_circle
              </button>
              <p className="ItemCount__contador">{contador}</p>
              <button
                onClick={sumar}
                className="material-icons ItemCount__sumRes"
              >
                add_circle
              </button>
            </div>

            <button onClick={confirmar} className="ItemCount__confirmar">
              Comprar
            </button>
          </>
        ) : (
          <>
            <button className="ItemCount__comprado">¡Artículo agregado!</button>
            <Link to="/carrito">
              <button className="btnIrCarrito">
                Ir al carrito
                <span className="material-icons">shopping_cart</span>
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default ItemCount;
