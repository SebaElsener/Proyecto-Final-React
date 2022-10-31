
import React, { useContext } from 'react'
import './CartWidget.css'
import carrito from './img/carrito1.png'
import { CartContext } from '../../context/CartContext.js'

const CartWidget = () => {

    const { cantidadTotal } = useContext(CartContext)

    return (
        <>
            <img src={carrito} alt='logo carrito de compras' className='imgCarrito'></img>
            <p className='cantidadItems'>{cantidadTotal()}</p>
        </>
    )
}

export default CartWidget