import React, { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList'
import {API_KEY} from '../../utils/apiKey.js';
import LoadingPlaceholder from '../loading/LoadingPlaceholder.jsx';

const ItemListContainer = () => {
        const url = `https://script.google.com/macros/s/${API_KEY}?type=get`;
        const [destinos, setDestinos] = useState([]);
        const [loading, setLoading] = useState(true);
        const [ciudadFiltro, setCiudadFiltro] = useState('');
        const [precioFiltro, setPrecioFiltro] = useState('');

        useEffect(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setDestinos(data);
                    const maxPrecio = Math.max(...data.map(d => d.precio));
                    setPrecioFiltro(maxPrecio);
                })
                .catch(error => console.error('Error fetching data:', error))
                .finally(() => setLoading(false));
        }, []);


        const ciudadesUnicas = new Set();
        const alojamientosFiltrados = destinos.filter(alojamiento => {
            if (ciudadesUnicas.has(alojamiento.ciudad)) {
                return false;
            } else {
                ciudadesUnicas.add(alojamiento.ciudad);
                return true;
            }
        });

        const destinosFiltrados = destinos
            .filter(destino => !ciudadFiltro || destino.ciudad === ciudadFiltro)
            .filter(destino => destino.precio <= precioFiltro);

        const minPrecio = Math.min(...destinos.map(d => d.precio));
        const maxPrecio = Math.max(...destinos.map(d => d.precio));

        if (loading) {
            return <LoadingPlaceholder/>;
        }

        if (destinos.length === 0) {
            return <h5 className="text-center">No hay alojamientos disponibles en este momento.</h5>;
        }

    return (
        <>
            <select className="form-select w-25 mx-auto d-block" onChange={(e) => setCiudadFiltro(e.target.value)}>
                <option value="">Filtrar por ciudad</option>
                {alojamientosFiltrados.map((destino) => (
                    <option key={destino.id} value={destino.ciudad}>{destino.ciudad}</option>
                ))}
            </select>

            <div className="w-25 mx-auto d-block mt-3">
                <label htmlFor="precio" className="form-label">Filtrar por precio: ${precioFiltro}</label>
                <input 
                    type="range" 
                    className="form-range" 
                    min={minPrecio} 
                    max={maxPrecio} 
                    value={precioFiltro}
                    step="100"
                    onChange={(e) => setPrecioFiltro(e.target.value)} 
                    id="precio"
                />
            </div>

            <ItemList destinos={destinosFiltrados}/>
        </>
    )
}



export default ItemListContainer