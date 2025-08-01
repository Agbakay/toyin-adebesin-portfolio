import React from "react";
import image from "../assets/herobg.jpg";
import CV from "../assets/Resume.pdf";

const Hero = () => {
  return (
    <div className=" home px-[8%]  h-screen  bg-white  md:bg-center  bg-cover bg-no-repeat bg-fixed ">
      {/* <div class="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent "></div> */}
      <div className=" h-screen flex items-end text-white   ">
        <div className="  md:flex  justify-between items-end py-10 gap-10 gap-x-10 w-full ">
          <div className=" sm:basis-3/4 ">
            <h1 className=" md:text-7xl text-4xl font-bold ">
              Hi, I’m<br></br> Toyin Adebesin
            </h1>
            <p className="sm:text-2xl py-5">
              A vibrant Financial Analyst, Compliance <br></br>Specialist & Data
              Enthusiast.{" "}
            </p>
            <a
              href={CV}
              target="_blank"
              download="Toyin Adebesin Curriculum Vitae"
              className=" px-5 hover:text-white py-3 bg-teal-700 text-white rounded-full hover:bg-black "
            >
              Download Resume <i className="fa-solid fa-arrow-right ml-3"></i>
            </a>
          </div>
          <div className=" basis-[20%] pt-10   ">
            <div className=" ">
              <h5 className="text-3xl font-bold sm:text-2xl ">
                Lets Work Together
              </h5>
              <p className="text-2xl">I'm Available at</p>
              <a
                href="mailto:toyinadebesin7@gmail.com"
                className="hover:text-sky-950"
              >
                Toyinadebesin7@gmail.com
              </a>
              <br></br>
              <a href="tel:09023004660" className="hover:text-sky-950">
                +2349023004660
              </a>
              <div className="social py-5 flex column gap-5 hover:transition-all ">
                <a href="https://web.facebook.com/tiaberry.ttabalani">
                  <i className="fa-brands fa-facebook-f text-2xl hover:text-sky-950  "></i>
                </a>

                <a href="https://linkedin.com/in/toyinadebesin">
                  <i className="fa-brands fa-linkedin text-2xl hover:text-sky-950 "></i>
                </a>

                <a href="https://www.instagram.com/tiaberry?igsh=dzlwZnRkM2U3ZXk2">
                  <i className="fa-brands fa-instagram text-2xl hover:text-sky-950"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
