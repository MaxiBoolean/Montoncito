import React from "react";

const ItemDetail = (props) => {
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
          <button>Comprar</button>
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
