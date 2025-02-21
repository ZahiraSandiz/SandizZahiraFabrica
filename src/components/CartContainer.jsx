import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  return <div>{cart.length ? <CartList /> : <EmptyCart />}</div>;
};

export default CartContainer;
