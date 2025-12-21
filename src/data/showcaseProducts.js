import watch from '@/assets/watch-showcase.png'
import phone from '@/assets/fold-showcase.png'
import ipad from '@/assets/ipad-showcase.png'
import macbook from '@/assets/macbook-showcase.png'

export const ShowcaseProducts = [
  {
    id: 1,
    title: "Popular Products",
    desc: "Smartwatch and wireless earbuds combo with fitness tracking and modern design.",
    img: watch,
  },
  {
    id: 2,
    title: "iPad Pro",
    desc: "High-resolution tablet with a large edge-to-edge display and powerful performance for work and entertainment.",
    img: ipad,
  },
  {
    id: 3,
    title: "Samsung z-fold",
    desc: "Foldable smartphone with dual-screen functionality and premium build quality.",
    img: phone,
    center : true,
    up : true
  },
  {
    id: 4,
    title: "Macbook Pro",
    desc: "Professional laptop with a vibrant Retina display and top-tier performance for creators.",
    img: macbook,
    end : true
  },
];
