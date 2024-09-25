"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu (for cancel button)
  const hideSidebar = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const sidebar = document.querySelector(".navbar1") as HTMLElement;

    if (sidebar) {
      if (isMenuOpen) {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    }
  }, [isMenuOpen]); // This useEffect depends on `isMenuOpen`


  
  return (
    <div className="nav z-100 top-0 sticky">
      <header className="text-white body-font   ">
        <div className="ai container  mx-auto flex  flex-wrap p-4 flex-col md:flex-row ">
          <a className=" flex title-font font-medium text-white mb-4 md:mb-0">
            <Image
              src={require("../../../public/assets/picture/A3.jpg")}
              alt="logo"
              width={100}
              height={100}
              className=" logo "
            />
            <span className="name-nav ml-3 items-center text-2xl mt-2">AYESHA</span>
          </a>

          {/* navbar1 */}
          <nav className="navbar1 ">
            <ul>
              <li onClick={hideSidebar} id="close" className="mb-6 text-4xl text-orange-500">
                <a>
                  <IoCloseSharp />
                </a>
              </li>

              <li className="mt-3">
                <a href={"/"} className="">
                  Home
                </a>
              </li>
              <li className="mt-3">
                <a href={"#about"} className="">
                  About
                </a>
              </li>

              <li className="mt-3">
                <a href={"#skills"} className="">
                  Skills
                </a>
              </li>

              <li className="mt-3">
                <a href={"#projects"} className="">
                  Projects
                </a>
              </li>
              <li className="mt-3">
                <a href={"#contact"} className="">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* menu icon */}
          <li onClick={toggleMenu} id="menu-icon">
            <CiMenuFries />
          </li>

          {/* navbar 2 */}
          <nav className="navbar2 text-xl md:ml-auto md:mr-auto ">
            <ul className="flex justify-center mt-2 items-center lg:ml-10   ">
              <li>
                <a
                  href={"/"}
                  className="line mr-14 md:ml-5   md:mr-10  hover:text-blue-500 hover:scale-105 duration-200 ease-in"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={"/about"}
                  className="line mr-14 hover:text-blue-500 hover:scale-105 duration-200 ease-in"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href={"/skills"}
                  className="line mr-14 hover:text-blue-500 hover:scale-105 duration-200 ease-in"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href={"/projects"}
                  className="line mr-14 hover:text-blue-500 hover:scale-105 duration-200 ease-in"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href={"/contact"}
                  className="line mr-14 hover:text-blue-500 hover:scale-105 duration-200 ease-in"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
