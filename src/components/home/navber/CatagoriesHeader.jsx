import React from "react";
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
import { Link } from "react-router-dom";
import { LuLaptop } from "react-icons/lu";
export const categories = [
  {
    id: 0,
    text: "Phones",
    path: "/shop/phones",
    icon: <FaMobileAlt />,
  },
  {
    id: 1,
    text: "Laptop",
    path: "/shop/computers",
    icon: <LuLaptop />,
  },
  {
    id: 2,
    text: "Smart Watches",
    path: "/shop/smart-watches",
    icon: <BsSmartwatch />,
  },
  {
    id: 3,
    text: "Tablet",
    path: "/shop/cameras",
    icon: <FaTabletAlt />,
  },
  {
    id: 4,
    text: "Headphones",
    path: "/shop/headphones",
    icon: <FiHeadphones />,
  },
  {
    id: 5,
    text: "Gaming",
    path: "/shop/gaming",
    icon: <MdVideogameAsset />,
  },
];


const CatagoriesHeader = ({ className }) => {
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
          <div className="catagory-contents flex items-center justify-between ">
            {categories.map((item) => (
              <div className="catagory" key={item.id}>
                <i className="text-2xl">{item.icon}</i>
                <Link to={item.path} href={`# ${item.text}`}>{item.text}</Link >
              </div>
            ))}
          </div>
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
