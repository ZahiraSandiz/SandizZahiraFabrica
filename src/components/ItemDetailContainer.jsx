import { useEffect, useState } from "react";
import { getProducts } from "../mock/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});

  const [loader, setLoader] = useState(false);

  //usar la funcion de productos (data)
  useEffect(() => {
    setLoader(true);
    getProducts()
      // tratamos la promesa y BUSCAMOS UN PRODUCTO HARDCODEADO
      .then((res) => setProductDetail(res.find((item) => item.id === "01")))
      .catch((error) => console.log(error))
      .finally(() => setLoader(false));
  }, []);

  return (
    <div>
      {/* Render concicional */}
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
