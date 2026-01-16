import React, { useContext, useState } from "react";
import Container from "./Container";
import { BsStarFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaChevronDown, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { reviewsData, reviewSummary } from "@/data/Reviews";
import { RiSendPlaneFill } from "react-icons/ri";
import reviewer1 from '@/assets/reviewer/reviewer-2.svg'
import reviewer2 from '@/assets/reviewer/reviewer-1.svg'
import reviewer3 from '@/assets/reviewer/reviewer-3.svg'
import StarRating from "./StarRating ";
import ShopButton from "./ShopButton";
import { DataContext } from "../../Context/DataContext";

const { totalReviews, averageRating, ratingsBreakdown } = reviewSummary;
const ReviewSection = () => {
 const getPercent = (count) => {
 return Math.round((count / totalReviews)*100); 
 }
 const [viewMore, setViewMore] = useState(false)
  const { productDetail, loading} = useContext(DataContext);

  if (loading) {
    return <p>...loading</p>;
  }
  
const formatDateTime = (dateString) => {
  return new Date(dateString).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getRandomAvatar = (id) => {
  return `https://i.pravatar.cc/150?img=${id}`;
};




  return (
    <section className="py-20 px-3">
      <Container>
        <div className="main">
          {/* reviews top */}
     <div className="pb-8 ">
           <div className="heading">
            <h2 className="font-poppins font-medium text-2xl leading-6 pb-12">
              Reviews
            </h2>
          </div>
          <div className="reviews flex flex-col md:flex-row items-center gap-15 pb-12">
            <div className="review-count p-8 bg-gray-50 rounded-3xl text-center w-full md:max-w-[180px] flex flex-col items-center">
              <div className="rating flex items-center flex-col gap-x-4 flex-wrap justify-center">
                <div className="">
                  <h2 className="font-poppins font-medium text-[56px] leading-14 pb-4">
                   {productDetail?.rating}
                  </h2>
                  <h2 className="font-poppins font-medium text-[15px] leading-4 pb-4 text-black/30">
                    of {productDetail?.reviews?.length} reviews
                  </h2>
                </div>
                <div className="">
               {
                productDetail?.rating >= 3 ? 
          (   <div className="stars flex items-center gap-1 text-[#FFB547]  text-2xl">
                   <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt /> 
             </div>)
                  : productDetail?.rating  < 3 ?  (
                      <div className="stars flex items-center gap-1 text-[#FFB547]  text-2xl">
                   <FaStar />
                  <FaStar />

                  <FaStarHalfAlt /> 
             </div> ):
                  
                  productDetail?.rating >= 4 && (
                      <div className="stars flex items-center gap-1 text-[#FFB547]  text-2xl">
                   <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt /> 
             </div>
                  )
               }
                </div>
              </div>
            </div>
            <div className="w-full">
              {[
                { label: "Excellent", value: ratingsBreakdown.excellent },
                { label: "Good", value: ratingsBreakdown.good },
                { label: "Average", value: ratingsBreakdown.average },
                {
                  label: "Below Average",
                  value: ratingsBreakdown.belowAverage,
                },
                { label: "Poor", value: ratingsBreakdown.poor },
              ].map((item, i)=> (
                       <div className="flex items-center gap-10 pb-6" key={i}>
        <div className="w-[90px]">
          <h2 className="font-poppins font-medium text-lg leading-6">{item.label}</h2>
        </div>
        <div className="flex items-center gap-4 w-full">
             <div className="bar w-full h-1.5 bg-[#D9D9D9] rounded-2xl">
              <div className={`bar-inner h-full bg-[#FFB547] rounded-2xl transition-all duration-700`} 
              style={{width: `${getPercent(item.value)}%`
                }} ></div>
             </div>
        </div>
      </div>
              ))
              }
            </div>
          </div>
          <div className="comment w-full relative">
            <input type="text" className="w-full outline-0 border border-[#CECECE] py-6 px-4 rounded-lg text-[#979797] font-sf-pro font-normal text-base leading-4 " placeholder="Leave comment" /> 
            <div className="absolute top-5 right-3 text-2xl text-[#979797] cursor-pointer ">
              <RiSendPlaneFill />
            </div>
          </div>
     </div>



     
            {/* main reviews */}
           <div className={`flex flex-col gap-y-6 relative transition-all duration-500 ease-in-out overflow-hidden ${ viewMore ? "max-h-[5000px]" : "max-h-[800px]"} `}>
            
         {
          productDetail?.reviews?.map((review, index)=> (
             <div className="py-6  md:pl-4 px-1 md:pr-6 bg-gray-50 rounded-[10px] flex  gap-5">
              <div className="img max-w-10 md:max-w-14 md:max-h-14 rounded-full overflow-hidden">
                <img src={getRandomAvatar((index+1) % 70)} alt={review.reviewerName} className="" />
              </div>
              
              <div className="review w-full ">
                <div className="heading w-full flex justify-between items-center">
             <div className="pb-2">
                   <h2 className="font-sf-pro font-bold text-sm md:text-lg leading-6 text-black pb-1">{review.reviewerName}</h2>
                   <h2 className="font-sf-pro font-medium text-[10px] md:text-sm leading-6 text-gray-700 pb-2">{review.reviewerEmail}</h2>
                  <div className="stars md:text-2xl">
                    <StarRating rating={review.rating}/>
         
                </div>
             </div>
                  <p className="font-poppins font-medium text-[10px] md:text-sm leading-6 text-black/20">{formatDateTime(review.date)}</p>
                </div>
                <div className="review-main">
                  <p className="font-poppins font-medium text-base text-[#7E7E7E] leading-6 pb-2">
                {
                  review.comment
                }
                  </p>
                  {
                    review.images && <div className="flex items-center gap-2 overflow-hidden">
                      <img src={review.images} alt="" className="max-w-[120px] max-h-[180px] w-full  rounded-md object-cover" />
                    </div>
                  }
                </div>
              </div>
            </div>
          ))
         }

        {
          !viewMore &&  <div className="w-full h-[180px] bg-linear-to-b from-white/0 backdrop-blur-[0.7px] to-white absolute bottom-0 "></div>
        }
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
        </div>
      </Container>
    </section>
  );
};

export default ReviewSection;
