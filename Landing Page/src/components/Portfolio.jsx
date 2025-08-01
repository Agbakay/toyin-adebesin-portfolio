import React from "react";
import image from "../assets/herobg.jpg";

const Portfolio = () => {
  return (
    <div className="">
      <div className="wrapper">
        <h1 className="sm:text-5xl text-4xl text-center">My portfolio</h1>
        <p className="text-center p-4">
          Whether she’s dancing, cracking a clever joke, or leading a<br></br>
          high-stakes project, she shows up with intention, excellence, and a
          human touch.
        </p>
        <div className="  sm:flex gap-10 justify-between items-center pt-10   ">
          <div className=" cursor-pointer p-9">
            <h1>Portfolio one</h1>
            <p>Project Discription</p>
            <a href="#">
              {" "}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className=" object-contain pt-10 ">
            <img src={image} alt="" />
          </div>
          <div className=" object-contain pt-10 pb-10">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
