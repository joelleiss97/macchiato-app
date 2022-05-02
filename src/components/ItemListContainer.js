import React from 'react';
import ItemList from './ItemList';
import './style/ItemListContainer.css';

//const ItemListContainer = (props) => {
const ItemListContainer =({ GreetingSaludo}) =>{
  return (
    //<h1 classGreeting="text-4xl font-black">
    //    Bienvenidos al contenerdor ItemListContainer{props.classGreeting}!
    
    //</h1>
    <div className='ItemListContainer'>
      <h1 className="ItemListContainerTittle">
        Productos En Stock {GreetingSaludo}
      </h1>

      <ItemList/>
    </div>
    
  )
}

export default ItemListContainer 