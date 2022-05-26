import React, { useState } from 'react'
import { useContext } from "react";
import { contexto } from "../CartContext/CartContext";
import { db } from "../Firebase/Firebase";
import { collection , addDoc } from "firebase/firestore";

const Carrito = () => {

  const {precio_total, carrito, vaciarCarrito} = useContext(contexto)
  const [change, setChange] = useState(false)
  const [nombre, setNombre] = useState("")
  const [lista, setLista] = useState([carrito])
  const [idCompra, setIdCompra] = useState("")


  const handleClick = ()=>{
    setChange(!change)
  }

  const handleChange = (e)=>{
    setNombre(e.target.value)
  }

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
    <div>
      <h2>Carrito</h2>
      <p>{carrito.lista}</p>
      <h3> Precio total: ${precio_total}</h3>
      <button onClick={handleClick}>Click</button>
      <input type="text" onChange={handleChange}/>
      <button onClick={guardarCompra}> Finalizar compra</button>
    </div>
  )
}

export default Carrito