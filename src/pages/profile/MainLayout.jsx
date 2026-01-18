import React from 'react'
import Container from '../../components/common/Container'
import { CreditCard, Heart,  LogOut,  MapPin, User } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
    const location = useLocation()
  const profileLinks = [
    {
      id: 1,
      text : 'Profile',
      icon : <User/>,
      url : 'profile'
    },
    {
      id: 2,
      text : 'Address Book',
      icon : <MapPin/>,
      url : 'address-book'
    },
    {
      id: 3,
      text : 'Payment Methods',
      icon : <CreditCard/>,
      url : 'payment-settings'
    },
    {
      id: 4,
      text : 'Wishlist',
      icon : <Heart/>,
      url : 'wishlist'
    },
  ]

  const {pathname} = location  
  console.log(pathname);
  
  return (
    <>
    <section className='py-10 bg-gray-100'>
      <Container>
        <div className="main flex flex-col lg:flex-row! items-start gap-10">

          <div className="right lg:max-w-[20%]! w-full">
            <div className="py-4 px-4 rounded-lg bg-white ">
              <div className="text pb-5">
                <h2 className='font-poppins font-semibold text-lg pb-1'>Account Settings</h2>
                <p className='font-poppins font-medium text-gray-800 text-sm pb-2'>Manage your preferences</p>
              </div>
              <div className="links flex flex-col gap-3 pb-2 border-b ">
                    {
                      profileLinks.map((link)=> (
                     <Link to={link.url}>
                        <div className={`w-full p-2 rounded-md hover:bg-gray-100 group transition-all duration-300 ease-in-out cursor-pointer flex gap-2.5 items-center ${pathname.includes(link.url) ? "bg-black! text-white!" : ""}`} key={link.id}>
                        <p>{link.icon}</p>
                        <p className={`font-poppins font-medium text-sm text-gray-dark-500 ! ${pathname.includes(link.url) ? "text-white!" : ""}`}>{link.text}</p>
                        </div>
                     </Link>
                      ))
                    }
              </div>
              <div className=" mt-4 p-2 w-full rounded-md hover:bg-red-100 group  transition-all duration-300 ease-in-out cursor-pointer flex gap-2.5 items-center">
                  <p className='text-red-400'>{<LogOut/>}</p>
                        <p className={`font-poppins font-medium text-sm text-red-400 `}>Logout</p>
              </div>
            </div>
          </div>

          <div className="left w-full lg:max-w-[55%]">
            <Outlet/>
          </div>

        </div>
      </Container>
    </section>
    </>
  )
}

export default MainLayout