import React from "react";
import { Link, useNavigate } from "react-router-dom";



const Item = ({ producto }) => {

  const navigate = useNavigate()

  const handleClick = ()=>{
  navigate(`/producto/${producto.id}`)
  }

  return (
    <article>
      <div>
        <h3>{producto.nombre}</h3>
      </div>
      <img src={producto.imagen} alt="card"></img>
      <div>
        <p>Precio: <span>${producto.precio}</span></p>
        <button onClick={handleClick}>Ver más</button>
      </div>
    </article>
  );
};

export default Item;
