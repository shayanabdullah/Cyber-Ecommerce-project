import React, { useState } from "react";
import Container from "../components/common/Container";
import signUp from "../assets/signUp.avif";
import google from "../assets/google-logo.webp";
import { FiEye, FiEyeOff, FiFacebook, FiLock, FiMail } from "react-icons/fi";
import ShopButton from "../components/common/ShopButton";
import { motion } from "motion/react";
import { fadeIn } from "../utils/motion/variants";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Check, CheckSquare } from "lucide-react";
import login from '../assets/login2.avif'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
const auth = getAuth();
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [passType, setPassType] = useState("password");

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.email.trim()) {
      newErrors.email = " Email address is not registerd!";
    }
    if (!formData.password) {
      newErrors.password = "Password is required!";
    } 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormData({
        email: "",
        password: "",
      });
      signInWithEmailAndPassword(auth, formData.email, formData.password)
  .then((userCredential) => {
     
    const user = userCredential.user;
      setisFormSubmitted(true);

      setTimeout(() => {
        setisFormSubmitted(false);
       navigate('/')
      }, 2000); 
  })
  .catch((error) => {
   if (error.code === "auth/email-already-in-use") {
        setErrors({ email: "Email already in use" });
      } else if (error.code === "auth/weak-password") {
        setErrors({ password: "Password is too weak" });
      } else if('auth/wrong-password' || errorCode === 'auth/invalid-credential'){
        setErrors({ email: "Incorrect email or password." });
      }  
  });
     

    }
  };



  return (
    <>
      <motion.section
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="py-14 md:py-20 px-3"
      >
        <Container>
          <div className="main grid grid-cols-1 md:grid-cols-2 gap-y-20 relative">
             <div className="right md:py-24 md:px-24 ">
         <form className="pb-8" onSubmit={handleSubmit}>
  <div className="heding pb-10">
    <h2 className="font-poppins font-semibold text-3xl capitalize">
      Login
    </h2>
  </div>

  <div className="inputs flex flex-col gap-y-4 pb-6">
    {/* Email */}
    <div className="email w-full relative">
      <input
        type="email"
        placeholder="Your email:"
        value={formData.email}
        className="py-3 pl-12 border border-[#E0E2E9] rounded-lg font-poppins font-medium text-sm text-[#717279] w-full"
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
        required
      />
      <i className="absolute top-[13px] left-4 text-xl text-[#969696] cursor-default!">
        <FiMail />
      </i>
    </div>

    {errors.email && (
      <div className="error">
        <p className="font-poppins font-medium text-xs text-red-400 pl-2">
          {errors.email}!
        </p>
      </div>
    )}

    {/* Password */}
    <div className="password w-full relative">
      <input
        type={passType}
        placeholder="Your password:"
        value={formData.password}
        className="py-3 pl-12 border border-[#E0E2E9] rounded-lg font-poppins font-medium text-sm text-[#717279] w-full"
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            password: e.target.value,
          }))
        }
        required
      />
      <i className="absolute top-[13px] left-4 text-xl text-[#969696] cursor-default!">
        <FiLock />
      </i>
      <i
        className="absolute top-[13px] right-4 text-xl text-[#969696]"
        onClick={() =>
          setPassType(passType === "password" ? "text" : "password")
        }
      >
        {passType === "password" ? <FiEyeOff /> : <FiEye />}
      </i>
    </div>

  </div>


  <div className="buttons w-full">
    <ShopButton
      text={"Login"}
      className={"w-full bg-black! rounded-lg!"}
    />
  </div>
</form>


              <div className="or ">
                <div className="w-full flex items-center justify-between pb-5">
                  <div className="border w-full h-0.5 bg-[#E4E6EC]"></div>
                  <div className="px-4">
                    <p className="font-poppins font-medium text-sm text-[#969AB8]">
                      or
                    </p>
                  </div>
                  <div className="border w-full h-0.5 bg-[#E4E6EC]"></div>
                </div>

                {/* sing up with google */}
                <div className="main flex items-center gap-5 justify-between pb-10">
                  <div className="google py-2 w-full rounded-lg border border-[#E0E2E9] flex items-center gap-4 justify-center cursor-pointer">
                    <div className="img">
                      <img src={google} alt="" />
                    </div>
                    <h2 className="font-poppins font-semibold text-sm text-[#171725]  ">
                      Google
                    </h2>
                  </div>
                  <div className="facebook py-2 w-full rounded-lg border border-[#E0E2E9] flex items-center gap-4 justify-center cursor-pointer">
                    <div className="img text-2xl">
                      <FaFacebook />
                    </div>
                    <h2 className="font-poppins font-semibold text-sm text-[#171725]">
                      FaceBook
                    </h2>
                  </div>
                </div>

                {/*allready have account  */}
                <div className="">
                  <h2 className="font-poppins font-normal text-base text-[#969AB8]">
                 Don’t have an account?{" "}
                    <Link
                      to={"/register"}
                      className="font-semibold text-blue-500 underline pl-2"
                    >
                      Sign Up
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="left">
              <div className="img">
                <img src={login} alt="" />
              </div>
            </div>
           


            {/* success message */}
            <div
              className={`success max-w-[400px] w-full py-5 rounded-2xl pl-3 border border-black/20 absolute  left-1/2 -translate-x-1/2 z-99 transition-all duration-300 ease-in-out ${isFormSubmitted ? "-top-10" : "-top-2/3"}`}
            >
              <div className="w-full flex gap-4 items-center">
                <i className="cursor-default! text-green-500">
                  <CheckSquare />
                </i>
                <p className="font-poppins font-medium text-sm ">
                You’re logged in successfully.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </motion.section>
    </>
  );
};

export default Login;
