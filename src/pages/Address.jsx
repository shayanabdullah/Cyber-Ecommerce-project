import Container from "@/components/common/Container";
import React from "react";
import { BiSolidPencil } from "react-icons/bi";
import line from "@/assets/line.svg";
import { RiMapPinFill } from "react-icons/ri";
import Steps from "@/components/common/Steps";
import { IoCloseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import ShopButton from "@/components/common/ShopButton";
import { Link } from "react-router-dom";
const Address = () => {
  return (
    <>
   <Steps/>
      <section className="py-12 px-2">
        <Container>
            <div className="main">
                <div className="heading pb-8">
                   <h2 className="font-poppins font-semibold text-xl leading-6 text-[#17183B]">
                 Select Address
                </h2>
                </div>

                <div className="flex flex-col gap-y-6 pb-12">
                    <div className="address-box p-6 rounded-lg bg-gray-100  flex items-center justify-between" >
                     <div className="">
                          <div className="flex items-center gap-4 pb-4.5">
                     
                         <input type="radio" id="address" className="w-6 h-6 accent-black"   />
                            <label htmlFor="address" className="font-sf-pro font-normal text-lg leading-6 text-[#17183B]">2118 Thornridge</label>
                            <p className="p-1.5 rounded-sm bg-black text-white font-poppins font-medium text-xs pl-2">Home</p>
                       </div>
                       <div className="pl-10">
                        <p className="font-sf-pro font-normal text-base leading-6 text-[#17183B] pb-2">2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                        <p className="phone-num font-sf-pro font-normal text-base leading-6 text-[#17183B]">(209) 555-0104</p>
                       </div>
                     </div>
                     <div className="flex items-center gap-6 text-2xl">
                        <i><BiSolidPencil /></i>
                        <i><IoCloseOutline /></i>
                     </div>

                    </div>
                    <div className="address-box p-6 rounded-lg bg-gray-100  flex items-center justify-between" >
                     <div className="">
                          <div className="flex items-center gap-4 pb-4.5">
                     
                         <input type="radio" name="address" className="w-6 h-6 accent-black"  />
                            <label htmlFor="address" className="font-sf-pro font-normal text-lg leading-6 text-[#17183B]">Headoffice</label>
                            <p className="p-1.5 rounded-sm bg-black text-white font-poppins font-medium text-xs pl-2">OFFICE</p>
                       </div>
                       <div className="pl-10">
                        <p className="font-sf-pro font-normal text-base leading-6 text-[#17183B] pb-2">2715 Ash Dr. San Jose, South Dakota 83475</p>
                        <p className="phone-num font-sf-pro font-normal text-base leading-6 text-[#17183B]">(704) 555-0127</p>
                       </div>
                     </div>
                     <div className="flex items-center gap-6 text-2xl">
                        <i><BiSolidPencil /></i>
                        <i><IoCloseOutline /></i>
                     </div>

                    </div>
                </div>
                {/* add address */}
                <div className="w-full pb-15">
                    <div className="w-full flex items-center pb-2">
                        <img src={line} alt="" className="w-full" />
                        <div className="p-1 rounded-full bg-black text-white text-sm cursor-pointer">
                            <i><FaPlus /></i>
                        </div>
                        <img src={line} alt="" className="w-full" />

                    </div>
                     <p className="font-poppins font-normal text-sm leading-6 text-[#000] w-full text-center">Add New Address</p>
                </div>
                <div className="flex items-center w-full justify-end gap-6">
                  <Link to="/cart">
                    <ShopButton text={'Back'} className='border-black! text-black!'/>
                  </Link>
                    <Link to="/cart/shipping"> <ShopButton text={'Next'} className='bg-black!'/> </Link>
                    
                </div>
            </div>
        </Container>
      </section>
    </>
  );
};

export default Address;
