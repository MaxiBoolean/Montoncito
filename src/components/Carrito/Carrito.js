import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../CartContext/CartContext";
import { db } from "../Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";



const Carrito = () => {
  const { carrito, vaciarCarrito, cantidadTotal, removeItem, precioTotal } = useContext(contexto);
  
  const navigate = useNavigate();

  //MODAL CON ID DE ORDEN
  const modalOrden = (id) =>{
    Swal.fire("¡Pedido procesado!",`Su código de orden es: <b style="color:#4ebea8;">${id}</b></br>Gracias por su compra`, "success")
  };

  //GUARDA INFO DE LA COMPRA Y ENVIA A FIREBASE
  const guardarCompra = (e) => {
    e.preventDefault();

    const ordenesCollection = collection(db, "ordenes");

    const date = new Date().toLocaleString() + "";

    const orden = {
      buyer: {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value,
      },
      items: carrito,
      date: date,
      total: precioTotal(),
    };

    //CARGO LA ORDEN A LA BD
    const consulta = addDoc(ordenesCollection, orden);

    consulta
      .then((resultado) => {
        //NO FUNCIONA ESTA MIERDA
        console.log(resultado.id);
        modalOrden(resultado.id);
        vaciarCarrito()
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteItem = (item) => () => {
    removeItem(item);
  };

  return (
    <>
      {cantidadTotal(carrito) === 0 ? (
        <div className="containerVacio">
          <p>¡No hay nada en el carrito!</p>
          <Link to="/">
            <button>Ir al Inicio</button>
          </Link>
        </div>
      ) : (
        <div className="containerCarrito">
          <h2>Carrito</h2>
          <table>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Artículo</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((e) => {
                return (
                  <>
                    <tr>
                      <td><img src={e.item.imagen} alt="imagen"></img></td>
                      <td>{e.item.nombre}</td>
                      <td>$ {e.item.precio}</td>
                      <td>{e.cantidad}</td>
                      <td>
                        <button
                          className="btnRed"
                          onClick={deleteItem(e.item.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <div className="containerPrecio">
            <h3> Precio total: $ {precioTotal()}</h3>
            <button className="btnRed" onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>
          </div>

          <div className="containerForm">
            <form onSubmit={guardarCompra}>
              <h4>Datos para el envío</h4>
              <label>Nombre completo:
                <input
                  type="text"
                  placeholder="Ej: Juanito Trop"                
                ></input>
              </label>
              <label>Teléfono:
                <input
                  type="tel"
                  placeholder="Ej: 1134563444"                 
                ></input>
              </label>
              
              <label>Email:
                <input
                  type="email"
                  placeholder="Ej: JuanT@gmail.com"                  
                ></input>
              </label>
              <button type="submit"> Finalizar compra</button>
            </form>
          </div>
        </div>
      )}     
    </>
  );
};

export default Carrito;
