import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {API_KEY} from '../../utils/apiKey.js';
import IconStar from '../../assets/icons/mstar.png';
import IconWifi from '../../assets/icons/wifi.png'
import IconHabitacion from '../../assets/icons/service.png'
import IconAire from '../../assets/icons/air.png'
import IconGym from '../../assets/icons/gym.png'
import IconPiscina from '../../assets/icons/piscina.png'

const DestinosDetail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [alojamiento, setAlojamiento] = useState({});
    const url = `https://script.google.com/macros/s/${API_KEY}?type=getOne&id=${id}`;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAlojamiento(data[0]);
            })
            .catch(error => console.error('Error fetching data:', error))
            .finally(() => setLoading(false));
    }, []);
    

    return (
        <div className='container mh-100' style={{minHeight: "100vh"}}>
            { loading ?
                <p>Cargando...</p>
            :
                <div className="alojamiento-detail container my-4">
                    <h2>{alojamiento.nombre}</h2>
                    <p>{alojamiento.ciudad}</p>
                    {estrellas(alojamiento.estrellas)}
                    <p>{alojamiento.estrellas} estrellas</p>
                    {renderizarServicios(alojamiento)}
                    <p>Precio: ${alojamiento.precio}</p>
                    <p>{alojamiento.descripcion}</p>
                    <img src={alojamiento.imagen1} alt={alojamiento.nombre} className='w-30' />
                    <img src={alojamiento.imagen2} alt={alojamiento.nombre} className='w-30' />
                </div>
            }
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
        const listaDeServicios = hotel.servicios.split(', ').map( (nombreServicio) => {
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


export default DestinosDetail;
