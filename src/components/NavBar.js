import React from 'react';

function NavBar() {
  return (
    <>
    <div className="header__brand">
        <h1 className="header__brand__titulo">Montoncito</h1>
    </div>
    <nav className="nav">
        <a href="#" className="nav__link">Catálogo</a>
        <a href="#" className="nav__link">Ofertas</a>
        <input type="search" name=""/>
        <button>Buscar</button>
    </nav>
    <div className="header__logon-carrito">
        <a href="">Iniciar sesión</a>
        <a href=""><span class="material-icons">shopping_cart</span></a>
    </div>
    </>
  )
}

export default NavBar