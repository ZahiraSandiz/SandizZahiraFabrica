import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="contenedor-nav">
      <NavLink to="/">
        <img
          className="contenedor-nav__img"
          src="../../public/img/logo/fabrica1.png"
          alt="Logo"
        />
      </NavLink>

      <ul className="contenedor-nav__menu">
        <li className="contenedor-nav__item-menu">
          <NavLink to="/category/sale">Sale</NavLink>
        </li>
        <li className="contenedor-nav__item-menu">
          <NavLink to="/category/new">New</NavLink>
        </li>
        <li className="contenedor-nav__item-menu">
          <NavLink to="/category/tendencias">Tendencias</NavLink>
        </li>
        <li className="contenedor-nav__item-menu">
          <NavLink to="/">Todos los Productos</NavLink>
        </li>

        <li className="contenedor-nav__item-menu">
          <NavLink to="/cuidadotextil">Cuidado textil</NavLink>
        </li>
      </ul>

      <div className="contenedor-nav__search-and-cart">
        <NavLink to="/cart">
          <CartWidget />
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
