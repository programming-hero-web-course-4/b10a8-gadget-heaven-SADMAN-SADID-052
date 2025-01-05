import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { GiSelfLove } from "react-icons/gi";


const Navbar = () => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';

    const links = <>

<li className='mr-2'><NavLink to="/">Home</NavLink></li>
<li className='mr-2'><NavLink to='Statistics'>Statistics</NavLink></li>
<li className='mr-2'><NavLink to='dashboard'>Dashboard</NavLink></li>
<li className='mr-2'><NavLink to='aboutus'>About Us</NavLink></li>
    
    </>
    return (
      <div className ={`${
        isHomePage ? 'bg-[#9538E2] text-white mt-4' : 'text-black'
      } `}>

        {/* 'bg-[#9538E2] text-white mt-4' */}

<div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                {
                    links
                }
             
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            links
           }
          </ul>
        </div>
        
        <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
    {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7  bg-white text-black rounded-full p-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg> */}

<div className="indicator">
  <span className="indicator-item badge badge-secondary"></span>
  <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7  bg-white text-black rounded-full p-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
</div>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <GiSelfLove className='text-xl h-7 w-7  bg-white text-black rounded-full p-1'> </GiSelfLove>
      
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>


 

  
      </div>

 

     
      </div>

    //   Bannar

    

    );
};

export default Navbar;