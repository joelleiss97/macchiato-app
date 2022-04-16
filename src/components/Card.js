import React from 'react'

const Card = ({children}) => {
  return (

    <div style={{border:'solid 3px black'}}>
        <div>Principio</div>
        {children}
        <div>fin</div>
    
    </div>
    
  )
}

export default Card


