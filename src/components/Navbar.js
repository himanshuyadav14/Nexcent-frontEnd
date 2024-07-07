// Navbar.js
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import moon from "../Assets/dark theme icon/moon.png";
import sun from "../Assets/dark theme icon/sun.png";
import Logo from "../Assets/Logo";
import FooterLogo from "../Assets/FooterLogo";
import "./DarkMode.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <nav
        className="navbar flex justify-between items-center h-[84px] max-w-[1440px] mx-auto text-black bg-[#F5F7FA] dark:bg-[#121212]"
        role="navigation"
      >
        {theme=='light' ? <Logo /> : <FooterLogo/>}

        <ul className="flex">
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
        <div className="flex items-center">
          <img
            src={theme === 'dark' ? sun : moon}
            alt="Theme Icon"
            onClick={toggleTheme}
            id="icon"
            className="cursor-pointer"
          />
          <a href="#login" className="p-4 text-[#4caf4f]">
            Login
          </a>
          <button className="p-4 w-[91px] h-[40px] flex items-center text-white rounded-[6px] bg-[#4caf4f] leading-[20px]">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
