import React, { useEffect, useState } from "react";
import ShopButton from "./ShopButton";
import { coupons } from "@/data/coupons";
import { FaShippingFast } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutSummary } from "../../redux/checkoutSlice";

const Form = ({ subtotal }) => {
  const [discount, setdiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
const [appliedCoupon, setAppliedCoupon] = useState(null);

  const TAX_PERCENT = 5;
  const delivaryCharge = 25;
  const freeShippingLimit = 3000;
  const taxAmount = Math.round((subtotal * TAX_PERCENT) / 100);

  const isFreeShipping = subtotal >= freeShippingLimit;
  const shipping = isFreeShipping ? 0 : delivaryCharge;

  const total = subtotal + taxAmount + shipping - discount;

const applyCoupon = (e) => {
  e.preventDefault();

  const foundCoupon = coupons.find(
    (c) => c.code.toLowerCase() === coupon.toLowerCase()
  );

  if (!foundCoupon) {
    setAppliedCoupon(null);
    setdiscount(0);
    setCouponMessage("Invalid coupon code.");
    return;
  }

  setCouponMessage("");
  setAppliedCoupon(foundCoupon);
};


  const dispatch = useDispatch()

useEffect(() => {
  dispatch(setCheckoutSummary({
    subtotal,
    tax: taxAmount,
    shipping,
    discount,
    total,
    coupon: appliedCoupon?.code || null,
  }));
}, [subtotal, taxAmount, shipping, discount, total, appliedCoupon]);






useEffect(() => {
  if (!appliedCoupon) {
    setdiscount(0);
    return;
  }

  if (subtotal < appliedCoupon.minOrder) {
    setdiscount(0);
    const remaining = appliedCoupon.minOrder - subtotal;
    setCouponMessage(`Add $${remaining} more to use this coupon.`);
    return;
  }

  setCouponMessage("");

  const calculatedDiscount = Math.round(
    (subtotal * appliedCoupon.value) / 100
  );

  setdiscount(
    calculatedDiscount > appliedCoupon.maxDiscount
      ? appliedCoupon.maxDiscount
      : calculatedDiscount
  );
}, [subtotal, appliedCoupon]);


  return (
    <div>
      <div className="py-14 px-4 md:px-16 rounded-[10px] border border-[#EBEBEB]">
        <div className="heading pb-10">
          <h2 className="font-sf-pro font-bold  text-xl leading-6 text-black">
            Order Summary
          </h2>
        </div>

        <div className="form ">
     
            <div className="space-y-6">
              <div className="flex flex-col relative">
                <label className="text-[#545454] font-poppins font-medium text-sm leading-4 block pb-2">
                  Discount code / Promo code
                </label>
                <input
                  type="text"
                  className="py-4 pl-4 rounded-lg bg-white border-[0.5px] border-[#9F9F9F] font-sf-pro font-normal text-sm leading-6 text-[#979797] outline-0 w-full capitalize"
                  placeholder="code"
                  onChange={(e) => {
                    setCoupon(e.target.value);
                  }}
                />
                <button
                  className="py-0.5  px-2 md:px-4 rounded-md border absolute top-9.5 right-6 font-poppins font-medium text-xs leading-6 cursor-pointer"
                  onClick={applyCoupon}
                >
                  Apply
                </button>
              </div>

              <div className="flex flex-col relative">
                <label className="text-[#545454] font-poppins font-medium text-sm leading-4 block pb-2">
                  Your bonus card number
                </label>
                <input
                  type="text"
                  className="py-4 pl-4 rounded-lg bg-white border-[0.5px] border-[#9F9F9F] font-sf-pro font-normal text-sm leading-6 text-[#979797] outline-0 w-full capitalize "
                  placeholder="Enter card number"
                />
                <button className="py-0.5  px-2 md:px-4 rounded-md border absolute top-9.5 right-6 font-poppins font-medium text-xs leading-6 cursor-pointer">
                  Apply
                </button>
              </div>

              <div className="total pb-12">
                <div className="subtotal flex justify-between items-center pb-4">
                  <h2 className="font-poppins font-medium text-base leading-4">
                    Subtotal
                  </h2>
                  <h2 className="font-poppins font-medium text-base leading-4">
                    ${subtotal}
                  </h2>
                </div>
                <div className="tax flex justify-between items-center pb-4">
                  <h2 className="font-sf-pro font-normal text-base leading-4 text-[#545454]">
                    Estimated Tax
                  </h2>
                  <h2 className="font-poppins font-medium text-base leading-4">
                    5% (${taxAmount})
                  </h2>
                </div>
                <div className="shipping flex justify-between items-center pb-4">
                  <h2 className="font-sf-pro font-normal text-base leading-4 text-[#545454]">
                    Estimated shipping & Handling
                  </h2>
                  <h2 className="font-poppins font-medium text-base leading-4">
                    ${shipping}
                  </h2>
                </div>
                {discount > 1 && !couponMessage && (
                  <div className="coupon flex justify-between items-center py-1">
                    <h2 className="font-sf-pro font-normal text-base leading-4 text-[#545454] ">
                      Coupon applied:
                    </h2>
                    <p className="font-poppins font-medium text-red text-base leading-4 ">
                      -${discount}
                    </p>
                  </div>
                )}

                {couponMessage && (
                  <div className="coupon flex justify-between items-center py-1">
                    <h2 className="font-poppins font-medium text-red text-base leading-4 ">
                      {couponMessage}
                    </h2>
                  </div>
                )}

                <div className="total flex justify-between items-center pt-4">
                  <h2 className="font-poppins font-semibold text-lg leading-4">
                    Total
                  </h2>
                  <h2 className="font-poppins font-semibold text-lg leading-4">
                    ${total}
                  </h2>
                </div>
                <div className="freeShipping pt-5 flex justify-between items-center">
                  {isFreeShipping ? (
                <>
                    <p className="font-poppins font-medium text-sm leading-4 text-green-500">
                      Congrats! Your order qualifies for free shipping
                    </p>
                    <FaShippingFast className=" text-green-500 text-2xl"/>
                </>
                    
                  ) : (
                    <p className="font-poppins font-medium text-sm leading-4 text-red-800 ">
                      Spend $3,000 or more and get
                      <span className="text-green-500 underline pl-1">
                        FREE Shipping
                      </span>{" "}
                      on your order.
                    </p>
                  )}
                </div>
              </div>
          <Link to='/checkout/address'>
              <ShopButton
                className={"w-full bg-black! text-white!"}
                text={"Checkout"}

              />
              </Link>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Form;
