import Container from "@/components/common/Container";
import React from "react";
import iphone17 from "../assets/products-images/iphone-17pro.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { smartphones } from "@/data/smartphonesApi";
import { IoCloseOutline } from "react-icons/io5";
const Cart = () => {
    const price = smartphones[0].discountPrice 
  return (
    <>
      <section className="py-[72px] px-4">
        <Container>
          <div className="main grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="">
              <div className="header pb-10">
                <h2 className="font-poppins font-semibold  text-2xl leading-6 text-black">
                  Shopping Cart
                </h2>
              </div>
              {/* cart items */}
   
   <div className="">
       <div className="pb-10 border-b border-[#A3A3A3] last:border-b-0">
                <div className="cart py-4  flex items-center gap-4">
                <div className="img max-w-[90px] w-full">
                  <img src={iphone17} alt="" />
                </div>
                <div className="cart-details w-full flex flex-col md:flex-row justify-between">
                  <div className="text pb-2">
                    <h2 className="font-poppins font-medium text-base leading-6 text-black max-w-[190px] pb-2">
                      Iphone 17 pro 256gb
                    </h2>
                    <p className="font-sf-pro font-normal text-sm leading-6 text-black/70">
                      #25139526913984
                    </p>
                  </div>
               <div className="flex items-center justify-center md:justify-between gap-6">
                   <div className="flex items-center gap-3">
                    <button className="py-1 px-2 rounded-md text-black text-lg font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#dddd]">
                     <FiMinus/>
                    </button>
                    <input
                      type="text"
                      placeholder="1"
                      className="p-1  outline-0 focus-within:border-[#363842] border border-[#E9F0FF] rounded-sm text-xs font-inter font-medium text-[#363842] text-center max-w-10"
                      value={1}
                      readOnly
                    />
                    <button className="py-1 px-2 rounded-md text-black text-lg font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#dddd]">
                      <GoPlus />
                    </button>
                  </div>
                  <div className="price">
                    <p className="font-poppins font-medium  text-xl leading-6 text-black">${price}</p>
                  </div>
                  <div className="close text-xl cursor-pointer">
                    <IoCloseOutline />

                  </div>
               </div>
                </div>
              </div>
      </div>
      <div className="pb-10 border-b border-[#A3A3A3] last:border-b-0">
                <div className="cart py-4  flex items-center gap-4">
                <div className="img max-w-[90px] w-full">
                  <img src={iphone17} alt="" />
                </div>
                <div className="cart-details w-full flex flex-col md:flex-row justify-between">
                  <div className="text pb-2">
                    <h2 className="font-poppins font-medium text-base leading-6 text-black max-w-[190px] pb-2">
                      Iphone 17 pro 256gb
                    </h2>
                    <p className="font-sf-pro font-normal text-sm leading-6 text-black/70">
                      #25139526913984
                    </p>
                  </div>
               <div className="flex items-center justify-center md:justify-between gap-6">
                   <div className="flex items-center gap-3">
                    <button className="py-1 px-2 rounded-md text-black text-lg font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#dddd]">
                     <FiMinus/>
                    </button>
                    <input
                      type="text"
                      placeholder="1"
                      className="p-1  outline-0 focus-within:border-[#363842] border border-[#E9F0FF] rounded-sm text-xs font-inter font-medium text-[#363842] text-center max-w-10"
                      value={1}
                      readOnly
                    />
                    <button className="py-1 px-2 rounded-md text-black text-lg font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#dddd]">
                      <GoPlus />
                    </button>
                  </div>
                  <div className="price">
                    <p className="font-poppins font-medium  text-xl leading-6 text-black">${price}</p>
                  </div>
                  <div className="close text-xl cursor-pointer">
                    <IoCloseOutline />

                  </div>
               </div>
                </div>
              </div>
      </div>
      <div className="pb-10 border-b border-[#A3A3A3] last:border-b-0">
                <div className="cart py-4  flex items-center gap-4">
                <div className="img max-w-[90px] w-full">
                  <img src={iphone17} alt="" />
                </div>
                <div className="cart-details w-full flex flex-col md:flex-row justify-between">
                  <div className="text pb-2">
                    <h2 className="font-poppins font-medium text-base leading-6 text-black max-w-[190px] pb-2">
                      Iphone 17 pro 256gb
                    </h2>
                    <p className="font-sf-pro font-normal text-sm leading-6 text-black/70">
                      #25139526913984
                    </p>
                  </div>
               <div className="flex items-center justify-center md:justify-between gap-6">
                   <div className="flex items-center gap-3">
                    <button className="py-1 px-2 rounded-md text-black text-lg font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#dddd]">
                     <FiMinus/>
                    </button>
                    <input
                      type="text"
                      placeholder="1"
                      className="p-1  outline-0 focus-within:border-[#363842] border border-[#E9F0FF] rounded-sm text-xs font-inter font-medium text-[#363842] text-center max-w-10"
                      value={1}
                      readOnly
                    />
                    <button className="py-1 px-2 rounded-md text-black text-lg font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#dddd]">
                      <GoPlus />
                    </button>
                  </div>
                  <div className="price">
                    <p className="font-poppins font-medium  text-xl leading-6 text-black">${price}</p>
                  </div>
                  <div className="close text-xl cursor-pointer">
                    <IoCloseOutline />

                  </div>
               </div>
                </div>
              </div>
      </div>
   </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Cart;
