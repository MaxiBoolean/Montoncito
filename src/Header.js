import NavBar from "./components/NavBar"

const Header = () =>{
    return (
        <header className="header">
            <div className="header__brand">
                <h1 className="header__brand__titulo">Montoncito</h1>
                <div className="header__brand__logon-carrito">
                    <a href="">Iniciar sesión</a>
                    <a href="">Carrito </a>
                </div>
            </div>
            <hr />
            <div className="header__container">
                <NavBar/>
            </div>            
        </header>
    )
}

export default Header;