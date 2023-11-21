import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Product from './Components/Product.jsx'
import Signup from './components/Signup.jsx'
import Signin from './Components/Signin.jsx'
import Signbase from './Signbase.jsx'
import Cart from './Components/Cart.jsx'
import Checkout from './Components/Checkout.jsx'

const mainRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Product',
        element: <Product />,
      },
      {
        path: 'Cart',
        element: <Cart />,
      },
      
    ],
  },
];

const authRoutes = [
  {
    path: '/',
    element: <Signbase />,
    children: [
      {
        path: 'Signin',
        element: <Signin />,
      },
      {
        path: 'Signup',
        element: <Signup />,
      },
    ],
  },
];

const lastRoutes = [{
  path: 'Checkout',
  element:<Checkout/>

}]

const allRoutes = [...mainRoutes, ...authRoutes, ...lastRoutes];

const router = createBrowserRouter(allRoutes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
