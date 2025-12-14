import React from 'react'
import logo from '@/assets/logo-white.svg'
import Container from '@/components/commonComponents/Container';
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa';
 const footerLinks = [
  {
    id: 1,
    title: "Services",
    items: [
      "Bonus Program",
      "Gift Cards",
      "Credit & Payment",
      "Service Contracts",
      "Business Accounts",
      "Secure Payment",
    ],
  },
  {
    id: 2,
    title: "Assistance to the Buyer",
    items: [
      "Track Your Order",
      "Delivery Information",
      "Returns & Exchanges",
      "Warranty & Guarantee",
      "FAQs",
      "Terms of Use",
    ],
  },
];

const Footer = () => {
  return (
    <>
    <footer className=''>
        <section className=' py-20 lg:py-[104px] bg-black px-4'>
          <Container>
            <div className="main flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-14 md:gap-28 pb-6">
               <div className="right md:w-[35%]">
                 <div className="logo pb-6 cursor-pointer">
               <a href="#">
                     <img src={logo} alt="" />
               </a>
                </div>
                <div className="text">
                    <p className='font-poppins text-sm font-medium leading-[175.5%] text-gray-550'>We are a modern e-commerce tech shop offering the latest gadgets, smart devices, and accessories. Our goal is to deliver high-quality products with fast, reliable service worldwide</p>
                </div>
               </div>
               <div className="left md:w-[65%] w-full flex  items-center gap-15 md:gap-22 justify-end">
                  {
                    footerLinks.map((link)=> (
                        <div className="md:w-[40%]" key={link.id}>
                            <div className="header">
                                <h2 className='font-poppins text-base    font-semibold leading-[175.5%] text-white pb-2.5'>{link.title}</h2>
                               
                            </div>
                             <ul>
                                   {
                                    link.items.map((li)=> (
                                        <li className='font-poppins text-sm font-light leading-[180.5%] text-gray-550/80 cursor-pointer hover:underline'>{li}</li>
                                    ))
                                   }
                                </ul>
                        </div>
                    ))
                  }
               </div>
            </div>
            <div className="social-links ">
              <div className="flex items-center gap-5 text-white justify-center md:justify-start w-full pt-5 md:pt-0">
                <a href="#" className='p-2  hover:bg-gray-800 hover:text-black rounded-full text-lg transition-all duration-200 ease-in-out inline-block'>
                    <FaTwitter />
                </a>
                <a href="#" className='p-2 hover:bg-gray-800 hover:text-black rounded-full text-lg transition-all duration-200 ease-in-out inline-block'>
                    <FaFacebookF />
                </a>
                <a href="#" className='p-2 hover:bg-gray-800 hover:text-black rounded-full text-lg transition-all duration-200 ease-in-out inline-block'>
                    <FaInstagram />
                </a>
                <a href="#" className='p-2 hover:bg-gray-800 hover:text-black rounded-full text-lg transition-all duration-200 ease-in-out inline-block'>
                    <FaWhatsapp />
                </a>
              </div>
            </div>
        </Container>
        </section>
                <div className="w-full text-center bg-black  py-5">
                <p className='font-poppins text-sm font-medium leading-[175.5%] text-gray-550 '>© 2025 Cyber. All rights reserved. Developed by Shayan.</p>
              </div>
    </footer>

    </>
  )
}

export default Footer