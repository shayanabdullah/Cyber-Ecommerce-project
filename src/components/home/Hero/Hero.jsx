import React from "react";
import Container from "../../commonComponents/Container";
import { motion } from "motion/react";
import { fadeIn } from "../../../utils/motion/motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from "../../Slider/HeroSlider";

const Hero = () => {
  return (
    <>
      <motion.section
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className=" cursor-pointer"
      >
   <HeroSlider/>
      </motion.section>
    </>
  );
};

export default Hero;
