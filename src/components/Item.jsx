import React from "react";

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} className="card__image" />
      <div className="card__body">
        <h2 className="card__title">{product.name}</h2>
        <p className="card__price">$ {product.price},00</p>
        <p className="card__installments">{product.installments}</p>
      </div>
    </div>
  );
};

export default Item;
