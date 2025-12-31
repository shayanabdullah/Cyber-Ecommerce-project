import ShopButton from "@/components/common/ShopButton";
import { discountProducts } from "@/data/discountProducts";
import { Container } from "@mui/material";
import React, { useState } from "react";
import { FaFire, FaHeart, FaRegHeart } from "react-icons/fa";

const DiscountProductSection = () => {
  const [wishlist, setWishList] = useState({});
  const handleWish = (id) => {
    setWishList((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <>
    <section className="py-20">
      <Container>
        <div className="header pb-8">
                <h3 className='font-poppins font-medium text-2xl leading-8 text-black'>Discounts up to -50%</h3>
        </div>
          <div className="main grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {discountProducts.map((item) => (
                      <div
                        className="card py-6 md:px-10 px-6 bg-gray-200 rounded-[10px] flex flex-col  cursor-pointer group w-full relative"
                        key={item.id}
                      >
                          <div className={`absolute top-3 left-2 py-1 px-2 bg-black rounded-[10px] ${item.sale ? 'block' : 'hidden'}`}>
                          <p className="flex items-center gap-2 text-white font-poppins font-medium md:text-base text-sm">-{item.discountPercent}%</p>
                        </div>
                     
                      
                        <div
                          className="w-full text-2xl text-gray-dark-100/77 flex items-center justify-end pb-4"
                          onClick={() => handleWish(item.id)}
                        >
                          {wishlist[item.id] ? (
                            <FaHeart className="text-red" />
                          ) : (
                            <i className="">
                              <FaRegHeart />
                            </i>
                          )}
                        </div>
                        <div className="w-full h-full flex justify-center items-center">
                          <img
                            src={item.img}
                            alt=""
                            className="pb-4  w-full group-hover:scale-[1.10] transition-all duration-200 ease-in-out"
                          />
                        </div>
                     <div className="w-full h-full flex flex-col justify-end">
                         <h4 className="pb-4 font-poppins font-medium md:text-lg text-sm text-center text-black">
                          {item.title}
                        </h4>
                        <p className="pb-6 font-poppins font-semibold md:text-2xl text-lg text-center text-black flex items-center justify-center gap-2">
                          ${item.price} <span className={` text-sm md:text-[19px]! text-gray-dark-200 line-through ${item.sale ? 'block' : 'hidden'}`}>${item.previousPrice}</span>
                        </p>
                        <ShopButton
                          text={"Buy Now"}
                          className={
                            "bg-black! text-white! rounded-lg! flex! justify-center "
                          }
                        />
                     </div>
                      </div>
                    ))}
                  </div>
      </Container>
    </section>
    </>
  );
};

export default DiscountProductSection;
