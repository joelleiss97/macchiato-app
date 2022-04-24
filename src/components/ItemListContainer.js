import React from 'react'

//const ItemListContainer = (props) => {
const ItemListContainer =({ GreetingSaludo}) =>{
  return (
    //<h1 classGreeting="text-4xl font-black">
    //    Bienvenidos al contenerdor ItemListContainer{props.classGreeting}!
    
    //</h1>

    <h1 className="text-4xl font-bold">
        Bienvenidos al contenedor {GreetingSaludo}
    </h1>
  )
}

export default ItemListContainer 