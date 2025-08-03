import React from "react";
import image from "../../assets/herobg.jpg";
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
      {/*  */}
      {/*  */}
      {/*  */}

      <div className="md:flex gap-10  items-center justify-between px-[8%] mt-[100px] mb-10">
        <div className="relative cursor-pointer port">
          <img src={image} alt="" className="" />
          <div className="content absolute top-0 bottom-0 right-0 left-0 px-5 py-3 bg-gray-100 flex-col flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl text-center font-semibold pb-3">
              Marketing Analysice of Maskwell enterprises
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              iusto, molestiae atque explicabo est consequuntur ipsa quasi
              itaque rem omnis laudantium in saepe culpa esse dolore accusamus
              soluta ex obcaecati!
            </p>
          </div>
        </div>
        <div className="relative cursor-pointer port my-10 ">
          <img src={image} alt="" className="" />
          <div className="content absolute top-0 bottom-0 right-0 left-0 px-5 py-3 bg-gray-100 flex-col flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl text-center font-semibold pb-3">
              Marketing Analysice of Maskwell enterprises
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              iusto, molestiae atque explicabo est consequuntur ipsa quasi
              itaque rem omnis laudantium in saepe culpa esse dolore accusamus
              soluta ex obcaecati!
            </p>
          </div>
        </div>
        <div className="relative cursor-pointer port">
          <img src={image} alt="" className="" />
          <div className="content absolute top-0 bottom-0 right-0 left-0 px-5 py-3 bg-gray-100 flex-col flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl text-center font-semibold pb-3">
              Marketing Analysice of Maskwell enterprises
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              iusto, molestiae atque explicabo est consequuntur ipsa quasi
              itaque rem omnis laudantium in saepe culpa esse dolore accusamus
              soluta ex obcaecati!
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex gap-10  items-center justify-between px-[8%] mb-[100px]">
        <div className="relative cursor-pointer port">
          <img src={image} alt="" className="" />
          <div className="content absolute top-0 bottom-0 right-0 left-0 px-5 py-3 bg-gray-100 flex-col flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl text-center font-semibold pb-3">
              Marketing Analysice of Maskwell enterprises
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              iusto, molestiae atque explicabo est consequuntur ipsa quasi
              itaque rem omnis laudantium in saepe culpa esse dolore accusamus
              soluta ex obcaecati!
            </p>
          </div>
        </div>
        <div className="relative cursor-pointer port my-10 ">
          <img src={image} alt="" className="" />
          <div className="content absolute top-0 bottom-0 right-0 left-0 px-5 py-3 bg-gray-100 flex-col flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl text-center font-semibold pb-3">
              Marketing Analysice of Maskwell enterprises
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              iusto, molestiae atque explicabo est consequuntur ipsa quasi
              itaque rem omnis laudantium in saepe culpa esse dolore accusamus
              soluta ex obcaecati!
            </p>
          </div>
        </div>
        <div className="relative cursor-pointer port">
          <img src={image} alt="" className="" />
          <div className="content absolute top-0 bottom-0 right-0 left-0 px-5 py-3 bg-gray-100 flex-col flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl text-center font-semibold pb-3">
              Marketing Analysice of Maskwell enterprises
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              iusto, molestiae atque explicabo est consequuntur ipsa quasi
              itaque rem omnis laudantium in saepe culpa esse dolore accusamus
              soluta ex obcaecati!
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default PortfolioList;
