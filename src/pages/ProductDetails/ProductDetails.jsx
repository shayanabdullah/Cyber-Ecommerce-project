import Container from "@/components/common/Container";
import React, { useContext, useEffect, useState } from "react";
import iphone17 from "@/assets/products-images/iphone-17pro.png";
import iphone17blue from "@/assets/products-images/iphone-17-blue.jpeg";
import iphone17silver from "@/assets/products-images/iphone-17-silver.jpeg";
import { GoChevronRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";

import { FiTruck } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import ShopButton from "@/components/common/ShopButton";
import { FaChevronDown, FaShieldAlt } from "react-icons/fa";
import { phoneDetails, productData } from "@/data/Details";
import SpecsSection from "@/components/common/SpecsSection";
import { FiSmartphone, FiCpu, FiCamera, FiBattery } from "react-icons/fi";
import { BsCpu, BsCameraVideo } from "react-icons/bs";
import ReviewSection from "@/components/common/ReviewSection";
import RelatedProducts from "@/components/common/RelatedProducts";
import { DataContext } from "../../Context/DataContext";
import BreadCrums from "../../components/common/BreadCrums";
import { categoryMap } from "../../utils/category/specsTemplate .JS";
import { archetypeSpecs } from "../../utils/category/specsTemplate .JS";
import { specIcons } from "../../data/Icons";
import { specifications } from "../../data/Details";
import { getCategoryType } from "../../utils/category/specsTemplate .JS";
import ImageZoom from "react-image-zooom";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';
import ModalImage from "react-modal-image";

const ProductDetails = () => {
  const [readMore, setreadMore] = useState(false);
  const [detailsReadMore, setdetailsReadMore] = useState(false);
  const [viewMore, setViewMore] = useState(false);

  const { id } = useParams();
  const { productDetail, fetchProductDetails, loading } =
    useContext(DataContext);

  const [varinatPrice, setVariant] = useState({
    price: 1099,
    prePrice: 1199,
  });

  const iconMap = {
    smartphone: <FiSmartphone />,
    cpu: <FiCpu />,
    cores: <BsCpu />,
    camera: <FiCamera />,
    frontCamera: <BsCameraVideo />,
    battery: <FiBattery />,
  };

  const gallery = [
    { img: iphone17 },
    { img: iphone17blue },
    { img: iphone17silver },
  ];

  const serviceFeatures = [
    {
      id: 1,
      text: "Free Delivery",
      p: "1-2 day",
      icon: <FiTruck />,
    },
    {
      id: 2,
      text: "In Stock",
      icon: <BsShop />,
      p: "Today",
    },
    {
      id: 3,
      text: "Guaranteed",
      icon: <MdVerified />,
      p: productDetail.warrantyInformation,
    },
    {
      id: 4,
      text: "Secure Payment",
      icon: <FaShieldAlt />,
    },
  ];

  useEffect(() => {
    if (!id) return;
    fetchProductDetails(id);
  }, [id]);

  useEffect(() => {
    if (productDetail?.images?.length) {
      setPreviewImg(productDetail.images?.[0]);
    }
  }, [productDetail]);

  const isLong = productDetail?.description?.length > 200;

  const oldPrice =
    productDetail?.price / (1 - productDetail?.discountPercentage / 100);

  const archetype = categoryMap[productDetail.category] || "generic";

  const specsCard = archetypeSpecs[archetype];

  const specs = [
    { label: "Brand", value: productDetail?.brand },
    { label: "Category", value: productDetail?.category },
    { label: "Rating", value: productDetail?.rating },
    { label: "Stock", value: productDetail?.stock },
  ];

  const [previewImg, setPreviewImg] = useState();

  const handleVarinatPrice = (id) => {
    const selectedSize = productData[0].variants.find((item) => item.id === id);
    if (selectedSize) {
      setVariant({
        price: selectedSize.price,
        prePrice: selectedSize.previousPrice,
      });
    }
  };

  const handleSetPreview = (img) => {
    setPreviewImg(img);
  };
  const specType = getCategoryType(productDetail?.category);
  const DEFAULT_SECTIONS = 2;

  const specsByCategory = specifications[specType] || {};

  const specEntries = Object.entries(specsByCategory);

  const visibleSpecs = viewMore
    ? specEntries
    : specEntries.slice(0, DEFAULT_SECTIONS);

  if (loading) {
    return <p>...loading</p>;
  }

  const phone = phoneDetails[0];

  return (
    <>
      {!loading && (
        <main className="overflow-x-hidden!">
          <section className="px-4">
            <Container>
              <div className="py-10">
                <Container>
                  <BreadCrums
                    slug={productDetail.title}
                    category={productDetail.category}
                    name={productDetail.brand}
                  />
                </Container>
              </div>

              {/* Products preview section */}
              <div className="main pb-28 md:py-18 hidden md:block">
                <div className="product">
                  <div className="flex flex-col md:flex-row justify-center gap-12">
                    {/* left */}

                    <div className="md:w-[45%] flex flex-col md:flex-row gap-6 md:items-start">
                      <div className="md:w-[15%] flex md:flex-col gap-y-5 items-center pt-10 ">
                        {!loading &&
                          productDetail?.images?.map((img, i) => (
                            <div
                              className="w-full h-full cursor-pointer"
                              onClick={() => handleSetPreview(img)}
                              key={i}
                            >
                              <img
                                src={img}
                                alt=""
                                className={`max-w-19 md:max-w-28 w-full transition-all duration-200 ease-in-out ${
                                  previewImg === img
                                    ? "scale-120 "
                                    : "opacity-70"
                                }`}
                              />
                            </div>
                          ))}
                      </div>
                      <div className="w-[85%]">
                        <InnerImageZoom
                          src={previewImg}
                          zoomSrc={previewImg}
                          zoomType="hover"
                          zoomPreload={true}
                        />
                      </div>

                    </div>

                    {/* right */}
                    <div className="md:w-[55%] ">
                      {/* details */}
                      {!loading && (
                        <div className="right">
                          <h2 className="font-sf-pro font-bold text-[40px] leading-12 pb-6">
                            {productDetail?.title}
                          </h2>

                          <div className="price flex items-center gap-4 pb-4">
                            <p className="font-poppins font-semibold text-[32px] leading-12 text-black">
                              {" "}
                              ${productDetail?.price}
                            </p>
                            <p className="font-sf-pro font-normal text-2xl leading-12 text-[#A0A0A0] line-through">
                              {" "}
                              ${Math.round(oldPrice)}
                            </p>
                          </div>

                          {/* Colors  */}
                          {productDetail?.images?.length > 1 && (
                            <div className="flex items-center gap-5 pb-5">
                              {productDetail.images.map((img) => (
                                <div
                                  className="colors w-24 h-24 rounded-sm border cursor-pointer"
                                  onClick={() => handleSetPreview(img)}
                                >
                                  <img src={img} alt="" className="w-full" />
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="varients flex items-center gap-4 pb-6">
                            {specs.map(
                              (spec, i) =>
                                spec.value && (
                                  <div
                                    key={i}
                                    className="spec-card flex items-center gap-2 py-3 px-6 rounded-lg border font-poppins font-medium text-sm "
                                  >
                                    <p>{spec.label}:</p>
                                    <p>{spec.value}</p>
                                  </div>
                                )
                            )}
                          </div>

                          {/* specs */}
                          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 pb-6">
                            {specsCard?.map((item, index) => (
                              <div
                                className="flex items-center gap-3 py-3 px-3 bg-[#F4F4F4] min-h-21 rounded-lg"
                                key={index}
                              >
                                <i className="text-[#4E4E4E] text-2xl">
                                  {specIcons[item?.icon] || specIcons?.default}
                                </i>

                                <div className="h-full flex flex-col justify-centergap-3 ">
                                  <h2 className="font-sf-pro font-normal text-sm text-gray-800 ">
                                    {item?.label}
                                  </h2>
                                  <p className="text-xs font-sf-pro font-medium text-[#4E4E4E]">
                                    {item.value}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* description */}
                          <div className="">
                            <div className="">
                              <p
                                className={`font-sf-pro font-normal text-sm text-gray-dark-400 leading-6 transition-all duration-500 ease-in-out overflow-y-hidden ${
                                  readMore ? "max-h-[300px]" : "max-h-[72px]"
                                }`}
                              >
                                {productDetail.description}
                              </p>
                              {isLong && (
                                <span
                                  onClick={() => setreadMore((p) => !p)}
                                  className="text-gray-dark-700 underline cursor-pointer font-semibold"
                                >
                                  {readMore ? "less" : "more"}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* buttons */}
                          <div className="flex items-center py-8 gap-4 w-full">
                            <ShopButton
                              text={"Add to Wishlist"}
                              className={
                                "border-black! text-black! w-full flex justify-center"
                              }
                            />
                            <ShopButton
                              text={"Add to Cart"}
                              className={"bg-black! w-full flex justify-center"}
                            />
                          </div>

                          {/* services */}
                          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 w-full">
                            {serviceFeatures.map((service) => (
                              <div
                                className="flex items-center gap-3 w-full"
                                key={service.id}
                              >
                                <div className="icon p-4 bg-gray-100 rounded-xl">
                                  {service.icon}
                                </div>
                                <div className="">
                                  <h3 className="font-poppins font-medium text-sm text-[#717171]">
                                    {service.text}
                                  </h3>
                                  <p className="font-poppins font-medium text-sm  text-black">
                                    {service?.p}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* tags */}
                          {productDetail.tags && (
                            <div className="pt-8">
                              <h2 className="font-poppins font-medium text-sm text-[#717171] pb-3">
                                Keywords :
                              </h2>
                              <div className="flex items-center gap-5 w-full ">
                                {productDetail.tags.map((tag, index) => (
                                  <div className="" key={index}>
                                    <div className="p-2.5 bg-gray-100 rounded-sm border">
                                      <p className="font-poppins font-medium text-sm text-black capitalize">
                                        {tag}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/*  for moblie  */}
              <div className="main pb-22 md:hidden ">
                <div className="product">
                  <div className="flex flex-col  justify-center items-center gap-12">
                    {/* left */}
                    <div className="flex flex-col gap-6 ">
                      <div className="w-full mx-auto">
                        <ImageZoom
                          src={previewImg}
                          alt=""
                          className=" w-full h-full"
                        />
                      </div>
                      <div className="w-full flex  items-center justify-center pt-10 ">
                        {productDetail?.images?.map((img, i) => (
                          <div
                            className="w-full h-full cursor-pointer"
                            onClick={() => handleSetPreview(img)}
                            key={i}
                          >
                            <img
                              src={img}
                              alt=""
                              className={`max-w-19 md:max-w-28 w-full transition-all duration-200 ease-in-out ${
                                previewImg === img ? "scale-120 " : "opacity-70"
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* right */}
                    <div className=" ">
                      {/* details */}

                      {!loading && (
                        <div className="right">
                          <h2 className="font-sf-pro font-bold text-[40px] leading-12 pb-6">
                            {productDetail?.title}
                          </h2>

                          <div className="price flex items-center gap-4 pb-4">
                            <p className="font-poppins font-semibold text-[32px] leading-12 text-black">
                              {" "}
                              ${productDetail?.price}
                            </p>
                            <p className="font-sf-pro font-normal text-2xl leading-12 text-[#A0A0A0] line-through">
                              {" "}
                              ${Math.round(oldPrice)}
                            </p>
                          </div>

                          {/* Colors  */}

                          <div className="varients grid grid-cols-2 gap-3 pb-6">
                            {specs.map(
                              (spec, i) =>
                                spec.value && (
                                  <div
                                    key={i}
                                    className="spec-card flex items-center gap-2 py-2 px-3 rounded-lg border font-poppins font-medium text-sm "
                                  >
                                    <p>{spec.label}:</p>
                                    <p>{spec.value}</p>
                                  </div>
                                )
                            )}
                          </div>

                          {/* specs */}
                          <div className="grid grid-cols-2 items-center gap-4 pb-6">
                            {specsCard?.map((item, index) => (
                              <div
                                className="flex items-center gap-3 py-3 px-3 bg-[#F4F4F4] min-h-21 rounded-lg"
                                key={index}
                              >
                                <i className="text-[#4E4E4E] text-2xl">
                                  {specIcons[item?.icon] || specIcons?.default}
                                </i>

                                <div className="h-full flex flex-col justify-centergap-3 ">
                                  <h2 className="font-sf-pro font-normal text-sm text-gray-800 ">
                                    {item?.label}
                                  </h2>
                                  <p className="text-xs font-sf-pro font-medium text-[#4E4E4E]">
                                    {item.value}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* description */}
                          <div className="">
                            <div className="">
                              <p
                                className={`font-sf-pro font-normal text-sm text-gray-dark-400 leading-6 transition-all duration-500 ease-in-out overflow-y-hidden ${
                                  readMore ? "max-h-[300px]" : "max-h-[72px]"
                                }`}
                              >
                                {productDetail.description}
                              </p>
                              {isLong && (
                                <span
                                  onClick={() => setreadMore((p) => !p)}
                                  className="text-gray-dark-700 underline cursor-pointer font-semibold"
                                >
                                  {readMore ? "less" : "more"}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* buttons */}
                          <div className="flex items-center py-8 gap-4 w-full">
                            <ShopButton
                              text={"Add to Wishlist"}
                              className={
                                "border-black! text-black! w-full flex justify-center"
                              }
                            />
                            <ShopButton
                              text={"Add to Cart"}
                              className={"bg-black! w-full flex justify-center"}
                            />
                          </div>

                          {/* services */}
                          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 w-full">
                            {serviceFeatures.map((service) => (
                              <div
                                className="flex items-center gap-3 w-full"
                                key={service.id}
                              >
                                <div className="icon p-4 bg-gray-100 rounded-xl">
                                  {service.icon}
                                </div>
                                <div className="">
                                  <h3 className="font-poppins font-medium text-sm text-[#717171]">
                                    {service.text}
                                  </h3>
                                  <p className="font-poppins font-medium text-sm  text-black">
                                    {service?.p}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* tags */}
                          {productDetail.tags && (
                            <div className="pt-8">
                              <h2 className="font-poppins font-medium text-sm text-[#717171] pb-3">
                                Keywords :
                              </h2>
                              <div className="flex items-center gap-5 w-full ">
                                {productDetail.tags.map((tag, index) => (
                                  <div className="" key={index}>
                                    <div className="p-2.5 bg-gray-100 rounded-sm border">
                                      <p className="font-poppins font-medium text-sm text-black capitalize">
                                        {tag}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/*  for moblie  */}
            </Container>
          </section>

          {/* Products details */}
          <section className="py-14 bg-gray-50">
            <div
              className={`main max-w-[1320px] mx-auto bg-white py-12 px-6 md:px-10 rounded-lg transition-all duration-500 ease-in-out overflow-y-hidden  ${
                viewMore ? "max-h-[5000px]" : "max-h-[830px]"
              }`}
            >
              <div className="heading pb-8 ">
                <h2 className="font-poppins font-medium text-2xl leading-6 pb-8">
                  Details
                </h2>

                <div className="">
                  <p
                    className={`font-poppins font-medium text-sm leading-6 text-[#9D9D9D]  transition-all duration-500 ease-in-out overflow-y-hidden ${
                      detailsReadMore ? "max-h-[500px]" : "max-h-[72px]"
                    }`}
                  >
                    {productDetail.description}
                  </p>
                  {isLong && (
                    <span
                      onClick={() => setreadMore((p) => !p)}
                      className="text-gray-dark-700 underline cursor-pointer font-semibold"
                    >
                      {readMore ? "less" : "more"}
                    </span>
                  )}
                </div>
              </div>

              {visibleSpecs.map(([section, items]) => (
                <SpecsSection key={section} specs={items} />
              ))}
            </div>

            {!viewMore && (
              <div className="view more w-full pt-8 flex justify-center">
                <ShopButton
                  text={`View more`}
                  icon={<FaChevronDown />}
                  className={
                    "border-black! text-black! flex items-center gap-2 py-3! "
                  }
                  onClick={() => setViewMore(true)}
                />
              </div>
            )}
          </section>
          {/* Products details */}

          {/* Reviews */}
          <ReviewSection />

          {/* Reviews */}

          {/* related Products */}
          <RelatedProducts />
          {/* related Products */}
        </main>
      )}
    </>
  );
};

export default ProductDetails;
