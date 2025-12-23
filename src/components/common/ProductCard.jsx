import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";

const ProductCard = ({img, brand, name, reviews, mainPrice, discountPercentage, discountPrice, phoneId, alt}) => {
  const [quantities, setQuantities] = useState({});

  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };
  return (
    <div className="card pt-12 pb-4 pr-3 xl:pr-4.5 pl-4 w-full max-w-[330px] xl:max-w-full xl:pl-6 rounded-3xl border border-[#D8D9E0] relative cursor-pointer transition-all duration-200 ease-in-out hover:shadow-xl max-h-[550px] h-full flex flex-col justify-center ">
      <div className="p-2 rounded-full bg-[#E9F0FF] transition-all duration-200 ease-in-out hover:bg-[#dadada] text-2xl absolute top-3 right-2 cursor-pointer">
        <i>
          <GoLaw />
        </i>
      </div>
      <div className="img w-full flex justify-center items-center pb-6 max-h-[280px]">
        <img
          src={img || 'no image found'}
          alt={alt}
          className=" max-h-[280px] h-full object-cover"
        />
      </div>
      <div className="">
        <div className="text">
          <div className="flex items-center justify-between ">
            <div className="">
              <h2 className="font-inter font-medium text-base text-[#363842] pb-2">
                {brand} {name}
              </h2>
            </div>
            <div className="p-2 rounded-full bg-[#363842] text-white text-sm absolute top-2 left-2 md:static md:text-2xl cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#555761]">
              <IoHeartOutline />
            </div>
          </div>
          {/* rating and reviews  */}
          <div className="rating flex flex-col md:flex-row md:items-center gap-3 pb-2">
            <div className="stars flex gap-1 items-center text-sm md:text-base text-[#E29823]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            {/* reviews */}
            <div className="reviews flex items-center gap-1 text-base text-[#81859C] font-inter font-medium">
              <i>
                <LuMessageSquareMore />
              </i>
              <span className="text-xs underline">{reviews}</span>
            </div>
          </div>
          {/* price */}
          <div className="">
            <div className="flex items-center gap-3 pt-2 pb-2.5">
              <p className="font-inter font-medium text-sm md:text-base text-[#81859C] line-through">
                ${mainPrice}.00
              </p>
              <div className="font-inter font-medium text-xs md:text-sm text-[#102B6B] bg-[#E9F0FF] p-0.5 rounded-sm ">
                <p>-{discountPercentage}%</p>
              </div>
            </div>
            <div className="main-price pb-5">
              <h2 className="font-inter font-semibold text-[19px] md:text-[27px] text-[#363842] ">
                ${discountPrice}.00
              </h2>
            </div>
          </div>
          {/* button and quantity  */}
          <div className="flex flex-col md:flex-row xs:items-center gap-5 md:gap-8">
            {/* quantity */}
            <div className="flex items-center gap-3">
              <button
                className="py-1 px-2 rounded-md bg-[#2E2E2E] text-white text-sm font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#555761]"
                onClick={() => handleDecrement(phoneId)}
              >
                –
              </button>
              <input
                type="text"
                placeholder="1"
                className="p-1  outline-0 focus-within:border-[#363842] border border-[#E9F0FF] rounded-sm text-xs font-inter font-medium text-[#363842] max-w-10 h-7 text-center"
                value={quantities[phoneId] || 1}
                readOnly
              />
              <button
                className="py-1 px-2 rounded-md bg-[#2E2E2E] text-white text-sm font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#555761]"
                onClick={() => handleIncrement(phoneId)}
              >
                +
              </button>
            </div>
            <button className=" py-2 md:py-2.5 w-full bg-[#2E2E2E] text-white rounded-lg text-xs md:text-sm font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#39393b]">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
