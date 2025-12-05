import React, { useState } from "react";
import Container from "../../commonComponents/Container";
import logo from "../../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty, IoIosHelpCircleOutline } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { motion } from "motion/react";
import CatagoriesHeader, { catagories } from "./CatagoriesHeader";
import { fadeIn } from "../../../utils/motion/motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GoHome } from "react-icons/go";
import {
  FaChevronDown,
  FaChevronUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaShippingFast,
  FaTwitter,
} from "react-icons/fa";
import { IoCallOutline, IoCallSharp, IoClose } from "react-icons/io5";

const navLinks = [
  {
    id: 1,
    link: "Home",
    href: "home",
  },
  {
    id: 2,
    link: "About",
    href: "About",
  },
  {
    id: 3,
    link: "Blog",
  },
  {
    id: 4,
    link: "Contact",
    href: "Contact",
  },
];
const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <motion.nav
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="py-5 bg-white hidden lg:block"
      >
        <Container>
          <div className="nav-main flex items-center gap-8 justify-end">
            <div className="logo pr-9">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
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
                <a href={link.href} key={link.id} className="nav-items">
                  {link.link}
                </a>
              ))}
              <div className=" flex items-center gap-10    text-2xl w-full">
                <a href="#">
                  <IoIosHeartEmpty />
                </a>
                <a href="#">
                  <PiShoppingCartLight />
                </a>
                <a href="#">
                  <FiUser />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </motion.nav>

      {/* mobile navber */}
      <div className="lg:hidden sticky top-0 bg-white z-99">
        <motion.nav
          className="py-6 bg-gray-100/10 flex justify-between px-4 border-b border-black/34 "
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <div className="logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          {/* menu btn, cart */}
          <div className="flex gap-3 items-center text-2xl">
            <a href="#">
              <IoIosHeartEmpty />
            </a>
            <a href="#">
              <PiShoppingCartLight />
            </a>
            <a href="#">
              <FiUser />
            </a>
            <div
              className="menu-btn text-3xl cursor-pointer"
              onClick={handleMenuOpen}
            >
              <HiOutlineMenuAlt3 />
            </div>
          </div>
        </motion.nav>

        <div
          className={`sidebar max-w-[350px] h-screen fixed z-99 left-0 top-0 bg-black border-r border-black transition-all duration-300 ease-in-out w-full ${
            isMenuOpen == true ? "translate-x-0" : " -translate-x-full"
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
          <nav className="flex flex-col h-[calc(100vh-160px)] overflow-y-auto py-10 gap-6 px-5 relative">
            <p className="text-sm font-semibold font-poppins text-white/50">
              Quick Links
            </p>
            <div className="nav-items flex flex-col  gap-5 px-3">
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.id}
                  className="nav-items text-white! "
                >
                  {link.link}
                </a>
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
                {catagories.map((catagory) => (
                  <div
                    className="catagory text-white! flex gap-2 g"
                    key={catagory.id}
                  >
                    <i className="text-2xl">{catagory.icon}</i>
                    <a href={`# ${catagory.text}`}>{catagory.text}</a>
                  </div>
                ))}
              </div>
            </div>
          </nav>
          {/* icons */}
          <div className=" border border-gray-150 py-2 bg-gray-200 px-3 absolute bottom-0 left-0 w-full max-w-[350px] ">
            <p className="text-lg font-semibold font-poppins  ">Subscribe</p>
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
        <div
          className={`overlay absolute inset-0 bg-black/60 backdrop-blur-sm h-screen z-98 ${
            isMenuOpen ? "" : "hidden"
          }`}
          onClick={handleMenuClose}
        ></div>
        {/* search btn */}
        <div className="px-3 py-3">
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
      </div>

      {/* catagory-header */}
      <CatagoriesHeader className="" />
    </>
  );
};

export default Navber;
