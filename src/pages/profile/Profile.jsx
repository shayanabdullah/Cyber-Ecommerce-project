import React from "react";
import BreadCrums from "../../components/common/BreadCrums";
import { Camera } from "lucide-react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import DatePicker from "../../components/common/DatePicker";
import IOSSwitch from "../../components/common/ToogleSwich";

const Profile = () => {
  return (
    <>
      <section className="w-full px-3 lg:px-0">
        <div className="maim w-full">
          {/* BredCrums */}
          <div className="pb-3">
            <BreadCrums slug={"Profile"} className={"p-0!"} />
          </div>

          <div className="flex flex-col gap-y-6">
            <div className="profile w-full">
              <div className="information w-full rounded-lg py-4 px-5 bg-white">
                <h2 className="font-poppins font-semibold text-2xl pb-2">
                  Profile Information
                </h2>
                <p className="font-poppins font-normal text-sm text-gray-dark-400">
                  Update your personal details and how we can reach you.
                </p>
              </div>
            </div>

            <div className="profile-pic w-full">
              <div className="information w-full rounded-lg py-6 px-5 bg-white">
                <div className="img-box flex items-center gap-5">
                  <div className="img w-20 h-20 rounded-full border border-gray-650">
                    <div className="inner w-full h-full bg-[#42b6da] text-white text-6xl rounded-full flex items-center justify-center font-poppins group relative overflow-hidden">
                      S
                      <div className="w-full h-full bg-black/40 rounded-full absolute -top-full left-0 group-hover:top-0 transition-all duration-300 flex items-center justify-center cursor-pointer">
                        <Camera />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="font-sf-pro font-medium text-xl ">
                      Profile Picture
                    </h2>
                    <h2 className="font-sf-pro font-medium text-sm text-gray-dark-400 ">
                      JPG, GIF or PNG. Max size of 2mb
                    </h2>
                  </div>
                </div>
                <div className="btns flex items-center gap-5 pt-6">
                  <button className="p-3 rounded-md bg-gray-200 text-sm font-poppins font-medium cursor-pointer">Change Photo</button>
                  <button className="text-sm text-red-500 font-poppins font-medium cursor-pointer capitalize">remove</button>
                </div>
              </div>
            </div>

            <div className="w-full py-6 px-5 roundded-lg bg-white">
              <div className="heading pb-8">
                <h2 className="font-poppins font-semibold text-xl pb-3 border-b">Basic Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pb-10">
                <div className="name">
                  <h3 className="font-poppins font-medium text-base pb-3" >Full Name</h3>
                                <div className="name w-full relative">
                    <input
                      type="text"
                      placeholder="Your Name:"
                      className="py-3 pl-4 border border-[#E0E2E9] rounded-lg font-poppins font-medium text-sm text-[#717279] w-full"
                    />
                  </div>
                </div>
                <div className="email">
                    <h3 className="font-poppins font-medium text-base pb-3" >Email</h3>
                        <div className="email w-full relative">         
                                    <input
                                      type="email"
                                      placeholder="Your email:"   
                                      className="py-3 pl-12 border border-[#E0E2E9] rounded-lg font-poppins font-medium text-sm text-[#717279] w-full"
                                    />
                                    <i className="absolute top-[13px] left-4 text-xl text-[#969696] cursor-default!">
                                      <FiMail />
                                    </i>
                                  </div>
                </div>
                <div className="number">
                    <h3 className="font-poppins font-medium text-base pb-3" >Phone Number</h3>
                        <div className="email w-full relative">         
                                    <input
                                      type="text"
                                      placeholder="Your Number:"   
                                      className="py-3 pl-12 border border-[#E0E2E9] rounded-lg font-poppins font-medium text-sm text-[#717279] w-full"
                                    />
                                    <i className="absolute top-[13px] left-4 text-xl text-[#969696] cursor-default!">
                                      <FiPhoneCall />
                                    </i>
                                  </div>
                </div>
                <div className="dob">
                        <div className="email w-full relative">         
                                   <div className="">
                        <DatePicker label={'Birthday'} className={'text-black!'}/>
                      </div>
                                  </div>
                </div>
              </div>
              <div className="">
                  <div className="heading pb-8">
                <h2 className="font-poppins font-semibold text-xl pb-3 border-b">Preferences</h2>
              </div>
              <div className="w-full rounded-md p-4 bg-gray-200 flex justify-between items-center">
                <div className="text">
                  <h2 className="font-poppins font-semibold text-sm pb-1">Email Notifications</h2>
                  <h2 className="font-poppins font-medium text-xs text-gray-dark-300">Get updates about your orders and rewards</h2>
                </div>
                <div className="">
                  <IOSSwitch/>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
