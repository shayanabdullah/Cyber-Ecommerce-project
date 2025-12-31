import React from 'react'
import Navber from '../components/home/navber/Navber'
import HeroSlider from '@/components/home/slider/HeroSlider.jsx'
import Feature from '@/components/home/feature/Feature.jsx'
import BrowseCatagory from '@/components/home/browseCatagory/BrowseCatagory.jsx'
import FeaturedProduct from '@/components/home/featuredProduct/FeaturedProduct.jsx'
import ProductShowcase from '@/components/home/productShowcase/ProductShowcase.jsx'
import DiscountProduct from '@/components/home/discountProduct/DiscountProduct.jsx'
import CTA from '@/components/home/ctaSection/CTA.jsx'

const Home = () => {
  return (
 <>
 <HeroSlider/>
 <Feature/>
 <BrowseCatagory/>
 <FeaturedProduct/>
 <ProductShowcase/>
 <DiscountProduct/>
 <CTA/>
 </>
  )
}

export default Home