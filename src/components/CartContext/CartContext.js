import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const MiCustomProvider = ({ defaultValue = [], children }) => {
  const [carrito, setCarrito] = useState(defaultValue);
  /* const [cantidad_total, setCantidad_total] = useState(0);
  const [precio_total, setPrecio_total] = useState(0); */

  //Función para verificar si ya está el item en el carrito, si está le sumo la cantidad ingresada al existente
  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      const newCart = [...carrito];
      for (let e of newCart) {
        if (e.item.id == item.id) {
          item.cantidad = item.cantidad + cantidad;
        }
      }
      setCarrito(newCart);
    } else {
      setCarrito([
        ...carrito,
        {
          item: item,
          cantidad: cantidad,
        },
      ]);
    }
  };
  //Función que me indica si el item está en el carrito
  const isInCart = (id) => {
    return carrito.find((e) => e.id === id);
  };

  const removeItem = (id)=>{
    const newCart = [...carrito].map(e => e.id !== id);
    setCarrito(newCart)
  }

  const clearCart = () =>{
    setCarrito([])
  }

  /* const valorDelContexto = {
    cantidad_total,
    precio_total,
    carrito,
  }; */

  return <Provider value={{carrito, addItem, removeItem , clearCart}}>{children}</Provider>;
};

export default MiCustomProvider;
