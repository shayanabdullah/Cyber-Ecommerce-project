import Container from '@/components/common/Container'
import React, { useContext, useEffect } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { SlScreenSmartphone } from "react-icons/sl";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";
import { MdVideogameAsset } from "react-icons/md";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'motion/react';
import { fadeIn, textVariant } from '@/utils/motion/variants';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { DataContext } from '../../../Context/DataContext';
import { Link } from 'react-router-dom';
import { Mycategories } from '../navber/CatagoriesHeader';
import { categoryIcons } from '../../../data/catagoryIcon';
export const catagories = [
  {
    id: 0,
    text: "Phones",
    icon: <SlScreenSmartphone />,
  },
    {
    id: 1,
    text: "Smart Watches",
    icon: <BsSmartwatch />,

  },
  
  {
    id: 2,
    text: "Cameras",
    icon: <IoCameraOutline />,
  },
    {
    id: 3,
    text: "Headphones",
    icon: <FiHeadphones />,
  },
  {
    id: 4,
    text: "Computers",
    icon:<RiComputerLine />,
  },

  {
    id: 5,
    text: "Gaming",
    icon: <MdVideogameAsset />,
  },

  {
    id: 6,
    text: "Computers",
    icon:<RiComputerLine />,
  },
];

const BrowseCatagorySection = () => {
  
  const { categories, fetchCategories } = useContext(DataContext);
  
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
   <>
 <motion.section
  variants={fadeIn('up', 0.4)}
       initial='show'
      
       viewport={{once: true}} className='py-20 px-4'
       id='catagories'
       >
   <Container>
     <div className="header flex justify-between items-center pb-8">
      <motion.h3  variants={textVariant(0.6)} className='font-poppins font-medium text-2xl leading-8 text-black'>Browse By Category</motion.h3>
      <div className="flex items-center gap-2 text-4xl">
        <button className='cursor-pointer next'>
          <GoChevronLeft />
        </button>
        <button className='cursor-pointer prev'>
          <GoChevronRight />
        </button>
      </div>
    </div>

    <div className="catagories">
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
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 32,
                },
              }}
              navigation={
                {
                  nextEl: '.next',
                  prevEl : '.prev'
                }
              }
              modules={[Navigation, Autoplay]}>
       {
        Mycategories.map((catagory)=> (
      <SwiperSlide key={catagory.id} className=''>
     <Link to={`${catagory.path == "/tablets" ? `/products/category/tablets` : `/products/category${catagory.path}` }`}>
            <motion.div
            variants={fadeIn('down', 0.6)}
            className="py-6 rounded-[15px] bg-gray-200 flex flex-col items-center justify-center cursor-pointer">
            <i className='text-3xl pb-2'>{catagory.icon}</i>
            <motion.h3  variants={textVariant(0.7)} className='font-poppins font-medium text-base text-black leading-6'>{catagory.text}</motion.h3>
          </motion.div>
     </Link>
      </SwiperSlide>
        ))
      }
       {
        categories.map((catagory)=> (
      <SwiperSlide key={catagory.id} className=''>
        <Link to={`/products/category/${catagory.slug}`}>
            <motion.div
            variants={fadeIn('down', 0.6)}
            className="py-6 rounded-[15px] bg-gray-200 flex flex-col items-center justify-center cursor-pointer min-h-[110px]">
           <i className="text-2xl pb-3"> {categoryIcons[catagory.slug] || <BiSolidCategoryAlt />}</i>
            <motion.h3  variants={textVariant(0.7)} className='font-poppins font-medium text-base text-black leading-6'>{catagory.name}</motion.h3>
          </motion.div>
        </Link>
      </SwiperSlide>
        ))
      }
     </Swiper>
    </div>

   </Container>
   </motion.section>
   </>
  )
}

export default BrowseCatagorySection