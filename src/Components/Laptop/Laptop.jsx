import { Link } from "react-router-dom";

const Laptop = ({laptop}) => {
  const {product_title,product_id,price,product_image} = laptop || {}
    return (
      <div className="card bg-base-100 shadow-xl">
      <figure className="px-6">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price:{price}</p>
        <div className="card-actions">
          <Link to={`/products/${product_id}`} className="btn btn-outline text-[#9538E2] rounded-3xl">Viwe Details</Link>
        </div>
      </div>
    </div>
    );
};

export default Laptop;