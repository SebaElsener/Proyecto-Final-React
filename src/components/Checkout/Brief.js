
import React from 'react'

const Brief = ({ prod }) => {

    const {product, price, quant} = prod

    return (
        <>
            <ul>
                <li>Producto: {product}</li>
                <li>Precio: ${price}</li>
                <li>Cantidad: {quant}</li>
            </ul>
        </>
    )
}

export default Brief