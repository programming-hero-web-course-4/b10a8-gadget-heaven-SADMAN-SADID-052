import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { getStoredList } from '../../utiliti/addTodb';
import { getStoreList } from '../../utiliti/addWish';

import Cart from '../Cart/Cart';
import { Helmet } from 'react-helmet';

const Dashboard = () => {

    const [cartList,setCartList] = useState([]);

    const allProducts = useLoaderData();

    useEffect(() => 
        {

        const soteCartList = getStoredList()
           
            const readCartList = allProducts.filter(cart =>soteCartList.includes(cart.product_id));
         setCartList(readCartList)

        },[])

        const [wishList,setWishList] = useState([]);

        const allWish = useLoaderData();
    
        useEffect(() => 
            {
    
                const storewishList = getStoreList()
               
                const readWishList = allWish.filter(product =>storewishList.includes(product.product_id));
             setWishList(readWishList)
    
            },[])



    return (
        <div>
            <div className='text-center bg-purple-500 p-4 text-white relative '>
        <h2 className='font-bold text-2xl text-white mt-4 mb-4'>Dashboard</h2>
        <p className='text-sm mb-28'>Explore the latest gadgets that will take your experience to the next <br /> From smart devices to the coolest accessories, we have it all!</p>
        
         <div>
            <button className="btn btn-outline bg-[] rounded-2xl px-4 ">
                Cart:
                
            </button>
            <button className="btn btn-outline rounded-2xl ml-2 px-4 ">
                Wishlist:{wishList.length}
                
            </button>
         </div>

       

      </div>

      <div className='flex justify-between mt-7'>

<h4 className='font-bold '>Cart</h4>
<div>
<div className='flex items-center gap-5'>
<h4 className='font-bold text-xl'>Total cost : 999.0</h4>

<NavLink className="btn btn-outline">Sort by Price</NavLink>
<NavLink className="btn btn-outline">Purchase</NavLink>
</div>
</div>

</div>

 <div className=''>
 {
    cartList.map(cart => <Cart cart={cart}></Cart>)
  }
   
 </div>

 <Helmet>
        <title>GadgetHaven - Dashboard</title>
      </Helmet>

         
        </div>
    );
};

export default Dashboard;