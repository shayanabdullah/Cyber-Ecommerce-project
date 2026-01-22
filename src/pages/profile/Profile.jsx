import React, { useEffect, useState } from "react";
import BreadCrums from "../../components/common/BreadCrums";
import { Camera } from "lucide-react";
import { FiMail, FiPhoneCall, FiPlus } from "react-icons/fi";
import DatePicker from "../../components/common/DatePicker";
import IOSSwitch from "../../components/common/ToogleSwich";
import { useSelector } from "react-redux";
import ShopButton from "../../components/common/ShopButton";
import { Bounce, toast, ToastContainer } from "react-toastify";
;

const Profile = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
  });
  const loggedUser = useSelector((state) => state.auth.value) || {};
  const UserAdress = useSelector((state) => state.address.value) || {};

  const phone = UserAdress[0]?.phone || "";
const [tempImage, setTempImage] = useState(null); 
const [images, setImages] = useState(() => {
  return localStorage.getItem("Profile");
});

  const [imgModal, setimgModal] = useState(false);

  const notify = () => 
toast.success(`Image upload successfully`, {
className:'font-poppins! font-medium! text-black/90! bg-white!',
toastClassName :'bg-red!',
progressClassName:'bg-green-600! rounded-md',
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  useEffect(() => {
    if (loggedUser) {
      setuserData({
        name: loggedUser.name,
        email: loggedUser.email,
      });
    }
  }, [loggedUser]);


const handleSetImg = (e) => {
  if (!e.target.files?.length) return;

  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    if (typeof reader.result === "string") {
      setTempImage(reader.result); // ONLY PREVIEW
    }
  };

  reader.readAsDataURL(file);
  setimgModal(false);
};


const handleSave = () => {
  if (!tempImage) {
    toast.error("No image selected");
    return;
  }

  localStorage.setItem("Profile", tempImage);
  setImages(tempImage);
  setTempImage(null);

notify()
};




  const handleRemoveImg = () => {
  setImages(null);
  localStorage.removeItem("Profile");
};


const handleImgModal = () => {
setimgModal(true)
}
  const name = userData.name;

  

  return (
    <>
    <ToastContainer/>
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
                  <div className="App img-box flex items-center gap-5">
                    {
                      <div className="inner max-w-[70px] text-white text-6xl rounded-full flex items-center justify-center font-poppins group relative overflow-hidden">
                        <div className="w-full h-full bg-black/40 rounded-full absolute -top-full left-0 group-hover:top-0 transition-all duration-300 cursor-pointer  text-sm">
                          <div className="absolute w-full h-full top-1/3 left-[30%] z-10">
                            {" "}
                            <Camera />
                          </div>
                          <input
                            type="file"
                            onChange={handleSetImg}
                            className="text-transparent absolute w-full h-full z-20"
                          />
                        </div>

                        { !images && !tempImage ? (
                          <div className="img rounded-full min-w-[30px] overflow-hidden">
                            <img
                              src={`https://api.dicebear.com/9.x/initials/svg?seed=${name}&backgroundColor=00897b,00acc1,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,039be5`}
                              alt="avatar"
                              className=" w-full"
                            />
                          </div>
                        ) : (
                          <div className="">
                          {
                            !images ? (  <div className="image-item img rounded-full min-w-[30px] max-w-[70px] max-h-[70px] overflow-hidden">
                              <img src={tempImage} alt="" />
                            
                            </div>) : (
                                <div className="image-item img rounded-full min-w-[30px] max-w-[70px] max-h-[70px] overflow-hidden">
                              <img src={images} alt="" />
                            </div>
                            )
                          }
                          </div>
                        )}
                      </div>
                    }

                    <div className="">
                      <h2 className="font-sf-pro font-medium text-xl capitalize">
                        {userData.name || "User"}
                     
                      </h2>
                      <h2 className="font-sf-pro font-medium text-sm text-gray-dark-400 pb-2">
                        JPG, GIF or PNG. Max size of 2mb
                      </h2>
                      {!images && tempImage &&  <p className="text-xs font-poppins font-normal text-red">note: img will not upload if you dont save*</p>}
                    </div>
                  </div>
                  <div className="btns flex items-center gap-5 pt-6">
                    <button className="p-3 rounded-md bg-gray-200 text-sm font-poppins font-medium cursor-pointer overflow-hidden relative" onClick={handleImgModal}>
                      <input
                        type="file"
                        className="absolute top-0 left-0 bg-transparent text-transparent w-full h-full z-10 outline-0! border-0!"
                        onChange={handleSetImg}
                      />
                      Change Photo
                    </button>
                    <button
                      className="text-sm text-red-500 font-poppins font-medium cursor-pointer capitalize"
                      onClick={handleRemoveImg}
                    >
                      remove
                    </button>
                  </div>
                                            {imgModal && <div className="">
                           <div className=" absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-1/2 z-20 hidden lg:block" onClick={() => {
               

                           }}>
                             <div className="w-full h-full relative">
                              <input type="file" className="absolute top-0 left-0 w-full h-full text-transparent outline-0! border-0!" onChange={handleSetImg} />
                               <div className={`bg-white rounded-2xl shadow-lg p-6 border border-black/20  w-full h-full `}
                               >

                                 {/* Drop Area */}
                                 <div className="border-2  border-black rounded-xl p-12 flex flex-col items-center justify-center gap-4 text-center w-full h-full"
                                   >
                                   <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5">
                                     <FiPlus />
                                   </div>

                                   <p className="text-black font-medium text-sm font-poppins">
                                     Drag & drop an image here, or click to browse
                                   </p>
                                 </div>

                               </div>
                             </div>

                           </div>
                         </div>}
                         {imgModal &&
                           <div className="overlay  fixed top-0 left-0 w-full h-screen bg-black/30 z-10 hidden lg:block" onClick={() => setimgModal(false)}></div>}

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
                  onClick={handleSave}
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


