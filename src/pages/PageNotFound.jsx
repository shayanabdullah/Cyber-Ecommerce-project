import React from 'react'
import Container from '../components/common/Container'
import error from '../assets/error-404.png'
import { CiSearch } from 'react-icons/ci'
import ShopButton from '../components/common/ShopButton'
const PageNotFound = () => {
  return (
  <>
  <section className='py-20'>
    <Container>
        <div className="main w-full flex flex-col justify-center items-center ">
            <div className="img pb-8">
               <img src={error} alt="" />
            </div>
            <div className="text text-center pb-10">
                <h1 className='text-3xl font-poppins font-semibold pb-5'>Oops 404 again! That page can’t be found.</h1>
                <p className='font-poppins font-medium text-base'>It looks like nothing was found at this location. Maybe try a search?</p>
            </div>
            <div className="flex items-center gap-3">
                      <div className="search relative  ">
                              <i className="absolute top-3.5 left-[37px] text-2xl text-gray-850 ">
                                <CiSearch />
                              </i>
                              <input
                                type="text"
                                className="py-4 pl-12 bg-gray-150 font-poppins rounded-lg outline-0 min-w-[450px] text-[14px] font-medium text-gray-dark-450 leading-5 ml-6 focus-within:border-gray-dark-200 border-2 border-black"
                                name="search"
                                placeholder="Search"
                              />
                            </div>
                            <ShopButton text={'Search'} className={'bg-black!'}/>
            </div>
        </div>
    </Container>
  </section>
  </>
  )
}

export default PageNotFound