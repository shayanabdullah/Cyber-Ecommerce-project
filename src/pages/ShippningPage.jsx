import ShopButton from "@/components/common/ShopButton";
import React, { useState } from "react";
import Steps from "@/components/common/Steps";
import Container from "@/components/common/Container";
import { Link } from "react-router-dom";
import DatePicker from "../components/common/DatePicker";

const ShippningPage = () => {
  const [isActive, setIsActive] = useState(1);

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
                <div
                  className={`address-box p-4 md:p-6 rounded-lg bg-white flex items-center  border border-[#D1D1D8] w-full cursor-pointer ${
                    isActive == 1 ? "border-black" : "border-[#D1D1D8]"
                  }`}
                  onClick={() => setIsActive(1)}
                >
                  <div className="w-full">
                    <div className="flex items-center gap-4 justify-between ">
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="shipping"
                          id="free"
                          className="w-6 h-6 accent-black"
                          checked={isActive == 1}
                        />
                        <label
                          htmlFor="free"
                          className={`font-sf-pro font-medium text-lg leading-6 ${
                            isActive == 1 ? "text-[#17183B]" : "text-[#A2A3B1]"
                          }`}
                        >
                          Free
                        </label>
                        <p
                          className={`font-poppins font-medium text-sm md:text-base leading-6 ${
                            isActive == 1 ? "text-[#17183B" : "text-[#A2A3B1]"
                          } pl-4`}
                        >
                          Regulary shipment
                        </p>
                      </div>
                      <div className="">
                        <p
                          className={`font-poppins font-normal text-sm md:text-base leading-6 pl-4 ${
                            isActive == 1 ? "text-[#17183B]" : "text-[#A2A3B1]"
                          }`}
                        >
                          17 Oct, 2026
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`address-box p-4 md:p-6 rounded-lg bg-white flex items-center border border-[#D1D1D8] w-full cursor-pointer ${
                    isActive == 2 ? "border-black" : "border-[#D1D1D8]"
                  }`}
                  onClick={() => setIsActive(2)}
                >
                  <div className="w-full">
                    <div className="flex items-center gap-4 justify-between w-full">
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="shipping"
                          id="express"
                          className="w-6 h-6 accent-black"
                          checked={isActive == 2}
                        />
                        <label
                          htmlFor="express"
                          className={`font-sf-pro font-normal text-lg leading-6 ${
                            isActive == 2 ? "text-[#17183B]" : "text-[#A2A3B1]"
                          }`}
                        >
                          $25
                        </label>
                        <p
                          className={`font-poppins font-normal text-sm md:text-base leading-6 pl-4 ${
                            isActive == 2 ? "text-[#17183B]" : "text-[#A2A3B1]"
                          }`}
                        >
                          Get your delivery as soon as possible
                        </p>
                      </div>

                      <p
                        className={`font-poppins font-normal text-sm md:text-base leading-6 pl-4 ${
                          isActive == 2 ? "text-[#17183B]" : "text-[#A2A3B1]"
                        }`}
                      >
                        1 Oct, 2026
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`address-box p-4 md:p-6 rounded-lg bg-white flex  items-center  border  w-full cursor-pointer ${
                    isActive == 3 ? "border-black" : "border-[#D1D1D8]"
                  }`}
                  onClick={() => setIsActive(3)}
                >
                  <div className="w-full">
                    <div className="flex items-center md:gap-4 justify-between ">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <input
                          type="radio"
                          name="shipping"
                          id="schedule"
                          className="w-6 h-6 accent-black"
                          checked={isActive == 3}
                        />
                        <label
                          htmlFor="schedule"
                          className={`font-sf-pro font-normal text-lg leading-6  ${
                            isActive == 3 ? "text-[#17183B]" : "text-[#A2A3B1]"
                          }`}
                        >
                          Schedule
                        </label>
                        <p
                          className={`font-poppins font-normal text-sm md:text-base leading-6 md:pl-4 pr-2 md:pr-0  ${
                            isActive == 3 ? "text-[#17183B]" : "text-[#A2A3B1]" 
                          }`}
                        >
                          Pick a date when you want to get your delivery
                        </p>
                      </div>
                      <div className="">
                        <DatePicker isActive={isActive} label={'Select:'}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Buttons */}
            <div className="flex items-center w-full justify-end gap-6">
              <Link to="/checkout/address">
                <ShopButton
                  text={"Back"}
                  className="border-black! text-black! w-full"
                />
              </Link>
              <Link to="/checkout/payment">
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
