import React from "react";
import image from "../../assets/herobg.jpg";
import digit from "../../assets/digital.png";
import image_1 from "../../assets/finance.png";
import Contact from "../../components/Contact";

const PortfolioList = () => {
  return (
    <div className="">
      <div className="w-full bg-cyan-200 h-[400px] flex items-center justify-center">
        <div>
          <p className="text-center mb-3">
            <a href="/" className="hover:text-red-500 text-blue-800">
              Home
            </a>{" "}
            |<span className="text-black"> Portfolio</span>
          </p>
          <h1 className="text-4xl text-center text-black font-bold tracking-widest">
            My Portfolio
          </h1>
          <p></p>
        </div>
      </div>

      {/*  */}
      <div className=" md:flex py-40 gap-20">
        <div className="basis-2/4 object-cover my-5">
          <img src={digit} alt="" />
        </div>
        <div className="basis-2/4 object-cover my-3">
          <img src={image_1} alt="" />
        </div>
        <div className="basis-2/4 object-cover my-3">
          <img src={image_1} alt="" />
        </div>
      </div>
      {/*  */}

      <Contact />
    </div>
  );
};

export default PortfolioList;
