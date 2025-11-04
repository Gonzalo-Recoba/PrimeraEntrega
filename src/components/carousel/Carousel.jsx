const Carousel = () => {
    const images = [
        {
            src: 'src\\assets\\carousel\\1.webp',
            alt: 'Imagen carousel 1 - esta imagen es utilizada para representar la campaña 1'
        },
        {
            src: 'src\\assets\\carousel\\2.webp',
            alt: 'Imagen carousel 2 - esta imagen es utilizada para representar la campaña 1'
        },
        {
            src: 'src\\assets\\carousel\\3.webp',
            alt: 'Imagen carousel 3 - esta imagen es utilizada para representar la campaña 1'
        },
        {
            src: 'src\\assets\\carousel\\4.webp',
            alt: 'Imagen carousel 4 - esta imagen es utilizada para representar la campaña 1'
        }
    ]
    return (
        <div id="carouselExampleIndicators" className="carousel carouselppal slide pt-1 w-90 mx-auto mb-3 wow animate__zoomIn" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {images.map((image, index) => (
                    <button key={index} disabled type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="active" aria-current="true" aria-label={"Slide " + index}></button>
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={image.src} className="d-block w-100 mx-auto img-thumbnail" alt={image.alt} />
                    </div>
                ))}
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