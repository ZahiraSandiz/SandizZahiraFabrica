import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {stock === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        <div className="item-count-container">
          <div className="item-count-controls">
            <button
              className={`button-decrement ${count === 1 ? "is-disabled" : ""}`}
              onClick={decrement}
              disabled={count === 1}
            >
              -
            </button>
            <span className="item-count">{count}</span>
            <button
              className={`button-increase ${
                count === stock ? "is-disabled" : ""
              }`}
              onClick={increase}
              disabled={stock === 0 || count === stock}
            >
              +
            </button>
          </div>
          <button className={"add-to-cart-button"} onClick={() => onAdd(count)}>
            Agregar al carrito
          </button>
        </div>
      )}
    </>
  );
};

export default ItemCount;
