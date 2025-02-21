import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h2>Tu carrito está vacío</h2>
      <p>
        Añade productos a tu carrito explorando nuestras categorías y continúa
        con tu compra.
      </p>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="300"
          height="300"
          aria-label="Icono de carrito"
        >
          <circle cx="9" cy="20" r="1" />
          <circle cx="16" cy="20" r="1" />
          <path d="M5 5h2l1 10h10l1-6H7" />
        </svg>
      </span>

      <Link to="/"> Volver al inicio </Link>
    </div>
  );
};

export default EmptyCart;
