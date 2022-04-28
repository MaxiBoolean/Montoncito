import {useEffect, useState} from "react"
import ItemCount from './ItemCount' 
import ItemList from './ItemList'

const ItemListContainer = () => {

  const onAdd = () =>{
    //función onAdd
  }

  const productosIniciales = [{
    id : 1,
    nombre : "Taza Valorant",
    precio : 140,
    imagen :  "https://m.media-amazon.com/images/I/31KKr4nEfLL._AC_.jpg"
  },
  {
    id : 2,
    nombre : "Llavero Draven - League of Legends",
    precio : 90,
    imagen :  "https://http2.mlstatic.com/D_NQ_NP_664051-MLA43149298209_082020-O.jpg"
  },
  {
    id : 3,
    nombre : "Alfombra gatos",
    precio : 560,
    imagen :  "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/3/335484_alfplacacats.jpg"
  }]

  const [cargando,setCargando] = useState(true)
  const [productos,setProductos] = useState([])

  //Se genera un Timeout de 2seg. para simular carga.
  useEffect(() =>{
    const pedido = new Promise((res) =>{
      setTimeout(()=>{
        res(productosIniciales)
      },2000)
    })
    //Se verifica con then la finalización de la carga y cambia el estado de "setCargando" a false
    pedido
    .then(()=>{
      console.log("Termino el pedido bien!")
      setCargando(false);
      setProductos(productosIniciales);
    })
  })

  

  if(cargando){
    return(
      <p>Cargando...</p>
    )
  }else{
    return(
      
      <ItemList productos={productos}/>
      
      
    )
  }

  /* return (
    <>
      <h2>{props.greeting}</h2>
      <ItemCount stock={10} init={1} onAdd={onAdd}/>
      <ItemList/>
    </>
    
  ) */
}

export default ItemListContainer;

