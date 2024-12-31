import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Categories = ({categories}) => {

    const location = useLocation()
    return (
        <div role="tablist" className="tabs  mt-[300px] flex flex-col">

            <NavLink  role="tab" className={({isActive})=>`tab ${isActive && location.pathname === '/' ? 'bg-[#9538E2] text-white rounded-3xl btn btn-outline text-xs w-32 mt-4' : 
        'btn btn-outline text-xs w-32 mt-4 rounded-3xl'}`} > All Products</NavLink>

       {
       categories.map(category =>(
        <NavLink  to ={`/category/${category.category}`} role="tab" className={({isActive})=>`tab ${isActive ? 'bg-[#9538E2] text-white rounded-3xl btn btn-outline text-xs w-32 mt-4' : 
        'btn btn-outline text-xs w-32 mt-4 rounded-3xl'}`}>
        
        {category.category} </NavLink>))

        }
      </div>
    );
};

export default Categories;
