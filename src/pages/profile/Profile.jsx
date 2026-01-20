import React, { useEffect, useState } from "react";
import BreadCrums from "../../components/common/BreadCrums";
import { Camera } from "lucide-react";
import { FiMail, FiPhoneCall, FiPlus } from "react-icons/fi";
import DatePicker from "../../components/common/DatePicker";
import IOSSwitch from "../../components/common/ToogleSwich";
import { useSelector } from "react-redux";
import ShopButton from "../../components/common/ShopButton";
import Test from "./test";
import ImageUploading from "react-images-uploading";

const Profile = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
  });
  const loggedUser = useSelector((state) => state.auth.value) || {};
  const UserAdress = useSelector((state) => state.address.value) || {};

  const phone = UserAdress[0]?.phone || "";
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
const [imgModal, setimgModal] = useState(false)
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  useEffect(() => {
    if (loggedUser) {
      setuserData({
        name: loggedUser.name,
        email: loggedUser.email,
      });
    }
  }, [loggedUser]);

const handle =() => {
    if(images.length >= 1){
    setimgModal(false)
  }
}

  const name = userData.name;

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
                <div className="">
                  <div className="App">
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={onChange}
                      maxNumber={maxNumber}
                      dataURLKey="data_url"
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        <>
                          <div className="upload__image-wrapper img-box flex items-center gap-5">
                            <button
                              style={isDragging ? { color: "red" } : undefined}
                              onClick={onImageUpload}
                              {...dragProps}
                            >
                              <div className="inner max-w-[70px] text-white text-6xl rounded-full flex items-center justify-center font-poppins group relative overflow-hidden">
                                {images.length < 1 ? (
                                  <div className="img rounded-full min-w-[30px] overflow-hidden">
                                    <img
                                      src={`https://api.dicebear.com/9.x/initials/svg?seed=${name}&backgroundColor=00897b,00acc1,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,039be5`}
                                      alt="avatar"
                                      className=" w-full"
                                    />
                                  </div>
                                ) : (
                                  <div className="">
                                    {imageList.map((image, index) => (
                                      <div
                                        key={index}
                                        className="image-item img rounded-full min-w-[30px] max-w-[70px] max-h-[70px] overflow-hidden"
                                      >
                                        <img src={image["data_url"]} alt="" />
                                      </div>
                                    ))}
                                  </div>
                                )}

                                <div className="w-full h-full bg-black/40 rounded-full absolute -top-full left-0 group-hover:top-0 transition-all duration-300 flex items-center justify-center cursor-pointer">
                                  <Camera />
                                </div>
                              </div>
                            </button>
                            <div className="">
                              <h2 className="font-sf-pro font-medium text-xl capitalize">
                                {userData.name || "User"}
                              </h2>
                              <h2 className="font-sf-pro font-medium text-sm text-gray-dark-400 ">
                                JPG, GIF or PNG. Max size of 2mb
                              </h2>
                            </div>
                          </div>
                          <div className="btns flex items-center gap-5 pt-6">
                            <button
                              className="p-3 rounded-md bg-gray-200 text-sm font-poppins font-medium cursor-pointer"
                              onClick={()=> {onImageUpdate(), setimgModal(true)}}
                            >
                              Change Photo
                            </button>
                            <button
                              className="text-sm text-red-500 font-poppins font-medium cursor-pointer capitalize"
                              onClick={onImageRemove}
                            >
                              remove
                            </button>
                          </div>
                    {
                      imgModal  &&  <div className="">
                            <div className=" absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-1/2 z-20 hidden md:block" onClick={onImageUpload}>
                          <div className="w-full h-full"  >
  <div className={`bg-white rounded-2xl shadow-lg p-6 border border-black/20  w-full h-full `} 
>
    
    {/* Drop Area */}
    <div className="border-2  border-black rounded-xl p-12 flex flex-col items-center justify-center gap-4 text-center w-full h-full"   {...dragProps}
  style={isDragging ? {background: '#b3b3b3'} : {background:'white'}}>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5">
     <FiPlus/>
      </div>

      <p className="text-black font-medium text-sm font-poppins">
   Drag & drop an image here, or click to browse
      </p>
    </div>


  </div>
</div>

                          </div>
                      </div>
                    }
                    {
                       imgModal &&  
                       <div className="overlay  fixed top-0 left-0 w-full h-screen bg-black/30 z-10" onClick={()=> setimgModal(false)}></div>
                    }
                      
                        </>
                      )}
                    </ImageUploading>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full py-6 px-5 roundded-lg bg-white">
              <div className="heading pb-8">
                <h2 className="font-poppins font-semibold text-xl pb-3 border-b">
                  Basic Details
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pb-10">
                <div className="name">
                  <h3 className="font-poppins font-medium text-base pb-3">
                    Full Name
                  </h3>
                  <div className="name w-full relative">
                    <input
                      type="text"
                      placeholder={userData.name || "Your Name"}
                      className="py-3 pl-4 border border-[#E0E2E9] rounded-lg font-poppins font-medium text-sm text-[#717279] w-full capitalize"
                    />
                  </div>
                </div>
                <div className="email">
                  <h3 className="font-poppins font-medium text-base pb-3">
                    Email
                  </h3>
                  <div className="email w-full relative">
                    <input
                      type="email"
                      placeholder={userData.email}
                      className="py-3 pl-12 border border-[#E0E2E9] rounded-lg font-poppins font-medium text-sm text-[#717279] w-full"
                    />
                    <i className="absolute top-[13px] left-4 text-xl text-[#969696] cursor-default!">
                      <FiMail />
                    </i>
                  </div>
                </div>
                <div className="number">
                  <h3 className="font-poppins font-medium text-base pb-3">
                    Phone Number
                  </h3>
                  <div className="email w-full relative">
                    <input
                      type="text"
                      placeholder={phone || "Your Number"}
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
                      <DatePicker
                        label={"Birthday"}
                        className={"text-black!"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-10">
                <div className="heading pb-8">
                  <h2 className="font-poppins font-semibold text-xl pb-3 border-b">
                    Preferences
                  </h2>
                </div>
                <div className="w-full rounded-md p-4 bg-gray-200 flex justify-between items-center">
                  <div className="text">
                    <h2 className="font-poppins font-semibold text-sm pb-1">
                      Email Notifications
                    </h2>
                    <h2 className="font-poppins font-medium text-xs text-gray-dark-300">
                      Get updates about your orders and rewards
                    </h2>
                  </div>
                  <div className="">
                    <IOSSwitch />
                  </div>
                </div>
              </div>

              <div className="">
                <div className="w-full pt-4 border-t flex justify-end items-center">
                  <ShopButton
                    text={"Save"}
                    className={"bg-black! py-2! px-5!"}
                  />
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
