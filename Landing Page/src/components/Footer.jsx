import React from "react";
import { NavLink } from "react-router-dom";
import image_0 from "../assets/alx.jpg";
import image_1 from "../assets/images.jpg";
import image_2 from "../assets/aws.png";

const Footer = () => {
  return (
    <div className="px-[8%] bg-gray-300 pt-24 pb-5">
      <div>
        <div className=" md:flex justify-between pb-10">
          <div>
            <h1 className="font-bold text-3xl">Toyin Adebesin</h1>
            <p className=" uppercase text-[13.5px] font-semibold">
              Financial Risk & AML Analyst
            </p>
            <p className="md:w-96 pt-[40px] pb-5"></p>
            <div className="flex gap-12 pb-10">
              <img src={image_0} alt="" width={60} />
              <img src={image_1} alt="" width={60} />
              <img src={image_2} alt="" width={60} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold"> Links</h1>
            <ul className="flex gap-5 flex-col pt-5">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/services"}>Projects</NavLink>
              </li>
              <li>
                <NavLink to={"/portfolio"}>Portfolio</NavLink>
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
                href="tel:9023004660"
                className=" ml-4 text-center text-black hover:text-blue-800 "
              >
                +2349023004660
              </a>
            </div>
            <div className=" pt-5 ">
              <i className="fa-solid fa-envelope-open text-2xl md:text-5x1 hover:text-blue-900"></i>
              <a
                href="mailto:Toyinadebesin7@gmail.com "
                className="ml-4 text-center hover:text-blue-800"
              >
                Toyinadebesin7@gmail.com
              </a>
            </div>
          </div>
        </div>
        <hr className="" />
        <div className="mt-10 md:flex justify-between items-center text-center gap-4 ">
          <p className="">All Right Reserved © Toyin Adebesin </p>
          <p>
            Design and Built by{" "}
            <a href="mailto:victor.digitals001@gmail.com" target="_blank">
              Akintunde Kayode
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
