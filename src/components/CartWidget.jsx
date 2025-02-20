import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart-widget">
      <button className="cartWidget__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="36"
          height="36"
          aria-label="Icono de carrito"
        >
          <circle cx="9" cy="20" r="1" />
          <circle cx="16" cy="20" r="1" />
          <path d="M5 5h2l1 10h10l1-6H7" />
        </svg>
      </button>
      <span>{cart.length}</span>
    </div>
  );
};

export default CartWidget;
