import IconWifi from '../../assets/icons/wifi.png'
import IconHabitacion from '../../assets/icons/service.png'
import IconAire from '../../assets/icons/air.png'
import IconGym from '../../assets/icons/gym.png'
import IconPiscina from '../../assets/icons/piscina.png'
import IconStar from '../../assets/icons/mstar.png'
import { Link } from 'react-router-dom'


const ItemList = ({destinos}) => {
    return (
        <div className="row g-4 my-4">
            {destinos.map((hotel) => {
                return (
                    <div className='col-12 col-md-6 col-lg-4 gap-2' key={hotel.id}>
                        <div className="card alojamiento p-3 h-100">
                            <div className="card-body">
                            <img src={hotel.images[0]} className="d-block w-100 mb-2" alt="Puerta de entrada del hotel Hispano"/>
                            <h5 className="card-title text-center h5">{hotel.nombre}</h5>
                                <p className="card-text text-center mb-1"><small className="text-muted">{hotel.ciudad}</small></p>
                                <p className="card-text text-center mb-1 fw-bold">${hotel.precio}</p>
                                <div className="estrellas d-flex mb-3 mx-auto justify-content-center" id="estrellas">
                                    {estrellas(hotel.estrellas)}
                                </div> 
                                <div className="servicios justify-content-center d-flex mx-auto">
                                    {renderizarServicios(hotel)}
                                </div>  
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <Link to={`/destinos/${hotel.id}`} className="btn btn-primary">Ver mas información</Link>
                            </div>              
                        </div>
                    </div>
                )}
            )}
        </div>
    )
}

    const renderizarServicios = (hotel) => {
        const mapaServicios = {
            wifi: {
                src: IconWifi,
                alt: "Servicio Wifi incluido",
                title: "Servicio Wifi incluido"
            },
            habitacion: {
                src: IconHabitacion,
                alt: "Servicio a la habitación incluido",
                title: "Servicio a la habitación incluido"
            },
            aire: {
                src: IconAire,
                alt: "Servicio aire acondicionado incluido",
                title: "Servicio aire acondicionado incluido"
            },
            gym: {
                src: IconGym,
                alt: "Servicio gimnasio incluido",
                title: "Servicio gimnasio incluido"
            },
            piscina: {
                src: IconPiscina,
                alt: "Servicio piscina incluida",
                title: "Servicio piscina incluida"
            }
        };
        const listaDeServicios = hotel.servicios.map((nombreServicio) => {
                const servicio = mapaServicios[nombreServicio];
                if (servicio) {
                    return <img key={servicio.alt} src={servicio.src} alt={servicio.alt} title={servicio.title} className="servicio"/>;
                }
                return null;
            })
        return listaDeServicios;
    }

    const estrellas = (cant) => {
        if (cant === 1) return <img src={IconStar} alt="una estrella" className="star"/>;
        if (cant === 2) return <>
            <img src={IconStar} alt="una estrella" className="star"/>
            <img src={IconStar} alt="dos estrellas" className="star"/>
        </>;
        if (cant === 3) return <>
            <img src={IconStar} alt="una estrella" className="star"/>
            <img src={IconStar} alt="dos estrellas" className="star"/>
            <img src={IconStar} alt="tres estrellas" className="star"/>
        </>;
        if (cant === 4) return <>
            <img src={IconStar} alt="una estrella" className="star"/>
            <img src={IconStar} alt="dos estrellas" className="star"/>
            <img src={IconStar} alt="tres estrellas" className="star"/>
            <img src={IconStar} alt="cuatro estrellas" className="star"/>
        </>;
        if (cant === 5) return <>
            <img src={IconStar} alt="una estrella" className="star"/>
            <img src={IconStar} alt="dos estrellas" className="star"/>
            <img src={IconStar} alt="tres estrellas" className="star"/>
            <img src={IconStar} alt="cuatro estrellas" className="star"/>
            <img src={IconStar} alt="cinco estrellas" className="star"/>
        </>;
    };

    const loadingPlaceholder = () => {
        return (
            <section className="py-3 g-4 row" id="container-alojamientos">
                <div className="text-center" id="spinner">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div>Cargando datos...</div>
                </div>
            </section>
        )
    }





export default ItemList