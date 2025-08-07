import React from "react";
import image from "../assets/herobg.jpg";

const About = () => {
  return (
    <div className="px-[8%] my-[100px]">
      <div className="about-wrapper">
        <h2 className="">About Me</h2>
        <h1 className="text-3xl pt-3 md:text-5xl">Meet Me</h1>
        <h1 className="sm:text-3xl py-5">
          I’m passionate about fighting financial crime, empowering women
          through digital literacy, and building a data-driven future in finance
          and risk management.
        </h1>
        <div className=" md:column md:flex  gap-10 py-10 gap-x-10">
          <div className="col basis-1/2">
            <img src={image} alt="" className=" md:w-full   " />
          </div>
          <div className="col basis-1/2">
            <p className="py-10">
              Toyin Adebesin is a passionate and purpose-driven finance and
              compliance professional with a dynamic background in retail
              banking, risk analysis, and financial crime prevention. Her career
              began at the frontlines as a bank teller, where she developed a
              keen understanding of financial operations and an early curiosity
              for the inner workings of the financial system.
            </p>
            <p className="mb-10">
              Her natural transition into compliance and risk roles saw her
              thrive as a BSA/AML Analyst and Sanctions Investigator, where she
              honed her ability to assess risk, conduct due diligence, and
              protect institutional integrity in an increasingly complex
              regulatory environment.
            </p>
            <a
              href={"/about"}
              className="py-3 px-6 bg-teal-800 rounded-full border-2 border-white text-white hover:bg-black hover:text-white"
            >
              Learn More
              <i className="fa-solid fa-arrow-right hover:-rotate-[45deg] ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
