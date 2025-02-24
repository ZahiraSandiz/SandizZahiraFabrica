import { useContext } from "react";
import { createContext, useState, useEffect } from "react";

// Creamos y exportamos el contexto
// Es un objeto que sirve para compartir datos que son considerados "globales" para un árbol específico de componentes, sin necesidad de pasar props manualmente en cada nivel
export const CartContext = createContext();

const ProductosDelLocalStorage =
  JSON.parse(localStorage.getItem("carrito")) || [];

// Declaramos el proveedor, que es un componente que React utiliza para proveer datos a todos los componentes que están suscritos al contexto (CartContext).

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(ProductosDelLocalStorage);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, quantity) => {
    let compra = { ...item, quantity };
    if (IsInCart(item.id)) {
      const carritoActualizado = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      });
      setCart(carritoActualizado);
    } else {
      setCart([...cart, compra]);
    }
  };

  const IsInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clear = () => {
    setCart([]);
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

  const handleQuantityChange = (id, operation) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          let newQuantity = item.quantity;
          if (operation === "increase" && newQuantity < item.stock) {
            newQuantity++;
          } else if (operation === "decrease" && newQuantity > 1) {
            newQuantity--;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Ponemos como prop "children" porque asi le informamos al proveedor que todo elemento que envuelva <CartContext.Provider> va a poder acceder a la información.

  return (
    // Si yo no paso las funciones por el value, los componentes no vana poder acceder a ellas.
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clear,
        IsInCart,
        cartQuantity,
        cartTotal,
        updateQuantity,
        handleQuantityChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
