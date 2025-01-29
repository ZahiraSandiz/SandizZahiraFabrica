import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ productDetail }) => {
  const onAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} a tu carrito`);
  };

  return (
    <div className="item-detail">
      <h1>Detalle de: {productDetail.name}</h1>
      <img src={productDetail.img} alt={productDetail.description} />
      <p>{productDetail.description}</p>
      <p>Stock disponible: {productDetail.stock}</p>
      <p>Precio: ${productDetail.price},00 </p>
      <ItemCount stock={productDetail.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
