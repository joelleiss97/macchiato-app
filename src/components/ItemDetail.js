import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { productList } from "./Data";
import DetailCard from './DetailCard';

const ItemDetail = () => {

    const [details, setDetails] = useState([])

    useEffect(() => {
       getDetails()
    }, [])

    const getDetails = () => {
        const getDetailsPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve( productList )
            }, 2000);
        })

        getDetailsPromise.then( productList =>{
           setDetails(productList)
        })
    }



  return (
    <div>
        {details.map( m => <DetailCard key={m.id} detail={m}/>)}
    </div>
  )
}

export default ItemDetail