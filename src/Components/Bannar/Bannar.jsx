import React from 'react';
import bannarPic from '../../assets/banner.jpg'
import { Link } from 'react-router-dom';

const Bannar = () => {
    return (
        <div className=''>

        <div className="hero  min-h-screen bg-[#9538E2] relative">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className="py-6 text-sm text-slate-300">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link 
        
        to="/dashboard"
        className="btn btn-outline bg-white text-[#9538E2] font-bold">Shop Now</Link>
      </div>
    </div>
  </div>

  <div className='absolute left-1/2 -mt-28 transform -translate-x-1/2 border-white border-2 p-4 rounded-3xl'>
    <img className='w-[700px] h-[300px] rounded-3xl' src={bannarPic} alt="" />
  </div>
    
 
        </div>

        
    );
};

export default Bannar;