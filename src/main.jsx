import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';
import Laptops from './Components/Laptops/Laptops';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import CartLists from './Components/CartList/CartLists';
import AboutUs from './Components/AboutUs/AboutUs';





const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
   
    children:[

    {
    path:'/',
    element:<Home></Home>,
    loader:() => fetch('../categories.json'),
    children:[

      {
        path:'/',
        element:<Laptops></Laptops>,
        loader: () => fetch('../allProducts.json'),
      },
      {
        path:'/category/:category',
        element:<Laptops></Laptops>,
        loader: () => fetch('../allProducts.json'),


      },
    ]
    },

    {
      path:'/aboutus',
      element:<AboutUs></AboutUs>
    },

    {

      path:'products/:product_id',
      element:<ProductDetail></ProductDetail>,
      loader:() => fetch('../allProducts.json')


    },
    {
      path:'statistics',
      element:<Statistics></Statistics>
    },

  

    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      loader:() => fetch('../allProducts.json'),
      children:[

        {
      path:'products/:product_id',
      element:<CartLists></CartLists>,
      loader:() => fetch('../allProducts.json')
        }


      ]
    }
  

     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer/>
  </StrictMode>,
)
