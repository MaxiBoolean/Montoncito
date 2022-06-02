import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <Link to={"/"}><h1 className="header__brand__titulo">Montoncito</h1></Link>
      </div>
      <NavBar /> {/* Componente NavBar */}
      <div className="header__logon-carrito">
        <Link to="/carrito">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default Header;
