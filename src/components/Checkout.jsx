import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState({
    email: "",
    emailRepeat: "",
    name: "",
    surname: "",
    dni: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [orderId, setOrderId] = useState("");
  const { cart, cartTotal, clear } = useContext(CartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    // Validacion de que todos los campos esten completos
    if (value.trim() === "") {
      newErrors[name] = "Este campo es obligatorio";
    } else {
      delete newErrors[name];
    }

    // emails
    if (name === "emailRepeat" && value !== user.email) {
      newErrors.emailRepeat = "Los correos electrónicos no coinciden";
    }

    // numeross para dni y tel
    if ((name === "dni" || name === "phone") && !/^\d+$/.test(value)) {
      newErrors[name] = "Debe ingresar solo números";
    }

    // letras para nombre y apellido
    if (
      (name === "name" || name === "surname") &&
      !/^[a-zA-ZÀ-ÿ\s]+$/.test(value)
    ) {
      newErrors[name] = "Solo se permiten letras y espacios";
    }

    setErrors(newErrors);
  };

  useEffect(() => {
    // si todo esta correcto habilitar el boton
    const isFormValid =
      Object.keys(user).every((field) => user[field].trim() !== "") &&
      user.email === user.emailRepeat &&
      !Object.values(errors).length;

    setIsFormValid(isFormValid);
  }, [user, errors]);

  const [isFormValid, setIsFormValid] = useState(false);

  const finalizarCompra = (e) => {
    e.preventDefault();

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
            El código de tu compra es: <span>{orderId}</span>{" "}
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
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="checkout__group">
            <label className="checkout__label">Repita su correo*</label>
            <input
              type="email"
              name="emailRepeat"
              className="checkout__input"
              onChange={handleChange}
            />
            {errors.emailRepeat && (
              <span className="error">{errors.emailRepeat}</span>
            )}
          </div>

          <div className="checkout__row">
            <div className="checkout__group">
              <label className="checkout__label">Nombre*</label>
              <input
                type="text"
                name="name"
                className="checkout__input"
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="checkout__group">
              <label className="checkout__label">Apellido*</label>
              <input
                type="text"
                name="surname"
                className="checkout__input"
                onChange={handleChange}
              />
              {errors.surname && (
                <span className="error">{errors.surname}</span>
              )}
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
                onChange={handleChange}
              />
              {errors.dni && <span className="error">{errors.dni}</span>}
            </div>

            <div className="checkout__group">
              <label className="checkout__label">Teléfono*</label>
              <input
                type="text"
                name="phone"
                className="checkout__input"
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          <div className="checkout__group">
            <label className="checkout__label">Dirección*</label>
            <input
              type="text"
              name="address"
              className="checkout__input"
              onChange={handleChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>

          <button
            type="submit"
            className="checkout__button"
            disabled={!isFormValid}
          >
            Enviar
          </button>
        </form>
      )}
    </>
  );
};

export default Checkout;
