import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./components/Carrito/Carrito";
import Orden from "./components/Orden/Orden";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Montoncito!" />}>home</Route>
        <Route path="/carrito" element={<Carrito/>}>Carrito</Route>
        <Route path="/catalogo/:nombreCategoria" element={<ItemListContainer/>}>Link a la categoria del producto</Route> Los item del desplegable Catalogo
        <Route path="/producto/:id" element={<ItemDetailContainer/>}>Detalle producto</Route>
        <Route path="/orden" element={<Orden/>}>Detalle de Orden</Route>
      </Routes>
    </main>
  );
}

export default Main;
