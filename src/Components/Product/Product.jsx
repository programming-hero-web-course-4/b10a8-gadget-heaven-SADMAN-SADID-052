import React from 'react';

const Product = ({product}) => {
    const {product_title,product_id,price} = product;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>Price:{price}</p>
    <div className="card-actions">
      <button className="btn btn-outline text-[#9538E2] rounded-3xl">Viwe Details</button>
    </div>
  </div>
</div>
    );
};

export default Product;
