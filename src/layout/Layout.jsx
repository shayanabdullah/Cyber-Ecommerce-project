import FooterSection from '@/components/home/footer/FooterSection'
import NavberSection from '@/components/home/navber/NavberSection'
import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/common/ScrollToTop.jsx'

const Layout = () => {
  return (
<>
<ScrollToTop/>
<NavberSection/>
<Outlet/>
<FooterSection/>
</> 

 )
}

export default Layout