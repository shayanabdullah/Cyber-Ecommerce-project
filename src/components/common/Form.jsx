import React from 'react'
import ShopButton from './ShopButton'

const Form = () => {
  return (
    <div>
        <div className="py-14 px-4 md:px-16 rounded-[10px] border border-[#EBEBEB]">
            <div className="heading pb-10">
                <h2 className="font-sf-pro font-bold  text-xl leading-6 text-black">Order Summary</h2>
            </div>

            <div className="form ">
                <form>
           <div className="space-y-6">
              <div className="flex flex-col ">
                       <label className='text-[#545454] font-poppins font-medium text-sm leading-4 block pb-2'>Discount code / Promo code</label>
                    <input type="text" className='py-4 pl-4 rounded-lg bg-white border-[0.5px] border-[#9F9F9F] font-sf-pro font-normal text-sm leading-6 text-[#979797] outline-0 w-full capitalize' placeholder='code'/>
             </div>
             <div className="flex flex-col relative">
                       <label className='text-[#545454] font-poppins font-medium text-sm leading-4 block pb-2'>Your bonus card number</label>
                    <input type="text" className='py-4 pl-4 rounded-lg bg-white border-[0.5px] border-[#9F9F9F] font-sf-pro font-normal text-sm leading-6 text-[#979797] outline-0 w-full capitalize ' placeholder='Enter card number'/>
                  <button className='py-0.5  px-2 md:px-4 rounded-md border absolute top-9.5 right-6 font-poppins font-medium text-xs leading-6 cursor-pointer'>Apply</button>
             </div>
             <div className="total pb-12">
                <div className="subtotal flex justify-between items-center pb-4">
                    <h2 className='font-poppins font-medium text-base leading-4'>Subtotal</h2>
                    <h2 className='font-poppins font-medium text-base leading-4'>$2921</h2>
                </div>
                <div className="tax flex justify-between items-center pb-4">
                    <h2 className='font-sf-pro font-normal text-base leading-4 text-[#545454]'>Estimated Tax</h2>
                    <h2 className='font-poppins font-medium text-base leading-4'>$50</h2>
                </div>
                <div className="shipping flex justify-between items-center pb-4">
                    <h2 className='font-sf-pro font-normal text-base leading-4 text-[#545454]'>Estimated shipping & Handling</h2>
                    <h2 className='font-poppins font-medium text-base leading-4'>$29</h2>
                </div>
                <div className="total flex justify-between items-center pt-4">
                    <h2 className='font-poppins font-semibold text-lg leading-4'>Total</h2>
                    <h2 className='font-poppins font-semibold text-lg leading-4'>$3000</h2>
                </div>
             </div>
               <ShopButton className={'w-full bg-black! text-white!'} text={'Checkout'}/>
           </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form