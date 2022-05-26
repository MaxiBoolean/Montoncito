import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection , getDoc , doc , getDocs , addDoc , query , where, orderBy } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

/* const productosIniciales = [
  {
    id: 1,
    nombre: "Taza Valorant",
    categoria: "tazas",
    precio: 140,
    imagen: "https://m.media-amazon.com/images/I/31KKr4nEfLL._AC_.jpg",
  },
  {
    id: 2,
    nombre: "Llavero Draven - League of Legends",
    categoria: "llaveros",
    precio: 90,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_664051-MLA43149298209_082020-O.jpg",
  },
  {
    id: 3,
    nombre: "Alfombra gatos",
    categoria: "alfombras",
    precio: 560,
    imagen:
      "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/3/335484_alfplacacats.jpg",
  },
]; */

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setCargando(true)
    const productosCollection = collection(db, "productosIniciales"); //Aca se trae la bd de Firebase
    const resultadoDelDoc = doc(productosCollection, id);
    const consulta = getDoc(resultadoDelDoc);
    consulta
      .then((resultado) => {
        setProducto(resultado.data());
        setCargando(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [id]);

  return (
    <>
      {cargando ? (<p>Cargando...</p>) : (<ItemDetail key={producto.id} productos={producto} />)}
    </>
  );
};


  export default ItemDetailContainer;
