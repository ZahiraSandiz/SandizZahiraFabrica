import React from "react";
import Item from "./Item";

const ItemList = ({ productsList }) => {
  return (
    <div className="item-list">
      {productsList.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
