import React, { useState } from "react";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleIconClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="fixed">
      <div
        className={` z-10 bg-white w-${expanded ? "96" : "58"} h-screen shadow-2xl `}
      >
        <div
          className="z-10 bg-black h-16  flex justify-end"
        >
          <div>
            {expanded ? (
              <FaTimes
                className="text-white w-20 h-12 mt-2"
                onClick={handleIconClick}
              />
            ) : (
              <BiSolidRightArrowCircle
                className="text-white w-20 h-12 mt-2"
                onClick={handleIconClick}
              />
            )}
          </div>
        </div>
        <div>
          {expanded ? (
            <div>
              <ul className="mx-6">
                <li className="font-bold my-5">
                  * Explore the world of management
                </li>
                <li>* Technical Project Management</li>
                <li>* Threadbuild</li>
                <li>* Structure your pointer</li>
                <li>* 4SA Method</li>
              </ul>
            </div>
          ) : (
            <div className="border border-blue rounded-full p-2 mt-4 mr-4 ml-4">
              <p className="text-center text-3xl">1</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
