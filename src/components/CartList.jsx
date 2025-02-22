import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

const CartList = () => {
  const { cart, clear, cartTotal } = useContext(CartContext);

  return (
    <div className="cart-list">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="cart-list__cart">
            <div className="cart-list__promo-banner">
              <p>
                EXCLUSIVO <strong>Banco Ital</strong>
              </p>
              <h2>12 CUOTAS SIN INTERÉS</h2>
              <p>EN COMPRAS SUPERIORES A $190.000</p>
            </div>

            <table className="cart-list__table">
              <thead className="cart-list__table-head">
                <tr>
                  <th className="cart-list__table-header">Producto</th>
                  <th className="cart-list__table-header">Envío</th>
                  <th className="cart-list__table-header">Precio</th>
                  <th className="cart-list__table-header">Cantidad</th>
                  <th className="cart-list__table-header">Subtotal</th>
                </tr>
              </thead>
              <tbody className="cart-list__table-body">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </tbody>
            </table>
            <button className="cart-list__button-delete" onClick={clear}>
              Vaciar carrito
            </button>
          </div>

          <div className="cart-list__summary">
            <h3 className="cart-list__summary-title">Resumen de compra</h3>
            <div className="cart-list__total">
              <p className="cart-list__total-price">
                TOTAL <span>${cartTotal()}</span>
              </p>
            </div>
            <button className="cart-list__checkout">Iniciar compra</button>
            <Link to="/" className="cart-list__continue">
              Seguir comprando
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;
