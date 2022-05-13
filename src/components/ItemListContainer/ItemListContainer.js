import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {db} from "../Firebase/Firebase"
import { collection, getDoc, doc, getDocs, addDoc, query } from "firebase/firestore";

const ItemListContainer = () => {
  /*   const productosIniciales = [
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

  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);

  const { nombreCategoria } = useParams();

  //Se genera un Timeout de medio seg. para simular carga.
  useEffect(() => {
    const productosCollection = collection(db, "productosIniciales"); //Aca se trae la bd de Firebase
    const consulta = getDocs(productosCollection);
    consulta
      .then((resultado) => {
        const productos = resultado.docs.map((doc) => {
          const productoConId = doc.data();
          productoConId.id = doc.id;
          return productoConId;
        });
        setProductos(productos);
        setCargando(false);
      })
      .catch(() => {})
      .finally(() => {});

    /*  const pedido = new Promise((res) => {
      setTimeout(()=>{
        if (nombreCategoria != undefined){  
          console.log(`Se filtrará por: ${nombreCategoria}`)
          let producFiltrados = productosIniciales.filter((item) => item.categoria == nombreCategoria
          );
          res(producFiltrados);
        }else{
          console.log(`Se visualiza todo el catalogo`)
          res(productosIniciales);
        }
      },500);
    });

    //Se verifica con then la finalización de la carga y cambia el estado de "setCargando" a false
    pedido.then((items) => {
      setCargando(false);
      setProductos(items);
    }); */
  }, [nombreCategoria]);

  if (cargando) {
    return <p>Cargando...</p>;
  } else {
    return <ItemList productos={productos} />;
  }
};

export default ItemListContainer;
