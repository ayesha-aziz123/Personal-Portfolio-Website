"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenu, setMenu] = useState(false);

  function toggle() {
    setMenu(!isMenu);
  }

  return (
    <div className="container z-50 max-w-[1280px] py-2 px-6 fixed top-0 w-[100vw] bg-[#303043ba] text-white">
      {/* Nav1 for Desktop */}
      <div className=" flex justify-between items-center w-[100%] ">
        <div>
          <Image
            src={require("../../../public/assets/picture/A3.jpg")}
            alt="logo"
            width={100}
            height={100}
            className="logo inline-block"
          />
          <span className="name-nav ml-3 items-center text-2xl mt-2">
            AYESHA
          </span>
        </div>

        <ul className=" md:flex hidden gap-10 items-center font-[700] mr-5 text-[20px]">
          <li>
            <Link className="line" href={"/"}>Home</Link>
          </li>
          <li>
            <Link className="line" href={"/about"}>About</Link>
          </li>
          <li>
            <Link className="line" href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link className="line" href={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link className="line" href={"/contact"}>Contact</Link>
          </li>
        </ul>
        {/* Menu Icon */}
        <IoMdMenu
          onClick={toggle}
          className="menu-btn md:hidden font-[900]"
          size={50}
        />
          
      
      </div>
      

      {/* Nav2 for Mobile */}
      <div 
        className={` nav2 md:hidden fixed top-[0px] right-0 w-full h-screen flex  justify-center bg-[#080404ee] text-white font-bold z-10
          transition-all duration-500 ease-in-out transform ${
            isMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
      >
        <div className="absolute right-11 top-10 font-semibold">

        <IoCloseSharp className="text-orange-700" size={60} onClick={toggle} />
        </div>
       
        <ul className="navs z-10 flex md:hidden flex-col justify-center items-center   text-[26px] gap-16">
          <li >
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
