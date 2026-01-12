import {
  FaMobileAlt,
  FaLaptop,
  FaCouch,
  FaAppleAlt,
  FaMotorcycle,
  FaTshirt,
  FaGlasses,
  FaShoppingBag,
  FaCar,
  FaTabletAlt,
} from "react-icons/fa";
import { MdWatch, MdKitchen } from "react-icons/md";
import { GiLipstick, GiPerfumeBottle, GiRunningShoe } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";

export const categoryIcons = {
  beauty: <GiLipstick />,
  fragrances: <GiPerfumeBottle />,
  furniture: <FaCouch />,
  groceries: <FaAppleAlt />,
  "home-decoration": <FaCouch />,
  "kitchen-accessories": <MdKitchen />,
  laptops: <FaLaptop />,
  "mens-shirts": <FaTshirt />,
  "mens-shoes": <GiRunningShoe />,
  "mens-watches": <MdWatch />,
  "mobile-accessories": <FaMobileAlt />,
  motorcycle: <FaMotorcycle />,
  "skin-care": <GiLipstick />,
  smartphones: <FaMobileAlt />,
  "sports-accessories": <GiRunningShoe />,
  sunglasses: <FaGlasses />,
  tablets: <FaTabletAlt />,
  tops: <FaTshirt />,
  vehicle: <FaCar />,
  "womens-bags": <FaShoppingBag />,
  "womens-dresses": <GiLipstick />,
  "womens-jewellery": <IoDiamondOutline />,
  "womens-shoes": <GiRunningShoe />,
  "womens-watches": <BsSmartwatch />,
};
