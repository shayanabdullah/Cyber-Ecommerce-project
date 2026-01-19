import React, { useState } from 'react'
import Container from '../../components/common/Container'
import { CreditCard, Heart,  LogOut,  MapPin, User } from 'lucide-react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import ShopButton from '../../components/common/ShopButton'
import { getAuth, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/authSlice'

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
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {pathname} = location  
    const [isDeleteMsg, setIsDeleteMsg] = useState(false);

    const handleLogOut = async () => {
      try {
        await signOut(auth);
        dispatch(logout());
        setIsDeleteMsg(false);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    };
  const handleDlteShow = () => {
    setIsDeleteMsg(true)
  }
  const handleClose = () => {
    setIsDeleteMsg(false)
  }
  
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
              <div className=" mt-4 p-2 w-full rounded-md hover:bg-red-100 group  transition-all duration-300 ease-in-out cursor-pointer flex gap-2.5 items-center" onClick={handleDlteShow}>
                  <p className='text-red-400'>{<LogOut/>}</p>
                        <p className={`font-poppins font-medium text-sm text-red-400 `}>Logout</p>
              </div>
            </div>
          </div>
           {isDeleteMsg  &&  (
                                       <>
                                        <div className="w-full absolute top-24 left-1/2 -translate-x-1/2 z-99999 min-w-[280px] max-w-[300px]">
                                          <div className="modal py-5 px-3 rounded-lg border border-gray-800 bg-white">
                                            <p className="font-poppins font-medium text-lg text-red-700 text-center pb-2">
                                              Are you sure you want to Log Out?
                                            </p>
                                            <ShopButton
                                              text="Logout"
                                              className="bg-red-500! w-full"
                                              onClick={handleLogOut}
                                            />
                                          </div>
                                        </div>
                                        <div className="overlay fixed top-0 left-0 w-full h-screen bg-black/30 z-10" onClick={handleClose}>

                                        </div>
                                       </>
                                        
                                      )}

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