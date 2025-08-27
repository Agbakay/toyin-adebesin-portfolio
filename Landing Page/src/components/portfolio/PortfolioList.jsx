import React from "react";
import Contact from "../../components/Contact";
import image from "../../assets/Maji1.jpg";
import image1 from "../../assets/maji2.jpg";
import image2 from "../../assets/Maji3.jpg";
import image3 from "../../assets/maji4.jpg";
import image4 from "../../assets/excelimage.jpeg";
import image5 from "../../assets/diseases.jpg";

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
          <p className="mt-5">Demo Video: Watch Dashboard Walkthrough </p>
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

      <div className=" sm:flex px-[8%] py-20 gap-20 bg-gray-50 ">
        <div className="basis-1/2 object-cover">
          <img src={image4} alt="" className=" object-top" />
        </div>
        <div className="basis-1/2 pt-10 sm:pt-0">
          <div>
            <h1 className="text-2xl sm:text-3xl mb-10 font-semibold">
              Shipping Performance Metrics – Excel Dashboard
            </h1>
            <h3 className="text-2xl font-semibold mb-5">
              Tool: Microsoft Excel
            </h3>
            <h3 className=" text-2xl mb-5">
              Data Source: Global Superstore Dataset
            </h3>
            <h2>
              Analyzed shipping operations to evaluate delivery efficiency and
              reliability.
            </h2>
            <h5 className="font-semibold py-5">Dashboard Highlights:</h5>
            <ul>
              <li className="list-disc">On-Time Deliveries: 70%</li>
              <li className="list-disc">Monthly Delay Rate: 2.0%</li>
              <li className="list-disc">Avg. Shipping Duration: 4.5 days</li>
            </ul>

            <h5 className="font-semibold py-5"> Key KPIs:</h5>
            <ul>
              <li className="list-disc">
                Orders by Day of Week → Most placed Mon–Fri; Sundays lowest
              </li>
              <li className="list-disc">
                On-Time vs Late Deliveries → 70% on-time vs 30% late
              </li>
              <li className="list-disc">
                By Region → Central & South = high shipments + high delays
              </li>
              <li className="list-disc">
                By Segment → Corporate clients face highest delays (~32%)
              </li>
              <li className="list-disc">
                By Mode → Standard Class = slowest; Same Day = fastest
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" px-[8%] py-20">
        <div className="basis-1/2">
          <h1 className="text-3xl font-semibold mb-5">
            Health Data Predictor – End-to-End Data Project
          </h1>
          <p className="sm:w-[500px] w-full">
            This project explores chronic disease data to build insights and
            predictive models that can help healthcare providers make informed
            decisions.
          </p>
          <p className="py-2">
            GitHub Repository:
            <a
              className="font-semibold hover:text-cyan-700 "
              href="https://github.com/timilydesk/health-data-predictor"
            >
              View Project
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-2xl py-5">Project Components</p>
        </div>
        <div className="sm:flex gap-10 justify-between">
          <div>
            <h4 className="font-semibold py-3">SQL Queries</h4>
            <ul>
              <li className="list-disc">Data cleaning & exploration</li>
              <li className="list-disc">Filtering patient records</li>
              <li className="list-disc">Aggregating health metrics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold py-3">Python (Jupyter Notebook)</h4>
            <ul>
              <li className="list-disc">
                Data preprocessing & feature engineering
              </li>
              <li className="list-disc">Exploratory Data Analysis (EDA)</li>
              <li className="list-disc">Predictive modeling</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold py-3">Power BI Dashboard</h4>
            <ul>
              <li className="list-disc">
                Interactive visualization of chronic disease patterns
              </li>
              <li className="list-disc">
                Metrics on prevalence, costs, and outcomes
              </li>
              <li className="list-disc">
                Dynamic insights for decision-making
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10">
          <h1 className="text-2xl sm:text-3xl mb-5 font-semibold">
            Key Features
          </h1>
          <ul>
            <li className="list-disc">Jupyter Notebook: Heart Disease.ipynb</li>
            <li className="list-disc">
              Predictive Dashboard: Heart Disease.pbix
            </li>
            <li className="list-disc">Documentation: README.md</li>
          </ul>
          <div className="pt-5 ">
            <img src={image5} alt="" width={700} />
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default PortfolioList;
