import React from 'react';
import Bannar from '../Bannar/Bannar';
// import Products from '../Products/Products';
import Categories from '../Categories/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Home = () => {
    const categories = useLoaderData();
    

    return (

      
        <div className='max-w-6xl mx-auto'>
            <Bannar></Bannar>
           <div className='flex gap-7'>
          
           <Categories categories={categories}></Categories>
             {/* <Products></Products> */}
           <Outlet></Outlet>
           {/* <Products></Products> */}
          
           </div>

           <Helmet>
        <title>GadgetHaven - Home</title>
      </Helmet>
          
            
        </div>
    );
};

export default Home;