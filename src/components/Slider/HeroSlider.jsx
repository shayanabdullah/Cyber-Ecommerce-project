import React from 'react'
import banner from "../../assets/banner.svg";
import Slider from "react-slick";

const HeroSlider = () => {
      const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (

 <div className="">
       <Slider {...settings}>
         <div className="">
          <img src={banner} className=' w-full'/>
         </div>
         <div className="">
          <img src={banner} className=' w-full'/>
         </div>
         <div className="">
          <img src={banner} className=' w-full'/>
         </div>

          </Slider>
 </div>
      
  )
}

export default HeroSlider