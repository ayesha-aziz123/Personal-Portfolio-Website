"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" body-font bg-gray-700 text-white">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col-reverse  items-center">
        <div className="animate pl-4 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="  title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <span className="text-orange-400">Ayesha</span>
          </h2>
          <h3 className=" title-font sm:text-4xl text-3xl mb-4 font-bold text-orange-400">
            <span className="animate text-white">I'm a</span>
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Web Designer",
                  "JavaScript Developer",
                  "Frontened Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>

          <div className="w-[100px] h-[3px]  bg-blue-800"></div>
          <p className="font mt-9 mb-8 leading-relaxed ">
            Hi, I'm Ayesha, a hardworking and passionate individual on the path
            to becoming a web developer, with a strong interest in technology
            and creativity. I built this portfolio using Next.js and Tailwind
            CSS, and I’m currently expanding my expertise in Next.js and React.
            I specialize in HTML, CSS, and JavaScript, with growing proficiency
            in TypeScript. I believe in continuous learning and enjoy working on
            projects that not only challenge me but also help enhance my skills
            both technically and creatively.
          </p>

          <div className="flex justify-center">
            <Link href={"#contact"}>
              <button className="button inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10  ">
          <Image
            className="img object-cover object-center mx-auto w-[22rem] "
            alt="hero"
            width={400}
            height={400}
            src={require("./../../../public/assets/picture/dp2.jpg")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
