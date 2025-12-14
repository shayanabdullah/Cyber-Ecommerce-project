import React from 'react'
import Navber from '../components/home/navber/Navber'
import HeroSlider from '@/components/home/Slider/HeroSlider'
import Feature from '@/components/home/Feature/Feature'
import BrowseCatagory from '@/components/home/BrowseCatagory/BrowseCatagory'
import FeaturedProduct from '@/components/home/FeaturedProduct/FeaturedProduct'
import ProductShowcase from '@/components/home/ProductShowcase/ProductShowcase'
import DiscountProduct from '@/components/home/DiscontProduct/DiscountProduct'
import CTA from '@/components/home/CTA/CTA'
import Footer from '@/components/home/Footer/Footer'

const Home = () => {
  return (
 <>
 <Navber/>
 <HeroSlider/>
 <Feature/>
 <BrowseCatagory/>
 <FeaturedProduct/>
 <ProductShowcase/>
 <DiscountProduct/>
 <CTA/>
 <Footer/>
 </>
  )
}

export default Home