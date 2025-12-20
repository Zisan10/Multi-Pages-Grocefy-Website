import React, { useEffect, useState } from "react";

import { IoIosHeart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 ${
        isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]" : " "
      }`}>
      <nav className="max-w-[1200px] px-10 mx-auto mb-3 md:h-[14vh] h-[12vh] flex justify-between items-center">
        {/* logo  */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>
        {/* desktop menue  */}
        <ul className="md:flex item-center gap-x-15 hidden">
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider hover:text-orange-500 transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider hover:text-orange-500 transition-colors">
              Process
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider hover:text-orange-500 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Nav action  */}
        <div className="flex items-center gap-x-5">
          {/* input field  */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[6vh] px-3 focus:outline-none"
            />
            <button className="bg-orange-500 h-10 w-10 flex justify-center items-center text-white rounded-full cursor-pointer">
              <IoSearch />
            </button>
          </div>
          <a href="" className="text-zinc-800 text-2xl">
            <IoIosHeart />
          </a>
          <a href="" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>
          {/* Hamburger  */}
          <a
            href="#"
            className="text-zinc-800 text-2xl md:hidden"
            onClick={toggleMenu}>
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>
        {/* mobile menu  */}
        <ul
          className={`flex flex-col item-center text-center shadow-2xl gap-y-10 p-5 gap-x-15 md:hidden absolute bg-orange-500/15 backdrop-blur-xl rounded-xl top-20 -left-full transform -translate-x-1/2 transition-all duration-500 ${
            showMenu ? "left-1/2" : ""
          }`}>
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider hover:text-orange-500 transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider hover:text-orange-500 transition-colors">
              Process
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider hover:text-orange-500 transition-colors">
              Contact
            </a>
          </li>
          <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[6vh] px-3 focus:outline-none"
            />
            <button className="bg-orange-500 h-10 w-10 flex justify-center items-center text-white rounded-full cursor-pointer">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
