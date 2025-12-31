import ShopButton from '@/components/common/ShopButton'
import { Container } from '@mui/material'
import React from 'react'
import watch from '@/assets/Cta-img/cta-watch.svg'
import ipad from '@/assets/Cta-img/cta-ipad.svg'
import laptop from '@/assets/Cta-img/cta-laptop.svg'
import phone from '@/assets/Cta-img/cta-phone.svg'
import lap from '@/assets/Cta-img/cta-ipad-2.svg'
const CTASection = () => {
  return (
 <>
 <section className='py-[135px] relative overflow-hidden bg-[linear-gradient(138deg,#2E2E2E,#181818)]
'>
    <div className="img absolute top-0 right-[-25%] md:right-0 lg:top-0  lg:right-0  ">
        <img src={phone} alt="" className='w-full' />
    </div>
    <div className="img absolute top-[-12%] left-[-49%] md:left-0 lg:-top-5 lg:left-8 z-10 ">
        <img src={lap} alt="" className='w-full' />
    </div>
    <div className="img absolute top-0 left-[20%]  w-[200px] md:w-[300px]  lg:-top-5 lg:left-[12%]  ">
        <img src={laptop} alt="" className='w-full' />
    </div>
    <div className="img absolute bottom-[-11%]  left-[-19%] w-[200px] md:min-w-[300px] lg:top-[29%] lg:left-0 lg:min-w-[420px]  ">
        <img src={ipad} alt="" className='w-full' />
    </div>
    <div className="img absolute bottom-0 right-0 w-[200px] md:w-[300px] lg:bottom-0 lg:right-0 lg:w-[400px] ">
        <img src={watch} alt="" className='w-full' />
    </div>
    <Container>
        <div className="main w-full text-center">
            <h2 className='text-5xl md:text-[72px] font-sf-pro font-normal text-white pb-5'>Big Winter <span className='font-semibold'>Sale</span></h2>
            <p className='text-base font-sf-pro font-normal text-gray-dark-200 pb-10'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
            <ShopButton text={'Shop Now'} className={'inline-block!'}/>
        </div>
    </Container>
 </section>


 
 </>
  )
}

export default CTASection