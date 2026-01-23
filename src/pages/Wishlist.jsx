import Container from "@/components/common/Container";
import React, { useState } from "react";
import emptyWishlist1 from "../assets/emptyWishlist.svg";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, removeCart, updateQuantities } from "../redux/CartSlice";
import {
  removeWishlist,
  wishlistUpdateQuantities,
} from "../redux/wishlistSlice";
import ShopButton from "../components/common/ShopButton";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const notifyWishlist = () =>
    toast.error(`Product remove to your wishlist`, {
      className: "font-poppins! font-medium! text-black/90! bg-white!",
      toastClassName: "bg-red!",
      progressClassName: "bg-red-500! rounded-md",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const increment = (item) => {
    dispatch(
      wishlistUpdateQuantities({
        id: item.id,
        quantity: item.quantity + 1,
      }),
    );
  };
  const decrement = (item) => {
    dispatch(
      wishlistUpdateQuantities({
        id: item.id,
        quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
      }),
    );
  };

  const handleDelete = (id) => {
    dispatch(removeWishlist(id));
    notifyWishlist();
  };

  const handleAddToCart = (item) => {
    dispatch(
      addtocart({
        id: item.id,
        title: item.title,
        price: item.price,
        thumbnail: item.thumbnail,
        quantity: item.quantity,
        sku: item.sku,
      }),
    );
  };
const slugify = (text) => text?.toLowerCase().replace(/\s+/g, "-");
;

  return (
    <>
      <section className="py-[72px] px-4">
        <ToastContainer />
        <Container>
          <div className="main grid grid-cols-1 gap-12">
            <div className="">
              <div className="header ">

                
                <h2 className="font-poppins font-semibold  text-2xl leading-6 text-black pb-2">
                  My Wishlist
                </h2>
                <p className="font-poppins font-medium text-base leading-6 text-gray-dark-300">
                  Your favorite picks, all in one place.
                </p>
              </div>

              {/* cart items */}

              <div className="">
                {wishlistItems.map((wishlist) => (
                  <div
                    className="py-10 border-b border-[#A3A3A3] last:border-b-0 cursor-pointer"
                    key={wishlist.id}
                  >
                   <Link to={`/shop/category/${slugify(wishlist.title || wishlist.name)}/${wishlist.id}`}>
                    <div className="w-full flex flex-col md:flex-row justify-between">
                      <div className="wishlist py-4  flex items-center gap-4">
                        <div className="img max-w-[90px] w-full">
                          <img src={wishlist.thumbnail} alt="" />
                        </div>
                        <div className="wishlist-details w-full flex flex-col md:flex-row justify-between">
                          <div className="text pb-2">
                            <h2 className="font-poppins font-medium text-base leading-6 text-black max-w-[190px] pb-2">
                              {wishlist.title}
                            </h2>
                            <p className="font-sf-pro font-normal text-sm leading-6 text-black/70 pb-2">
                              #{wishlist?.sku}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap justify-between md:justify-start gap-6">
                        <div className="flex justify-between md:justify-end items-center w-full">
                          <div className="flex items-center gap-3">
                            <button
                              className="py-1 px-2 rounded-md text-black text-lg font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#dddd]"
                              onClick={() => decrement(wishlist)}
                            >
                              <FiMinus />
                            </button>
                            <input
                              type="text"
                              placeholder="1"
                              className="p-1  outline-0 focus-within:border-[#363842] border border-[#E9F0FF] rounded-sm text-base font-inter font-medium text-[#363842] text-center max-w-10"
                              value={wishlist.quantity}
                              readOnly
                            />
                            <button
                              className="py-1 px-2 rounded-md text-black text-lg font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#dddd]"
                              onClick={() => increment(wishlist)}
                            >
                              <GoPlus />
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="price">
                              <p className="font-poppins font-medium  text-xl leading-6 text-black">
                                $
                                {Math.round(wishlist.price) * wishlist.quantity}
                              </p>
                            </div>
                            <div
                              className="close text-xl cursor-pointer"
                              onClick={() => handleDelete(wishlist.id)}
                            >
                              <IoCloseOutline />
                            </div>
                          </div>
                        </div>
                        <div className="w-full text-end">
                          <ShopButton
                            text="Add to Cart"
                            className="bg-black! py-3! px-5!"
                            onClick={() => handleAddToCart(wishlist)}
                          />
                        </div>
                      </div>
                    </div>
                   </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* EMPTY wishlist message */}
          {wishlistItems.length === 0 && (
            <div className="w-full h-full flex items-center flex-col justify-center  py-20">
              <div className="pb-10">
                <img src={emptyWishlist1} alt="" className="min-w-[300px]" />
              </div>
              <h2 className="font-poppins font-semibold  text-2xl leading-6 text-black pb-5">
                Your wishlist is empty!
              </h2>
              <p className="font-poppins font-medium text-lg leading-6 text-gray-700 text-center">
                Looks like you haven’t saved anything yet.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default Wishlist;
