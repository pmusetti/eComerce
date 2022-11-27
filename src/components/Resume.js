import { React, useContext } from 'react'
import { contexto } from '../components/CustomProvider';

function Resume() {

    const context = useContext(contexto)
    const carrito = context.products
    let totalAPagar = 0


    carrito.forEach(element => {
        totalAPagar += element.price * 0.8 * element.qty
    });

    return (
        <>
        <h2>Total a pagar:</h2>
        <h3 className='card__discountPrice'>${totalAPagar}</h3>
        </>
    )
}

export default Resume
