import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Laptop from '../Laptop/Laptop';
import CartList from '../CartList/CartLists';

const Laptops = () => {
   const data = useLoaderData()
   const {category} = useParams()
   const [tec,setTec] = useState([])
   useEffect (()=>
    {
        if(category)
        {
            const filteredByCategory = [...data].filter(
                laptop => laptop.category == category
            )
    
            setTec(filteredByCategory)
        }

        // else if(laptop => laptop.category[0] == category){

        //     setTec(data)

        // }
        else{

            setTec(data)
        }
    },[category,data])

    
    // console.log(data)
    return (
        <div className='mt-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
         {
             tec.map(laptop => <Laptop laptop={laptop}></Laptop>)
              
         }
       
        </div>
    );
};

export default Laptops;
