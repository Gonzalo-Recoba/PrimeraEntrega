import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import IconStar from '../../assets/icons/mstar.png';
import IconWifi from '../../assets/icons/wifi.png'
import IconHabitacion from '../../assets/icons/service.png'
import IconAire from '../../assets/icons/air.png'
import IconGym from '../../assets/icons/gym.png'
import IconPiscina from '../../assets/icons/piscina.png'
import LoadingPlaceholder from '../loading/LoadingPlaceholder.jsx';
import Carousel from '../carousel/Carousel.jsx';
import ReservationForm from '../ReservationForm/ReservationForm.jsx';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { app } from '../../utils/firestore/firestore.js';

const DestinosDetail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [alojamiento, setAlojamiento] = useState({});
    useEffect(() => {
        const db = getFirestore(app);
        const docRef = doc(db, 'alojamientos', id);
        getDoc(docRef).then((docSnap) => {
            if (docSnap.exists()) {
                setAlojamiento({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log('No such document!');
            }
        }).catch((error) => {
            console.error('Error fetching data:', error);
        }).finally(() => {
            setLoading(false);
        });
    }, [id]);
    

    return (
        <div className='container mh-100' style={{minHeight: "100vh"}}>
            { loading ?
                <LoadingPlaceholder />
            :
                <div className="alojamiento-detail container my-4">
                    <div className='row'>
                        <div className='col-6'>
                            <h2>{alojamiento.nombre}</h2>
                            <p>{alojamiento.ciudad}</p>
                            {renderizarEstrellas(alojamiento.estrellas)}
                            <p>{alojamiento.estrellas} estrellas</p>
                            <h6>Servicios incluidos:</h6>
                            {renderizarServicios(alojamiento.servicios)}
                            <p>{alojamiento.descripcion}</p>
                            <h4>Precio: ${alojamiento.precio}</h4>
                        </div>
                        <div className='col-3'>
                            <Carousel images={alojamiento.images ? alojamiento.images.map((img, index) => ({src: img, alt: `Imagen ${index + 1}`})) : []}/>
                        </div>
                        <div className='col-3'>
                            <ReservationForm hotel={alojamiento} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

    const renderizarServicios = (servicios) => {
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
        servicios = servicios || [];
        const listaDeServicios = servicios.map((nombreServicio) => {
            const servicio = mapaServicios[nombreServicio];
            if (servicio) {
                return <img key={servicio.alt} src={servicio.src} alt={servicio.alt} title={servicio.title} className="servicio"/>;
            }
            return null;
        });
        return listaDeServicios;
    }

    const renderizarEstrellas = (cant) => {
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


export default DestinosDetail;
