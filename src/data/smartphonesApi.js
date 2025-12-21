import iphone17 from '@/assets/products-images/iphone-17pro.png'
import iphone15 from "@/assets/products-images/iphone-15pro.svg";
import iphoneAir from "@/assets/products-images/iphone-air.jpeg";
import S24ultra from "@/assets/products-images/samsung-s24ultra.jpeg";
import S25ultra from "@/assets/products-images/samsung-s25ultra.jpeg";
import xiamoi17pro from "@/assets/products-images/xiaomi-17promax.jpeg";
import xiamoiX7 from "@/assets/products-images/poco-x7-pro.jpeg";
import pocof6 from "@/assets/products-images/poco-f6.jpeg";
import oppofind from "@/assets/products-images/oppo-find-x8-ultra.jpeg";
import honorMagic from "@/assets/products-images/honor-magic.jpeg";
import motorola from "@/assets/products-images/motorola-edge-60.jpeg";
import Nothing from "@/assets/products-images/nothing-3a.jpeg";
import realme from "@/assets/products-images/realme-15.jpeg";
import oneplus from "@/assets/products-images/oneplus.jpeg";
import vivoX from "@/assets/products-images/vivo-x200.jpeg";
import pixel from "@/assets/products-images/pixel10-pro.jpeg";
import Infinix from "@/assets/products-images/infinix-50pro.jpeg";
import tecno from "@/assets/products-images/tecno-v.jpeg";
import asusRog9 from "@/assets/products-images/asus-rog9.jpeg";
import iqoo15 from "@/assets/products-images/iqoo-15.jpeg";
import redmagic10 from "@/assets/products-images/redmagic10.jpeg";

export const smartphones = [
  {
    id: 1,
    brand: "Apple",
    name: "iPhone 17 Pro",
    price: 1199,
    discountPercentage: 10,
    discountPrice: 1079,
    rating: 4.8,
    reviews: 1240,
    img : iphone17
  },
  {
    id: 2,
    brand: "Apple",
    name: "iPhone Air",
    price: 1099,
    discountPercentage: 10,
    discountPrice: 999,
    rating: 4.7,
    reviews: 980,
    img : iphoneAir,
  },
  {
    id: 3,
    brand: "Apple",
    name: "iPhone 15 pro",
    price: 1199,
    discountPercentage: 18,
    discountPrice: 980,
    rating: 4.6,
    reviews: 2100,
    img : iphone15
  },
  {
    id: 4,
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    price: 1299,
    discountPercentage: 12,
    discountPrice: 1143,
    rating: 4.7,
    reviews: 890,
    img:S25ultra
  },
  {
    id: 5,
    brand: "Samsung",
    name: "Galaxy S24 Ultra",
    price: 1199,
    discountPercentage: 20,
    discountPrice: 1021,
    rating: 4.5,
    reviews: 670,
    img : S24ultra
  },
  {
    id: 6,
    brand: "Xiaomi",
    name: "Xiaomi 17 Pro Max",
    price: 1024,
    discountPercentage: 14,
    discountPrice: 899,
    rating: 4.6,
    reviews: 540,
    img : xiamoi17pro
  },
  {
    id: 7,
    brand: "Poco",
    name: " X7 Pro",
    price: 349,
    discountPercentage: 22,
    discountPrice: 272,
    rating: 4.5,
    reviews: 1600,
    img : xiamoiX7
  },
  {
    id: 8,
    brand: "Poco",
    name: "F6 Pro",
    price: 429,
    discountPercentage: 5,
    discountPrice: 370,
    rating: 4.4,
    reviews: 780,
    img : pocof6
  },
  {
    id: 9,
    brand: "OPPO",
    name: "Find X8 Ultra",
    price: 1149,
    discountPercentage: 15,
    discountPrice: 980,
    rating: 4.3,
    reviews: 420,
    img : oppofind
  },
  {
    id: 10,
    brand: "Honor",
    name: "Magic 6 Pro Official",
    price: 999,
    discountPercentage: 10,
    discountPrice: 899,
    rating: 4.6,
    reviews: 310,
    img : honorMagic
  },
  {
    id: 11,
    brand: "Motorola",
    name: "Edge 60",
    price: 499,
    discountPercentage: 20,
    discountPrice: 299,
    rating: 4.4,
    reviews: 390,
    img : motorola
  },
  {
    id: 12,
    brand: "Nothing",
    name: "Phone 3a 5G",
    price: 469,
    discountPercentage: 21,
    discountPrice: 359,
    rating: 4.2,
    reviews: 260,
    img : Nothing
  },
  {
    id: 13,
    brand: "Realme",
    name: "15 Pro Official",
    price: 599,
    discountPercentage: 15,
    discountPrice: 499,
    rating: 4.5,
    reviews: 710,
    img : realme
  },
  {
    id: 14,
    brand: "OnePlus",
    name: "13 Official",
    price: 899,
    discountPercentage: 12,
    discountPrice: 791,
    rating: 4.7,
    reviews: 940,
    img: oneplus
  },
  {
    id: 15,
    brand: "Vivo",
    name: "X200 Ultra",
    price: 999,
    discountPercentage: 14,
    discountPrice: 859,
    rating: 4.6,
    reviews: 530,
    img : vivoX
  },
  {
    id: 16,
    brand: "Google Pixel",
    name: "10 Pro",
    price: 999,
    discountPercentage: 10,
    discountPrice: 899,
    rating: 4.8,
    reviews: 870,
    img : pixel
  },
  {
    id: 17,
    brand: "Infinix",
    name: "50 Pro 256GB",
    price: 499,
    discountPercentage: 25,
    discountPrice: 354,
    rating: 4.3,
    reviews: 1150,
    img : Infinix
  },
  {
    id: 18,
    brand: "Tecno",
    name: "Phantom V Flip2 5G",
    price: 699,
    discountPercentage: 18,
    discountPrice: 573,
    rating: 4.4,
    reviews: 290,
    img : tecno
  },
  {
    id: 19,
    brand: "Asus",
    name: "ROG 9 5G",
    price: 1099,
    discountPercentage: 10,
    discountPrice: 989,
    rating: 4.7,
    reviews: 640,
    img: asusRog9
  },
  {
    id: 20,
    brand: "Vivo",
    name: "Iqoo 15 5G",
    price: 1199,
    discountPercentage: 12,
    discountPrice: 1055,
    rating: 4.5,
    reviews: 210,
    img : iqoo15
  },
  {
    id: 21,
    brand: "ZTE",
    name: "Nubia RedMagic 10 Pro",
    price: 1250,
    discountPercentage: 20,
    discountPrice: 1000,
    rating: 4.6,
    reviews: 320,
    img : redmagic10
  },
];
