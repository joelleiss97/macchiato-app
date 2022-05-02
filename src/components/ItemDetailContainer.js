import React from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  return (
    <div className='ItemListContainer'>
      <h1 className="ItemListContainerTittle"> Detalles del producto</h1> 

      <ItemDetail/>
    </div>

  )
}

export default ItemDetailContainer