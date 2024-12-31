import React from 'react';
import Cart from '../Cart/Cart';

const CartLists = () => {


  const data = useLoaderData()
   const {products} = useParams()
   const [product,setProduct] = useState([])
   useEffect (()=>
    {
       
        
            const filteredById = [...data].filter(
                cart => cart.products == products
            )
    
            setProduct(filteredById)
        

        // else if(laptop => laptop.category[0] == category){

        //     setTec(data)

        // }
       
    },[products,data])
  return (
    <div>

        {
             product.map(cart => <Cart cart = {cart}></Cart>)
              
         }
      
    </div>
  );
};

export default CartLists;