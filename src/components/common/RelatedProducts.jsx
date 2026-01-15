import ShopButton from "@/components/common/ShopButton";
import { discountProducts } from "@/data/discountProducts";
import { productData } from "@/data/Details";
import { smartphones } from "@/data/smartphonesApi";
import React, { useContext, useEffect, useState } from "react";
import { FaFire, FaHeart, FaRegHeart } from "react-icons/fa";
import ProductCard from "./ProductCard";
import Container from "./Container";
import { DataContext } from "../../Context/DataContext";
import { useParams } from "react-router-dom";

const RelatedProducts = () => {
const { id } = useParams();
const currentId = Number(id);

const { products, loading } = useContext(DataContext);

const maxProd = 4;
const [startIndex, setStartIndex] = useState(0);

useEffect(() => {
  if (!products?.length) return;

  const filtered = products.filter(
    (item) => item.id !== currentId
  );

  const maxStart = Math.max(filtered.length - maxProd, 0);
  const random = Math.floor(Math.random() * (maxStart + 1));

  setStartIndex(random);
}, [products, currentId]);



const currentProd =  products.filter((item) => item.id !== currentId)


const relatedProducts = currentProd?.slice(startIndex, startIndex+maxProd)

const maxProdShow =  relatedProducts.length >= 3

console.log(currentProd);


  return (
    <>
    <section className="py-20 px-4">
      <Container>
        <div className="header pb-8">
                <h3 className='font-poppins font-medium text-2xl leading-8 text-black'>Related Products</h3>
        </div>
          <div className={`main grid grid-cols-2 md:grid-cols-3 gap-4 ${maxProdShow ? 'lg:grid-cols-4' : ''}`}>
              {
                relatedProducts.map((item)=> {
                       const fixedDiscountPercentage = Math.floor(
                      item.discountPercentage
                    );
                    const originalPrice = Math.round(
                      fixedDiscountPercentage + item.price
                    );


                    return (
                         <div className="" key={item.id}>
                 <ProductCard
                          name={item.title}
                          reviews={item.rating}
                          img={item.images?.[0] || "placeholder.jpg"}
                          discountPercentage={fixedDiscountPercentage}
                          discountPrice={item.price}
                          mainPrice={originalPrice}
                          alt={`${item.title} image`}
                          wishId={item.id}
                        />
             </div>
                    )
                })
              }
                  </div>
      </Container>
    </section>
    </>
  );
};

export default RelatedProducts;
