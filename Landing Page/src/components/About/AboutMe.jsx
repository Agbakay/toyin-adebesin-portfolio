import React from "react";
import image from "../../assets/herobg.jpg";
import about from "../../assets/about-img.png";

const AboutMe = () => {
  return (
    <div className="px-[8%] my-24 md:flex gap-24">
      <div className="basis-1/2">
        <img src={about} alt="" className="w-[100%] h-[100%] object-cover" />
      </div>
      <div className="basis-3/4">
        <h3 className="pt-10 font-semibold">Meet Me</h3>
        <h1 className="sm:text-4xl text-3xl pt-2 font-semibold">Who I am</h1>
        <p className="pt-5">
          Toyin Adebesin is a passionate and purpose-driven finance and
          compliance professional with a dynamic background in retail banking,
          risk analysis, and financial crime prevention. Her career began at the
          frontlines as a bank teller, where she developed a keen understanding
          of financial operations and an early curiosity for the inner workings
          of the financial system.
        </p>
        <p className="pt-5">
          Her natural transition into compliance and risk roles saw her thrive
          as a BSA/AML Analyst and Sanctions Investigator, where she honed her
          ability to assess risk, conduct due diligence, and protect
          institutional integrity in an increasingly complex regulatory
          environment.
        </p>
        <p className="pt-5">
          With a growing interest in data, Toyin has expanded her skill set
          through academic training in data analytics — equipping herself with
          the tools to make better, data-informed decisions that bridge the gap
          between finance, compliance, and technology. Her next strategic step
          involves rigorous graduate studies in finance, where she aims to
          deepen her analytical expertise and acquire the technical and
          strategic skills necessary to lead innovative solutions in financial
          risk and compliance within the international financial system.
        </p>
        <p className="pt-5">
          Outside of her professional path, Toyin is the founder of Lift & Learn
          Finance, a digital empowerment initiative designed to provide African
          women with financial literacy education and entrepreneurial resources.
          Her mission is clear: to use financial knowledge and technology as a
          force for inclusion and equity.
        </p>
        <p className="pt-5">
          Known for her analytical thinking and unstoppable work ethic, Toyin
          also brings a vibrant, light-hearted spirit into every space she
          enters. Outside of work, she enjoys good music, dancing, and sharing
          laughter with others. When she’s not combating financial crime, she’s
          channeling her energy into empowering African women through digital
          tools and financial literacy — a mission close to her heart.
        </p>
        <p className="pt-5 pb-10">
          Whether she’s dancing, cracking a clever joke, or leading a
          high-stakes project, she shows up with intention, excellence, and a
          human touch.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
