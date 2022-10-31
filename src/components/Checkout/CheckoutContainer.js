import React, { useState, useContext } from 'react'
import Brief from './Brief'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CheckoutContainer.css'

const CheckoutContainer = () => {

    const [orderId, setOrderId] = useState([])
    const { cart, precioTotal, borrarCarrito } = useContext(CartContext)

    const order = {
        comprador: {
            name: 'Sebastián',
            email: 'slsldfsr@dasf.com',
        },
        items: cart.map(prod => ({id: prod.id, price: prod.price, product: prod.name, quant: prod.cantidadComprada})),
        totalPrice: precioTotal()
    }

    const resumenCompra = () =>  {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then((res) => {
            setOrderId(res.id)
        })
    }

    const volverInicio = () => {
        borrarCarrito()
    }

    return (
        <div className='checkoutContainer'>
            <p>¡Su compra ha sido registrada con éxito, muchas gracias!</p>
            <button className='btnCheckoutContainer' disabled={orderId.length !== 0} onClick={() => resumenCompra()}>VER RESUMEN COMPRA</button>
            {orderId.length !== 0 ? (
                <>
                    <p>RESUMEN</p>
                    <p>ID compra: {orderId}</p>
                    <p>Productos: </p>
                    {order.items.map(prod => <Brief prod={prod} key={prod.id} />)}
                    <p>Total compra: ${order.totalPrice}</p>
                    <Link to='/'><button className='btnCheckoutContainer' onClick={() => volverInicio()}>Volver a inicio</button></Link>
                </>
            ) : false
            }
        </div>
    )
}

export default CheckoutContainer