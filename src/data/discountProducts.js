import galaxyS23 from '@/assets/galaxyS23.png'
import macbookAir from '@/assets/macbook-air.png'
import ipad from '@/assets/ipad-pro.png'
import pixel from '@/assets/pixel-pro.png'


export const discountProducts = [
  {
    id: 0,
    title: "Samsung Galaxy S23 Ultra 512GB Phantom Black",
    category: "phones",
    price: 1299,
    previousPrice: 1899,
    discountPercent: Math.round(((1899 - 1299) / 1899) * 100),
    img: galaxyS23,
    sale: true,
  },
  {
    id: 1,
    title: "Apple MacBook Air M4 13-inch 256GB",
    category: "laptops",
    price: 899,
    previousPrice: 1149,
    discountPercent: Math.round(((1149 - 899) / 1149) * 100),
    img: macbookAir,
    sale: true,
  },
  {
    id: 2,
    title: "Apple iPad Pro M5 13-inch 256gb (black)",
    category: "tablets",
    price: 1199,
    previousPrice: 1499,
    discountPercent: Math.round(((1499 - 1199) / 1499) * 100),
    img: ipad,
    sale: true,
  },
  {
    id: 3,
    title: "Google Pixel 10 Pro XL 256GB",
    category: "phones",
    price: 899,
    previousPrice: 1199,
    discountPercent: Math.round(((1199 - 899) / 1199) * 100),
    img: pixel,
    sale: true,
  }
];
