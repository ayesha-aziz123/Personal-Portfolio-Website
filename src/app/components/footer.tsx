import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-gray-600 border-t-2 border-gray-700">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex  flex-wrap title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={require("../../../public/assets/picture/A3.jpg")}
              alt="logo"
              width={100}
              height={100}
              className="logo  "
            />
            <span className="ml-3 text-white tracking-widest text-xl">Ayesha</span>
          </a>
          <p className=" text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4">
            © 2024 Ayesha | All Right Reserved
          </p>
          <div className="ml-12 ">
            <ul className="footer-tex sm:ml-2 sm:pl-1  ">
            <a href="/" className="line tag  text-white px-2 ">
              FAQ
            </a>
            <a href="/" className="line tag text-white px-2">
              Services
            </a>
            <a href="/" className="line tag text-white px-2">
              Contact
            </a>
            <a href="/" className="line tag text-white px-2">
              Privacy Policy
            </a>
            </ul>
          </div>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-2xl">
            <Link
              href={"https://github.com/ayesha-aziz123"}
              className="text-white ml-5"
            >
              <FaGithub className="foot-icon  " />
            </Link>

            <Link
              href={
                "https://www.linkedin.com/in/ayesha-aziz-574780310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZzj2DGQ4QeSL8ja5onAIpA%3D%3D"
              }
              className="ml-5 text-white">
              <FaLinkedin className="foot-icon" />
            </Link>

            <Link href={"mailto:"} className="ml-5 text-white">
              <IoMdMail className="foot-icon " />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
