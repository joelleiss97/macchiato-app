import React, { useEffect, useState } from 'react'
import { productList } from './Data';
import './style/ItemList.css'
import Item from './Item';



const ItemList = () => {

    const [products, setProducts] =  useState([]);

    const getProducts = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(productList);
        }, 2000);
    })

    const getProductsFromDB = async () => {
        try{
            const result = await getProducts;
            setProducts(result);
        } catch (err) {
            console.log(err);
            alert('no se puede mostrar los productos ahora');
        }
    };

    useEffect(() => {
        getProductsFromDB();
    }, []);

    return(
        <div className='productListContainer'>
            {
                products.length?(

                <>
                    {
                        products.map((product) =>{

                            return (
                                <div key={product.id}>
                                    <Item 
                                        name={product.name}
                                        image={product.image}
                                        price={product.price}
                                        stock={product.stock}
                                        id={product.id}
                                    />
                                </div>
                            );
                        })
                    }
                </>
                ) : (
                    <p>Cargando Productos...</p>
                )
            }

        </div>
    )

}

export default ItemList