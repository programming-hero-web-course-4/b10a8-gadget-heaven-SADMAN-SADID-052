import React, { useEffect, useState } from 'react';
import { BsDatabase } from 'react-icons/bs';
import Product from '../Product/Product';

const Products = () => {

    const [products,setProducts] = useState([])
    useEffect(()=>
        {
            fetch('./allProducts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        },[])
    useEffect
    return (
        <div className='mt-[300px]'>

           <h2 className='text-3xl font-bold text-center mb-8'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <Product key={product.product_id} product={product}></Product>)
                }
            </div>
            

            
        </div>
    );
};

export default Products;