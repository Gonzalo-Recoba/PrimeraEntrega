import React from 'react'
import Carousel from './Carousel'

const ItemListContainer = ({title, subtitle}) => {
    return (
        <main>
            <Carousel/>
            <h1 className='text-center mt-5'>{title}</h1>
            <p className='text-center mt-3'>{subtitle}</p>
        </main>
    )
}

export default ItemListContainer