import React from "react";
import {Link, NavLink} from "react-router-dom"

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/catalogo/tazas" className="nav__link">Tazas</Link>
      <Link to="/catalogo/llaveros" className="nav__link">Llaveros</Link>
      <Link to="/catalogo/alfombras" className="nav__link">Alfombras</Link>
      <input type="search" name="" />
      <button>Buscar</button>
    </nav>
  );
}

export default NavBar;
