import React from 'react'

const ShopButton = ({className, text}) => {
  return (
<>
<a href="#" className={`py-4 px-14 bg-transparent border border-white rounded-md text-base font-poppins font-medium leading-6 text-white ${className}`}>{text}</a>
</>
  )
}

export default ShopButton