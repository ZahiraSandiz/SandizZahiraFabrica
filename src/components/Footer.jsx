import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3 className="footer__title">Fabrica</h3>
          <p className="footer__text">
            Moda auténtica y de calidad para todos.
          </p>
        </div>

        <div className="footer__section">
          <h4 className="footer__subtitle">Contacto</h4>
          <p className="footer__text">📍 Calle 123, Buenos Aires, Argentina</p>
          <p className="footer__text">📞 +54 11 2345-6789</p>
          <p className="footer__text">✉ contacto@fabrica.com</p>
        </div>

        <div className="footer__section">
          <h4 className="footer__subtitle">Síguenos</h4>
          <div className="footer__socials">
            <a href="#" className="footer__social">
              🔵 Facebook
            </a>
            <a href="#" className="footer__social">
              📸 Instagram
            </a>
            <a href="#" className="footer__social">
              🐦 Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2025 Fábrica. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
