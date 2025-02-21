import React, { useState, useEffect } from "react";

const Banner = () => {
  const messages = [
    "Solo por hoy envío gratis en todos los productos ⚡",
    "LANZAMIENTO FW25! Descubrí lo nuevo ❄️",
    "SALE hasta agotar stock 🛍️",
  ];
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) =>
        prevMessage === messages.length - 1 ? 0 : prevMessage + 1
      );
    }, 4000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <div className="banner">
      <p className="banner__text">{messages[currentMessage]}</p>
    </div>
  );
};

export default Banner;
