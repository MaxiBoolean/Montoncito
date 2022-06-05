import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import { Link } from "react-router-dom";
import icono from "./media/icono.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <Link to={"/"}>
          <h1 className="header__brand__titulo">
            Montoncito
            <img src={icono} alt="logo" />
          </h1>
        </Link>
      </div>
      <NavBar />
      <div className="header__logon-carrito">
        <Link to="/carrito">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default Header;
