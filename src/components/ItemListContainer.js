import React from 'react'
import ItemCount from './ItemCount' 

const ItemListContainer = (props) => {

  const onAdd = () =>{
    //función onAdd
  }

  return (
    <>
      <h2>{props.greeting}</h2>
      <ItemCount stock={0} init={1} onAdd={onAdd}/>
    </>
    
  )
}

export default ItemListContainer;

