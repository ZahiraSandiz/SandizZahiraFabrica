import { useEffect, useState } from "react";
import { getProducts } from "../mock/data";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // Prendo el loader
    setLoader(true); //cuando se termina de ejecutar la promesa con el .then o el .catch, voy a apagarlo con el finally

    //llamo a la promesa
    getProducts()
      // trato y la guardo en un estado
      .then((res) => setProductsList(res))
      // si algo sale mal trabajo con el error
      .catch((error) => console.log(error))
      //se resuelva o no apagamos el loader
      .finally(() => setLoader(false));
  }, []);

  return (
    <>
      <div className="item-list-container">
        <img
          className="item-list-container__banner"
          src="../../public/img/fondos/fondo1.jpg"
          alt="fondo con modelo"
        />

        <h1 className="item-list-container__title">{greeting}</h1>
      </div>

      {/* Aca hago un render concicional. Si louder está en true muestro un loader, sino, muestro las cards */}

      {loader ? (
        <div className="loader-overlay">
          <span className="loader"></span>
        </div>
      ) : (
        <ItemList productsList={productsList} />
      )}
    </>
  );
};

export default ItemListContainer;
