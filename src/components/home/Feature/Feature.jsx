import React from "react";
import playstation from '@/assets/playstation-half.png'
import playstation2 from '@/assets/playstation.png'
import airpod from '@/assets/airpod-half.png'
import airpod2 from '@/assets/airpod-2.png'
import vr from '@/assets/vr.png'
import fullVr from '@/assets/full-vr.png'
import half from '@/assets/macbook-half.svg'
import macbook from '@/assets/macbook-sm.svg'
import ShopButton from "@/components/commonComponents/ShopButton";
const Feature = () => {
  return (
    <>
      <section className="hidden xxl:block">
        <div className="main flex ">
          <div className="left w-[45%] items-center">
            <div className="flex items-center">
              <div className="img">
                <img src={playstation} alt="" />
              </div>
              <div className="text">
                <h2 className="font-poppins font-medium text-[49px] text-black leading-10 pb-5">Playstation 5</h2>
                <p className="featured-p w-[338px]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="left bg-gray-200 flex gap-12 items-center">
                <div className="img">
                  <img src={airpod} alt="" />
                </div>
                <div className="text-box">
                  <h2 className="font-sf-pro text-[29px] text-black font-normal w-40 leading-10 pb-2.5">Apple AirPods <span className="font-semibold">Max</span></h2>
                  <p className="featured-p w-40">Computational audio. Listen, it's powerful</p>
                </div>
              </div>
              <div className="right bg-gray-dark-600 flex gap-5 items-center">
                          <div className="img">
                  <img src={vr} alt="" />
                </div>
                <div className="text-box">
                  <h2 className="font-sf-pro text-[29px] text-white font-normal w-36 leading-10 pb-2.5">Apple Vision <span className="font-semibold">Pro</span></h2>
                  <p className="featured-p w-40">An immersive way to experience entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right bg-gray-200 w-[55%] flex items-center justify-between  ">
                  <div className="text-box pl-14 w-[70%]">
                  <h2 className="font-poppins text-[64px] text-black font-thin  leading-14 pb-4">Macbook  <span className="font-medium">Air</span></h2>
                  <p className="featured-p w-[420px] pb-4">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                     <ShopButton text={'Shop Now'} className='border-black! text-black! inline-block mt-5'/>
                </div>
             
            <div className="img w-[30%] ">
              <img src={half} alt="" className="justify-self-end" />
            </div>
          </div>
        </div>
      </section>

      {/* Moblie featured section */}
      <section className=" xxl:hidden">
       <div className="main">
        <div className="card flex flex-col gap-6 justify-center items-center py-10 px-4">
          <div className="img">
            <img src={airpod2} alt="" className="max-w-[200px] w-full" />
          </div>
          <div className="text text-center  ">
              <h2 className="font-sf-pro text-[34px] text-black font-normal  leading-10 pb-2.5">Apple AirPods <span className="font-semibold">Max</span></h2>
                  <p className="featured-p ">Computational audio. Listen, it's powerful</p>
          </div>
        </div>
        <div className="card flex flex-col gap-6 justify-center items-center py-10 bg-gray-dark-600 px-4">
          <div className="img">
            <img src={fullVr} alt="" className="" />
          </div>
          <div className="text text-center  ">
              <h2 className="font-sf-pro text-[34px] text-white font-normal  leading-10 pb-2.5">Apple Vision <span className="font-semibold">Pro</span></h2>
                  <p className="featured-p ">An immersive way to experience entertainment</p>
          </div>
        </div>
           <div className="card flex flex-col gap-6 justify-center items-center py-10 px-4">
          <div className="img">
            <img src={playstation2} alt=""/>
          </div>
          <div className="text text-center  ">
              <h2 className="font-sf-pro text-[34px] text-black font-normal  leading-10 pb-2.5">PlayStation <span className="font-semibold">5</span></h2>
                  <p className="featured-p ">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
          </div>
        </div>
           <div className="card flex flex-col gap-6 justify-center items-center py-10 px-4 bg-gray-200">
          <div className="img">
            <img src={macbook} alt=""/>
          </div>
          <div className="text text-center  ">
              <h2 className="font-sf-pro text-[34px] text-black font-normal  leading-10 pb-2.5">Macbook <span className="font-semibold">Air</span></h2>
                  <p className="featured-p pb-4">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                      <ShopButton text={'Shop Now'} className='border-black! text-black! block'/>
          </div>
        </div>
       </div>
      </section>
    </>
  );
};

export default Feature;
