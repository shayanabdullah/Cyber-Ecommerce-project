import React, { useContext, useEffect, useState } from "react";
import { FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { HiComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { MdVideogameAsset } from "react-icons/md";
import Container from "../../common/Container";
import { motion } from "motion/react";
import { fadeIn } from "../../../utils/motion/variants";
import Slider from "react-slick";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import { LuLaptop } from "react-icons/lu";
import axios from "axios";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { DataContext } from "../../../Context/DataContext";
import { categoryIcons } from "../../../data/Icons";
export const Mycategories = [
  {
    id: 0,
    text: "Phones",
    path: "/phones",
    icon: <FaMobileAlt />,
  },
  {
    id: 1,
    text: "Laptop",
    path: "/laptops",
    icon: <LuLaptop />,
  },
  {
    id: 2,
    text: "Smart Watches",
    path: "/smartwatches",
    icon: <BsSmartwatch />,
  },
  {
    id: 3,
    text: "Tablet",
    path: "/tablets",
    icon: <FaTabletAlt />,
  },
  {
    id: 4,
    text: "Headphones",
    path: "/headphones",
    icon: <FiHeadphones />,
  },
  {
    id: 5,
    text: "Gaming",
    path: "/gaming",
    icon: <MdVideogameAsset />,
  },
];

const CatagoriesHeader = ({ className }) => {
  const {slug} = useParams()

const { categories, fetchCategories } = useContext(DataContext);

useEffect(() => {
  fetchCategories();
}, []);


const filteredCategories = categories.filter(item=> item.slug !== 'laptops' && item.slug !== 'smartphones' )





  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className={`catagories-main py-2 bg-gray-dark-650 ${className}`}
    >
      <div className="hidden lg:block">
        <Container>
            <Swiper
              slidesPerView={6}
              spaceBetween={2}
              loop={true}
              navigation={true}
              modules={[Navigation, Autoplay]}
            >
              {Mycategories?.map((item) => (
                <SwiperSlide>
                  <div className="catagory" key={item.id}>
                    <i className="text-2xl">{item.icon}</i>
                    <Link to={`${item.path == "/tablets" ? `/shop/category/tablets` : `/shop/category${item.path}` }`} >{item.text}</Link>
                    
                  </div>
                </SwiperSlide>
              ))}


              {filteredCategories?.map((item, index) => (
                <SwiperSlide key={index}>
              <Link to={`/shop/category/${item.slug}`} className="cursor-pointe">
                  <div className="catagory cursor-pointer" >
                    <i className="text-2xl">
                      {categoryIcons[item.slug] || <BiSolidCategoryAlt />}
                      </i>
                    <h2 className="cursor-pointe" >{item.name}</h2>
                  </div>
              </Link>
                </SwiperSlide>
              ))}

            </Swiper>
        </Container>
      </div>

      {/* mobile catagory */}
      <div className="lg:hidden">
        <Container>
          <div className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                375 : {
                  slidesPerView: 2,

                },
                600: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              navigation={true}
              modules={[Navigation, Autoplay]}
            >
              {categories.map((item) => (
                <SwiperSlide>
                  <div className="catagory " key={item.id}>
                    <i className="text-2xl">{item.icon}</i>
                    <a href={`# ${item.text}`}>{item.text}</a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
    </motion.div>
  );
};

export default CatagoriesHeader;
