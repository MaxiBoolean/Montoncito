import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../CartContext/CartContext";

const CartWidget = () => {
  const {cantidad_total} = useContext(contexto);
  

  return (
    <Link to="/carrito">
      <span className="material-icons">
        shopping_cart
      </span>
        {cantidad_total}
    </Link>
  )
};

export default CartWidget;
