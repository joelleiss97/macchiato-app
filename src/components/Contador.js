/*import React, { useEffect, useState } from 'react'

const Contador = () => {
  console.log('componente contador');
  const [count, setCount] = useState(0)

  useEffect(  () => {
    console.log('[useEffect] el componente se monto');
  } , [])

  useEffect(  () => {
    console.log('[useEffect] el componente se cambio');
  } , [count])



  const addHandler = () => {
      console.log(' sumando ');
      setCount(count + 1)

  }
  const restHandler = () => {
    console.log(' restando ');
    setCount(count - 1)

}

  return (
    <>
      <div>Contador</div>
      <button onClick={restHandler}> - </button>
      <strong> {count} </strong>
      <button onClick={addHandler}> + </button>
    </>

  )
}

export default Contador

*/