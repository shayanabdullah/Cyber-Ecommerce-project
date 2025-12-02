import React from "react";
import { FaMobileAlt} from "react-icons/fa";
import { FiHeadphones} from "react-icons/fi";
import { HiComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { MdVideogameAsset } from "react-icons/md";
import Container from "../../commonComponents/Container";
import { motion } from "motion/react";
import { fadeIn } from "../../../utils/motion/motion";

const catagories = [
  {
    id : 0,
    text : 'Phones',
    icon :  <FaMobileAlt />
  },
  {
    id : 1,
    text : 'Computers',
    icon :  <HiComputerDesktop />
  },
  {
    id : 2,
    text : 'Smart Watches',
    icon :  <BsSmartwatch />
  },
  {
    id : 3,
    text : 'Cameras',
    icon :  <IoCameraOutline />
  },
  {
    id : 4,
    text : 'Headphones',
    icon :  <FiHeadphones />
  },
  {
    id : 5,
    text : 'Gaming',
    icon :  <MdVideogameAsset />
  },
]

const CatagoriesHeader = ({className}) => {
  return (
    <motion.div 
    variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true}}
    className={`catagories-main py-2 bg-gray-dark-650 ${className}`}>
      <Container>
        <div className="catagory-contents flex items-center justify-between overflow-x-auto">
         {
          catagories.map((item) => (
            <div className="catagory" key={item.id}>
              <i className="text-2xl">{item.icon}</i>
              <a href={`# ${item.text}`}>{item.text}</a>
            </div>
          ))
         }
        </div>
      </Container>
    </motion.div>
  );
};

export default CatagoriesHeader;
