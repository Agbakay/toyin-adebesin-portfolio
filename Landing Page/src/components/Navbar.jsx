import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  //
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false); // Close menu on route change
  }, [location.pathname]);
  //

  const openMenu = document.getElementById("menu");
  const navLinks = document.querySelector(".nav-links");
  const NavBar = document.querySelector(".nav-bar");
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
    }
  }; //

  window.onclick = (e) => {
    if (e.target !== openMenu && e.target !== navLinks) {
      navLinks.style.display = "none";
      setIsOpen(false);
    }
  };
  //
  //
  //
  return (
    <div className="  w-full bg-transparent absolute na-bar ">
      <nav className="flex align-center justify-between px-[8%] py-8">
        {/* ----------------- */}
        {/* Logo */}
        {/* ------------------ */}
        <div className="logo text-white">
          <h1 className=" bold uppercase font-semibold tracking-wider text-2xl">
            <a href="/">Toyin Adebesin</a>
          </h1>
          <p className=" text-[13px] uppercase font-medium">
            Financial Risk & AML Analyst
          </p>
        </div>

        {/*   --------------- */}
        {/* Hamburger Mobile Menu */}
        {/* ---------------------- */}

        <div
          className="nav-bar px-4 cursor-pointer md:hidden h-fit p-1 border-2 rounded-md bg-gray-600 text-white"
          id="menu"
          onClick={open}
        >
          Menu
        </div>

        {/* ------------------- */}
        {/* Mobile Menu */}
        {/* ------------------- */}

        <ul className="  absolute top-20 right-0 flex-col py-3 px-5  gap-3 align-center justify-between rounded-lg border-white border-2 nav-links bg-gray-200 w-[250px]">
          <li className="hover:bg-white hover:p-2 rounded p-2">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="hover:bg-white hover:p-2 rounded p-2">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="hover:bg-white hover:p-2 rounded p-2">
            <NavLink to={"/services"}>Projects</NavLink>
          </li>
          <li className="hover:bg-white hover:p-2 rounded p-2">
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
          </li>
        </ul>

        {/* ------------------- */}
        {/* Desktop Menu */}
        {/* ------------------- */}

        <ul className="hidden md:flex gap-10 align-center justify-between text-white">
          <li className=" hover:text-cyan-700">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className=" hover:text-cyan-700">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className=" hover:text-cyan-700">
            <NavLink to={"/services"}>Projects</NavLink>
          </li>
          <li className=" hover:text-cyan-700">
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
