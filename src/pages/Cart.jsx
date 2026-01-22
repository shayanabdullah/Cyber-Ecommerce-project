import Container from "@/components/common/Container";
import React, { useState } from "react";
import iphone17 from "../assets/products-images/iphone-17pro.png";
import watch from "../assets/watch.svg";
import macbook from "../assets/macbook-air.png";
import emptyCart1 from "../assets/empty-cart-1.png";
import emptyCart2 from "../assets/empty-cart-2.png";
import emptyCart3 from "../assets/empty-cart-3.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { smartphones } from "@/data/smartphonesApi";
import { IoCloseOutline } from "react-icons/io5";
import Form from "@/components/common/Form";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, updateQuantities } from "../redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.cart.items)

 const increment = (item) => {
  dispatch(updateQuantities({
    id: item.id,
    quantity : item.quantity + 1,
  }))
 }
 const decrement = (item) => {
  dispatch(updateQuantities({
    id: item.id,
    quantity : item.quantity > 1 ? item.quantity - 1 : item.quantity,
  }))
 }

const subtotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);


const handleDelete = (id) => {
  dispatch(removeCart(id))
}


 

  const price = smartphones[0].discountPrice;
  return (
    <>
      <section className="py-[72px] px-4">
        <Container>
          <div className="main grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="">
              <div className="header ">
                <h2 className="font-poppins font-semibold  text-2xl leading-6 text-black">
                  Shopping Cart
                </h2>
              </div>

              {/* cart items */}

              <div className="">
                {cartItems.map((cart) => (
                  <div
                    className="py-10 border-b border-[#A3A3A3] last:border-b-0"
                    key={cart.id}
                  >
                    <div className="cart py-4  flex items-center gap-4">
                      <div className="img max-w-[90px] w-full">
                        <img src={cart.thumbnail} alt="" />
                      </div>
                      <div className="cart-details w-full flex flex-col md:flex-row justify-between">
                        <div className="text pb-2">
                          <h2 className="font-poppins font-medium text-base leading-6 text-black max-w-[190px] pb-2">
                            {cart.title}
                          </h2>
                          <p className="font-sf-pro font-normal text-sm leading-6 text-black/70 pb-2">
                            #{cart?.sku}
                          </p>
                        </div>
                        <div className="flex items-center justify-center md:justify-between gap-6">
                          <div className="flex items-center gap-3">
                            <button
                              className="py-1 px-2 rounded-md text-black text-lg font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#dddd]"
                              onClick={() => decrement(cart)}
                            >
                              <FiMinus />
                            </button>
                            <input
                              type="text"
                              placeholder="1"
                              className="p-1  outline-0 focus-within:border-[#363842] border border-[#E9F0FF] rounded-sm text-base font-inter font-medium text-[#363842] text-center max-w-10"
                              value={cart.quantity}
                              readOnly
                            />
                            <button className="py-1 px-2 rounded-md text-black text-lg font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#dddd]" onClick={()=> increment(cart)}>
                              <GoPlus />
                            </button>
                          </div>
                          <div className="price">
                            <p className="font-poppins font-medium  text-xl leading-6 text-black">
                              ${Math.round(cart.price )* cart.quantity}
                            </p>
                          </div>
                          <div
                            className="close text-xl cursor-pointer"
                            onClick={() => handleDelete(cart.id)}
                          >
                            <IoCloseOutline />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
         
            </div>
            
            <div className="">{cartItems.length > 0 && <Form subtotal={Math.round(subtotal)}/>}</div>
          </div>
          {/* EMPTY CART message */}
               {cartItems.length === 0 && (
                <div className="w-full h-full flex items-center flex-col justify-center  py-20">
                  <div className="pb-10">
                    <img src={emptyCart1} alt="" className="max-w-[200px]" />
                  </div>
                  <h2 className="font-poppins font-semibold  text-2xl leading-6 text-black pb-5">
                    Your cart is empty!
                  </h2>
                  <p className="font-poppins font-medium text-lg leading-6 text-gray-700 text-center">
                    Looks like haven't added anything to your cart yet.
                  </p>
                </div>
              )}
        </Container>
      </section>
    </>
  );
};

export default Cart;
