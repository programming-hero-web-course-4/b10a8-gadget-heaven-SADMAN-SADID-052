// Import react-toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { addToList } from '../../utiliti/addTodb';
import { addWishList } from '../../utiliti/addWish';


// import { ToastContainer } from 'react-toastify';

const ProductDetail = () => {
  const { product_id } = useParams();
  const data = useLoaderData();

  const id = parseInt(product_id);
  const product = data.find((product) => product.product_id == product_id);

  const handleAddToCart = (id) => {
    addToList(id);
    // console.log(id)

    toast.success(`${product.product_title} is Added to the Cart`)
    
    
  };

  const handleWish = (id) => {
    addWishList(id);
   
    toast.success(`${product.product_title} has been added to your wishlist!`);
  };

  return (
    <div>
   

      <div className="text-center bg-purple-500 p-4 text-white relative">
        <h2 className="font-bold text-2xl text-white mt-4 mb-5">Product Details</h2>
        <p className="text-sm mb-28">
          Explore the latest gadgets that will take your experience to the next <br />
          From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="hero bg-base-200 rounded-3xl max-w-3xl mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product.product_image}
            className="w-3/5 rounded-lg shadow-2xl"
            alt={product.product_title}
          />
          <div>
            <h1 className="text-2xl font-bold">{product.product_title}</h1>
            <p className="py-6 font-bold">Price: ${product.price}</p>
            <p className="bg-green-300 p-2 rounded-3xl font-bold text-center border-2 border-green-800 text-green-700 w-40">
              {`${product.availability ? 'In Stock' : 'Not Available'}`}
            </p>
            <p className="text-slate-500 mb-4 mt-4">{product.description}</p>
            <h4 className="mt-3 mb-3">Specification</h4>

            <ol className="font-semibold text-slate-500">
              {product.specification.map((spec, index) => (
                <li key={index}>{index + 1}. {spec}</li>
              ))}
            </ol>
            <h5 className="font-bold">Rating:</h5>
            <p className="flex items-center gap-2">
              <FaRegStar className="text-orange-500" />
              <FaRegStar className="text-orange-500" />
              <FaRegStar className="text-orange-500" />
              <FaRegStar className="text-orange-500" />
              <FaRegStar className="" />
              <span className="bg-gray-300 p-1 rounded-xl">{product.rating}</span>
            </p>

            <div className="flex mt-5">
              <button
                onClick={() => handleAddToCart(product_id)}
                className="btn btn-primary bg-[#9538E2] text-white font-bold rounded-2xl"
              >
                Add To Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 bg-white text-black rounded-full p-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>

              <button onClick={() => handleWish(product_id)} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <GiSelfLove className="text-xl h-7 w-7 bg-white text-black rounded-full p-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
