import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <div className="header__brand">
        <h1 className="header__brand__titulo">Montoncito</h1>
      </div>
      <nav className="nav">
        <a href="#" className="nav__link">
          Catálogo
        </a>
        <a href="#" className="nav__link">
          Ofertas
        </a>
        <input type="search" name="" />
        <button>Buscar</button>
      </nav>
      <div className="header__logon-carrito">
        <a href="">Iniciar sesión</a>
        <a href="">
          <CartWidget />
        </a>
      </div>
    </>
  );
}

export default NavBar;
