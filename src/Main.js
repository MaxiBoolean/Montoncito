import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Montoncito!" />}>home</Route>
        {/* <Route path="/catalogo" element={}>Catalogo</Route> Seria un boton para desplegar un filto con nombres de categorias a futuro, capaz no es un route*/}
        {/* <Route path="/ofertas" element={}>Ofertas</Route> */}
        <Route path="/carrito" element={<Carrito/>}>Carrito</Route>
        <Route path="/catalogo/:nombreCategoria" element={<ItemListContainer/>}>Link a la categoria del producto</Route> Los item del desplegable Catalogo
        <Route path="/producto/:id" element={<ItemDetailContainer/>}>Detalle producto</Route>
      </Routes>
      
    </main>
  );
}

export default Main;
