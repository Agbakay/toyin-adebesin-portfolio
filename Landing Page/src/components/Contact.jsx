import React, { useState } from "react";

function App() {
  const [result, setResult] = React.useState();
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b18f89d2-ac0e-4fb9-8c34-a13ea15d2710");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.Message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  //
  //
  //
  return (
    <div div className="px-[8%] mt-[100px] bg-gray-100">
      <div className="sm:flex gap-24 justify-between py-[100px]">
        <div className="wrapper basis-6/12 ">
          <h1 className="text-4xl md:text-5xl pb-5 font-normal">Contact Me</h1>
          <p>Fill up the form and I will get back to you soon ✌️.</p>
          {/* ----------------- */}
          {/* Social icon */}
          {/* ---------------- */}
          <div className="py-5 flex gap-6 ">
            <a
              href="https://web.facebook.com/tiaberry.ttabalani"
              target="_blank"
            >
              <i className="fa-brands fa-facebook text-3xl md-text-5x1 hover:text-cyan-150"></i>
            </a>
            <a
              href="https://www.instagram.com/tiaberry?igsh=dzlwZnRkM2U3ZXk2"
              target="_blank"
            >
              <i className="fa-brands fa-instagram text-3xl md-text-5x1"></i>
            </a>
            <a href="https://linkedin.com/in/toyinadebesin" target="_blank">
              <i className="fa-brands fa-linkedin text-3xl md-text-5x1"></i>
            </a>
            {/* <a href="">
              <i className="fa-brands fa-x-twitter text-3xl md-text-5x1"></i>
            </a> */}
          </div>
          {/* ------------------- */}
          {/* contact  */}
          {/* ------------------- */}
          <div className=" pt-5">
            <i className="fa-solid fa-phone text-2xl md:text-5x1"></i>
            <a
              href="tel:9023004660"
              className=" ml-4 text-center text-black hover:text-blue-800 "
            >
              +2349023004660
            </a>
          </div>
          <div className=" pt-5 ">
            <i className="fa-solid fa-envelope-open text-2xl md:text-5x1 hover:text-blue-900"></i>
            <a
              href="mailto: Toyinadebesin7@gmail.com"
              className="ml-4 text-center hover:text-blue-800"
            >
              Toyinadebesin7@gmail.com
            </a>
          </div>
        </div>

        {/* --------------------- */}
        {/*  Contact Form */}
        {/* ------------------------ */}

        <div className=" basis-6/12 mt-8">
          <h1 className="text-2xl font-bold mb-3">Send A Message</h1>
          <form onSubmit={onSubmit} className=" flex-col  gap-10">
            <label htmlFor="text">Enter Name</label>
            <input
              type="text"
              name="name"
              className="border-2 border-gray-400 p-2 rounded-lg mb-5 w-full pl-3"
              placeholder="Enter Name"
            />
            <br></br>
            <label htmlFor="text">Enter Email </label>
            <input
              type="email"
              name="email"
              className="border-2 border-gray-400 p-2 rounded-lg mb-5  w-full pl-3"
              placeholder="Enter Email"
            />
            <br></br>
            <label htmlFor="text">Send Me a Message</label>
            <textarea
              placeholder="Enter Message"
              name="message"
              rows={6}
              className="border-2 border-gray-400 w-full rounded-lg pl-3 pt-3"
            ></textarea>
            <br></br>
            <button
              type="submit"
              className="bg-teal-800 text-white hover:bg-gray-600 rounded-lg mt-4 "
            >
              Send a Message
            </button>
          </form>{" "}
          <span className="block text-green-800">{result}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
