import React, { useEffect, useState } from 'react'


const ItemCount = () => {
    const [count,setCount] = useState(1)
    const [stock] = useState(10)
    console.log('empieza el contador');

    const addHandler =() => {
        console.log('Se esta sumando el contador');
        setCount( count + 1)
    }

    const restHandler =() => {
        console.log('Se esta restando el contador');
        setCount( count - 1)
    }

    useEffect(  () => {
        console.log('[useEffect] el componente se monto');
      } , [])
    
      useEffect(  () => {
        console.log('[useEffect] el componente se cambio');
      } , [count])
    return (


    <>
    
    <div class="card w-60 bg-base-100 shadow-xl items-center text-center">
        <div class="card-body items-center text-center">
            <h2 class="card-title">ItemCount</h2>
            <strong> {count} </strong>
            <div class="card-actions justify-end">
                <button class="btn btn-primary" onClick={restHandler}> - </button>
                <button class="btn btn-primary" onClick={addHandler}> + </button>  
            </div>
            <div class="card-actions">
                <button class="btn btn-primary">Incrementar</button>
            </div>
        </div>
    </div>
    
    
    
    
    </>




   
  )
}

export default ItemCount