import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {db} from "../Firebase/Firebase"
import { collection , getDocs  , query , where } from "firebase/firestore";

const ItemListContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);

  const { nombreCategoria } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productosIniciales"); //Aca se trae la bd de Firebase

    let consulta = null;

    if (nombreCategoria !== undefined) {
      setCargando(true);
      console.log(`Se filtrará por: ${nombreCategoria}`);
      const filtro = query(productosCollection,where("categoria", "==", nombreCategoria));
      consulta = getDocs(filtro);
    } else {
      setCargando(true);
      console.log(`Se visualiza todo el catalogo`);
      consulta = getDocs(productosCollection);
    }

    consulta
      .then((resultado) => {
        const productos = resultado.docs.map((doc) => {
          let productoConId = doc.data();
          productoConId.id = doc.id;
          setCargando(false);
          return productoConId;
        });
        setProductos(productos);        
      })
      .catch(() => {})
      .finally(() => {});
  }, [nombreCategoria]);

  return (
    <>{cargando ? <div className="loader"><img src="https://i.picasion.com/pic92/545c8a4ce2f567293894e75808308b09.gif" width="100" height="100" border="0" alt="gift" /></div> : <ItemList productos={productos} />}</>
  );
};

export default ItemListContainer;
