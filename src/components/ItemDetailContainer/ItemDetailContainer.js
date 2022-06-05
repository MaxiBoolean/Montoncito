import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    const productosCollection = collection(db, "productosIniciales"); //Aca se trae la bd de Firebase
    const resultadoDelDoc = doc(productosCollection, id);
    const consulta = getDoc(resultadoDelDoc);
    consulta
      .then((resultado) => {
        setProducto({ id: resultado.id, ...resultado.data() });
        setCargando(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [id]);

  return (
    <>
      {cargando ? (
        <div className="loader">
          <img
            src="https://i.picasion.com/pic92/545c8a4ce2f567293894e75808308b09.gif"
            width="100"
            height="100"
            border="0"
            alt="gift"
          />
        </div>
      ) : (
        <ItemDetail key={producto.id} productos={producto} />
      )}
    </>
  );
};

export default ItemDetailContainer;
