import React from 'react'
import { FaChevronDown, FaShieldAlt } from "react-icons/fa";
const ShopButton = ({className, text, icon, onClick, disable, onKeyDown}) => {
  return (
<>
<button className={` py-2 px-6 sm:px-8 xl:py-4 xl:px-14 bg-transparent border border-white rounded-md  text-xs sm:text-sm md:text-base font-poppins font-medium leading-6 text-white cursor-pointer ${className}`} onClick={onClick} onKeyDown={onKeyDown} disabled={disable}>{text} {icon}</button>
</>
  )
}

export default ShopButton