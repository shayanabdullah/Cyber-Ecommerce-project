import React from "react";
import Container from "./Container";
import { GoChevronRight } from "react-icons/go";
import { Link, useLocation, useParams } from "react-router-dom";

const BreadCrums = ({slug, category, name}) => {

  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean)
  let currentPath = ''
  return (
    <>
      <section className="py-10">
        <Container>
            <div className="main flex items-center gap-4 pb-6 flex-wrap overflow-x-hidden">
              <Link to={"/"}>
           <div className="flex items-center gap-4 cursor-pointer!">
               <h2 className="font-poppins font-medium text-sm md:text-base text-gray-750 cursor-pointer! capitalize">Home</h2>
              <i className="text-2xl text-gray-750 cursor-default!"><GoChevronRight /></i>
           </div>
              </Link>
       {
           paths.map((path, index)=> {
            currentPath += `/${path}`;
            const isLast = index === paths.length -1;

            return (
           <div className="">
            {
              !isLast ? (
                   <div className="flex items-center gap-4 cursor-pointer flex-wrap" key={index}>
                   <Link >
                <h2 className="font-poppins font-medium text-sm md:text-base text-gray-750 capitalize ">{path.replace("-", " ")}</h2>
             </Link>
                <i className="text-2xl text-gray-750 cursor-default!"><GoChevronRight /></i>
              </div>
              ) : (
                   <div className="flex items-center gap-4" key={index}> 
                <h2 className="font-poppins font-semibold text-sm md:text-base text-black cursor-pointer capitalize"> {slug}</h2>
            
              </div>
              )
            }
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

export default BreadCrums;
