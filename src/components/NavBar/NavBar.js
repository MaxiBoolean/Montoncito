import React from "react";
import {Link, NavLink} from "react-router-dom"

function NavBar() {
  return (
    <nav className="nav">
      <NavLink exact to="/" activeClassName="active" className="nav__link">Todos</NavLink>
      <NavLink exact to="/catalogo/tazas" activeClassName="active" className="nav__link">Tazas</NavLink>
      <NavLink exact to="/catalogo/llaveros" activeClassName="active" className="nav__link">Llaveros</NavLink>
      <NavLink exact to="/catalogo/alfombras" activeClassName="active" className="nav__link">Alfombras</NavLink>
    </nav>
  );
}

export default NavBar;
