import React from "react";
import Container from "./components/common/Container";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import ShippningPage from "./pages/ShippningPage";
import Payment from "./components/common/Payment";
import Products from "./components/common/Test";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/profile/Profile";
import MainLayout from "./pages/profile/MainLayout";
import AddressBook from "./pages/profile/AddressBook";
import PaymentSettings from "./pages/profile/PaymentSettings";
import ProfileWishlist from "./pages/profile/ProfileWishlist";
import Wishlist from "./pages/Wishlist";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/shop/category/:category", element: <Shop /> },
        { path: "/shop/category/:category/:id", element: <ProductDetails /> },
        { path: "cart", element: <Cart /> },
        { path: "checkout/address", element: <Address /> },
        { path: "checkout/shipping", element: <ShippningPage /> },
        { path: "checkout/payment", element: <Payment /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "test", element: <Products /> },


        {
        path: "account",
        element: <MainLayout />,  // Sidebar layout
        children: [
          { path: "profile", element: <Profile /> },
          { path: "address-book", element: <AddressBook /> },
          { path: "payment-settings", element: <PaymentSettings /> },
          { path: "wishlist", element: <ProfileWishlist /> },
        ],
      },


        { path: "*", element: "No Data Found" },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
