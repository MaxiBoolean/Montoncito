import React, { useState } from 'react'
import { useContext } from "react";
import { contexto } from "../CartContext/CartContext";
import { db } from "../Firebase/Firebase";
import { collection , addDoc } from "firebase/firestore";

const Carrito = () => {

  const {carrito, vaciarCarrito, cantidadTotal,removeItem,precioTotal} = useContext(contexto)
  const [idCompra, setIdCompra] = useState("")

 

  const guardarCompra = () =>{
    const ordenesCollection = collection(db,"ordenes")
    const orden = {
      buyer : {
        name : "juan",
        phone : "54555",
        email : "test@test"
      },
      //items : [{id:1,titulo:"Pantalon"}],
      items : carrito,
      date : "",
      total : 10000
    }
    const consulta = addDoc(ordenesCollection,orden)
    consulta
    .then((resultado)=>{
      setIdCompra(resultado.id)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <>{cantidadTotal(carrito) === 0 ? <p>No hay nada en el carrito! Volve a comprar</p> :
    <div className='containerCarrito'>       
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
        {carrito.map((e)=>{
          console.log(e.item.id)
          return (
            <>
              <tr>
                {<td><img src={e.item.imagen} alt="imagen"></img></td>}
                <td>{e.item.nombre}</td>
                <td>$ {e.item.precio}</td>
                <td>{e.cantidad}</td>
                <td><button className='btnRed' onClick={removeItem}>Eliminar</button></td>                
              </tr>  
              
              </>
          )
        })}
        </tbody>
      </table>
      <p></p>
      <h3> Precio total: ${precioTotal()}</h3>
      <div>
      <button className='btnRed' onClick={vaciarCarrito}>Vaciar Carrito</button>
      <button onClick={guardarCompra}> Finalizar compra</button>
      </div>
    </div>}
    </>
  )
}

export default Carrito

{/* <div>
  <p>Nombre: {e.item.nombre}</p>
  <p>{e.item.descripcion}</p>
  <img src={e.item.imagen} alt="imagen"></img>
  <p>{e.item.precio}</p>
</div> */}