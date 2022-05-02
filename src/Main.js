import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function Main() {
  return (
    <main>
      {/* <ItemListContainer greeting="¡Bienvenido a Montoncito!" /> */}
      <ItemDetailContainer/>
    </main>
  );
}

export default Main;
