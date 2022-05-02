/* Datos  utiles:
con el codigo "rafce" se autocompleta lso còdigos nuevos de componentes. */

//1) Tener la variable react en scope
import React from "react";

//2) Tener la variable reactDOM en scope
/* import ReactDOM from "react-dom" */
import ReactDOM from "react-dom/client";

import App from "./App";

import "./css/estilos.scss";

//3) Tener la variable App(la variable que contiene todo el codigo de la aplicacion) en scope
/* function App() {
  return "Hola Mundo"
} */

const root = ReactDOM.createRoot(document.getElementById("root")); //genero un GetElemtById trayendo "root"

/* const App = () =>{
  return "Hola Mundo";
} */ //Para al archivo App.js

//4) Hacer render de la App en el DOM
/* ReactDOM.render(<App/>, document.getElementById("root")) */
root.render(<App />);
