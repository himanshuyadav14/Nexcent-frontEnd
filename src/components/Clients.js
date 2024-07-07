import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./Client.css"; // Import CSS file for animations
import Logo1 from "../Assets/ClientLogos/Logo1"; // Import SVG components
import Logo2 from "../Assets/ClientLogos/Logo2";
import Logo3 from "../Assets/ClientLogos/Logo3";
import Logo4 from "../Assets/ClientLogos/Logo4";
import Logo5 from "../Assets/ClientLogos/Logo5";
import Logo6 from "../Assets/ClientLogos/Logo6";
import Logo7 from "../Assets/ClientLogos/Logo7";

const Clients = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-[1440px] h-[190px] px-[144px] pt-[16px] mx-auto ${
        theme ? "dark" : ""
      }`}
    >
      <div className="flex flex-col justify-center items-center w-[1110px] mx-auto mb-[6px]">
        <div className="font-semibold text-3xl leading-10 text-gray-700 dark:text-white">
          Our Clients
        </div>
        <div className="font-normal text-base leading-6 text-gray-600 dark:text-white">
          We have been working with some Fortune 500+ clients
        </div>
      </div>

      <div className="w-[1152px] h-[98px] mx-auto logos">
        <div className="logos-slide">
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
          <Logo5 />
          <Logo6 />
          <Logo7 />
        </div>
        <div className="logos-slide">
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
          <Logo5 />
          <Logo6 />
          <Logo7 />
        </div>
      </div>
    </div>
  );
};

export default Clients;
