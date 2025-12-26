import React from "react";
import Container from "./Container";
import { GoChevronRight } from "react-icons/go";

const BreadCrums = () => {
  return (
    <>
      <section className="py-10">
        <Container>
            <div className="main flex items-center gap-4 pb-6">
                <h2 className="font-poppins font-medium text-xs md:text-base text-gray-750">Home</h2>
                <i className="text-2xl text-gray-750"><GoChevronRight /></i>
                <h2 className="font-poppins font-medium text-xs md:text-base text-gray-750">Catalog</h2>
                <i className="text-2xl text-gray-750"><GoChevronRight /></i>
                {/* active last  */}
                <h2 className="font-poppins font-semibold text-xs md:text-base text-black">Smartphones</h2>
            </div>
        </Container>
      </section>
    </>
  );
};

export default BreadCrums;
