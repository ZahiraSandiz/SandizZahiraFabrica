import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h2>Tu carrito está vacío</h2>
      <img
        src="../../public/img/img-emptycart.png"
        alt="Chica sentada mirando una computadora"
      />

      <Link to="/"> Volver al inicio </Link>
    </div>
  );
};

export default EmptyCart;
