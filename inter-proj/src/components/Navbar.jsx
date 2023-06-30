import React from "react";
import logo from "../assets/Logo.png";
import home from "../assets/Home.png";
import Tools from "../assets/Tools.png";
import beel from "../assets/Bell.png"
import Photo from "../assets/Photo.png";
import Menu from "../assets/Menu.png";


const Navbar = () => {
  return (
    <div className=" flex justify-between items-center w-full h-20 px-4 text-white bg-customGray shadow-xl text-opacity-25 bg-opacity-25  ">
      <nav className=" fixed w-screen bg-white flex justify-between items-center h-20 px-5 text-white z-20  ">
        {/* logos */}
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="mx-12 cursor-pointer" />
          </a>
        </div>

        {/* icons */}
        <div className="flex flex-row gap-6">
           <a href="/"> <img src={home} alt="home" className="w-8 h-8 rounded-full bg-blue" /></a>
           <a href="/"> <img src={Tools} alt="tools" className="w-8 h-8 rounded-full" /></a>
           <a href="/"> <img src={beel} alt="Beels" className="w-8 h-8 rounded-full relative group-[children]:"/>
           <div className="children absolute bg-red-600 rounded-full w-2 h-2 translate-x-5 -translate-y-6">

           </div></a>
           <a href="/"> <img src={Photo} alt="Photo" className="w-8 h-8 rounded-full bg-blue" /></a>
           <a href="/"> <img src={Menu} alt="Menu" className="w-8 h-8 rounded-full" /></a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
