// Navbar.js
import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import moon from "../Assets/dark theme icon/moon.png";
import sun from "../Assets/dark theme icon/sun.png";
import Logo from "../Assets/Logo";
import FooterLogo from "../Assets/FooterLogo";
import "./DarkMode.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <nav
        className="navbar flex justify-between items-center h-[84px] max-w-[1440px] mx-auto text-black bg-[#F5F7FA] dark:bg-[#121212]"
        role="navigation"
      >
        {theme === "light" ? <Logo /> : <FooterLogo />}

        <ul
          className={`flex lg:flex ${showMenu ? "block" : "hidden"} lg:block`}
        >
          <li className="p-4">
            <a href="#home" className="dark:text-[#4caf4f]">
              Home
            </a>
          </li>
          <li className="p-4">
            <a href="#services" className="dark:text-[#4caf4f]">
              Service
            </a>
          </li>
          <li className="p-4">
            <a href="#feature" className="dark:text-[#4caf4f]">
              Feature
            </a>
          </li>
          <li className="p-4">
            <a href="#product" className="dark:text-[#4caf4f]">
              Product
            </a>
          </li>
          <li className="p-4">
            <a href="#testimonial" className="dark:text-[#4caf4f]">
              Testimonial
            </a>
          </li>
          <li className="p-4">
            <a href="#faq" className="dark:text-[#4caf4f]">
              FAQ
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4 lg:space-x-0">
          <img
            src={theme === "dark" ? sun : moon}
            alt="Theme Icon"
            onClick={toggleTheme}
            id="icon"
            className="cursor-pointer"
          />
          <a href="#login" className="p-4 text-[#4caf4f] hidden lg:block">
            Login
          </a>
          <button
            className={`p-4 w-[91px] h-[40px] flex items-center text-white rounded-[6px] bg-[#4caf4f] leading-[20px] hidden lg:flex lg:items-center`}
          >
            Sign up
          </button>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-black dark:text-white dark:border-white"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2 6h20M2 12h20M2 18h20"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sliding menu */}
      <div
        className={`fixed inset-y-0 right-0 bg-white dark:bg-[#1a1a1b] z-50 transform transition-transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "75%" }}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-500 dark:text-white hover:text-black dark:hover:text-gray-200"
            onClick={closeMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="text-black dark:text-white">
          <li className="p-4">
            <a href="#home" className="dark:text-[#4caf4f]">
              Home
            </a>
          </li>
          <li className="p-4">
            <a href="#services" className="dark:text-[#4caf4f]">
              Service
            </a>
          </li>
          <li className="p-4">
            <a href="#feature" className="dark:text-[#4caf4f]">
              Feature
            </a>
          </li>
          <li className="p-4">
            <a href="#product" className="dark:text-[#4caf4f]">
              Product
            </a>
          </li>
          <li className="p-4">
            <a href="#testimonial" className="dark:text-[#4caf4f]">
              Testimonial
            </a>
          </li>
          <li className="p-4">
            <a href="#faq" className="dark:text-[#4caf4f]">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
