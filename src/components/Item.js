import React from 'react'
import ItemCount from './ItemCount.js'

import './style/Item.css'


const Item = ({name, image, price, id, stock}) => {
  
    const onAdd = (count) =>{
         alert(`has agregado ${count} producto a tu carrito`);
    };

    return (
    <div className='ProductCard'>
        <img className='ProductImage' src={image} alt="" />
        <h2 className='ProductName'>{name}</h2>
        <span className='productName'>$ {price} </span>

        <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </div>
  )
}

export default Item