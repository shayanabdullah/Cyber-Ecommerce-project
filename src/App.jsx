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

const App = () => {

  const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop/:category", element: <Shop /> },
      { path: "shop/phones/:details", element: <ProductDetails/> },
      { path: "cart", element: <Cart/> },
      { path: "cart/address", element: <Address/> },
      { path: "cart/shipping", element: <ShippningPage/> },
      { path: "cart/payment", element: <Payment/> },
      { path: "*", element: 'No Data Found' },
    ],
  },

  ])

  
  return  <RouterProvider router={router} />;
}

export default App