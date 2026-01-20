import React, { useContext, useEffect, useState } from "react";
import Container from "../../common/Container";
import logo from "../../../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty, IoIosHelpCircleOutline } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { motion } from "motion/react";
import CatagoriesHeader, { Mycategories } from "./CatagoriesHeader";
import { fadeIn } from "../../../utils/motion/variants";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  FaChevronDown,
  FaChevronUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaShippingFast,
  FaTwitter,
} from "react-icons/fa";
import { IoCallSharp, IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { catagories } from "../browseCatagory/BrowseCatagorySection";
import { LuLogOut } from "react-icons/lu";
import { DataContext } from "../../../Context/DataContext";
import { categoryIcons } from "../../../data/Icons";
import { SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { authInfo, logout } from "../../../redux/authSlice";
import ShopButton from "../../common/ShopButton";

const navLinks = [
  {
    id: 1,
    link: "Home",
    path: "/",
  },

  {
    id: 2,
    link: "About",
    path: "/about",
  },
  {
    id: 3,
    link: "Blog",
    path: "/blog",
  },
  {
    id: 4,
    link: "Contact",
    path: "/contact",
  },
];

const NavberSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    name: "",
    email: "",
  });
  const auth = getAuth();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          authInfo({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          }),
        );
      }

      return () => unsub();
    });
  }, []);
  const cartItems = useSelector((state) => state.cart.items);

  const loggedUser = useSelector((state) => state.auth.value);

  useEffect(() => {
    if (loggedUser) {
      setuserData({
        name: loggedUser.name,
        email: loggedUser.email,
      });
    }
  }, [loggedUser]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDeleteMsg, setIsDeleteMsg] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const { categories } = useContext(DataContext);

  const filteredCategories = categories.filter(
    (item) => item.slug !== "laptops" && item.slug !== "smartphones",
  );

  const handleLogOut = async () => {
    setIsProfileOpen(false);
    try {
      await signOut(auth);
      dispatch(logout());
      setIsDeleteMsg(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteMsg = () => {
    setIsProfileOpen(false);
    setIsDeleteMsg(true);
  };
  const handleClose = () => {
    setIsProfileOpen(false);
    setIsDeleteMsg(false);
  };
 let firstLetter = userData.name

  

  return (
    <>
      <motion.nav
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="pt-5 bg-white hidden xxl:block"
      >
        <Container>
          <div className="nav-main flex items-center gap-8 justify-end">
            <div className="logo pr-9">
              <Link to={"/"} href="#">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="search relative  ">
              <i className="absolute top-3.5 left-[37px] text-2xl text-gray-850 ">
                <CiSearch />
              </i>
              <input
                type="text"
                className="py-4 pl-12 bg-gray-150 font-poppins rounded-lg outline-0 min-w-[450px] text-[14px] font-medium text-gray-dark-450 leading-5 ml-6 focus-within:border-gray-dark-200 border-gray-150 border"
                name="search"
                placeholder="Search"
              />
            </div>

            <div className="nav-menu flex items-center gap-[70px] pl-8">
              {navLinks.map((link) => (
                <NavLink
                  to={link.path}
                  key={link.id}
                  className={({ isActive }) =>
                    isActive ? "nav-active" : "nav-items"
                  }
                >
                  {link.link}
                </NavLink>
              ))}
              <div className=" flex items-center gap-10 text-2xl w-full">
                <div className="relative">
                  <IoIosHeartEmpty />
                </div>

              <Link to={'/cart'}>
                <div className="relative">
                  <div className="absolute -top-1.5 cursor-pointer -right-[5px] w-4.5 h-4.5 rounded-full bg-red-500 text-white font-semibold text-sm flex items-center justify-center">
                    {cartItems?.length || 0}
                  </div>
                 
                    <PiShoppingCartLight />
               
                </div>
              </Link>

                {loggedUser ? (
                  <div
                    onClick={() => setIsProfileOpen((prev) => !prev)}
                    className={`relative z-100000  `}
                  >
                      <div className="img rounded-full min-w-[30px] overflow-hidden cursor-pointer">
                        <img
                          src={`https://api.dicebear.com/9.x/initials/svg?seed=${firstLetter}&backgroundColor=00897b,00acc1,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,039be5`}
                          alt="avatar"
                          className=" w-full"
                        />
                        </div>
                    {/* profile */}
                    <div
                      className={`absolute -left-30 min-w-[310px] py-5 px-4 z-9999 rounded-3xl bg-white border border-black/25 flex flex-col gap-4 transition-all duration-300 ${!isProfileOpen ? "bottom-25" : " -bottom-[250px]"}`}
                    >
                      <div className="flex items-center justify-between md:gap-4 md:justify-start pb-4 border-b border-gray-300">
                        <div className="img rounded-full overflow-hidden">
                        <img
                          src={`https://api.dicebear.com/9.x/initials/svg?seed=${firstLetter}&backgroundColor=00897b,00acc1,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,039be5`}
                          alt="avatar"
                          className="max-w-[150px] w-full"
                        />
                        </div>
                        <div className="text-start">
                          <h2 className="font-poppins font-medium text-base text-black capitalize">
                            {userData?.name || "User"}
                          </h2>
                          <p className="font-poppins font-normal text-xs text-[#6B7280]">
                            {userData?.email || "email"}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Link to="/account/profile">
                          <div className="profile py-2.5 pl-2.5 hover:bg-gray-100 flex items-center gap-2.5 cursor-pointer transition-all duration-300">
                            <FiUser />
                            <div className="w-full">
                              <h2 className="font-poppins font-medium text-sm text-black cursor-pointer!">
                                My Your Profile
                              </h2>
                            </div>
                          </div>
                        </Link>

                        {/* log out */}
                        <div
                          className="logout py-2.5 pl-2.5  flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 transition-all duration-300"
                          onClick={handleDeleteMsg}
                        >
                          <LuLogOut />
                          <h2 className="font-poppins font-medium text-sm text-black cursor-pointer!">
                            Log Out
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link to={"/login"}>
                    <FiUser />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {isDeleteMsg && (
            <>
              <div className="w-full absolute top-24 left-1/2 -translate-x-1/2 z-99999 min-w-[280px] max-w-[300px]">
                <div className="modal py-5 px-3 rounded-lg border border-gray-800 bg-white">
                  <p className="font-poppins font-medium text-lg text-red-700 text-center pb-2">
                    Are you sure you want to Log Out?
                  </p>
                  <ShopButton
                    text="Logout"
                    className="bg-red-500! w-full"
                    onClick={handleLogOut}
                  />
                </div>
              </div>
              <div
                className="overlay fixed top-0 left-0 w-full h-screen bg-black/30 z-10"
                onClick={handleClose}
              ></div>
            </>
          )}

          {/* catagory-header */}
        </Container>
        <CatagoriesHeader className="" />
      </motion.nav>

      {/* mobile navber */}
      <div className="xxl:hidden sticky top-0 bg-white z-999 overflow-X-x-hidden">
        <Container>
          <motion.nav
            className="py-6 bg-gray-100/10 flex justify-between px-4 border-b border-black/34 "
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            {/* menu btn, cart */}
            <div className="flex gap-3 items-center text-2xl">
              <a href="#">
                <IoIosHeartEmpty />
              </a>

              <div className="relative">
                <div className="absolute -top-1.5 cursor-pointer -right-[5px] w-4.5 h-4.5 rounded-full bg-red-500 text-white font-semibold text-sm flex items-center justify-center">
                  {cartItems?.length || 0}
                </div>
                <Link to="/cart">
                  <PiShoppingCartLight />
                </Link>
              </div>

              {loggedUser ? (
                <>
                 <div
                  onClick={() => setIsProfileOpen((prev) => !prev)}
                  className={`relative z-88! `}
                >
                  <div className="img rounded-full min-w-[30px] max-w-[30px] overflow-hidden cursor-pointer!">
                        <img
                          src={`https://api.dicebear.com/9.x/initials/svg?seed=${firstLetter}&backgroundColor=00897b,00acc1,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,039be5`}
                          alt="avatar"
                          className=" w-full cursor-pointer!"
                        />
                        </div>
                  <div
                    className={`absolute -right-12 min-w-[200px] max-w-[310px] py-5 px-4 z-9999! rounded-3xl bg-white border border-black/25 flex flex-col gap-4 transition-all duration-300 ${isProfileOpen ? " -bottom-[220px]" : "bottom-30"}`}
                  >
                    <div className="flex items-center  pb-4 border-b border-gray-300 gap-2">
                               <div className="img rounded-full overflow-hidden">
                        <img
                          src={`https://api.dicebear.com/9.x/initials/svg?seed=${firstLetter}&backgroundColor=00897b,00acc1,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,039be5`}
                          alt="avatar"
                          className="max-w-[150px] w-full"
                        />
                        </div>
                      <div className="text-start">
                        <h2 className="font-poppins font-medium text-sm text-black capitalize">
                          {userData?.name || "User"}
                        </h2>
                        <p className="font-poppins font-normal text-xs text-[#6B7280]">
                          {userData?.email || "email"}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Link to="/account/profile">
                        <div className="profile py-2.5 pl-2.5 hover:bg-gray-100 flex items-center gap-2.5 cursor-pointer transition-all duration-300">
                          <FiUser />

                          <h2 className="font-poppins font-medium text-sm text-black cursor-pointer!">
                            My Your Profile
                          </h2>
                        </div>
                      </Link>

                      {/* log out */}
                      <div
                        className="logout py-2.5 pl-2.5  flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 transition-all duration-300"
                        onClick={handleDeleteMsg}
                      >
                        <LuLogOut />
                        <h2 className="font-poppins font-medium text-sm text-black cursor-pointer!">
                          Log Out
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                </>
               
              ) : (
                <Link to={"/login"}>
                  <FiUser />
                </Link>
              )}

              <div
                className="menu-btn text-3xl cursor-pointer"
                onClick={handleMenuOpen}
              >
                <HiOutlineMenuAlt3 />
              </div>
            </div>
          </motion.nav>

          {isDeleteMsg && (
            <>
              <div className="w-full absolute top-[150%] md:top-24 left-1/2 -translate-x-1/2 z-99999 min-w-[280px] max-w-[300px]">
                <div className="modal py-5 px-3 rounded-lg border border-gray-800 bg-white">
                  <p className="font-poppins font-medium text-lg text-red-700 text-center pb-2">
                    Are you sure you want to Log Out?
                  </p>
                  <ShopButton
                    text="Logout"
                    className="bg-red-500! w-full"
                    onClick={handleLogOut}
                  />
                </div>
              </div>
              <div
                className="overlay fixed top-0 left-0 w-full h-screen bg-black/30 z-10"
                onClick={handleClose}
              ></div>
            </>
          )}

          <div className="overflow-x-hidden">
            <div
              className={`sidebar max-w-[350px] h-screen fixed z-990  top-0 bg-gray-dark-850 border-r border-black transition-all duration-300 ease-in-out w-full ${
                isMenuOpen == true ? "left-0" : " -left-full"
              }`}
            >
              <div className="logo bg-white py-5 px-3 relative">
                <a href="#">
                  <img src={logo} alt="logo" />
                </a>
                <i
                  className="absolute top-5 right-2 text-3xl cursor-pointer"
                  onClick={handleMenuClose}
                >
                  <IoClose />
                </i>
              </div>

              <nav className="flex flex-col h-[calc(100vh-160px)] overflow-y-auto py-10 gap-6 px-5 ">
                <p className="text-sm font-semibold font-poppins text-white/50">
                  Quick Links
                </p>
                <div className="nav-items flex flex-col  gap-5 px-3">
                  {navLinks.map((link) => (
                    <NavLink
                      to={link.path}
                      key={link.id}
                      className={({ isActive }) =>
                        isActive ? "nav-active-mobile" : "nav-items-mobile"
                      }
                      onClick={handleMenuClose}
                    >
                      {link.link}
                    </NavLink>
                  ))}
                  <a href="#" className="nav-items text-white!">
                    Shop
                  </a>
                </div>
                <div>
                  <p
                    className="text-sm font-semibold font-poppins text-white/50 flex items-center
             gap-2 cursor-pointer pb-6"
                    onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                  >
                    Shop By Catagory{" "}
                    {isDropDownOpen ? <FaChevronDown /> : <FaChevronUp />}
                  </p>
                  <div
                    className={`flex flex-col gap-6 ${
                      isDropDownOpen == false ? "dropdown-open" : "dropdown"
                    }`}
                  >
                    {Mycategories.map((catagory) => (
                      <Link
                        to={`${catagory.path == "/tablets" ? `/products/category/tablets` : `/products/category${catagory.path}`}`}
                      >
                        <div
                          className="catagory text-white! flex gap-2 g"
                          key={catagory.id}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <i className="text-2xl">{catagory.icon}</i>
                          <a href={`# ${catagory.text}`}>{catagory.text}</a>
                        </div>
                      </Link>
                    ))}
                    {filteredCategories?.map((item, index) => (
                      <Link
                        to={`/shop/category/${item.slug}`}
                        className="cursor-pointer"
                      >
                        <div
                          className="catagory text-white! flex gap-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <i className="text-[22px]">
                            {categoryIcons[item.slug] || <BiSolidCategoryAlt />}
                          </i>
                          <h2 className="cursor-pointer text-sm!">
                            {item.name}
                          </h2>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              {/* icons */}
              <div className=" border border-gray-150 py-2 bg-gray-200 px-3 absolute bottom-0 left-0 w-full ">
                <p className="text-lg font-semibold font-poppins  ">
                  Subscribe
                </p>
                <p className="font-medium font-poppins text-sm pb-4">
                  Get 10% off your first order
                </p>

                <div className="flex gap-3 items-center text-xl ">
                  <i>
                    <FaTwitter />
                  </i>
                  <i>
                    <FaFacebookF />
                  </i>
                  <i>
                    <FaInstagram />
                  </i>
                  <i>
                    <FaLinkedinIn />
                  </i>
                  <i>
                    <IoCallSharp />
                  </i>
                  <i>
                    <FaShippingFast className="" />
                  </i>
                </div>
              </div>
            </div>
          </div>

          {/* overlay */}
          <div
            className={`overlay fixed w-full bg-black/60 backdrop-blur-sm h-screen z-50 ${
              isMenuOpen ? "" : "hidden"
            }`}
            onClick={handleMenuClose}
          ></div>

          {/* search btn */}
          <div className="px-3 py-3 overflow-hidden">
            <div className="search relative w-full border-2 rounded-lg border-gray-500 focus-within:border-black">
              <i className="absolute top-3.5 left-2.5  text-2xl text-gray-850 ">
                <CiSearch />
              </i>
              <input
                type="text"
                className="py-3 pl-12 bg-gray-300 font-poppins rounded-lg outline-0 w-full text-[14px] font-medium text-gray-dark-600 leading-5"
                name="search"
                placeholder="Search"
              />
            </div>
          </div>
          <CatagoriesHeader className="" />
        </Container>
      </div>
    </>
  );
};

export default NavberSection;
