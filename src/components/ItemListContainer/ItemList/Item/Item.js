
import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../../ItemCount/ItemCount'
import './Item.css'

const Item = ({ prods }) =>{

    const {name, id, picurl, price, stock} = prods

    return(
        <div className='ItemContainer'>
            <p className='itemName'>{name}</p>
            <Link className='imgContainer' to={`/Item/${id}`}><img className='imgProduct' src={picurl} alt={`imagen ${name}`} /></Link>
            <p className='itemPrice'>{`Precio: $${price}`}</p>
            {stock === 0 ? '' : <p className='itemStock'>{`Stock: ${stock} unidades`}</p>}
            <ItemCount stock={stock} />
        </div>
    )
}

export default Item
