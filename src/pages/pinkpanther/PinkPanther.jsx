import React from "react";
import PinkPantherHeading from "./table-heading/PinkPantherHeading";
import PinkPantherRows from "./table-rows/PinkPantherRows";

const PinkPanther = () => {


  return (
    <div className=" text-white py-12" >
       <div className='mx-28 '>
        <table className="w-full border-collapse">
      <PinkPantherHeading/>
      <PinkPantherRows />
     
     
      


      
      </table>
    </div>
    </div>
   
  );
};

export default PinkPanther;
