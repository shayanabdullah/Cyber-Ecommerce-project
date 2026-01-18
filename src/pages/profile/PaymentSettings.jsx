import React, { useState } from 'react'
import credit from "@/assets/credit-card.svg";
import paypal from "@/assets/paypal-logo.svg";
import bkash from "@/assets/bkash-logo.png";
import nogod from "@/assets/nogod-logo.png";
import rocket from "@/assets/rocket-logo.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Link } from "react-router-dom";
import ShopButton from '../../components/common/ShopButton';

const PaymentSettings = () => {
      const [active, setActive] = useState();
      const handleActive = (id) => {
        setActive(id);
      };
  return (
<>
<section>
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
                  <TabPanel >
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
                  

                      {/*Buttons */}
                      <div className="flex items-center w-full  gap-8">
                        <Link to="/checkout/shipping" className="w-full!">
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
</section>
</>
  )
}

export default PaymentSettings