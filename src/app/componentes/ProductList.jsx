
'use client'

import { useEffect, useState } from 'react'

const ProductList = () => {

    const [product, setProduct] = useState([])

    const getProduct = async () => {
        try {

            const result = await fetch("https://fakestoreapi.com/products")
            const data = await result.json()
            setProduct(data)

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>

            <hr />
            <div className='container       rounded-3xl mx-auto my-10 p-10 bg-gradient-to-r from-sky-500 to-indigo-900 hover:bg-gradient-to-l   duration-1000'>
                <p className='m-5'>API:  https://fakestoreapi.com/products</p>
                <h1 className='text-5xl text-indigo-950 mt-5'>Product List</h1>

            </div>

            <hr />
            <div className='grid grid-cols-1     sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container       rounded-3xl mx-auto my-10 p-10 bg-gradient-to-r from-sky-500 to-indigo-900 hover:bg-gradient-to-l justify-items-center  duration-1000 '>


                {product.map(item => (
                    <>

                        <div key={item.id} >

                            <h2 className='m-3 text-left text-3xl' >Product: {item.id}</h2>
                            <img src={item.image} alt={item.category} className='size-40  hover:scale-105 duration-500' />
                            <h2 className='m-3 text-left'>Price: {item.price} $</h2>
                            <hr />


                        </div>
                    </>

                ))}

            </div>


        </>
    )
}

export default ProductList