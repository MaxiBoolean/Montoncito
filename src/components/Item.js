import React from "react";

const Item = ({ producto }) => {
  return (
    <article>
      <div>
        <h3>{producto.nombre}</h3>
      </div>
      <img src={producto.imagen} alt="card"></img>
      <div>
        <p>Precio: ${producto.precio}</p>
        <button>Detalles</button>
      </div>
    </article>
  );
};

export default Item;
