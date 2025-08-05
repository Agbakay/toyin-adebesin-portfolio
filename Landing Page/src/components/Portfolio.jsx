import React from "react";
import image from "../assets/herobg.jpg";
import image_1 from "../assets/cousin-wedding-01.png";
import image_2 from "../assets/intiative-3.png";
import image_3 from "../assets/events.png";
import image_4 from "../assets/cousin-wedding.png";
import image_5 from "../assets/section-3.png";

const Portfolio = () => {
  return (
    <div className="px-30">
      <div className="wrapper w-full">
        <h1 className="sm:text-5xl text-4xl text-center">More Than a Resume</h1>
        <p className="text-center p-4  items-center">
          Whether she’s dancing, cracking a clever joke, or leading a
          high-stakes project, <br></br>she shows up with intention, excellence,
          and a human touch.
        </p>
        <div className="  sm:flex gap-10 justify-between items-center pt-10   ">
          <div className=" cursor-pointer  p-9">
            <img src={image_4} alt="" className="w-full md:w-[500px]" />
          </div>
          <div className=" object-contain  ">
            <img src={image_5} alt="" className="w-full md:w-[500px]" />
          </div>
          <div className=" object-contain pt-10 pb-10">
            <img src={image_1} alt="" className="w-full md:w-[500px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
