import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link className="card" to={`/item/${product.id}`}>
      <img src={product.img} alt={product.name} className="card__image" />
      <div className="card__body">
        <h2 className="card__title">{product.name}</h2>
        <p className="card__price">$ {product.price},00</p>
      </div>
    </Link>
  );
};

export default Item;
