import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-cyan-200 h-[400px] flex items-center justify-center">
      <div>
        <p className="text-center">
          <a href="/" className="hover:text-red-500 text-blue-800">
            Home
          </a>{" "}
          |<span className="text-black"> About Me</span>
        </p>
        <h1 className="text-4xl text-center text-black font-bold tracking-widest">
          About Me
        </h1>
        <p></p>
      </div>
    </div>
  );
};

export default Hero;
