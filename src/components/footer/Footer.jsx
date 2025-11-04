import TwitterIcon from '../../assets/icons/twitter.png'
import InstagramIcon from '../../assets/icons/instagram.png'
import FacebookIcon from '../../assets/icons/facebook.png'
import LocationIcon from '../../assets/icons/ubicacion.png'
import PhoneIcon from '../../assets/icons/telefono.png'
import EmailIcon from '../../assets/icons/e-mail.png'

const Footer = () => {
    return (
        <footer className='mt-5'>
            <div className="container">
                <div className="row">
                    <div className="redes-sociales col-sm-12 col-md-4 mt-2">
                        <a href="/" target="_blank"><img src={TwitterIcon} alt="icono representativo de Twitter" /></a>
                        <a href="/" target="_blank"><img src={InstagramIcon} alt="icono representativo de Instragram" /></a>
                        <a href="/" target="_blank"><img src={FacebookIcon} alt="icono representativo de Facebook" /></a>
                    </div>
                    <div className="copy col-sm-12 col-md-4 mt-2">
                        <h6 className="ff-rw fw-200 fs-n">© 2025. Todos los derechos reservados.</h6>
                    </div>
                    <div className="pie-contacto col-sm-12 col-md-4 mt-2 mt-2">
                    <a href="https://goo.gl/maps/gePNVgzgK8NoPjXs8"><img src={LocationIcon} alt="icono representativo de ubicacion" /></a>
                    <a href="/"><img src={PhoneIcon} alt="icono representativo de telefono" /></a>
                    <a href="/"><img src={EmailIcon} alt="icono representativo de email" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer