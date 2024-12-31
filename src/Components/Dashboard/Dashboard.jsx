import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useNavigate} from "react-router-dom";
import { getStoredList } from "../../utiliti/addTodb";
import { getStoreList } from "../../utiliti/addWish";
import Cart from "../Cart/Cart";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const [cartList, setCartList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [wishList, setWishList] = useState([]);
  const navigate = useNavigate();
  const allProducts = useLoaderData();

  useEffect(() => {
    const storedCartList = getStoredList();
    const readCartList = allProducts.filter((cart) =>
      storedCartList.includes(cart.product_id)
    );
    setCartList(readCartList);
  }, [allProducts]);

  useEffect(() => {
    const storedWishList = getStoreList();
    const readWishList = allProducts.filter((product) =>
      storedWishList.includes(product.product_id)
    );
    setWishList(readWishList);
  }, [allProducts]);

  const totalCartPrice = cartList.reduce((total, item) => total + item.price, 0);

  const sortCartByPrice = () => {
    const sortedCart = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortedCart);
    toast.success("Cart items sorted by price!");
  };

  const handlePurchase = () => {
    if (cartList.length === 0) {
      toast.error("Cart is empty. Add items before purchasing!");
      return;
    }
    // toast.success("Congratulations on your purchase!");
    setShowModal(true);
    // setCartList([]); 
  };

  const handleModalClose = () => {
    setShowModal(false); 
    setCartList([]);
   
    // navigate('/') 

    setTimeout(() => {
      navigate('/'); 
    }, 1500);
  };

  return (
    <div>
      {/* Dashboard Header */}
      <div className="text-center bg-purple-500 p-4 text-white relative">
        <h2 className="font-bold text-2xl text-white mt-4 mb-4">Dashboard</h2>
        <p className="text-sm mb-28">
          Explore the latest gadgets that will take your experience to the next
          level! <br /> From smart devices to the coolest accessories, we have
          it all!
        </p>
        <div>
          <button
            className={`btn btn-outline rounded-2xl px-4 ${
              activeTab === "cart" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveTab("cart")}
          >
            Cart: {cartList.length}
          </button>
          <button
            className={`btn btn-outline rounded-2xl ml-2 px-4 ${
              activeTab === "wishlist" ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveTab("wishlist")}
          >
            Wishlist: {wishList.length}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex justify-between mt-7">
        <h4 className="font-bold">
          {activeTab === "cart" ? "Cart" : "WishList"}
        </h4>
        {activeTab === "cart" && (
          <div className="flex items-center gap-5">
            <h4 className="font-bold text-xl">Total cost: ${totalCartPrice}</h4>
            <button className="btn btn-outline" onClick={sortCartByPrice}>
              Sort by Price
            </button>
            <button
              className="btn btn-outline"
              onClick={handlePurchase}
              disabled={cartList.length === 0}
            >
              Purchase
            </button>
          </div>
        )}
      </div>

      <div className="mt-5">
        {activeTab === "cart" &&
          cartList.map((cart) => <Cart key={cart.product_id} cart={cart} />)}
        {activeTab === "wishlist" &&
          wishList.map((wish) => (
            <Cart key={wish.product_id} cart={wish} />
          ))}
      </div>

      {/* modal */}

       {/* Modal */}
       {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">

            <img className="w-20 mx-auto" src="https://img.icons8.com/?size=128&id=VRkpt1PqIfsu&format=png" alt="" />
            <p className="mt-2 text-center text-2xl font-bold border-b-2 p-4">
              Payment Successfully
             
            </p>

            <p className="text-center mt-4">Thanks for purchasing.</p>

            <p className="font-bold text-center mt-4">Total: ${totalCartPrice}</p>.
            <button
              className="btn btn-default mt-4 w-full rounded-full font-bold"
              onClick={handleModalClose}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Helmet>
        <title>GadgetHaven - Dashboard</title>
      </Helmet>
      <Toaster />
    </div>
  );
};

export default Dashboard;
