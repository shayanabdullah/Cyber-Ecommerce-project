import iphone from "@/assets/Iphone14pro.svg";
import watch from "@/assets/samsung-watch.png";
import airpod from "@/assets/airpod-2.png";
import smartWatch from "@/assets/watch.svg";
import camera from "@/assets/camera.svg";
import earbuds from "@/assets/earbuds.svg";
import zFold from "@/assets/z-fold.svg";
import ipad from "@/assets/ipad.svg";

export const newArrival = [
  {
    id: 0,
    title: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3R/A)",
    price: 900,
    previousPrice: 1099,
    discountPercent: Math.round(((1099 - 900) / 1099) * 100), 
    img: iphone,
    bestSelling: false,
    sale: true,
  },
  {
    id: 1,
    title: "Blackmagic Pocket Cinema Camera 6k",
    price: 2510,
    previousPrice: 2799,
    discountPercent: Math.round(((2799 - 2510) / 2799) * 100), 
    img: camera,
    bestSelling: false,
    sale: true,
  },
  {
    id: 2,
    title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: 399,
    img: smartWatch,
    bestSelling: true,
    featuredProduct: true,
    sale: false,
  },
  {
    id: 3,
    title: "AirPods Max Silver",
    price: 549,
    previousPrice: 599,
    discountPercent: Math.round(((599 - 549) / 599) * 100), 
    img: airpod,
    bestSelling: false,
    sale: true,
  },
  {
    id: 4,
    title: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: 369,
    img: watch,
    bestSelling: true,
    featuredProduct: true,
    sale: false,
  },
  {
    id: 5,
    title: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: 1799,
    previousPrice: 1999,
    discountPercent: Math.round(((1999 - 1799) / 1999) * 100), 
    img: zFold,
    bestSelling: false,
    featuredProduct: true,
    sale: true,
  },
  {
    id: 6,
    title: "Galaxy Buds FE Graphite",
    price: 99.99,
    img: earbuds,
    bestSelling: true,
    featuredProduct: true,
    sale: false,
  },
  {
    id: 7,
    title: "Apple iPad 9 10.2” 64GB Wi-Fi Silver (MK2L3) 2021",
    price: 398,
    previousPrice: 449,
    discountPercent: Math.round(((449 - 398) / 449) * 100), 
    img: ipad,
    bestSelling: false,
    sale: true,
    featuredProduct: false,
  },
];
