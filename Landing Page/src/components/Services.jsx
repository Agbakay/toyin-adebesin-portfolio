import React from "react";
import image from "../assets/herobg.jpg";

const Services = () => {
  return (
    <div>
      <div className="px-[8%] my-[100px] w-full">
        <div className=" w-full ">
          <div className=" w-full">
            <h1 className=" text-center ">What I do</h1>
            <h2 className="py-5 sm:text-4xl text-3xl text-center">
              Where creativity meets functionality, <br></br>and every click
              tells a unique story.
            </h2>
            <p className="text-center ">
              Here in my creative haven, we embark on a journey where every
              idea, every project, is an opportunity to craft something truly
              unique.
            </p>
          </div>

          <div className="services sm:flex gap-10 py-10 ">
            <div className="p-10 border-2 hover:shadow-lg mb-5 hover:bg-cyan-100">
              <div className="icon">
                <i className="fa-solid fa-book text-4xl "></i>
              </div>

              <h1 className="sm:text-3xl text-2xl py-4">Data Analytics</h1>
              <p className="py-3">
                I'm not just a service provider; I'm a creative storyteller, a
                problem solver, and your partner in turning imagination into
                reality. Here in my creative haven, we embark on a journey where
                every idea, every project, is an opportunity to craft something
                truly unique.
              </p>
              <button className=" rounded-full p-0">
                Learn More
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="p-10 border-2 hover:shadow-lg mb-5 hover:bg-cyan-100">
              <div className="icon">
                <i className="fa-solid fa-book text-4xl "></i>
              </div>

              <h1 className="sm:text-3xl text-2xl py-4">Data Analytics</h1>
              <p className="py-3">
                I'm not just a service provider; I'm a creative storyteller, a
                problem solver, and your partner in turning imagination into
                reality. Here in my creative haven, we embark on a journey where
                every idea, every project, is an opportunity to craft something
                truly unique.
              </p>
              <button className=" rounded-full p-0">
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="p-10 border-2 hover:shadow-lg mb-5 hover:bg-cyan-100">
              <div className="icon">
                <i className="fa-solid fa-book text-4xl "></i>
              </div>

              <h1 className="sm:text-3xl text-2xl py-4">Data Analytics</h1>
              <p className="py-3">
                I'm not just a service provider; I'm a creative storyteller, a
                problem solver, and your partner in turning imagination into
                reality. Here in my creative haven, we embark on a journey where
                every idea, every project, is an opportunity to craft something
                truly unique.
              </p>
              <button className=" rounded-full p-0">
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
