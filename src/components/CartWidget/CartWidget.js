import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../CartContext/CartContext";

const CartWidget = () => {
  const {carrito,cantidadTotal} = useContext(contexto);
  
  let contador = cantidadTotal(carrito)
  return (
    <Link to="/carrito">
      <div className="contenedorWidget">
      <span className="material-icons">shopping_cart</span>
      {contador !== 0 && <p className="contadorCarrito">{contador}</p>}
      </div>
    </Link>
  )
};

export default CartWidget;
