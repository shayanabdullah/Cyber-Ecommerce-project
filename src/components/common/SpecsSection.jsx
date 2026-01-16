import React from "react";

const SpecsSection = ({ title, specs }) => {
  return (
    <div className="w-full">
      {specs &&
        Object.entries(specs).map(([section, values]) => (
          <div
            key={section}
            className="flex justify-between w-full py-2 border-b border-[#CDCDCD] px-1"
          >
            {/* Left: Section name */}
            <h3 className="font-sf-pro font-normal text-sm leading-6 text-black capitalize">
              {section}
            </h3>

            {/* Right: Specs */}
            <div className="flex flex-col text-right gap-1">
            
                <div  className="text-black">
                  <span className="text-[13px] md:text-[15px] font-medium">
                    {values}
                  </span>
           
                </div>
       
            </div>
          </div>
        ))}
    </div>
  );
};

export default SpecsSection;
