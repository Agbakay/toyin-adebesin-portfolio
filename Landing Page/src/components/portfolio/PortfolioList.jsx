import React from "react";
import Contact from "../../components/Contact";
import image from "../../assets/Maji1.jpg";
import image1 from "../../assets/maji2.jpg";
import image2 from "../../assets/Maji3.jpg";
import image3 from "../../assets/maji4.jpg";

const PortfolioList = () => {
  return (
    <div className="">
      <div className="w-full bg-cyan-800 h-[400px] flex items-center justify-center">
        <div>
          <p className="text-center mb-3">
            <a href="/" className="hover:text-red-500 text-cyan-200">
              Home
            </a>{" "}
            |<span className="text-white"> Portfolio</span>
          </p>
          <h1 className="text-4xl text-center text-white font-bold tracking-widest">
            My Portfolio
          </h1>
          <p></p>
        </div>
      </div>

      <div className="gap-10  sm:flex w-full px-[8%] py-10 ">
        <div className="basis-1/2">
          <h1 className="text-3xl sm:text-3xl mb-10 font-semibold">
            Maji Ndogo Water Project – Power BI Dashboard
          </h1>
          <h3 className="text-2xl font-semibold mb-3">
            Tool: Microsoft Power BI
          </h3>
          <h4 className="text-2xl mb-5">
            Data Source: Project Monitoring Dataset
          </h4>
          <p className="mb-5">
            An interactive dashboard designed for stakeholder reporting and
            project tracking.
          </p>
          <h3 className="mb-3 font-semibold">Key Features:</h3>
          <ul>
            <li className="list-disc">
              Tracks types & frequency of improvements
            </li>
            <li className="list-disc">
              Compares budgeted vs. actual costs per project
            </li>
            <li className="list-disc">
              Visualizes progress by location and timeline
            </li>
            <li className="list-disc">
              Measures % completion of projects dynamically
            </li>
            <li className="list-disc">
              Implements cumulative cost & budget tracking
            </li>
          </ul>
          <h3 className="my-4 font-semibold ">Insights Provided:</h3>
          <ul>
            <li className="list-disc">Are projects on track or over budget?</li>
            <li className="list-disc">
              Which improvements are most expensive?
            </li>
            <li className="list-disc">Which towns have progressed the most?</li>
          </ul>
          <p>Demo Video: Watch Dashboard Walkthrough </p>
        </div>
        <div className=" basis-1/2 sm:pt-0 pt-10 ">
          <div className=" grid-cols-4 grid">
            <div className=" col-span-2">
              <img src={image} alt="" />
            </div>
            <div className=" col-span-2">
              <img src={image1} alt="" />
            </div>
            <div className=" col-span-2 ">
              <img src={image2} alt="" />
            </div>
            <div className=" col-span-2">
              <img src={image3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default PortfolioList;
