import React from "react";
import image from "../assets/herobg.jpg";
import image_1 from "../assets/Initiative-2.png";
import image_2 from "../assets/intiative-3.png";
import image_3 from "../assets/events.png";

const Portfolio = () => {
  return (
    <div className="">
      <div className="wrapper">
        <h1 className="sm:text-5xl text-4xl text-center">More Than a Resume</h1>
        <p className="text-center p-4">
          Meet Toyin, still leave the Whether she’s dancing, cracking a clever
          joke, or leading a high-stakes project, she shows up with intention,
          excellence, and a human touch.
        </p>
        <div className="  sm:flex gap-10 justify-between items-center pt-10   ">
          <div className=" cursor-pointer p-9">
            <img src={image_1} alt="" />

            <h1>Portfolio one</h1>
            <p>Project Discription</p>
            <a href="#">
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className=" object-contain  ">
            <img src={image_2} alt="" />
          </div>
          <div className=" object-contain pt-10 pb-10">
            <img src={image_3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
