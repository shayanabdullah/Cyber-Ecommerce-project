import {
  FiCpu,
  FiCamera,
  FiBattery,
  FiMonitor,
  FiHardDrive,
} from "react-icons/fi";
import { BsCpu, BsSmartwatch } from "react-icons/bs";
import {
  FaLeaf,
  FaCube,
  FaRuler,
  FaWeightHanging,
  FaTshirt,
  FaPalette,
  FaHome,
  FaToolbox,
  FaShieldAlt,
  FaBriefcase,
  FaGasPump,
  FaCouch,
  FaAppleAlt,
  FaMobileAlt,
  FaMotorcycle,
  FaGlasses,
  FaTabletAlt,
  FaCar,
  FaShoppingBag,
  FaLaptop,
} from "react-icons/fa";
import {
  GiPerfumeBottle,
  GiSparkles,
  GiWaterDrop,
  GiSoundWaves,
  GiSpeedometer,
  GiLipstick,
  GiRunningShoe,
} from "react-icons/gi";
import { MdCategory, MdAccessTime, MdCalendarToday, MdKitchen, MdWatch } from "react-icons/md";
import { IoDiamondOutline, IoWatchOutline } from "react-icons/io5";
import { TbEngine } from "react-icons/tb";


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
  "sports-accessories": <GiRunningShoe/>,
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

export const specIcons = {
  // display & tech
  screen: <FiMonitor />,
  display: <FiMonitor />,
  cpu: <FiCpu />,
  processor: <FiCpu />,
  cores: <BsCpu />,
  camera: <FiCamera />,
  storage: <FiHardDrive />,
  memory: <FiHardDrive />,

  // power & audio
  battery: <FiBattery />,
  sound: <GiSoundWaves />,

  // beauty / lifestyle
  sparkles: <GiSparkles />,
  leaf: <FaLeaf />,
  drop: <GiWaterDrop />,
  wind: <GiPerfumeBottle />,

  // time / durability
  clock: <MdAccessTime />,
  calendar: <MdCalendarToday />,

  // furniture / build
  cube: <FaCube />,
  ruler: <FaRuler />,
  weight: <FaWeightHanging />,
  material: <FaCube />,

  // home & kitchen
  home: <FaHome />,
  palette: <FaPalette />,
  tool: <FaToolbox />,
  shield: <FaShieldAlt />,

  // fashion
  tshirt: <FaTshirt />,
  watch: <IoWatchOutline />,

  // vehicle
  engine: <TbEngine />,
  speed: <GiSpeedometer />,
  fuel: <FaGasPump />,

  // accessories
  briefcase: <FaBriefcase />,

  // fallback
  default: <MdCategory />,
};
