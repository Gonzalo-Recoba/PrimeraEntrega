import React from 'react'

const LoadingPlaceholder = () => {
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

export default LoadingPlaceholder;