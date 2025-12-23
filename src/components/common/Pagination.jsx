import React, { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  maxButtonShow = 3,
  perPage,
  setPerPage,
}) => {
  const [perPageDropDownOpen, setPerPageDropDownOpen] = useState(false);

  const pages = [...Array(totalPages).keys()];

  const half = Math.floor(maxButtonShow / 2); // 1.5 = 1

  let buttonStartIndex = currentPage - half; // 0 - 1 = -1
  let buttonEndIndex = currentPage + half + 1; // 0 + 1 + 1 = 2

  if (buttonStartIndex < 0) {
    // -1 < 0
    buttonStartIndex = 0; // -1 = 0
    buttonEndIndex = Math.min(totalPages, maxButtonShow); // ex: numofpage = 2 and maxbtn =3 => 2 return or numofpage > maxbtn(3) = 3 return
  }

  if (buttonEndIndex > totalPages) {
    // ex: currentpage = 9 and numpage = 10 btnEndindex = 9 + 1 + 1 = 11 => btnindex > numpage
    buttonStartIndex = totalPages; // btnstartIndex = 9 - 1 = 8 X, btnstartIndex = numpage (10)
    buttonEndIndex = Math.max(0, totalPages - maxButtonShow); // 0 for ex: numpage = 2 then = 2 - 3 = -1 (invalid) -1 = 0 (replace), numpage = 4 - 3 = 1 => slice(btnstartindex(0), 1)
  }
  const paginationButtons = pages.slice(buttonStartIndex, buttonEndIndex); //
  const paginationWithDots = [];

  paginationWithDots.push(...paginationButtons);

  // Last page
  if (buttonEndIndex < totalPages - 1) {
    paginationWithDots.push("...");
    paginationWithDots.push(totalPages - 1);
  }

  const nextPage = (e) => {
    e.preventDefault();
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = (e) => {
    setCurrentPage((prev) => prev - 1);
    e.preventDefault();
  };

  return (
    <>
      <div className="pt-10 w-full flex flex-wrap items-center justify-center gap-4">
        {/* prev btn */}
        <button
          className="cursor-pointer text-black disabled:text-gray-400!"
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          <GoChevronLeft className="text-3xl " />
        </button>

        {paginationWithDots.map((p, i) =>
          p === "..." ? (
            <span key={i} className="px-2 text-[#737373]">
              ...
            </span>
          ) : (
            <button
              key={i}
              onClick={() => setCurrentPage(p)}
              className={`px-3 py-1 rounded font-poppins cursor-pointer ${
                currentPage === p ? "bg-black text-white" : "bg-gray-100"
              }`}
            >
              {p + 1}
            </button>
          )
        )}

        {/* next btn */}
        <button
          className="cursor-pointer text-black disabled:text-gray-400!"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
        >
          <GoChevronRight className="text-3xl" />
        </button>
      </div>

      <div className="w-full  hidden md:block pt-5">
        <div className="flex items-center gap-2 w-full justify-end ">
          <p className="font-figtree font-medium text-base">Per Page :</p>

          <div
            className={`select md:max-w-20! w-full relative`}
            onClick={() => setPerPageDropDownOpen(!perPageDropDownOpen)}
          >
            <div className="flex items-center justify-between gap-2 py-1 px-2   border border-gray-400 rounded-lg cursor-pointer">
              <h2 className="font-figtree font-semibold text-gray-dark-500 text-xs md:text-[15px] text-center pl-3">
                {perPage}
              </h2>
              <FaChevronDown
                className={`text-gray-700 transition-all duration-200 ease-in-out text-xs  ${
                  perPageDropDownOpen ? "-rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <div
              className={`options py-2 border w-full absolute top-[120%] z-10 bg-white left-0 transition-all duration-200 ease-in-out border-gray-400 rounded-lg cursor-pointer ${
                perPageDropDownOpen ? " block " : "hidden"
              }`}
            >
              <ul className="flex flex-col drop-price text-[11px] md:text-[15px] ">
                <li
                  className="font-figtree font-medium flex items-center justify-between "
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPage(0);
                    setPerPageDropDownOpen(false);
                    setPerPage(9);
                  }}
                >
                  9
                  {perPage === 9 && (
                    <FaCheck className={` text-xs md:text-sm text-gray-950`} />
                  )}
                </li>
                <li
                  className="font-figtree font-medium flex items-center justify-between "
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPage(0);
                    setPerPageDropDownOpen(false);
                    setPerPage(2);
                  }}
                >
                  2
                  {perPage === 2 && (
                    <FaCheck className={` text-xs md:text-sm text-gray-950`} />
                  )}
                </li>
                <li
                  className="font-figtree font-medium  flex items-center justify-between"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPage(0);
                    setPerPageDropDownOpen(false);
                    setPerPage(6);
                  }}
                >
                  6
                  {perPage === 6 && (
                    <FaCheck className="text-sm text-gray-950" />
                  )}
                </li>
                <li
                  className="font-figtree font-medium  flex items-center justify-between"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPage(0);
                    setPerPageDropDownOpen(false);
                    setPerPage(12);
                  }}
                >
                  12
                  {perPage === 12 && (
                    <FaCheck className="text-sm text-gray-950" />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
