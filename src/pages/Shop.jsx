import BreadCrums from "@/components/common/BreadCrums";
import Catagory from "@/components/common/Catagory";
import Container from "@/components/common/Container";
import PriceRange from "@/components/common/PriceRange";
import { builtInMemory } from "@/data/phoneMemory";
import { smartpohonesBrands } from "@/data/smartphonesBrands";
import { specsAccordionData } from "@/data/specsAccordion";
import { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { smartphones } from "@/data/smartphonesApi";
import { FiFilter } from "react-icons/fi";
import ProductCard from "@/components/common/ProductCard";
import Pagination from "@/components/common/Pagination";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Shop = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [sortType, setSortType] = useState("Default");
  const [perPage, setPerPage] = useState(9);

  const [currentPageActive, setCurrentPageActive] = useState(0);

  const pageNumber = perPage;
  const numOfPage = Math.ceil(smartphones.length / pageNumber);
  const start = currentPageActive * pageNumber;
  const end = start + pageNumber;

  const [filterOpen, setFilteropen] = useState(false);

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
                        key={index}
                        defaultOpen={index < specsAccordionData.length - 4}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="right pb-8 lg:w-[70%] mx-auto">
                <div className="top flex items-center justify-between w-full border-b pb-3 border-gray-400 mb-8">
                  <div className="w-full">
                    <h2 className="font-poppins font-medium text-[11px] xs:text-sm md:text-lg text-gray-dark-400 flex items-center gap-1 xs:gap-2  ">
                      Showing
                      <span className="text-xs xs:text-sm md:text-xl text-black">
                        {smartphones.slice(start, end).length} products:
                      </span>
                    </h2>
                  </div>
                  {/* filter prodcuts dropdown (high and Low) */}
                  <div className="flex items-center justify-between pl-6 xs:gap-0  md:gap-5! md:pr-0 xs:pr-2 md:max-w-[30%] w-full">
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
                    <div
                      className="filter filter-btn lg:hidden text-xl cursor-pointer py-2"
                      onClick={() => setFilteropen(true)}
                    >
                      <i>
                        <FiFilter />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 items-center gap-4 md:gap-6 lg:gap-4 transition-all duration-200 ease-in-out">
                  {smartphones.slice(start, end).map((phone) => (
                    <Link to={`/shop/phones/${phone.brand + phone.name}`}>
                      <ProductCard
                        name={phone.name}
                        brand={phone.brand}
                        img={phone.img}
                        reviews={phone.reviews}
                        discountPercentage={phone.discountPercentage}
                        discountPrice={phone.discountPrice}
                        mainPrice={phone.price}
                        key={phone.id}
                        alt={`${phone.name}img`}
                        wishId={phone.id}
                      />
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                <Pagination
                  currentPage={currentPageActive}
                  setCurrentPage={setCurrentPageActive}
                  totalPages={numOfPage}
                  perPage={perPage}
                  setPerPage={setPerPage}
                />
              </div>
            </div>

            {/* mobile filter */}
            <div className="lg:hidden w-full  relative">
              <div
                className={`flex flex-col max-w-[350px] w-full h-screen bg-white fixed overflow-y-scroll overflow-x-hidden top-0 z-99 custom-scroll-2 transition-all duration-200 ${
                  filterOpen ? "left-0" : "-left-full"
                }`}
              >
                <i
                  className="absolute text-2xl top-5 right-4 cursor-pointer "
                  onClick={() => setFilteropen(false)}
                >
                  <HiX />
                </i>

                <div className={`left  py-10! px-5 `}>
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
                        key={index}
                        defaultOpen={index < specsAccordionData.length - 4}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`overlay fixed top-0 w-full bg-black/60 backdrop-blur-sm h-screen z-98 ${
                  filterOpen ? "" : "hidden"
                }`}
                onClick={() => setFilteropen(false)}
              ></div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Shop;
