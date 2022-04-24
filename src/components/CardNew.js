import { useState } from 'react'

const CardNew = (props) => {


  return (
      <>
        <div>componente CardNew</div>
        {props.otroComponente({name:'jorge', edad: 24})}
      </>
    
  )
}
 
export default CardNew