import React from "react";
import ShopButton from "@/components/common/ShopButton";
import { ShowcaseProducts } from "@/data/showcaseProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const ProductShowcaseSection = () => {
  return (
    <>
      <section className="max-w-[3000px] mx-auto hidden lg:block overflow-hidden">
        <div className="">
          <div className="main w-full ">
            <Swiper
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              {ShowcaseProducts.map((item,index) => {
                let bg = "";
                let text = "black";

                if (index === 0) {
                  bg = "white";
                } else if (index === 1) {
                  bg = "#F9F9F9";
                } else if (index === 2) {
                  bg = "#EAEAEA";
                } else if (index === 3) {
                  bg = '#2c2c2c';
                  text = "white";
                }

                return (
                  <SwiperSlide key={item.id}>
                    <div className="flex items-center flex-col justify-center " style={{backgroundColor:bg, color:text}}>
                      <div
                        className={`img pb-10 flex w-full  ${
                          item.center ? "justify-center" : "justify-end"
                        } ${item.up ? "-translate-y-5" : ""}`}
                      >
                        <img
                          src={item.img}
                          alt="img"
                          className="lg:min-h-[400px] h-full"
                        />
                      </div>
                      <div className="text px-8 pb-14">
                        <h3 className="font-sf-pro font-normal text-[49px]  leading-14 pb-4">
                          {item.title}
                        </h3>
                        <p className="font-poppins font-medium text-sm text-gray-dark-100  pb-4">
                          {item.desc}
                        </p>
                        <ShopButton
                          text={"Shop Now"}
                          className={`border-${text}! text-${text}! inline-block`}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      {/* mobile */}
      <section className="lg:hidden">
        <div className="main w-full ">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={false}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
            }}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
          >
            {ShowcaseProducts.map((item,index) => {
                 let bg = "";
                let text = "black";

                if (index === 0) {
                  bg = "white";
                } else if (index === 1) {
                  bg = "#F9F9F9";
                } else if (index === 2) {
                  bg = "#EAEAEA";
                } else if (index === 3) {
                  bg = '#2c2c2c';
                  text = "white";
                }
              return (
                <SwiperSlide key={item.id}>
                <div className="flex items-center flex-col justify-center" style={{backgroundColor:bg, color:text}}>
                  <div
                    className={`img pb-10 flex w-full ${
                      item.center ? "justify-center" : "justify-end"
                    } ${item.up ? "-translate-y-8" : ""}`}
                  >
                    <img
                      src={item.img}
                      alt="img"
                      className="lg:min-h-[400px] h-full"
                    />
                  </div>
                  <div className="text px-8 pb-14 w-full h-full justify-center">
                    <h3 className="font-sf-pro font-normal text-[49px]  leading-14 pb-4">
                      {item.title}
                    </h3>
                    <p className="font-poppins font-medium text-sm text-gray-dark-100  pb-4">
                      {item.desc}
                    </p>
                    <ShopButton
                      text={"Shop Now"}
                      className={`border-${text}! text-${text}! inline-block`}
                    />
                  </div>
                </div>
              </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ProductShowcaseSection;
