import React from 'react'
import { useContext } from "react";
import { contexto } from "./MiContexto";

const Carrito = () => {

  const {precio_total, carrito} = useContext(contexto)

  return (
    <div>
      <h2>Carrito</h2>
      <h3> Precio total: ${precio_total}</h3>
    </div>
  )
}

export default Carrito