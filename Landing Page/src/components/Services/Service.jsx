import React from "react";
import image_1 from "../../assets/Mindklear.png";
import image_2 from "../../assets/Unleash.png";

const services = () => {
  return (
    <div>
      <div className="w-full  bg-cyan-200 h-[400px] flex items-center justify-center">
        <div>
          <p className="text-center pb-3">
            <a
              href="/"
              className="hover:text-red-500 text-blue-800 text-center"
            >
              Home
            </a>{" "}
            |<span className="text-black"> Projects</span>
          </p>
          <h1 className="text-4xl text-center text-black font-bold tracking-widest">
            Projects
          </h1>
          <p></p>
        </div>
      </div>

      <div className="md:flex gap-20 justify-between px-[8%] pt-32">
        <div className="basis-[50%]">
          <h2 className="font-semibold text-xl md:text-3xl">
            Mental Health & Community Resilience | Volunteer, Mindklear Wellness
            Outreach
          </h2>
          <h5 className="font-semibold pt-5 pb-5">About the Initiative</h5>
          <p>
            {" "}
            Mindklear Wellness is a nonprofit organization committed to
            promoting mental health awareness and emotional well-being across
            diverse communities in Lagos, Nigeria.
          </p>
          <h6 className="font-semibold py-5">My Role & Impact</h6>
          <p>
            {" "}
            As a volunteer, I played an active role in organizing and
            facilitating wellness outreach programs, collaborating with
            organizations such as The Assembly and Hacey Health Initiative. Our
            focus wasn’t just on schools — we reached out to entrepreneurs,
            creatives, and everyday people navigating stress, burnout, and
            emotional fatigue. We also visited preschools and elementary
            schools, where we distributed learning materials and meals, but the
            work extended far beyond that. We hosted conversations around
            resilience, purpose, and healing, creating safe spaces where people
            could reflect, recharge, and reconnect with their sense of self.
            This initiative mattered deeply to me because it gave me a chance to
            use my presence — not just my profession — to help others rise
            through life’s challenges. The impact was tangible, personal, and
            lasting.
          </p>
        </div>
        <div className="basis-[50%] object-cover">
          <img src={image_1} alt="" width={500} />
        </div>
      </div>

      <div className="md:flex gap-20 justify-center items-center px-[8%] pt-20 pb-20">
        <div className="basis-[50%] object-cover">
          <img src={image_2} alt="" width={500} />
        </div>
        <div className="basis-[50%]">
          <h2 className="font-semibold text-xl md:text-3xl">
            Unleash Ur Voice Africa | Project Lead & Co-Initiator
          </h2>
          <h5 className="font-semibold pt-5 pb-5">About the Initiative</h5>
          <p>
            {" "}
            Inspired by my mentor’s journey in media and storytelling, I pitched
            and led the creation of Unleash Ur Voice Africa — a virtual
            masterclass series spotlighting ordinary people doing extraordinary
            things. The mission was to inspire individuals to rise above
            limitations and discover the power of their voices.
          </p>
          <h6 className="font-semibold py-5">My Role & Impact</h6>
          <p>
            {" "}
            I managed concept development, logistics, speaker coordination, and
            campaign strategy. The initiative showcased stories of resilience
            and success, giving voice to changemakers across different
            backgrounds. It reflects my belief that leadership often starts with
            asking, “What can I build with what I have?”
          </p>
        </div>
      </div>

      <div className="md:flex px-[8%] pb-20 justify-center items-center">
        <div>
          <h1 className="font-semibold pb-10 text-xl md:text-3xl">
            Lift & Learn Finance — Founder
          </h1>
          <p className="py-2">
            Nigeria & Africa-focused | Financial Literacy for Underserved Women
          </p>
          <h4 className="pb-3 font-semibold">About the Initiative</h4>
          <p>
            Lift & Learn Finance is my personal initiative aimed at addressing
            the financial literacy gap among African women in underserved
            communities. It's built on a deep belief: that when women understand
            and control their finances, they unlock the freedom to build better
            futures for themselves and their families.
          </p>
          <h4 className="font-semibold py-3">The Vision</h4>
          <p>
            Out of this passion, I conceptualized SISIT Digital Solution — a
            mobile-based financial education platform that will teach women how
            to budget, save, and invest, using local languages like Pidgin
            English. The platform is designed to be simple, culturally relevant,
            and accessible via SMS or a mobile app.
          </p>
          <h4 className="py-3 font-semibold">Where I Am Now</h4>
          <p>
            {" "}
            The platform is still in the developmental stage. I’ve led the
            creation of early wireframes and built the foundation for a
            curriculum focused on practical, empowering financial knowledge. But
            I know that to bring this vision fully to life, I need deeper
            expertise — especially in investment strategy, portfolio management,
            and digital financial tools. Which is one of the reason’s why I’m
            pursuing a Master’s in Finance — to gain the technical skills and
            global perspective needed to build a solution that’s scalable,
            inclusive, and sustainable.
          </p>
          <h4 className="font-semibold py-3">Why It Matters</h4>
          <p>
            {" "}
            This isn’t just a project. It’s a mission rooted in lived experience
            — in seeing how limited financial access can hold women back, and
            how knowledge can change everything. With SISIT, I want to give
            women something powerful: the tools to stand on their own two feet.
          </p>
          <div className="pt-10"></div>
          <blockquote className="border-l-4 border-cyan-950  pl-3 ">
            “I believe if a woman has knowledge, resources, and independence —
            she has freedom. And freedom is everything.”
          </blockquote>
          <div className="py-4 flex gap-10 justify-start items-center">
            <a
              className="py-3 px-5 bg-cyan-700 text-white rounded-[50px]"
              target="_blank"
              href="https://miro.com/app/board/uXjVIatmCtA=/?share_link_id=869379785569"
            >
              Presntation Slide
            </a>
            <a
              className="py-3 px-5 bg-cyan-700 text-white rounded-[50px]"
              target="_blank"
              href="https://docs.google.com/presentation/d/18vlcKLConmFivM5S9D_6AfuHoJXnWCJFVxew90txlbg/edit?usp=sharing"
            >
              Porject Mockup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
