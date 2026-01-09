import ShopButton from "@/components/common/ShopButton";
import Steps from "@/components/common/Steps";
import { Container } from "@mui/material";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShippningPage = () => {
  return (
    <>
      <Steps
        TitleclassNameFirst={"text-black/30!"}
        iconClassNameFirst={"bg-black/30!"}
        TitleclassNameThird={"text-black/30!"}
        iconClassNameThird={"bg-black/30!"}
        TitleclassNameSecond={"text-black!"}
        iconClassNameSecond={"bg-black!"}
      />
      <section className="py-12 px-2">
        <Container>
          <div className="main">
       <div className=" pb-20 md:pb-[220px]">
             <div className="heading pb-8">
              <h2 className="font-poppins font-semibold text-xl leading-6 text-[#17183B]">
                Shipment Method
              </h2>
            </div>

            <div className="flex flex-col gap-y-6 pb-12">
              <div className="address-box p-4 md:p-6 rounded-lg bg-white flex items-center  border border-[#D1D1D8] w-full">
                <div className="w-full">
                  <div className="flex items-center gap-4 justify-between ">
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                      name="shipping" id="free"
                        className="w-6 h-6 accent-black"
                      />
                      <label
                        htmlFor="free"
                        className="font-sf-pro font-medium text-lg leading-6 text-[#17183B]"
                      >
                        Free
                      </label>
                      <p className="font-poppins font-medium text-sm md:text-base leading-6 text-[#17183B] pl-4">
                        Regulary shipment
                      </p>
                    </div>
                    <div className="">
                      <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#17183B] pl-4">
                        17 Oct, 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="address-box p-4 md:p-6 rounded-lg bg-white flex items-center border border-[#D1D1D8] w-full">
                <div className="w-full">
                  <div className="flex items-center gap-4 justify-between w-full">
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                       name="shipping" id="express" 
                        className="w-6 h-6 accent-black"
                      />
                      <label
                        htmlFor="express"
                        className="font-sf-pro font-normal text-lg leading-6 text-[#A2A3B1]"
                      >
                       $25
                      </label>
                      <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#A2A3B1] pl-4">
                        Get your delivery as soon as possible
                      </p>
                    </div>
                
                      <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#A2A3B1] pl-4">
                      1 Oct, 2026
                      </p>
                  
                  </div>
                </div>
              </div>

              <div className="address-box p-4 md:p-6 rounded-lg bg-white flex items-center  border border-[#D1D1D8] w-full">
                <div className="w-full">
                  <div className="flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                       name="shipping" id="schedule" 
                        className="w-6 h-6 accent-black"
                      />
                      <label
                        htmlFor="schedule"
                        className="font-sf-pro font-normal text-lg leading-6 text-[#A2A3B1]"
                      >
                       Schedule
                      </label>
                      <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#A2A3B1] pl-4">
                        Pick a date when you want to get your delivery
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[#A2A3B1]">
                      <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#A2A3B1] pl-4 cursor-pointer">
                     Select Date
                      </p>
                      <i><FaChevronDown/></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       </div>

            {/*Buttons */}
            <div className="flex items-center w-full justify-end gap-6">
              <Link to="/cart/address">
                <ShopButton
                  text={"Back"}
                  className="border-black! text-black! w-full"
                />
              </Link>
              <Link to="/cart/payment">
                {" "}
                <ShopButton text={"Next"} className="bg-black! w-full" />{" "}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ShippningPage;
