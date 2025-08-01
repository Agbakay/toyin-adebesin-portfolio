import React from "react";
import { NavLink } from "react-router-dom";
NavLink;

const Footer = () => {
  return (
    <div className="px-[8%] bg-gray-300 pt-24 pb-5">
      <div>
        <div className=" md:flex justify-between pb-10">
          <div>
            <h1 className="font-bold text-3xl">Toyin Adebesin</h1>
            <p className=" tracking-[7px]">Data Analytics</p>
            <p className="md:w-96 pt-[40px]">
              With a growing interest in data, Toyin has expanded her skill set
              through academic training in data analytics — equipping herself
              with the tools to make better, data-informed decisions that bridge
              the gap between finance, compliance, and technology.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">About</h1>
            <ul className="flex gap-5 flex-col pt-5">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="py-5 flex gap-6 ">
              <a href="">
                <i className="fa-brands fa-facebook text-3xl md-text-5x1"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-instagram text-3xl md-text-5x1"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin text-3xl md-text-5x1"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-x-twitter text-3xl md-text-5x1"></i>
              </a>
            </div>
            {/* contact  */}
            <div className=" pt-5">
              <i className="fa-solid fa-phone text-2xl md:text-5x1"></i>
              <a
                href="tel:09036817523"
                className=" ml-4 text-center text-black hover:text-blue-800 "
              >
                +234-9036817523
              </a>
            </div>
            <div className=" pt-5 ">
              <i className="fa-solid fa-envelope-open text-2xl md:text-5x1 hover:text-blue-900"></i>
              <a
                href="mailto:kayodeakintunde918@gmail.com "
                className="ml-4 text-center hover:text-blue-800"
              >
                kayodeakintunde918@gmail.com
              </a>
            </div>
          </div>
        </div>
        <hr className="" />
        <div className="mt-10 flex justify-between items-center ">
          <p className="">All Right Reserved © Toyin Adebesin </p>
          <p>
            Design and Built by{" "}
            <a href="Mailto:victor.digitals001@gmail.com" target="_blank">
              Akintunde Kayode
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
