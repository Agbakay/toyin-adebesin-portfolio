import React from "react";

const services = () => {
  return (
    <div className="w-full bg-cyan-200 h-[400px] flex items-center justify-center">
      <div>
        <p className="text-center pb-3">
          <a href="/" className="hover:text-red-500 text-blue-800 text-center">
            Home
          </a>{" "}
          |<span className="text-black"> Projects</span>
        </p>
        <h1 className="text-4xl text-center text-black font-bold tracking-widest">
          Services
        </h1>
        <p></p>
      </div>
    </div>
  );
};

export default services;
