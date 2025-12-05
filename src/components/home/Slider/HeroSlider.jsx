import React from "react";
import Slider from "react-slick";
import Container from "../../commonComponents/Container";
import banner from "@/assets/iphone.png";
import iphone from "@/assets/banner.svg";
import macbook from "@/assets/mackbook.svg";
import macbookimg from "@/assets/macbook-banner.png";
import ShopButton from "../../commonComponents/ShopButton";
import { motion } from "motion/react";
import { fadeIn } from "../../../utils/motion/motion";


const HeroSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };
  return (
    <>
      <motion.section
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="bg-linear-to-l from-[#211C24] to-[#211C24] cursor-pointer pt-[73px] hidden lg:block"
      >
        <Container>
          <Slider {...settings}>
            <div className="banner flex! items-center justify-between px-5">
              <div className="text-box">
                <p className="font-figtree font-semibold leading-8 text-2xl text-white/45 pb-8">
                  Pro.Beyond.
                </p>
                <h1 className="font-sf-pro font-normal text-8xl leading-[72px] text-white">
                  IPhone 14 <span className="font-semibold">Pro</span>
                </h1>
                <p className="font-poppins font-medium leading-6 text-lg text-white/45 pt-8  pb-8 ">
                  Created to change everything for the better. For everyone
                </p>
                <ShopButton text={"Shop Now"} />
              </div>
              <div className="img-box">
                <img src={banner} alt="" />
              </div>
            </div>
            <div className="banner flex! items-center justify-between px-5 pt-[60px] gap-12">
              <div className="text-box shrink-0">
                <p className="font-figtree font-semibold leading-8 text-2xl text-white/45 pb-8">
                  Pro.Beyond.
                </p>
                <h1 className="font-sf-pro font-normal text-8xl leading-[72px] text-white">
                Macbook <span className="font-semibold">Air</span>
                </h1>
                <p className="font-poppins font-medium leading-6 text-lg text-white/45 pt-8  pb-8">
                The new 15‑inch MacBook Air makes room for more 
                <span className="block">of what you love with a spacious Liquid Retina</span>
                display.
                </p>
                <ShopButton text={"Shop Now"} />
              </div>
              <div className="img-box">
                <img src={macbookimg} alt="" className="w-[800px]" />
              </div>
            </div>
            <div className="banner flex! items-center justify-between px-5">
              <div className="text-box">
                <p className="font-figtree font-semibold leading-8 text-2xl text-white/45 pb-8">
                  Pro.Beyond.
                </p>
                <h1 className="font-sf-pro font-normal text-8xl leading-[72px] text-white">
                  IPhone 17 <span className="font-semibold">Pro</span>
                </h1>
                <p className="font-poppins font-medium leading-6 text-lg text-white/45 pt-8  pb-8 ">
                  Created to change everything for the better. For everyone
                </p>
                <ShopButton text={"Shop Now"} />
              </div>
              <div className="img-box">
                <img src={banner} alt="" />
              </div>
            </div>
          </Slider>
        </Container>
      </motion.section>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="lg:hidden"
      >
        <Slider {...settings}>
          <div>
            <img src={iphone} alt="" className="w-full" />
          </div>
          <div>
            <img src={macbook} alt="" className="w-full" />
          </div>
          <div>
            <img src={iphone} alt="" />
          </div>
        </Slider>
      </motion.div>
    </>
  );
};

export default HeroSlider;
