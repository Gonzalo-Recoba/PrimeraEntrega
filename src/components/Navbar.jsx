import CartWidget from "./CartWidget"


const Navbar = () => {
    return (
    <header id="mainNavigation">
        <nav role="navigation">
            <div className="pt-3 text-center">
                <img src="src\assets\logo.svg" alt="Logo Agentur S.A." className="invert logo"/>
            </div>
        </nav>
        <div className="navbar-expand-md ">
            <div className="navbar-dark text-center my-1 ">
                <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="align-center ff-rw fs-n fw-700">Menú</span>
                </button>
            </div>
            <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item"><a className="nav-link" href="#">Destinos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Alojamientos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Autos</a></li>
                    <li className="nav-item"><a className="nav-link" href='#'>Contacto</a></li>
                    <CartWidget/>                          
                </ul>
            </div>
        </div>
    </header>
    )
}

export default Navbar