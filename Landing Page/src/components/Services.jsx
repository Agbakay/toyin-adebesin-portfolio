import React from "react";
import image from "../assets/herobg.jpg";
import { NavLink } from "react-router-dom";

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

          <div className="services sm:flex gap-10 py-10  ">
            <div className="p-10 border-2 hover:shadow-lg mb-5 basis-[33.3%] ">
              <div className="icon">
                <i className="fa-solid fa-book text-4xl "></i>
              </div>
              <h1 className="sm:text-2xl text-xl py-4 font-bold">
                Transforming Data into Clear Insights
              </h1>
              <p className="py-3">
                I am a finance professional with a strong foundation in data
                analysis and visualization, specializing in Excel, Power BI, and
                SQL. My portfolio showcases hands-on projects with the help of
                Data, where I applied tools to clean, analyze, and present in
                ways that drive informed decision-making.
              </p>
              <p>
                I bring a detail-oriented approach and a commitment to accuracy
                in every project. My work reflects both technical skill and the
                ability to translate numbers into meaningful stories.
              </p>

              <NavLink to={"/portfolio"}>
                <button className=" rounded-full p-0 mt-4">
                  View My Projects 
                  <i className="fa-solid fa-arrow-right ml-3"></i>
                </button>{" "}
              </NavLink>
            </div>
            <div className="p-10 border-2 hover:shadow-lg mb-5  basis-[33.3%] ">
              <div className="icon">
                <i className="fa-solid fa-book text-4xl "></i>
              </div>

              <h1 className="sm:text-2xl text-xl font-bold py-4">
                Empowering Women Through Financial Literacy
              </h1>
              <p className="py-3">
                Sisit Digital Solution is my personal initiative designed to
                bridge the financial knowledge gap for women in underserved
                communities. The vision is simple — to deliver practical
                financial education through mobile-friendly, culturally relevant
                content in local languages.
                <br /> <br />
                This ongoing project reflects my passion for inclusive finance,
                digital empowerment, and economic independence.
              </p>
              <NavLink to={"/portfolio"}>
                <button className=" rounded-full p-0">
                  Learn More <i className="fa-solid fa-arrow-right ml-3"></i>
                </button>{" "}
              </NavLink>
            </div>
            {/*  */}
            <div className="p-10 border-2 hover:shadow-lg mb-5  basis-[33.3%] ">
              <div className="icon">
                <i className="fa-solid fa-book text-2xl font-bold "></i>
              </div>

              <h1 className="sm:text-2xl text-xl py-4 font-bold">
                The Road Ahead
              </h1>
              <p className="py-3">
                The Road Ahead I’m on a mission to combine my expertise in
                finance, compliance, and data analytics to fight financial crime
                on a global scale. My next step is pursuing advanced training in
                Finance and Risk Management, building the tools to launch
                impactful financial inclusion projects, and partnering with
                global institutions to make finance safer and more inclusive.
              </p>

              <NavLink to={"/portfolio"}>
                {" "}
                <button className=" rounded-full p-0">
                  Discover My Next Chapter
                  <i className="fa-solid fa-arrow-right ml-3"></i>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
