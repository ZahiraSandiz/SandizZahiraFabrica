import { createContext, useState } from "react";

// creamos y exportamos el contexto
export const CartContext = createContext();

// declaramos el proveedor
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    let compra = { ...item, quantity };
    if (IsInCart(item.id)) {
      //sumar un item sin repetir
      const carritoActualizado = cart.map((prod) => {
        if (prod.id === item.id) {
          //si el producto ya está en el carrito suma cantidades
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      });
      setCart(carritoActualizado);
    } else {
      // sumar un item que no está en el carrito
      setCart([...cart, compra]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const IsInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        IsInCart,
        cartQuantity,
        cartTotal,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
