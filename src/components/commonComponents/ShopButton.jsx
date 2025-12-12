import React from 'react'

const ShopButton = ({className, text}) => {
  return (
<>
<a href="#" className={` py-2 px-6 sm:px-8 xl:py-4 xl:px-14 bg-transparent border border-white rounded-md  text-xs sm:text-sm md:text-base font-poppins font-medium leading-6 text-white ${className}`}>{text}</a>
</>
  )
}

export default ShopButton