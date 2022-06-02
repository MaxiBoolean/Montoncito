import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { useContext } from "react";
import { contexto } from "../CartContext/CartContext";
import { db } from "../Firebase/Firebase";
import { collection , addDoc } from "firebase/firestore";

const Carrito = () => {

  const {carrito, vaciarCarrito, cantidadTotal,removeItem,precioTotal} = useContext(contexto)
  const [idCompra, setIdCompra] = useState("")

 

  const guardarCompra = (e) =>{
    e.preventDefault()

    const ordenesCollection = collection(db,"ordenes")

    const date = new Date().toLocaleString() + "";

    const orden = {
      buyer : {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: "asd"
      },
      //items : [{id:1,titulo:"Pantalon"}],
      items : carrito,
      date : date,
      total : precioTotal()
    }
    
    //CARGO LA ORDEN A LA BD
    const consulta = addDoc(ordenesCollection,orden);

    consulta
    .then((resultado)=>{
      setIdCompra(resultado.id)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const deleteItem = (item) => () => {
    removeItem(item)
  }

  return (
    <>{cantidadTotal(carrito) === 0 ? 
    <div className='containerVacio'>
      <p>¡No hay nada en el carrito!</p> 
      <Link to="/">
        <button>Ir al Inicio</button>
      </Link>
    </div>
    :
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
          return (
            <>
              <tr>
                {<td><img src={e.item.imagen} alt="imagen"></img></td>}
                <td>{e.item.nombre}</td>
                <td>$ {e.item.precio}</td>
                <td>{e.cantidad}</td>
                <td><button className='btnRed' onClick={deleteItem(e.item.ID)}>Eliminar</button></td>                
              </tr> 
            </>
          )
        })}
        </tbody>
      </table>
      <div className='containerPrecio'>
        <h3> Precio total: $ {precioTotal()}</h3>
        <button className='btnRed' onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>

      <div className='containerForm'>
        <form onSubmit={guardarCompra}>
          <h4>Información de Envío</h4>
          <label for="name" >Nombre completo:</label>
          <input type="text" placeholder="Ej: Juanito Trop" id="name" name="name"></input>
          <label for="telefono">Teléfono:</label>
          <input type="tel" placeholder="Ej: 1134563444" id="telefono" name="telefono"></input>
          <label for="email">Email:</label>
          <input type="email" placeholder="Ej: JuanT@gmail.com" id="email" name="email"></input>
          <button type='submit'> Finalizar compra</button>
        </form>
      </div>  
    </div>}
    </>
  )
}

export default Carrito