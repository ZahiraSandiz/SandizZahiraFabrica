import { useEffect, useState } from "react";
import { getProducts } from "../mock/data";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const [invalidItem, setInvalidItem] = useState(false);

  //FIREBASE
  useEffect(() => {
    setLoader(true);

    //conectamos con la coleccion
    const productCollection = collection(db, "products");

    //creamos una referencia y le damo el id del useParams
    const docRef = doc(productCollection, id);

    //traigo el documento con el metodo get. Esto me devuelve una promesa.
    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProductDetail({ id: res.id, ...res.data() });
        } else {
          setInvalidItem(true);
        }
      })
      .catch((error) => console.error("Error al obtener el producto:", error))
      .finally(() => setLoader(false));
  }, []);

  // useEffect(() => {
  //   setLoader(true);
  //   getProducts()
  //     // tratamos la promesa y BUSCAMOS UN PRODUCTO HARDCODEADO
  //     .then((res) => setProductDetail(res.find((item) => item.id === id)))
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoader(false));
  // }, []);

  if (invalidItem) {
    return (
      <div className="invalid-item">
        <h2>No hay resultados para tu búsqueda...</h2>
        <Link className="invalid-item__link" to="/">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div>
      {loader ? (
        <div className="loader-overlay">
          <span className="loader"></span>
        </div>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
