import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <section className="cardContainer">
        {productos.map(producto=>{
        return(
          <Item key={producto.id} producto={producto}/>
        )})}
    </section>
  )
}

export default ItemList