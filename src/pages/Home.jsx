import React from 'react'
import Hero from '@/components/home/slider/Hero'
import FeatureSection from '@/components/home/feature/FeatureSection'
import BrowseCatagorySection from '@/components/home/browseCatagory/BrowseCatagorySection'
import FeaturedProductSection from '@/components/home/featuredProduct/FeaturedProductSection'
import ProductShowcaseSection from '@/components/home/productShowcase/ProductShowcaseSection'
import DiscountProductSection from '@/components/home/discountProduct/DiscountProductSection'
import CTASection from '@/components/home/ctaSection/CTASection'


const Home = () => {
  return (
<>
 <Hero />
 <FeatureSection/>
 <BrowseCatagorySection/>
 <FeaturedProductSection/>
 <ProductShowcaseSection/>
 <DiscountProductSection/>
 <CTASection/>
</>

  )
}

export default Home