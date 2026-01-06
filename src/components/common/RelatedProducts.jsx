import ShopButton from "@/components/common/ShopButton";
import { discountProducts } from "@/data/discountProducts";
import { productData } from "@/data/phoneDetails";
import { smartphones } from "@/data/smartphonesApi";
import React, { useEffect, useState } from "react";
import { FaFire, FaHeart, FaRegHeart } from "react-icons/fa";
import ProductCard from "./ProductCard";
import Container from "./Container";

const RelatedProducts = () => {
 
const maxProd = 4;
const [startIndex, setStartIndex] = useState(0);
useEffect(() => {
  const maxStart = smartphones.length - maxProd; // 21 - 4 = 17
  const random = Math.floor(Math.random() * (maxStart + 1)); // 17 + 1 = 18 * random
  setStartIndex(random);
}, []);
const relatedProducts = smartphones.slice(
  startIndex,
  startIndex + maxProd
);


  return (
    <>
    <section className="py-20 px-4">
      <Container>
        <div className="header pb-8">
                <h3 className='font-poppins font-medium text-2xl leading-8 text-black'>Related Products</h3>
        </div>
          <div className="main grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {
                relatedProducts.map((phone)=> (
             <div className="" key={phone.id}>
                       <ProductCard
                        name={phone.name}
                        brand={phone.brand}
                        img={phone.img}
                        reviews={phone.reviews}
                        discountPercentage={phone.discountPercentage}
                        discountPrice={phone.discountPrice}
                        mainPrice={phone.price}
                        key={phone.id}
                        alt={`${phone.name}img`}
                        wishId={phone.id} 
                        
                      />
             </div>
                ))
              }
                  </div>
      </Container>
    </section>
    </>
  );
};

export default RelatedProducts;
