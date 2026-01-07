import  Container  from '@/components/common/Container'
import React from 'react'
import line from '../assets/line.svg'
import { FaMapMarked } from 'react-icons/fa'
import { RiMapPinFill } from 'react-icons/ri'
const Address = () => {
  return (
    <>
    <header className='py-18'>
        <Container>
            <div className="main flex items-center justify-between gap-8">
<div className="flex items-center gap-3 max-w-[244px] w-full">
    <i className='p-1 rounded-full bg-black text-white w-6 h-6'><RiMapPinFill /></i>
    <h2 className='font-poppins font-medium text-sm text-black leading-4'>
        Step 1
        <span className='text-xl block'>Address</span>

    </h2>
</div>
 <img src={line} alt="" className='w-full max-w-[300px] '/>
<div className="flex items-center gap-3 max-w-[244px] w-full">
    <i className='p-1 rounded-full bg-black text-white w-6 h-6'><RiMapPinFill /></i>
    <h2 className='font-poppins font-medium text-sm text-black leading-4'>
        Step 1
        <span className='text-xl block'>Address</span>

    </h2>
</div>
 <img src={line} alt="" className='w-full max-w-[300px] '/>
<div className="flex items-center gap-3 max-w-[244px] w-full">
    <i className='p-1 rounded-full bg-black text-white w-6 h-6'><RiMapPinFill /></i>
    <h2 className='font-poppins font-medium text-sm text-black leading-4'>
        Step 1
        <span className='text-xl block'>Address</span>

    </h2>
</div>
            </div>
        </Container>
    </header>
    <section>
        <Container></Container>
    </section>
    </>
  )
}

export default Address