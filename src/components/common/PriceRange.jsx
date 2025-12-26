import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const PriceRange = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(99999);
  const [price, setPrice] = useState([min, max]);
  const [isOpen, setIsOpen] = useState(true);
  const [minInput, setMinInput] = useState("");
  const [maxInput, setMaxInput] = useState("99999");
  useEffect(() => {
    setPrice([min, max]);
  }, [min, max]);

  return (
    <>
      <div className="max-w-[320px] lg:max-w-full px-4 xl:px-0">
        <div className={`cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
          <div className="text-box text-lg font-poppins font-medium text-black flex justify-between  py-3 border-b-2 border-gray-650/60">
            <p>Price</p>
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
          className={`price-range-box pt-6 overflow-hidden transition-all duration-300 ${
            isOpen
              ? "max-h-[450px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="flex items-center justify-between pb-2 text-sm font-sf-pro font-normal text-gray-700">
            <p>From</p>
            <p>To</p>
          </div>
          <div className="flex justify-between gap-4 items-center pb-4">
            <input
              type="number"
              className="py-2 outline-neutral-400 border border-gray-800 rounded-[3px] pl-2.5 text-sm font-sf-pro font-normal text-black placeholder:text-black lg:max-w-[100px] xl:max-w-full w-full"
              placeholder="0"
              name="min"
              value={minInput}
              onChange={(e) => {
                const val = e.target.value;
                setMinInput(val);
                setPrice([Number(val || 0), price[1]]);
              }}
            />

            <p className="text-gray-500">―</p>

            {/* max */}
            <input
              type="number"
              className="py-2 outline-neutral-400 border border-gray-800 rounded-[3px] pl-2.5 text-sm font-sf-pro font-normal text-black placeholder:text-black lg:max-w-[100px] xl:max-w-full w-full"
              placeholder="9999"
              name="max"
              value={maxInput}
              onChange={(e) => {
                const val = e.target.value;
                setMaxInput(val);
                setPrice([price[0], Number(val || max)]);
              }}
            />
          </div>

          {/* Price range slider */}
          <div className="pb-7">
            <RangeSlider
              id="range-slider-yellow"
              min={0}
              max={max}
              step={10}
              value={price}
              onInput={(rangeVal) => {
                setPrice(rangeVal);
                setMinInput(String(rangeVal[0]));
                setMaxInput(String(rangeVal[1]));
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
