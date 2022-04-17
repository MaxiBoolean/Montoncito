import React from 'react';

function NavBar() {
  return (
    <nav className="nav">
        <a href="#" className="nav__link">Catálogo</a>
        <a href="#" className="nav__link">Ofertas</a>
        <input type="search" name=""/>
        <button>Buscar</button>
    </nav>
  )
}

export default NavBar