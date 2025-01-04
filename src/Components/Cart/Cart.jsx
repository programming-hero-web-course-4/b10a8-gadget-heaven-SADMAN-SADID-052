import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxCrossCircled } from "react-icons/rx";

const Cart = ({cart}) => {

   const handeleDelete = (product_id) =>
   {
     console.log(product_id)
    //  cart er state theke delete
    // 

   }

    const {product_title,product_id,price,product_image,specification} = cart || {}
    return (
        <div className='max-w-4xl mx-auto'> 

            <div className='bg-[#FFFFFF] mt-3 p-3 rounded-2xl flex items-center gap-6 border-2'>
                <div>
                <img className='w-36 rounded-3xl' src={product_image} alt="" />
                </div>

                <div className='flex justify-between gap-10 items-center'>

                    <div>
                    <h4 className='text-xl font-bold'>{product_title}</h4>
                    <p>
                        {
                            specification
                        }
                    </p>
                    <h6 className='font-bold'>Price : ${price}</h6>

                    
                    </div>
                    <div>
                    <button onClick={()=> handeleDelete(product_id)} className='text-red-600 text-2xl'><RxCrossCircled /></button>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Cart;