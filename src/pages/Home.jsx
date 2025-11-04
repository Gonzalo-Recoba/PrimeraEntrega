import React from 'react'
import Carousel from '../components/carousel/Carousel'
import ItemListContainer from '../components/itemListContainer/ItemListContainer'

export const Home = () => {
    return (
        <main className='container my-5'>
            <Carousel/>
            <h1 className='text-center mt-5'>Bienvenido a Agentur</h1>
            <ItemListContainer/>
        </main>
    )
}
