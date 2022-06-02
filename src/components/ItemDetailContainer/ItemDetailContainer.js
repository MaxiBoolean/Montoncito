import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection , getDoc , doc , getDocs , addDoc , query , where, orderBy } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

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
        setProducto({id: resultado.id, ...resultado.data()});
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
