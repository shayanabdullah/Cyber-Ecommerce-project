import React from 'react'
import Container from './components/common/Container'
import Home from './pages/Home'
import { createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails/ProductDetails'

const App = () => {

  const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop/:category", element: <Shop /> },
      { path: "/shop/phones/:details", element: <ProductDetails/> },
      { path: "*", element: 'No Data Found' },
    ],
  },

  ])

  return  <RouterProvider router={router} />;
}

export default App