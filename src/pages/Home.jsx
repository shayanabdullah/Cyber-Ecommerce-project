import React from 'react'
import Navber from '../components/home/navber/Navber'
import Feature from '@/components/home/feature/Feature'
import BrowseCatagory from '@/components/home/browseCatagory/BrowseCatagory'
import FeaturedProduct from '@/components/home/featuredProduct/FeaturedProduct'
import ProductShowcase from '@/components/home/productShowcase/ProductShowcase'
import DiscountProduct from '@/components/home/discountProduct/DiscountProduct'
import CTA from '@/components/home/ctaSection/CTA'
import Hero from '@/components/home/slider/Hero'


const Home = () => {
  return (
<>
 <Hero />
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