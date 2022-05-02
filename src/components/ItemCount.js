import React, { useState } from 'react'
import './style/ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const addProduct =(num) =>{
        setCount(count + num);
    };

  return (
    <div className='countContainer'>
        <div className='countContador'>
            <button
                className='countButton'
                onClick={() => addProduct(-1)}
                disabled={count === initial ? true : null}
            >
                -
            </button>
            <span className='countCo'>{count}</span>
            <button
                className='countButton'
                onClick={() => addProduct(+1)}
                disabled={count === stock ? true : null}
            >
                +
            </button>
        </div>
        <button
            className='button-primary'
            onClick={() => onAdd(count)}
            disabled={count === 0 ? true : null}

        >

            <p>Agregar</p> 
        </button>
    </div>
  )
}

export default ItemCount