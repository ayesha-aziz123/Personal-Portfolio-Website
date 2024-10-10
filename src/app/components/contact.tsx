"use client";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="text-white body-font relative  bg-gray-800">
      <form>
        <div id="contact" className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl md:text-5xl  font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel Free to Contact.
            </p>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="inputs w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className="inputs w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>

              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    {" "}
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    className=" inputs w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500  focus:bg-white focus:ring-2 focus:ring-orange-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="button flex mx-auto font-bold text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none rounded text-lg"
                >
                  Submit
                </button>
              </div>

              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="leading-normal my-5"></p>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <Link
                    href={"https://github.com/ayesha-aziz123"}
                    className="  text-white ml-6"
                  >
                    <FaGithub className="icon hover:text-gray-500" />
                  </Link>

                  <Link
                    href={
                      "https://www.linkedin.com/in/ayesha-aziz-574780310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZzj2DGQ4QeSL8ja5onAIpA%3D%3D"
                    }
                    className=" text-white ml-6"
                  >
                    <IoLogoLinkedin className="icon hover:text-blue-400" />
                  </Link>

                  <Link href={"mailto:"} className=" ml-6 text-white">
                    <IoMdMail className="icon hover:text-orange-400" />
                  </Link>
                </span>
              </div>
            </div>
          </div>


        </div>
      </form>
    </section>
  );
};

export default Contact;
