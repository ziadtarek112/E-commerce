import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './app/components/Layout';
import Home from './app/pages/home/Home';
import Product from './app/pages/product/Product';
import Products from './app/pages/products/Products';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/products/:id',
        element : <Products/>
      },
      {
        path : '/product/:id',
        element : <Product/>
      }
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
