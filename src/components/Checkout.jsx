import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    emailRepeat: "",
    dni: "",
    phone: "",
    address: "",
  });
  const [orderId, setOrderId] = useState("");
  const { cart, cartTotal, clear } = useContext(CartContext);

  const userData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    // Verifica si todos los campos obligatorios están completos
    return (
      user.name &&
      user.surname &&
      user.email &&
      user.emailRepeat &&
      user.dni &&
      user.phone &&
      user.address &&
      user.email === user.emailRepeat
    );
  };

  const finalizarCompra = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Por favor, complete todos los campos correctamente.");
      return; // No hacer nada si la validación falla
    }

    let orden = {
      buyer: user,
      shop: cart,
      total: cartTotal(),
      date: serverTimestamp(),
    };

    const ventas = collection(db, "orders");
    addDoc(ventas, orden)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {orderId !== "" ? (
        <div className="checkout-order-id">
          <h2>Orden registrada</h2>
          <p>
            El código de tu compra es: <span>{orderId}</span>
          </p>
          <Link to="/">Volver al inicio</Link>
        </div>
      ) : (
        <form className="checkout" onSubmit={finalizarCompra}>
          <h2 className="checkout__title">Identificación</h2>

          <div className="checkout__group">
            <label className="checkout__label">Email*</label>
            <input
              type="email"
              name="email"
              className="checkout__input"
              onChange={userData}
            />
          </div>

          <div className="checkout__group">
            <label className="checkout__label">Repita su correo*</label>
            <input
              type="email"
              name="emailRepeat"
              className="checkout__input"
              onChange={userData}
            />
          </div>

          <div className="checkout__row">
            <div className="checkout__group">
              <label className="checkout__label">Nombre*</label>
              <input
                type="text"
                name="name"
                className="checkout__input"
                onChange={userData}
              />
            </div>

            <div className="checkout__group">
              <label className="checkout__label">Apellido*</label>
              <input
                type="text"
                name="surname"
                className="checkout__input"
                onChange={userData}
              />
            </div>
          </div>

          <div className="checkout__row">
            <div className="checkout__group">
              <label className="checkout__label">
                DNI* (Sin puntos ni espacios)
              </label>
              <input
                type="text"
                name="dni"
                className="checkout__input"
                onChange={userData}
              />
            </div>

            <div className="checkout__group">
              <label className="checkout__label">Teléfono*</label>
              <input
                type="text"
                name="phone"
                className="checkout__input"
                onChange={userData}
              />
            </div>
          </div>

          <div className="checkout__group">
            <label className="checkout__label">Dirección*</label>
            <input
              type="text"
              name="address"
              className="checkout__input"
              onChange={userData}
            />
          </div>

          <button
            type="submit"
            className="checkout__button"
            disabled={!validateForm()} // Deshabilita el botón si la validación falla
          >
            Continuar
          </button>
        </form>
      )}
    </>
  );
};

export default Checkout;
