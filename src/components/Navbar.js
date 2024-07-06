import React from "react";
import Logo from "../Assets/Logo"

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-[84px] max-w-[1440px] mx-auto text-black bg-[#F5F7FA]"
      role="navigation"
    >
      <Logo/>

      <ul className="flex">
        <li className="p-4">
          <a href="#home">Home</a>
        </li>
        <li className="p-4">
          <a href="#services">Service</a>
        </li>
        <li className="p-4">
          <a href="#feature">Feature</a>
        </li>
        <li className="p-4">
          <a href="#product">Product</a>
        </li>
        <li className="p-4">
          <a href="#testimonial">Testimonial</a>
        </li>
        <li className="p-4">
          <a href="#faq">FAQ</a>
        </li>
      </ul>
      <div className="flex items-center">
        <a href="#login" className="p-4 text-[#28CB8B]">
          Login
        </a>
        <button className="p-4 w-[91px] h-[40px] flex items-center text-white rounded-[6px] bg-[#4caf4f] leading-[20px]">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
