import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ productDetail }) => {
  const onAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} a tu carrito`);
  };

  return (
    <div className="item-detail">
      <img
        className="item-detail__image"
        src={productDetail.img}
        alt={productDetail.description}
      />

      <div className="item-detail__content">
        <h2 className="item-detail__title">{productDetail.name}</h2>

        <div className="item-detail__info">
          <p className="item-detail__description">
            {productDetail.description}
          </p>
          <p className="item-detail__stock">
            Stock disponible: {productDetail.stock}
          </p>

          <p className="item-detail__price">
            Precio al contado: ${productDetail.price},00
          </p>
          <p> 3 cuotas sin interes de: ${productDetail.installments}</p>
        </div>
        <ItemCount stock={productDetail.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
