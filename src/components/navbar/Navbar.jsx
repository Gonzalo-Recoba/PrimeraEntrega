import { Link } from "react-router-dom";
import CartWidget from "../cartwidget/CartWidget.jsx";
import {routes} from '../../utils/Routes.js';
import IconLogo from '../../assets/logo.svg';

const Navbar = () => {
    return (
    <header id="mainNavigation">
        <nav role="navigation">
            <div className="pt-3 text-center">
                <Link to={routes.home}>
                    <img src={IconLogo} alt="Logo Agentur S.A." className="invert logo"/>
                </Link>
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
                    <Link to={routes.home} className="nav-item"><span className="nav-link">Destinos</span></Link>
                    <Link to={routes.alojamientos} className="nav-item"><span className="nav-link">Alojamientos</span></Link>
                    <Link to={routes.contact} className="nav-item"><span className="nav-link">Contacto</span></Link>                    <CartWidget/>                          
                </ul>
            </div>
        </div>
    </header>
    )
}

export default Navbar