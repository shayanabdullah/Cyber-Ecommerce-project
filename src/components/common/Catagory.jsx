import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

const Catagory = ({ title, arrMap, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [searchValue, setsearchValue] = useState("");
  const handleInput = (e) => {
    const value = e.target.value;
    setsearchValue(value);
  };

  const serchResults = arrMap.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="max-w-[320px] xl:max-w-full px-4 xl:px-0">
      <div className={`cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
        <div className="text-box text-lg font-poppins font-medium text-black flex justify-between py-3 border-b-2 border-gray-650/60">
          <p>{title}</p>
          <i
            className={` transition-transform duration-200 ease-in-out ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <FaChevronDown />
          </i>
        </div>
      </div>

      <div
        className={`pt-6  overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-[450px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="max-h-72 overflow-hidden overflow-y-scroll custom-scroll mb-4">
          <div className="pb-4">
            <div className="search relative w-full rounded-lg  pr-8">
              <i className="absolute top-2.5 left-4  text-[26px] text-gray-850 ">
                <CiSearch />
              </i>
              <input
                type="text"
                className="py-3 pl-12 bg-gray-150 font-poppins rounded-lg outline-0 border border-transparent focus-within:border-gray-400 w-full text-base font-medium text-gray-dark-450 leading-5"
                name="search"
                placeholder="Search"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 pb-4">
            {serchResults?.map((item) => (
              <div className="cursor-pointer" key={item.id}>
                <input
                  type="checkbox"
                  id={`cat-${item.id}`}
                  htmlFor={`cat-${item.id}`}
                  className="checked:accent-black cursor-pointer"
                />
                <label
                  id={`cat-${item.id}`}
                  htmlFor={`cat-${item.id}`}
                  className="pl-2 font-sf-pro font-semibold text-base leading-6 cursor-pointer "
                >
                  {item.name}
                  <span className="pl-2 text-xs font-normal! text-[#929292]">
                    {item.count}
                  </span>
                </label>
              </div>
            ))}
            {/* error */}
            {serchResults.length === 0 ? (
              <p className="text-base font-figtree font-medium text-gray-dark-300 text-center py-4">
                No data found
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
