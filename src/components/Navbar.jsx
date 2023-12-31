import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constant";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full font-poppins backdrop-blur-sm bg-white/28 fixed z-[99]">
      <div className=" flex container  mx-auto px-6 py-4 items-center justify-between  md:px-0">
        <img src={logo} alt="logo" />
        <ul className="hidden sm:flex items-center gap-4">
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className="text-white hover:text-lightpurple"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex">
          <Button title="Connect your Wallet" />
        </div>
        {/* mobile menu */}
        <div className=" flex flex-1 justify-end items-center sm:hidden">
          {/* mobile menu icon */}
          <img
            // {/* if toggle is turn on then show close icon otherwise show menu*/}
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[20px]  object-contain"
            // setToggle prev and then not prev
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : " hidden"
            } p-6 bg-button-gradient absolute top-20 right-0 mx-6 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end p-2 mx-auto flex-col flex-1 ">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-primary hover:text-purple-900 `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
