import Footer from '@/components/home/footer/Footer'
import Navber from '@/components/home/navber/Navber'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
<>
<Navber/>
<Outlet/>
<Footer/>
</> 
 )
}

export default Layout