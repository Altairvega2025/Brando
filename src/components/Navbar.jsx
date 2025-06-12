"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    

    <div className="fixed  top-0 left-0 z-50 w-full bg-white ">


    <nav className="flex justify-between bg-white  mx-auto items-center max-w-6xl w-full px-0 py-0 md:px-0 md:py-3">

     
      {/* Logo 
      
       <nav className="flex items-center justify-between px-5 mx-auto shadow-sm md:bg-green-700 lg:bg-red-600 bg-blue-600 md:w-full md:max-w-3xl lg:w-">*/}
      <div className="text-2xl  font-bold text-[text-[#163546]] py-0 px-4 md:py-4 rounded-tl-lg rounded-br-lg tracking-wide">
       
        <p className="font-bold text-3xl text-[#092c3f]">Brando & Associates.</p>
      </div>

      {/* Navigation Links     rgb(255, 255, 255) */}
      <ul className=" space-x-6 text-[text-[#163546]] font-semibold  hidden md:flex ">
        <li><Link href="#" className="hover:text-[#343a40] ">Home</Link></li>
        <li><Link href="#" className="hover:text-[#343a40]">About</Link></li>
        <li><Link href="#" className="hover:text-[#343a40]">Services</Link></li>
        <li><Link href="#" className="hover:text-[#343a40]">Blog</Link></li>
        <li><Link href="#" className="hover:text-[#343a40]">Contacts</Link></li>
            </ul>
   

       {/* Mobile Hamburger */}
        <div className="md:hidden  pr-8">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <p className="font-bold">X</p> :<RxHamburgerMenu size={25} color="black" />}
          </button>
        </div>
    </nav>





    {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4  font-semibold bg-white">
          <li><Link href="#" className="hover:text-white text-[#163546]">Home</Link></li>
          <li><Link href="#" className="hover:text-[#343a40] text-[#343a40]">About</Link></li>
          <li><Link href="#" className="hover:text-[#343a40] text-[#343a40]">Services</Link></li>
          <li><Link href="#" className="hover:text-[#343a40] text-[#343a40]">Blog</Link></li>
          <li><Link href="#" className="hover:text-[#343a40] text-[#343a40]">Contacts</Link></li>
         
        </ul>
      )}
    </div>
  );
};

export default Navbar;
