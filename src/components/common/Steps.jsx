import React from 'react'
import Container from './Container'
import { RiMapPinFill } from 'react-icons/ri'
import line from "@/assets/line.svg";
const Steps = ({TitleclassNameFirst, iconClassNameFirst, TitleclassNameSecond, iconClassNameSecond, TitleclassNameThird, iconClassNameThird}) => {
  return (
   <header className="py-18 px-3">
        <Container>
          <div className="main flex items-center justify-between md:gap-8">
            <div className="flex items-center gap-3 w-full ">
              <i className={`p-1 rounded-full bg-black text-white w-6 h-6 ${iconClassNameFirst}`}>
                <RiMapPinFill />
              </i>
              <h2 className={`font-poppins font-medium text-sm text-black leading-4 ${TitleclassNameFirst}`}>
                Step 1<span className="text-xl block">Address</span>
              </h2>
            </div>
            
            <img src={line} alt="" className="max-w-[90px] w-full md:max-w-full " />

            <div className="flex items-center gap-3  w-full md:px-8">
              <i className={`p-1 rounded-full bg-black/30 text-white w-6 h-6 ${iconClassNameSecond}`}>
                <RiMapPinFill />
              </i>
              <h2 className={`font-poppins font-medium text-sm text-black/30 leading-4 ${TitleclassNameSecond}`}>
                Step 2
                <span className="text-xl block ">Shipping</span>
              </h2>
            </div>

            <img src={line} alt="" className="w-full hidden md:block" />

       <div className="hidden md:block">
             <div className="flex items-center gap-3 w-full md:px-8 ">
              <i className={`p-1 rounded-full bg-black/30 text-white w-6 h-6 ${iconClassNameThird}`}>
                <RiMapPinFill />
              </i>
              <h2 className={`font-poppins font-medium text-sm text-black/30 leading-4 ${TitleclassNameThird}` }>
                Step 1<span className="text-xl block">Address</span>
              </h2>
            </div>
       </div>
          </div>
        </Container>
      </header>
  )
}

export default Steps