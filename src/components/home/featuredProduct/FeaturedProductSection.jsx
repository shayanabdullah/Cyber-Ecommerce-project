import Container from "@/components/common/Container";
import {
  Button,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";

import ShopButton from "@/components/common/ShopButton";
import { GoHeart } from "react-icons/go";
import { FaFire, FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { newArrival } from "@/data/featuredProducts";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtoWishlist, removeWishlist } from "../../../redux/wishlistSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const bestSellingProducts = newArrival.filter(
  (item) => item.bestSelling === true
);
const featuredProd = newArrival.filter((item) => item.featuredProduct === true);

const FeaturedProductSection = () => {


  const [wishlist, setWishList] = useState({});

  const handleWish = (id) => {
    setWishList((prev) => ({
      ...prev,
      [id]: true,
    }));

  };
  const handleWishDelete = (id) => {
    setWishList((prev) => ({
      ...prev,
      [id]: false,
    }));

  };

console.log(wishlist);


const slugify = (text) => text?.toLowerCase().replace(/\s+/g, "-");
const dispacth = useDispatch()

  const loggedUser = useSelector((state) => state.auth.value);



    const notifyWishlist = (name) => 
toast.success(`${name} added to your wishlist`, {
className:'font-poppins! font-medium! text-black/90! bg-white!',
toastClassName :'bg-red!',
progressClassName:'bg-green-600! rounded-md',
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});


    const notifyWishlistRemove = () => 
  toast.error(`Product remove to your wishlist`, {
  className:'font-poppins! font-medium! text-black/90! bg-white!',
  toastClassName :'bg-red!',
  progressClassName:'bg-red-500! rounded-md',
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
  });


   const handleAddToWishList = (item) => {
dispacth(addtoWishlist({
  id: item?.id,
  quantity : 1,
  title: item.title,
  price : item.price,
  thumbnail : item.img,
  sku: uuidv4()
}))


notifyWishlist(item.title)
}

  const handleDelete = (id) => {
    dispacth(removeWishlist(id));
    notifyWishlistRemove()
  };

    
  return (
    <>
      <section className="py-14 ">
        <ToastContainer/>
        <Container>
          <div className="tab">
            <TabGroup>
              <TabList
                className={`flex gap-8 items-center font-poppins font-medium md:text-lg text-sm px-2 leading-8 text-gray-900 pb-8`}
              >
                <Tab
                  className={`data-selected:text-black data-selected:border-black border-b-2 border-transparent cursor-pointer  transition-all duration-200 outline-0`}
                >
                  New Arrival
                </Tab>
                <Tab
                  className={`data-selected:text-black data-selected:border-black border-b-2 border-transparent cursor-pointer  transition-all duration-200 outline-0`}
                >
                  Bestseller
                </Tab>
                <Tab
                  className={`data-selected:text-black data-selected:border-black border-b-2 border-transparent cursor-pointer  transition-all duration-200 outline-0`}
                >
                  Featured Products
                </Tab>
              </TabList>

              <TabPanels>

                <TabPanel>
                  <div className="main grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {newArrival.map((item) => (
              
                      <div
                        className="card py-6 md:px-10 px-6 bg-gray-200 rounded-[10px] flex flex-col  justify-center cursor-pointer group  relative"
                        key={item.id}
                      >
                          <div className={`absolute top-3 left-2 py-1 px-2 bg-black rounded-[10px] ${item.sale ? 'block' : 'hidden'}`}>
                          <p className="flex items-center gap-2 text-white font-poppins font-medium md:text-base text-sm">-{item.discountPercent}%</p>
                        </div>
                        <div className={`absolute top-3 left-2 py-1 px-2 bg-red rounded-[10px] ${item.bestSelling ? 'block' : 'hidden'}`}>
                          <p className="flex items-center gap-2 text-white font-poppins font-medium md:text-base text-sm">Hot <FaFire className="text-amber-300"/></p>
                        </div>
                      
                        <div
                          className="w-full text-2xl text-gray-dark-100/77 flex items-center justify-end pb-4"
                          
                        >
                     {
                      loggedUser ? (
                             wishlist[item.id] ? (
                            <FaHeart className="text-red"  onClick={()=> {
                            handleWishDelete(item.id)
                              handleDelete(item.id)
                            }}/>
                          ) : (
                            <i className="">
                              <FaRegHeart  onClick={()=> {
                                handleWish(item.id)
                                handleAddToWishList(item)}
                                }/>
                            </i>
                          )
                      ) : (
                        <Link to={'/login'}>
                             {wishlist[item.id] ? (
                            <FaHeart className="text-red" />
                          ) : (
                            <i className="">
                              <FaRegHeart />
                            </i>
                          )}
                        </Link>
                      )
                     }
                        </div>

       <Link to={`/shop/category/${slugify(item.category)}`}>
                <div className="">
                          <div className="w-full flex justify-center">
                          <img
                            src={item.img}
                            alt=""
                            className="pb-4 max-w-40 w-full group-hover:scale-[1.10] transition-all duration-200 ease-in-out"
                          />
                        </div>
                        <h4 className="pb-4 font-poppins font-medium md:text-lg text-sm text-center text-black">
                          {item.title}
                        </h4>
                        <p className="pb-6 font-poppins font-semibold md:text-2xl text-lg text-center text-black flex items-center justify-center gap-2">
                          ${item.price} <span className={` text-sm md:text-[19px]! text-gray-dark-200 line-through ${item.sale ? 'block' : 'hidden'}`}>${item.previousPrice}</span>
                        </p>
          </div>
       </Link>
                        <ShopButton
                          text={"Buy Now"}
                          className={
                            "bg-black! text-white! rounded-lg! flex! justify-center "
                          }
                        />
                      </div>
            
                    ))}
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="main grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {bestSellingProducts.map((item) => (
                <Link  to={`/shop/category/${slugify(item.category)}`}>
                      <div
                        className="card py-6 md:px-10 px-6 bg-gray-200 rounded-[10px] flex flex-col  justify-center relative"
                        key={item.id}
                      >
                              <div className={`absolute top-3 left-2 py-1 px-2 bg-red rounded-[10px] ${item.bestSelling ? 'block' : 'hidden'}`}>
                          <p className="flex items-center gap-2 text-white font-poppins font-medium md:text-base text-sm">Hot <FaFire className="text-amber-300"/></p>
                        </div>
                        <div
                          className="w-full text-2xl text-gray-dark-100/77 flex items-center justify-end pb-4"
                          onClick={() => handleWish(item.id)}
                        >
                          {wishlist[item.id] ? (
                            <FaHeart className="text-red" />
                          ) : (
                            <i className="">
                              <FaRegHeart />
                            </i>
                          )}
                        </div>
                        <div className="w-full flex justify-center">
                          <img
                            src={item.img}
                            alt=""
                            className="pb-4 max-w-40 w-full "
                          />
                        </div>
                        <h4 className="pb-4 font-poppins font-medium md:text-lg text-sm text-center text-black">
                          {item.title}
                        </h4>
                        <p className="pb-6 font-poppins font-semibold md:text-2xl text-lg text-center text-black">
                          ${item.price}
                        </p>
                        <ShopButton
                          text={"Buy Now"}
                          className={
                            "bg-black! text-white! rounded-lg! flex! justify-center "
                          }
                        />
                      </div>
                </Link>
                    ))}
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="main grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {featuredProd.map((item) => (
                  <Link  to={`/shop/category/${slugify(item.category)}`}>
                      <div
                        className="card py-6 md:px-10 px-6 bg-gray-200 rounded-[10px] flex flex-col  justify-center relative"
                        key={item.id}
                      >
  <div className={`absolute top-3 left-2 py-1 px-2 bg-black rounded-[10px] ${item.sale ? 'block' : 'hidden'}`}>
                          <p className="flex items-center gap-2 text-white font-poppins font-medium md:text-base text-sm">-{item.discountPercent}%</p>
                        </div>
                              <div className={`absolute top-3 left-2 py-1 px-2 bg-red rounded-[10px] ${item.bestSelling ? 'block' : 'hidden'}`}>
                          <p className="flex items-center gap-2 text-white font-poppins font-medium md:text-base text-sm">Hot <FaFire className="text-amber-300"/></p>
                        </div>
                        <div
                          className="w-full text-2xl text-gray-dark-100/77 flex items-center justify-end pb-4"
                          onClick={() => handleWish(item.id)}
                        >
                          {wishlist[item.id] ? (
                            <FaHeart className="text-red" />
                          ) : (
                            <i className="">
                              <FaRegHeart />
                            </i>
                          )}
                        </div>
                        <div className="w-full flex justify-center">
                          <img
                            src={item.img}
                            alt=""
                            className="pb-4 max-w-40 w-full "
                          />
                        </div>
                        <h4 className="pb-4 font-poppins font-medium md:text-lg text-sm text-center text-black">
                          {item.title}
                        </h4>
                        <p className="pb-6 font-poppins font-semibold md:text-2xl text-lg text-center text-black flex items-center justify-center gap-2">
                          ${item.price} <span className={` text-sm md:text-[19px]! text-gray-dark-200 line-through ${item.sale ? 'block' : 'hidden'}`}>${item.previousPrice}</span>
                        </p>
                        <ShopButton
                          text={"Buy Now"}
                          className={
                            "bg-black! text-white! rounded-lg! flex! justify-center "
                          }
                        />
                      </div>
                  </Link>
                    ))}
                  </div>
                </TabPanel>

              </TabPanels>
            </TabGroup>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FeaturedProductSection;
