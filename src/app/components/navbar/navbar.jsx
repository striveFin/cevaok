"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuIcon, setIcon] = useState(false);

  const handleSmallerScreensNavigation = () => {
    setIcon(!menuIcon);
  };
  return (
    <header
      className="bg-gray-900 text-[#fff] w-full ease-in duration-400 
      fixed top-0 left-0 z-10"
    >
      <nav className="max-w-[1366] max-auto h-[100px] flex justify-between items-center p-4">
        <div>
          <Link href="/" onClick={handleSmallerScreensNavigation}>
            <span className="font-extrabold text-3xl md:text-2xl xl: text3xl uppercase">
              J.S | Painting
            </span>
          </Link>
        </div>

        {/* desktop screen */}
        <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-200">
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
            <Link href="/pages/about">About</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
            <Link href="/pages/contact">Contact</Link>
          </li>
        </ul>

        <div className="hidden md:flex ">
          <div className="flex ">
            <Link href="/pages/quote">
              <button
                className="mr-5 bg-[#CEFF00] text-slate-800 
        hover:bg-slate-800 hover:text-[#CEFF00] rounded-full uppercase font-bold px-8 py-2"
              >
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
        {/* mobile */}
        <div
          onClick={handleSmallerScreensNavigation}
          className="flex md:hidden"
        >
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-[#fff]" />
          ) : (
            <AiOutlineMenu size={25} className="text-[#fff]" />
          )}
        </div>
        {/* background */}
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center text-center items-center w-full h-screen bg-slate-800 text-white  ease-in duration-300"
              : "md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center text-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"
          }
        >
          {/* links */}
          <div className="w-full">
            <ul  className="uppercase font-bold text-2xl">
              <li
                onClick={handleSmallerScreensNavigation}
                className=" py-5 hover:text-[#fff] cursor-pointer"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className=" py-5 hover:text-[#fff] cursor-pointer"
              >
                <Link href="/pages/about">About</Link>
              </li>
              <li
                onClick={handleSmallerScreensNavigation}
                className=" py-5 hover:text-[#fff] cursor-pointer"
              >
                <Link href="/pages/contact">Contact</Link>
              </li>
            </ul>
            <div className="flex flex-col justify-center items-center mt-16">
              <Link href="Request a Quote">
              <button className="bg-[#CEFF00] text-slate-800 rounded-full uppercase font-bold py-3 w-[250px] mb-5">Request a Quote</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
