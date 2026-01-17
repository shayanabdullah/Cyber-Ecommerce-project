import React from 'react'
import Container from './components/common/Container'
import Home from './pages/Home'
import { createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './pages/Cart'
import Address from './pages/Address'
import ShippningPage from './pages/ShippningPage'
import Payment from './components/common/Payment'
import Products from './components/common/Test'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {

  const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
  { path: "/shop/category/:category", element: <Shop /> },
{ path: "/shop/category/:category/:id", element: <ProductDetails /> },

      { path: "cart", element: <Cart/> },
      { path: "checkout/address", element: <Address/> },
      { path: "checkout/shipping", element: <ShippningPage/> },
      { path: "checkout/payment", element: <Payment/> },
      { path: "/register", element: <Register/> },
      { path: "/login", element: <Login/> },
      { path: "/test", element: <Products/> },
      { path: "*", element: 'No Data Found' },
    ],
  },

  ])

  
  return  <RouterProvider router={router} />;
}

export default App