import FooterSection from '@/components/home/footer/FooterSection'
import NavberSection from '@/components/home/navber/NavberSection'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
<>
<NavberSection/>
<Outlet/>
<FooterSection/>
</> 
 )
}

export default Layout