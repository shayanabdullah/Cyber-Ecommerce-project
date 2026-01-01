import React from 'react'

const SpecsSection = ({title, specs}) => {
  return (
<>
     <div className="screen">
           <div className="pb-4">
             <h2 className="font-poppins font-medium text-2xl leading-6 ">
              {title}
            </h2>
           </div>
            {
                specs.map((item, i)=> 
        ( <div
          key={i}
          className="flex justify-between w-full py-2 border-b border-[#CDCDCD]"
        >
          <p className='font-sf-pro font-normal font-base leading-6 text-black'>{item.label}</p>
          {Array.isArray(item.value) ? (
            <ul className="text-right space-y-1">
              {item.value.map((feature, index) => (
                <li key={index} className='font-sf-pro font-normal text-[15px] text-black '>{feature.feature}</li>
              ))}
            </ul>
          ) : (
          
            <span className='font-sf-pro font-normal text-[15px] text-black '>
              {item.value || item.specvalue}
            </span>
          )}
        </div>
        )
                )
            }
   </div>
    
</>
  )
}

export default SpecsSection