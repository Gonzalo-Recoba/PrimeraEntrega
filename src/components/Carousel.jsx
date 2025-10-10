import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel carouselppal slide pt-1 w-90 mx-auto mb-3 wow animate__zoomIn" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="src\assets\carousel\1.webp" className="d-block w-100 mx-auto img-thumbnail" alt="Imagen carousel 1 - esta imagen es utilizada para representar la campaña 1" />
                        </div>
                        <div className="carousel-item">
                            <img src="src\assets\carousel\2.webp" className="d-block w-100 mx-auto img-thumbnail" alt="Imagen carousel 2 - esta imagen es utilizada para representar la campaña 1" />
                        </div>
                        <div className="carousel-item">
                            <img src="src\assets\carousel\3.webp" className="d-block w-100 mx-auto img-thumbnail" alt="Imagen carousel 3 - esta imagen es utilizada para representar la campaña 1" />
                        </div>
                        <div className="carousel-item">
                            <img src="src\assets\carousel\4.webp" className="d-block w-100 mx-auto img-thumbnail" alt="Imagen carousel 4 - esta imagen es utilizada para representar la campaña 1" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
    )
}

export default Carousel