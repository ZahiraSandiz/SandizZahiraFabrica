import CartWidget from "./CartWidget";
import fabricaLogo from "../assets/logo/fabrica1.png";

const NavBar = () => {
  return (
    <nav className="contenedor-nav">
      <a href="">
        <img className="contenedor-nav__img" src={fabricaLogo} alt="Logo" />
      </a>

      <ul className="contenedor-nav__menu">
        <li className="contenedor-nav__item-menu">
          <a href="">Sale</a>
        </li>
        <li className="contenedor-nav__item-menu">
          <a href="">Nuevos</a>
        </li>
        <li className="contenedor-nav__item-menu">
          <a href="">Todos los productos</a>
        </li>
        <li className="contenedor-nav__item-menu">
          <a href="">Nosotros</a>
        </li>
      </ul>

      <div className="contenedor-nav__search-and-cart">
        <form className="contenedor-nav__search">
          <input
            className="contenedor-nav__search-input"
            type="search"
            placeholder="Buscar"
            aria-label="Buscador"
          />
          <button type="submit" value="Buscar" aria-label="Buscar">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="24"
                height="24"
                aria-label="Icono de búsqueda"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </button>
        </form>

        <CartWidget />
      </div>
    </nav>
  );
};
export default NavBar;
