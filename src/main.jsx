import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './Componnents/Shop/Shop.jsx';
import HomeLayout from './Componnents/Layout/HomeLayout.jsx';
import Orders from './Componnents/Orders/Orders.jsx';
import Inventory from './Componnents/Inventory/Inventory.jsx';
import Login from './Componnents/Login/Login.jsx';
import cartProductsLoader from './Componnents/Loaders/cartProductsLoader.js';

const router = createBrowserRouter([

  {
    path:'/',
    element:<HomeLayout></HomeLayout>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'orders',
        element:<Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path:'inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    
  </React.StrictMode>,
)
