import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {db} from "../Firebase/Firebase"
import { collection , getDoc , doc , getDocs , addDoc , query , where, orderBy } from "firebase/firestore";

const ItemListContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);

  const { nombreCategoria } = useParams();

  //Se genera un Timeout de medio seg. para simular carga.
  useEffect(() => {
    const productosCollection = collection(db, "productosIniciales"); //Aca se trae la bd de Firebase

    let consulta = null;

    if (nombreCategoria !== undefined) {
      console.log(`Se filtrará por: ${nombreCategoria}`);
      const filtro = query(productosCollection,where("categoria", "==", nombreCategoria));
      consulta = getDocs(filtro);
    } else {
      console.log(`Se visualiza todo el catalogo`);
      consulta = getDocs(productosCollection);
    }

    consulta
      .then((resultado) => {
        const productos = resultado.docs.map((doc) => {
          let productoConId = doc.data();
          productoConId.id = doc.id;
          return productoConId;
        });

        setProductos(productos);
        setCargando(false);
      })
      .catch(() => {})
      .finally(() => {});
  }, [nombreCategoria]);

  return (
    <>{cargando ? <p>Cargando...</p> : <ItemList productos={productos} />}</>
  );
};

export default ItemListContainer;
