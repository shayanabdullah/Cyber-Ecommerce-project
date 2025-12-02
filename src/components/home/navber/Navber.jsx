import React from "react";
import Container from "../../commonComponents/Container";
import logo from "../../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { motion } from "motion/react";
import CatagoriesHeader from "./CatagoriesHeader";
import { fadeIn } from "../../../utils/motion/motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { a } from "motion/react-client";

const navLinks = [
  {
    id : 1,
    link : 'Home',
    href : 'home'
  },
  {
    id : 2,
    link : 'About',
    href : 'About'
  },
  {
    id : 3,
    link : 'Blog',
    href : 'Blog'
  },
  {
    id : 4,
    link : 'Contact',
    href : 'Contact'
  },
]


const Navber = () => {
  return (
    <>
      <motion.nav
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="py-5 bg-white hidden md:block"
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
            {
              navLinks.map((link)=> (
                <a href={link.href} key={link.id} className="nav-items">{link.link}</a>
              ))
            }
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
      <div className="md:hidden sticky top-0 bg-white z-99">
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
                 <div className="menu-btn text-3xl cursor-pointer">
            <HiOutlineMenuAlt3 />
          </div>
          </div>
     
        </motion.nav>



        {/* search btn */}
        <div className="px-3 py-3">
          <div className="search relative w-full border-2 rounded-lg border-gray-500 focus-within:border-black">
            <i className="absolute top-3.5 left-2.5  text-2xl text-gray-850 ">
              <CiSearch />
            </i>
            <input
              type="text"
              className="py-4 pl-12 bg-gray-300 font-poppins rounded-lg outline-0 w-full text-[14px] font-medium text-gray-dark-600 leading-5"
              name="search"
              placeholder="Search"
            />
          </div>
        </div>
      </div>

      {/* catagory-header */}
      <CatagoriesHeader className="hidden md:block" />
    </>
  );
};

export default Navber;
