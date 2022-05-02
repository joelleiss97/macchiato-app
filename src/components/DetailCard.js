import React from 'react'
import './style/DetailCard.css'

const DetailCard = ( {detail}) => {

    const {name, description, price, image, stock,} = detail
    
  
  
    return (
   // <div>
    //   <strong>{name}</strong>
    //    <strong>{description}</strong>
    //    <div>$ {price}</div>
    //    <div>{image}</div>
    //    <div>{stock}</div>
        
    //</div>
    <>
        <div>
            <div className='ContenedorImage'>
                <img src={image} alt="detail"></img>
                <div className='DetailCheklist'>
                    <h1 className='DetailName'>{name}</h1>
                    <h2 className='DetailDescrip'>{description}</h2>
                    <div className='DetailResto'>
                        <div>$ {price}</div>
                        <div>Disponible {stock}</div>
                    </div>
                </div>  
                <div className=' DetailButton card-actions'>
                    <button className='btn '> Ver màs...</button>
                </div> 
            </div>
        </div>
       :(
        <p className='productos'>Cargando Productos...</p>
       )
    </>
    
  )
}

export default DetailCard