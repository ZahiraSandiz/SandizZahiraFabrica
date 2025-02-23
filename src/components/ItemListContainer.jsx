import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/data";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const [loader, setLoader] = useState(false);

  const { categoryId } = useParams();

  //FIREBASE -> 1:19:34 video

  //PROMISE LOCAL
  // useEffect(() => {
  //   setLoader(true);
  //   getProducts()
  //     .then((res) => {
  //       if (categoryId) {
  //         setProductsList(res.filter((item) => item.category === categoryId));
  //       } else {
  //         setProductsList(res);
  //       }
  //     })
  //     // si algo sale mal trabajo con el error
  //     .catch((error) => console.log(error))
  //     //se resuelva o no apagamos el loader
  //     .finally(() => setLoader(false));
  // }, [categoryId]);

  return (
    <>
      <div className="item-list-container">
        <h1 className="item-list-container__title">
          {greeting}
          {categoryId && <span>{categoryId}</span>}
        </h1>
      </div>

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
