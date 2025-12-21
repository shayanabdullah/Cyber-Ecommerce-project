import BreadCrums from "@/components/common/BreadCrums";
import Catagory from "@/components/common/Catagory";
import Container from "@/components/common/Container";
import PriceRange from "@/components/common/PriceRange";
import { builtInMemory } from "@/data/phoneMemory";
import { smartpohonesBrands } from "@/data/smartphonesBrands";
import { specsAccordionData } from "@/data/specsAccordion";
import { useState } from "react";
import {
  FaCheck,
  FaChevronDown,
  FaFilter,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import iphone from "@/assets/products-images/iphone-15pro.svg";
import { IoHeartOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { GoLaw } from "react-icons/go";
import { smartphones } from "@/data/smartphonesApi";
import { FiFilter } from "react-icons/fi";

const Shop = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [sortType, setSortType] = useState("Default");
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
    <>
      <main className="px-4 xl:px-0">
        <BreadCrums />
        <section className="">
          <Container>
            <div className="main flex gap-8">
              <div className="border-r border-gray-400 pr-5 lg:w-[30%] hidden lg:block">
                <div className={`left `}>
                  <div className={``}>
                    <PriceRange />
                  </div>
                  <div className="flex flex-col gap-y-6">
                    <Catagory title={"Brand"} arrMap={smartpohonesBrands} />
                    <Catagory
                      title={"Built-in memory"}
                      arrMap={builtInMemory}
                    />
                    {specsAccordionData.map((item, index) => (
                      <Catagory
                        title={item.title}
                        arrMap={item.options}
                        
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="right pb-14 lg:w-[70%] mx-auto">
                <div className="top flex items-center justify-between w-full border-b pb-3 border-gray-400 mb-8">
                  <div className="w-full">
                    <h2 className="font-poppins font-medium text-[11px] xs:text-sm md:text-lg text-gray-dark-400 flex items-center gap-1 xs:gap-2  ">
                     Showing 
                      <span className="text-xs xs:text-sm md:text-xl text-black">
                        {smartphones.length}  products:
                      </span>
                    </h2>
                  </div>
                  {/* filter prodcuts dropdown (high and Low) */}
                  <div className="flex items-center justify-between pl-6 xnps:gap-0  md:gap-5! md:pr-0 xs:pr-2 md:max-w-[30%] w-full">
                    <div
                      className={`select md:max-w-60! max-w-25 w-full relative`}
                      onClick={() => setDropDownOpen(!dropDownOpen)}
                    >
                      <div className="flex items-center justify-between gap-2 py-1 md:py-3! pl-4 pr-2 border border-gray-400 rounded-lg cursor-pointer">
                        <h2 className="font-figtree font-normal text-xs md:text-[15px]">
                          {sortType}
                        </h2>
                        <FaChevronDown
                          className={`text-gray-700 transition-all duration-200 ease-in-out text-xs  ${
                            dropDownOpen ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>

                      <div
                        className={`options py-2 md:py-4 border w-full absolute top-[120%] z-10 bg-white left-0 transition-all duration-200 ease-in-out border-gray-400 rounded-lg cursor-pointer ${
                          dropDownOpen ? " block " : "hidden"
                        }`}
                      >
                        <ul className="flex flex-col drop-price text-[11px] md:text-[15px] ">
                          <li
                            className="font-figtree font-normal flex items-center justify-between "
                            onClick={(e) => {
                              e.stopPropagation();
                              setDropDownOpen(false);
                              setSortType("Default");
                            }}
                          >
                            Default
                            {sortType === "Default" && (
                              <FaCheck
                                className={` text-xs md:text-sm text-gray-950`}
                              />
                            )}
                          </li>
                          <li
                            className="font-figtree font-normal  flex items-center justify-between"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDropDownOpen(false);
                              setSortType("Price Low to High");
                            }}
                          >
                            Price Low to High
                            {sortType === "Price Low to High" && (
                              <FaCheck className="text-sm text-gray-950" />
                            )}
                          </li>
                          <li
                            className="font-figtree font-normal  flex items-center justify-between"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDropDownOpen(false);
                              setSortType("Price High to Low");
                            }}
                          >
                            Price High to Low
                            {sortType === "Price High to Low" && (
                              <FaCheck className="text-sm text-gray-950" />
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="filter filter-btn lg:hidden text-xl cursor-pointer">
       
                        <i>
                          <FiFilter />
                        </i>
       
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 items-center gap-4 md:gap-6 lg:gap-4">
                  {smartphones.map((phone) => (
                    <div className="card pt-12 pb-4 pr-3 xl:pr-4.5 pl-4 w-full max-w-[330px] xl:max-w-full xl:pl-6 rounded-3xl border border-[#D8D9E0] relative cursor-pointer transition-all duration-200 ease-in-out hover:shadow-xl max-h-[550px] h-full flex flex-col justify-center ">
                      <div className="p-2 rounded-full bg-[#E9F0FF] transition-all duration-200 ease-in-out hover:bg-[#dadada] text-2xl absolute top-3 right-2 cursor-pointer">
                        <i>
                          <GoLaw />
                        </i>
                      </div>
                      <div className="img w-full flex justify-center items-center pb-6 max-h-[280px]">
                        <img
                          src={phone.img || iphone}
                          alt=""
                          className=" max-h-[280px] h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <div className="text">
                          <div className="flex items-center justify-between ">
                            <div className="">
                              <h2 className="font-inter font-medium text-base text-[#363842] pb-2">
                                {phone.brand} {phone.name}
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
                              <span className="text-xs underline">
                                {phone.reviews}
                              </span>
                            </div>
                          </div>
                          {/* price */}
                          <div className="">
                            <div className="flex items-center gap-3 pt-2 pb-2.5">
                              <p className="font-inter font-medium text-sm md:text-base text-[#81859C] line-through">
                                ${phone.price}.00
                              </p>
                              <div className="font-inter font-medium text-xs md:text-sm text-[#102B6B] bg-[#E9F0FF] p-0.5 rounded-sm ">
                                <p>-{phone.discountPercentage}%</p>
                              </div>
                            </div>
                            <div className="main-price pb-5">
                              <h2 className="font-inter font-semibold text-[19px] md:text-[27px] text-[#363842] ">
                                ${phone.discountPrice}.00
                              </h2>
                            </div>
                          </div>
                          {/* button and quantity  */}
                          <div className="flex flex-col md:flex-row xs:items-center gap-5 md:gap-8">
                            {/* quantity */}
                            <div className="flex items-center gap-3">
                              <button
                                className="py-1 px-2 rounded-md bg-[#2E2E2E] text-white text-sm font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#555761]"
                                onClick={() => handleDecrement(phone.id)}
                              >
                                –
                              </button>
                              <input
                                type="text"
                                placeholder="1"
                                className="p-1  outline-0 focus-within:border-[#363842] border border-[#E9F0FF] rounded-sm text-xs font-inter font-medium text-[#363842] max-w-10 h-7 text-center"
                                value={quantities[phone.id] || 1}
                                readOnly
                              />
                              <button
                                className="py-1 px-2 rounded-md bg-[#2E2E2E] text-white text-sm font-inter font-medium cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#555761]"
                                onClick={() => handleIncrement(phone.id)}
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
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Shop;
