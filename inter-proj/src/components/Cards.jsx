import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Cards = ({head,des}) => {
  return (
    <div>
      <div className=" border-gray-100 shadow-md w-5/12 h-96 rounded-lg">
        <div className=" bg-black h-12 flex justify-between">
          <p className=" text-white text-sm p-3 mx-2 text-center font-semibold mb-3">{head}</p>
          <AiOutlineInfoCircle className=" text-white text-3xl mx-7 my-2" />
        </div>
        <div className="m-4">
            <span className=" font-bold">Description:</span><p>{des}</p>
        </div>

      </div>
    </div>
  );
};

export default Cards;
