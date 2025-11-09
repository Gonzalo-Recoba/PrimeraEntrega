import React from 'react'
import Carousel from '../components/carousel/Carousel'
import ItemListContainer from '../components/itemListContainer/ItemListContainer'

export const Home = () => {
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
        <main className='container my-5'>
            <h1 className='text-center mt-5'>Bienvenido a Agentur</h1>
            <Carousel images={images}/>
            <ItemListContainer/>
        </main>
    )
}
