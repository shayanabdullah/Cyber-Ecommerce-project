import React from 'react'
import BrowseCatagory from '@/components/home/browseCatagory/BrowseCatagory'
import FeaturedProduct from '@/components/home/featuredProduct/FeaturedProduct'
import ProductShowcase from '@/components/home/productShowcase/ProductShowcase'
import DiscountProduct from '@/components/home/discountProduct/DiscountProduct'
import CTA from '@/components/home/ctaSection/CTA'
import Hero from '@/components/home/slider/Hero'
import FeatureSection from '@/components/home/feature/FeatureSection'


const Home = () => {
  return (
<>
 <Hero />
 <FeatureSection/>
 <BrowseCatagory/>
 <FeaturedProduct/>
 <ProductShowcase/>
 <DiscountProduct/>
 <CTA/>
</>

  )
}

export default Home