import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { HiComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { MdVideogameAsset } from "react-icons/md";
import Container from "../../commonComponents/Container";
import { motion } from "motion/react";
import { fadeIn } from "../../../utils/motion/motion";
import Slider from "react-slick";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
export const catagories = [
  {
    id: 0,
    text: "Phones",
    icon: <FaMobileAlt />,
  },
  {
    id: 1,
    text: "Computers",
    icon: <HiComputerDesktop />,
  },
  {
    id: 2,
    text: "Smart Watches",
    icon: <BsSmartwatch />,
  },
  {
    id: 3,
    text: "Cameras",
    icon: <IoCameraOutline />,
  },
  {
    id: 4,
    text: "Headphones",
    icon: <FiHeadphones />,
  },
  {
    id: 5,
    text: "Gaming",
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
            {catagories.map((item) => (
              <div className="catagory" key={item.id}>
                <i className="text-2xl">{item.icon}</i>
                <a href={`# ${item.text}`}>{item.text}</a>
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
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
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
              {catagories.map((item) => (
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
