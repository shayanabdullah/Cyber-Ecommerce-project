import React from "react";
import Container from "./Container";
import { GoChevronRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";

const BreadCrums = () => {
  const {slug} = useParams()
  return (
    <>
      <section className="py-10">
        <Container>
            <div className="main flex items-center gap-4 pb-6">
             <Link to="/">
                <h2 className="font-poppins font-medium text-xs md:text-base text-gray-750 cursor-pointer">Home</h2>
             </Link>
                <i className="text-2xl text-gray-750"><GoChevronRight /></i>
             <Link to='/#catagories'>
                <h2 className="font-poppins font-medium text-xs md:text-base text-gray-750">Catagories</h2>
             </Link>
                <i className="text-2xl text-gray-750"><GoChevronRight /></i>
                {/* active last  */}
                <h2 className="font-poppins font-semibold text-xs md:text-base text-black capitalize">{slug}</h2>
            </div>
        </Container>
      </section>
    </>
  );
};

export default BreadCrums;
