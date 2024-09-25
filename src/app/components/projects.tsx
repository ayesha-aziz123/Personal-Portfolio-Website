"iuse client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects">
      <section className="text-gray-600 body-font bg-gray-800">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className=" text-3xl md:text-5xl font-medium title-font mb-4 text-white">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4  ">
            {/* project1 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4   ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={require("../../../public/assets/projects/tic-tao.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 ">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Tic-Tac-Toe Game
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3 ">
                    This is the project I've created a Tic-Tac-Toe game using
                    Html, Css, Javascript.
                    <br />
                    Here is the link of my project.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://tic-tac-toe-game-ayesha.vercel.app/"}
                  >
                    <p className="p-1 mt-4 text-center border-2 border-cyan-600 leading-relaxed  text-blue-600 font-bold hover:scale-105 duration-300 ease hover:bg-slate-700  hover:text-white rounded ">
                      Visit my Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project2 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={require("../../../public/assets/projects/calculator.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Calculator
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3">
                    I have created a calculator project using Html, CSS,
                    Javascript . This application supports various arithmetic
                    operations and provides a robust and interactive user
                    experience. Here is the Link of my Project.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://calculator-app-ayesha.vercel.app/"}
                  >
                    <p className="p-1 mt-4 text-center border-2 border-cyan-600 leading-relaxed  text-blue-600 font-bold hover:scale-105 duration-300 ease hover:bg-slate-700  hover:text-white rounded ">
                      Visit my Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project3 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={require("../../../public/assets/projects/curren.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Currency Converter App
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3">
                    This project using Html, CSS, JavaScript Currency converter
                    is a minimalistic web application where users can input an
                    amount in one currency and get its equivalent in another
                    currency.
                    <br />
                    Here is the Link of my Project.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://currency-converter-app-a-chi.vercel.app/"}
                  >
                    <p className="p-1 mt-4 text-center border-2 border-cyan-600 leading-relaxed  text-blue-600 font-bold hover:scale-105 duration-300 ease hover:bg-slate-700  hover:text-white rounded ">
                      Visit my Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project4 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={require("../../../public/assets/projects/facebook.jpg")}
                />
                <div className=" px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Facebook Clone
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3 ">
                    A clone of the Facebook platform, replicating its core
                    features such as user profiles, friend requests, messaging,
                    and news feeds. Built to demonstrate front-end development
                    skills and understanding of social media dynamics
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://github.com/ayesha-aziz123/Facebook-clone"
                    }
                  >
                    <p className="p-1 mt-4 text-center border-2 border-cyan-600 leading-relaxed  text-blue-600 font-bold hover:scale-105 duration-300 ease hover:bg-slate-700  hover:text-white rounded ">
                      Visit my Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project5 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={require("../../../public/assets/projects/atm2.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    CLI Atm Machine Project
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3 ">
                    I have developed an ATM project using TypeScript and
                    Node.js. This project simulates ATM functionalities such as
                    balance inquiry, cash withdrawal, and transaction history.
                    Here is the Link of my Project.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/ayesha-aziz123/Atm_Project"}
                  >
                    <p className="p-1 mt-4 text-center border-2 border-cyan-600 leading-relaxed  text-blue-600 font-bold hover:scale-105 duration-300 ease hover:bg-slate-700  hover:text-white rounded ">
                      Visit my Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project6 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={require("../../../public/assets/picture/girlimage.jpeg")}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Personal Portfolio Website
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3">
                    I have created a Portfolio website using Html, CSS,
                    JavaScript so check it out and share Feedback. <br />
                    Here is the link of my Project.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://my-portfolio-ayesha-aziz.vercel.app/"}
                  >
                    <p className="p-1 mt-4 text-center border-2 border-cyan-600 leading-relaxed  text-blue-600 font-bold hover:scale-105 duration-300 ease hover:bg-slate-700  hover:text-white rounded ">
                      Visit my Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
