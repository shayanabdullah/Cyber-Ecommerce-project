import Container from "@/components/common/Container";
import React, { useState } from "react";
import iphone17 from "@/assets/products-images/iphone-17pro.png";
import iphone17blue from "@/assets/products-images/iphone-17-blue.jpeg";
import iphone17silver from "@/assets/products-images/iphone-17-silver.jpeg";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { FiSmartphone, FiCpu, FiCamera, FiBattery } from "react-icons/fi";
import { BsCpu, BsCameraVideo } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import ShopButton from "@/components/common/ShopButton";
import { FaShieldAlt } from "react-icons/fa";

const ProductDetails = () => {
  const [previewImg, setPreviewImg] = useState(iphone17);
  const [readMore, setreadMore] = useState(false);

  const [varinatPrice, setVariant] = useState({
    price: 1099,
    prePrice: 1199,
  });

  const gallery = [
    { img: iphone17 },
    { img: iphone17blue },
    { img: iphone17silver },
  ];

  const productData = [
    {
      id: "iphone-17-pro",
      name: "Apple iPhone 17 Pro",

      description:
        "The Apple iPhone 17 Pro delivers flagship performance with a stunning Super Retina XDR OLED display, powered by the ultra-efficient A19 Pro chip and an advanced triple-camera system that captures incredible detail in any lighting condition. Built for pro-level photography, smooth high-performance gaming, and seamless multitasking, it offers all-day battery efficiency, a refined premium design, and a fluid user experience that keeps up with everything you do.",

      specs: [
        {
          id: 1,
          title: "Screen size",
          value: "6.3″ Super Retina XDR OLED",
          icon: <FiSmartphone />,
        },
        {
          id: 2,
          title: "Processor",
          value: "Apple A19 Pro",
          icon: <FiCpu />,
        },
        {
          id: 3,
          title: "Cores",
          value: "6-core CPU",
          icon: <BsCpu />,
        },
        {
          id: 4,
          title: "Main camera",
          value: "48 MP + 48 MP + 48 MP",
          icon: <FiCamera />,
        },
        {
          id: 5,
          title: "Front camera",
          value: "18 MP Center Stage",
          icon: <BsCameraVideo />,
        },
        {
          id: 6,
          title: "Battery",
          value: "Up to 37 hrs video playback",
          icon: <FiBattery />,
        },
      ],

      variants: [
        {
          id: 1,
          variant: "256GB",
          price: 1099,
          previousPrice: 1199,
        },
        {
          id: 2,
          variant: "512GB",
          price: 1299,
          previousPrice: 1399,
        },
        {
          id: 3,
          variant: "1TB",
          price: 1499,
          previousPrice: 1699,
        },
      ],
    },
  ];

const serviceFeatures = [
  {
    id: 1,
    text: "Free Delivery",
    p : '1-2 day',
    icon: <FiTruck />,
  },
  {
    id: 2,
    text: "In Stock",
    icon: <BsShop />,
    p : 'Today',
  },
  {
    id: 3,
    text: "Guaranteed",
    icon: <MdVerified />,
    p : '1 year',
  },
  {
    id: 4,
    text: "Secure Payment",
    icon: <FaShieldAlt/>,
  },
];
  
  const handleVarinatPrice = (price, prePrice) => {
    setVariant({
      price,
      prePrice,
    });
  };

  return (
    <>
      <section className="px-4">
        <Container>
          {/* Temporary BredCrums */}
          <div className="py-10">
            <Container>
              <div className="main flex flex-wrap items-center gap-1 gap-y-2 md:gap-4 pb-6">
                <h2 className="font-poppins font-medium text-xs md:text-base text-gray-750">
                  Home
                </h2>
                <i className="text-2xl text-gray-750">
                  <GoChevronRight />
                </i>
                <h2 className="font-poppins font-medium text-xs md:text-base text-gray-750">
                  Catalog
                </h2>
                <i className="text-2xl text-gray-750">
                  <GoChevronRight />
                </i>
                <Link to={"/shop/phones"}>
                  <h2 className="font-poppins font-medium text-xs md:text-base text-gray-750 cursor-pointer!">
                    Smartphones
                  </h2>
                </Link>
                <i className="text-2xl text-gray-750">
                  <GoChevronRight />
                </i>
                <h2 className="font-poppins font-medium text-xs md:text-base text-gray-750">
                  Apple
                </h2>
                <i className="text-2xl text-gray-750">
                  <GoChevronRight />
                </i>
                {/* active last  */}
                <h2 className="font-poppins font-semibold text-xs md:text-base text-black">
                  iPhone 17 Pro Max
                </h2>
              </div>
            </Container>
          </div>
          {/* Temporary BredCrums */}

          <div className="main pb-28 md:py-28 hidden md:block">
            <div className="product">
              
              {/* left */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                <div className="md:w-[45%] flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="md:w-[15%] flex md:flex-col gap-y-5 items-center pt-10 ">
                    {gallery.map((img, i) => (
                      <div
                        className="w-full h-full cursor-pointer"
                        onClick={() => setPreviewImg(img.img)}
                        key={i}
                      >
                        <img
                          src={img.img}
                          alt=""
                          className={`max-w-19 md:max-w-28 w-full transition-all duration-200 ease-in-out ${
                            previewImg === img.img ? "scale-120 " : "opacity-70"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="w-[85%]">
                    <img
                      src={previewImg}
                      alt=""
                      className="max-h-[590px] max-w-[500px] w-full h-full"
                    />
                  </div>
                </div>

                {/* right */}
                <div className="md:w-[55%] ">
                  {/* details */}
                  <div className="right">
                    <h2 className="font-sf-pro font-bold text-[40px] leading-10 pb-6">
                      Apple iPhone 17 Pro Max
                    </h2>
                    <div className="price flex items-center gap-4 pb-4">
                      <p className="font-poppins font-semibold text-[32px] leading-12 text-black">
                        {" "}
                        ${varinatPrice.price}
                      </p>
                      <p className="font-sf-pro font-normal text-2xl leading-12 text-[#A0A0A0] line-through">
                        {" "}
                        ${varinatPrice.prePrice}
                      </p>
                    </div>
                    <div className="colors flex items-center gap-6 pb-6">
                      <p className="font-sf-pro font-normal text-sm">
                        Select color :
                      </p>
                      <div className="color-box flex items-center gap-2">
                        <button
                          className=" w-8 h-8 rounded-full bg-[#ff821c] cursor-pointer"
                          onClick={() => setPreviewImg(iphone17)}
                        ></button>
                        <button
                          className=" w-8 h-8 rounded-full bg-[#050439] cursor-pointer"
                          onClick={() => setPreviewImg(iphone17blue)}
                        ></button>
                        <button
                          className=" w-8 h-8 rounded-full bg-[#C0C0C0] cursor-pointer"
                          onClick={() => setPreviewImg(iphone17silver)}
                        ></button>
                      </div>
                    </div>

                    <div className="varients flex items-center gap-4 pb-6">
                      {productData.map((detail) =>
                        detail.variants.map((varnt) => (
                          <button
                            key={varnt.id}
                            className={`py-3 px-6 rounded-lg border  cursor-pointer font-poppins font-medium text-sm  ${
                              varinatPrice.price === varnt.price
                                ? "border-black text-black font-semibold"
                                : "border-[#D5D5D5] text-[#6F6F6F]"
                            }`}
                            onClick={() =>
                              handleVarinatPrice(
                                varnt.price,
                                varnt.previousPrice
                              )
                            }
                          >
                            {varnt.variant}
                          </button>
                        ))
                      )}
                    </div>

                    {/* specs */}
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4 pb-6">
                      {productData.map((item) =>
                        item.specs.map((spec) => (
                          <div
                            className="flex items-center gap-2 py-4 px-4 bg-[#F4F4F4] min-h-21 rounded-lg"
                            key={spec.id}
                          >
                            <i className="text-[#4E4E4E] text-2xl">
                              {spec.icon}
                            </i>
                            <div className="h-full flex flex-col justify-center ">
                              <h2 className="font-sf-pro font-normal text-sm text-gray-800 ">
                                {spec.title}
                              </h2>
                              <p className="text-xs font-sf-pro font-medium text-[#4E4E4E]">
                                {spec.value}
                              </p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* description */}
                    <div className="">
                      {productData.map((item) => (
                  <>
                  
                        <p className={`font-sf-pro font-normal text-sm text-gray-dark-400 leading-6  ${readMore ? '' : 'line-clamp-3'}`}>
                          {item.description }
                       
                       
                          </p>
                             <span className="text-gray-dark-700 underline cursor-pointer font-semibold" onClick={()=> setreadMore((prev)=> !prev)}>{readMore ? 'less' : "more"}</span>
                          </>
                          
                      ))}
                    </div>

                {/* buttons */}
                <div className="flex items-center py-8 gap-4 w-full">
                  <ShopButton text={'Add to Wishlist'} className={'border-black! text-black! w-full flex justify-center'}/>
                  <ShopButton text={'Add to Cart'} className={'bg-black! w-full flex justify-center'}/>
                </div>

                {/* services */}
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 w-full">
                  {
                    serviceFeatures.map((service)=> (
                      <div className="flex items-center gap-3 w-full" key={service.id}>
                        <div className="icon p-4 bg-gray-100 rounded-xl">{service.icon}</div>
                     <div className="">
                         <h3 className="font-poppins font-medium text-sm text-[#717171]">{service.text}</h3>
                        <p className="font-poppins font-medium text-sm  text-black">{service?.p}</p>
                     </div>
                      </div>
                    ))
                  }
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  for moblie  */}
           <div className="main pb-28 md:hidden px-3">
            <div className="product">
              <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                   {/* left */}
                <div className="md:w-[45%] flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="w-[85%] mx-auto">
                    <img
                      src={previewImg}
                      alt=""
                      className="max-h-[590px] max-w-[500px] w-full h-full"
                    />
                  </div>
                     <div className="w-full flex  items-center justify-center pt-10 ">
                    {gallery.map((img, i) => (
                      <div
                        className="w-full h-full cursor-pointer"
                        onClick={() => setPreviewImg(img.img)}
                        key={i}
                      >
                        <img
                          src={img.img}
                          alt=""
                          className={`max-w-19 md:max-w-28 w-full transition-all duration-200 ease-in-out ${
                            previewImg === img.img ? "scale-120 " : "opacity-70"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* right */}
                <div className="md:w-[55%] ">
                  {/* details */}
                  <div className="right">
                    <h2 className="font-sf-pro font-bold text-[40px] leading-10 pb-6">
                      Apple iPhone 17 Pro Max
                    </h2>
                    <div className="price flex items-center gap-4 pb-4">
                      <p className="font-poppins font-semibold text-[32px] leading-12 text-black">
                        {" "}
                        ${varinatPrice.price}
                      </p>
                      <p className="font-sf-pro font-normal text-2xl leading-12 text-[#A0A0A0] line-through">
                        {" "}
                        ${varinatPrice.prePrice}
                      </p>
                    </div>
                    <div className="colors flex items-center gap-6 pb-6">
                      <p className="font-sf-pro font-normal text-sm">
                        Select color :
                      </p>
                      <div className="color-box flex items-center gap-2">
                        <button
                          className=" w-8 h-8 rounded-full bg-[#ff821c] cursor-pointer"
                          onClick={() => setPreviewImg(iphone17)}
                        ></button>
                        <button
                          className=" w-8 h-8 rounded-full bg-[#050439] cursor-pointer"
                          onClick={() => setPreviewImg(iphone17blue)}
                        ></button>
                        <button
                          className=" w-8 h-8 rounded-full bg-[#C0C0C0] cursor-pointer"
                          onClick={() => setPreviewImg(iphone17silver)}
                        ></button>
                      </div>
                    </div>

                    <div className="varients flex items-center gap-4 pb-6">
                      {productData.map((detail) =>
                        detail.variants.map((varnt) => (
                          <button
                            key={varnt.id}
                            className={`py-3 px-6 rounded-lg border  cursor-pointer font-poppins font-medium text-sm  ${
                              varinatPrice.price === varnt.price
                                ? "border-black text-black font-semibold"
                                : "border-[#D5D5D5] text-[#6F6F6F]"
                            }`}
                            onClick={() =>
                              handleVarinatPrice(
                                varnt.price,
                                varnt.previousPrice
                              )
                            }
                          >
                            {varnt.variant}
                          </button>
                        ))
                      )}
                    </div>

                    {/* specs */}
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4 pb-6">
                      {productData.map((item) =>
                        item.specs.map((spec) => (
                          <div
                            className="flex items-center gap-2 py-4 px-4 bg-[#F4F4F4] min-h-21 rounded-lg"
                            key={spec.id}
                          >
                            <i className="text-[#4E4E4E] text-2xl">
                              {spec.icon}
                            </i>
                            <div className="h-full flex flex-col justify-center ">
                              <h2 className="font-sf-pro font-normal text-sm text-gray-800 ">
                                {spec.title}
                              </h2>
                              <p className="text-xs font-sf-pro font-medium text-[#4E4E4E]">
                                {spec.value}
                              </p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* description */}
                    <div className="">
                      {productData.map((item) => (
                        <p className="" key={item.id}>
                          hello 
                          </p>
                      ))}
                    </div>

                {/* buttons */}
                <div className="flex items-center py-8 gap-4 w-full">
                  <ShopButton text={'Add to Wishlist'} className={'border-black! text-black! w-full flex justify-center'}/>
                  <ShopButton text={'Add to Cart'} className={'bg-black! w-full flex justify-center'}/>
                </div>

                {/* services */}
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 w-full">
                  {
                    serviceFeatures.map((service)=> (
                      <div className="flex items-center gap-3 w-full" key={service.id}>
                        <div className="icon p-4 bg-gray-100 rounded-xl">{service.icon}</div>
                     <div className="">
                         <h3 className="font-poppins font-medium text-sm text-[#717171]">{service.text}</h3>
                        <p className="font-poppins font-medium text-sm  text-black">{service?.p}</p>
                     </div>
                      </div>
                    ))
                  }
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  for moblie  */}
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
