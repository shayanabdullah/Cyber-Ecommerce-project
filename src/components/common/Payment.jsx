import React, { useState } from "react";
import Steps from "./Steps";
import Container from "./Container";
import iphone17 from "@/assets/products-images/iphone-17pro.png";
import watch from "@/assets/watch.svg";
import macbook from "@/assets/macbook-air.png";
import credit from "@/assets/credit-card.svg";
import paypal from "@/assets/paypal-logo.svg";
import bkash from "@/assets/bkash-logo.png";
import nogod from "@/assets/nogod-logo.png";
import rocket from "@/assets/rocket-logo.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Link } from "react-router-dom";
import ShopButton from "./ShopButton";
const Payment = () => {
  const [active, setActive] = useState();
  const handleActive = (id) => {
    setActive(id);
  };

  return (
    <>
      <Steps
        TitleclassNameFirst={"text-black/30!"}
        hideCalssFirst={"hidden md:block"}
        iconClassNameFirst={"bg-black/30!"}
        TitleclassNameSecond={"text-black/30!"}
        iconClassNameSecond={"bg-black/30!"}
        TitleclassNameThird={"text-black!"}
        iconClassNameThird={"text-white! bg-black!"}
        hideCalssThird={"block!"}
        imgHideFirst={"hidden! md:block!"}
      />

      <section className="pt-6 pb-18">
        <Container>
          <div className="main grid grid-cols-1 md:grid-cols-2 md:gap-24 gap-y-18">
            <div className="right py-8 px-6 rounded-xl border border-[#EBEBEB]">
              <div className="heading pb-6">
                <h2 className="font-poppins font-semibold text-xl leading-6 text-[#000]">
                  Summary
                </h2>
              </div>

              {/* summary card */}
              <div className="flex flex-col gap-y-4 pb-8">
                <div className="card p-4 bg-gray-100 rounded-xl">
                  <div className="flex items-center gap-3 justify-between">
                    <div className="img flex items-center gap-3">
                      <img src={iphone17} alt="" className="max-w-10" />
                      <h2 className="font-poppins font-medium text-base leading-6 text-black">
                        Iphone 17 pro 256gb (orange)
                      </h2>
                    </div>

                    <p className="font-poppins font-bold text-base leading-6 text-black">
                      $1099
                    </p>
                  </div>
                </div>
                <div className="card p-4 bg-gray-100 rounded-xl">
                  <div className="flex items-center gap-3 justify-between">
                    <div className="img flex items-center gap-3">
                      <img src={macbook} alt="" className="max-w-10" />
                      <h2 className="font-poppins font-medium text-base leading-6 text-black">
                        Apple MacBook Air M4 13-inch 256GB
                      </h2>
                    </div>

                    <p className="font-poppins font-bold text-base leading-6 text-black">
                      $899
                    </p>
                  </div>
                </div>
                <div className="card p-4 bg-gray-100 rounded-xl">
                  <div className="flex items-center gap-3 justify-between">
                    <div className="img flex items-center gap-3">
                      <img src={watch} alt="" className="max-w-10" />
                      <h2 className="font-poppins font-medium text-base leading-6 text-black">
                        Apple Watch Series 9 GPS 41mm
                      </h2>
                    </div>

                    <p className="font-poppins font-bold text-base leading-6 text-black">
                      $499
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="">
                <div className="address pb-4">
                  <div className="heading pb-4">
                    <h2 className="font-poppins font-medium text-sm leading-6 text-[#545454]">
                      Address
                    </h2>
                  </div>
                  <p className="font-poppins font-normal text-base leading-6 text-[#000000]">
                    1131 Dusty Townline, Jacksonville, TX 40322
                  </p>
                </div>

                <div className="shipping pb-6">
                  <div className="heading pb-2">
                    <h2 className="font-poppins font-medium text-sm leading-6 text-[#545454]">
                      Shipment method
                    </h2>
                  </div>
                  <p className="font-poppins font-semibold text-base leading-6 text-[#000000]">
                    Free
                  </p>
                </div>

                <div className="subtotal">
                  <div className="total">
                    <div className="subtotal flex justify-between items-center pb-6">
                      <h2 className="font-poppins font-medium text-base leading-4">
                        Subtotal
                      </h2>
                      <h2 className="font-poppins font-medium text-base leading-4">
                        $2597
                      </h2>
                    </div>
                    <div className="tax flex justify-between items-center pb-4">
                      <h2 className="font-sf-pro font-normal text-base leading-4 text-[#545454]">
                        Estimated Tax
                      </h2>
                      <h2 className="font-poppins font-medium text-base leading-4">
                        5% ($130)
                      </h2>
                    </div>
                    <div className="shipping flex justify-between items-center pb-4">
                      <h2 className="font-sf-pro font-normal text-base leading-4 text-[#545454]">
                        Estimated shipping & Handling
                      </h2>
                      <h2 className="font-poppins font-medium text-base leading-4">
                        $25
                      </h2>
                    </div>

                    <div className="total flex justify-between items-center pt-4">
                      <h2 className="font-poppins font-medium text-base leading-4">
                        Total
                      </h2>
                      <h2 className="font-poppins font-semibold text-base leading-4">
                        $2752
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="left  px-6 rounded-xl ">
              <div className="heading pb-6">
                <h2 className="font-poppins font-semibold text-xl leading-6 text-[#000]">
                  Payment
                </h2>
              </div>

              <TabGroup>
                <TabList
                  className={`flex gap-5 md:gap-14 font-poppins font-medium text-sm leading-8 pb-10`}
                >
                  <Tab
                    className={`data-selected:text-black data-selected:border-black border-b-2 border-transparent cursor-pointer  transition-all duration-200 outline-0`}
                  >
                    Credit Card
                  </Tab>
                  <Tab
                    className={`data-selected:text-black data-selected:border-black border-b-2 border-transparent cursor-pointer  transition-all duration-200 outline-0`}
                  >
                    PayPal
                  </Tab>
                  <Tab
                    className={`data-selected:text-black data-selected:border-black border-b-2 border-transparent cursor-pointer  transition-all duration-200 outline-0`}
                  >
                    Online Payment
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <div className="img pb-10">
                      <img
                        src={credit}
                        alt=""
                        className="max-w-[200px] md:max-w-full"
                      />
                    </div>

                    <div className="card-details w-full">
                      <div className="flex flex-col gap-y-4 pb-12">
                        <div className="inputs w-full">
                          <input
                            type="text"
                            className="p-4 border border-[#CECECE] w-full rounded-lg font-poppins font-normal text-sm leading-4 text-[#979797] outline-0 focus-within:border-[#979797]"
                            placeholder="Cardholder Name"
                          />
                        </div>

                        <div className="inputs w-full">
                          <input
                            type="text"
                            className="p-4 border border-[#CECECE] w-full rounded-lg font-poppins font-normal text-sm leading-4 text-[#979797] outline-0 focus-within:border-[#979797]"
                            placeholder="Card Number"
                          />
                        </div>
                        <div className="inputs w-full flex items-center gap-4">
                          <input
                            type="text"
                            className="p-4 border border-[#CECECE] w-full rounded-lg font-poppins font-normal text-sm leading-4 text-[#979797] outline-0 focus-within:border-[#979797]"
                            placeholder="Exp.Date"
                          />
                          <input
                            type="text"
                            className="p-4 border border-[#CECECE] w-full rounded-lg font-poppins font-normal text-sm leading-4 text-[#979797] outline-0 focus-within:border-[#979797]"
                            placeholder="CVV"
                          />
                        </div>
                      </div>
                      {/* address biling */}
                      <div className="flex items-center gap-2 pb-12">
                        <input
                          type="checkbox"
                          id="billing"
                          className="accent-black "
                        />
                        <label
                          htmlFor="billing"
                          className="font-poppins font-medium text-sm leading-6"
                        >
                          Same as billing address
                        </label>
                      </div>

                      {/*Buttons */}
                      <div className="flex items-center w-full  gap-8">
                        <Link to="/cart/shipping" className="w-full!">
                          <ShopButton
                            text={"Back"}
                            className="border-black! text-black! w-full"
                          />
                        </Link>
                        <ShopButton text={"Pay"} className="bg-black! w-full" />{" "}
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="img pb-10">
                      <img src={paypal} alt="" className="max-w-full" />
                    </div>
                    <div className="text pb-10">
                      <p className="font-poppins font-medium text-base leading-6 text-[#000] pb-4">
                        You’ll be redirected to PayPal to complete your purchase
                        securely.
                      </p>
                      <p className="font-poppins font-medium text-base leading-6 text-[#979797]">
                        No PayPal account? You can pay with debit/credit card.
                      </p>
                    </div>
                    <ShopButton text={"Pay"} className="bg-black! w-full" />{" "}
                  </TabPanel>

                  <TabPanel>
                    <div className="img pb-10 flex items-center gap-5 md:gap-10">
                      <button
                        className={`border-2  rounded-lg cursor-pointer p-2 ${
                          active === 1 ? "border-black" : "border-gray-350"
                        }`}
                        onClick={() => handleActive(1)}
                      >
                        <img src={bkash} alt="" className="max-w-[100px]" />
                      </button>
                      <button
                        className={`border-2  rounded-lg cursor-pointer p-2 ${
                          active === 2 ? "border-black" : "border-gray-350"
                        }`}
                        onClick={() => handleActive(2)}
                      >
                        <img src={nogod} alt="" className="max-w-[100px]" />
                      </button>
                      <button
                        className={`border-2  rounded-lg cursor-pointer p-2 ${
                          active === 3 ? "border-black" : "border-gray-350"
                        }`}
                        onClick={() => handleActive(3)}
                      >
                        <img src={rocket} alt="" className="max-w-[100px]" />
                      </button>
                    </div>
                    <div className="pb-12">
                      <div className="inputs w-full pb-4">
                        <input
                          type="number"
                          className="p-4 border border-[#CECECE] w-full rounded-lg font-poppins font-normal text-sm leading-4 text-[#979797] outline-0 focus-within:border-[#979797]"
                          placeholder="Mobile Number"
                        />
                      </div>
                                   <div className="total flex justify-between items-center pt-4">
                      <h2 className="font-poppins font-medium text-base leading-4">
                        Total
                      </h2>
                      <h2 className="font-poppins font-semibold text-base leading-4">
                        $2752
                      </h2>
                    </div>
                    </div>

                    <div className="text pb-10">
                      <p className="font-poppins font-medium text-base leading-6 text-[#000] pb-4">
                        You’ll be redirected to Bkash/Nogod/Rocket to complete
                        your purchase securely.
                      </p>
                      <p className="font-poppins font-medium text-base leading-6 text-[#979797]">
                        No PayPal account? You can pay with debit/credit card or
                        paypal.
                      </p>
                    </div>
                    <ShopButton text={"Pay"} className="bg-black! w-full" />{" "}
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Payment;
