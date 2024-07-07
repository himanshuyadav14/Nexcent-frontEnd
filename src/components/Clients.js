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
    <div className={`max-w-[1440px] mx-auto px-4 ${theme === "dark" ? "dark" : ""}`}>
      <div className="w-full lg:w-[1110px] mx-auto py-4 lg:py-6 mb-6">
        <div className="font-semibold text-3xl lg:text-4xl leading-10 lg:leading-12 text-gray-700 dark:text-white text-center">
          Our Clients
        </div>
        <div className="font-normal text-base lg:text-lg leading-6 lg:leading-7 text-gray-600 dark:text-white text-center mt-2">
          We have been working with some Fortune 500+ clients
        </div>
      </div>

      <div className="w-full lg:w-[1152px] mx-auto logos">
        {/* Logos section */}
        <div className="logos-slide flex justify-center items-center">
          <Logo1 className="h-[80px] lg:h-[98px] mx-2" />
          <Logo2 className="h-[80px] lg:h-[98px] mx-2" />
          <Logo3 className="h-[80px] lg:h-[98px] mx-2" />
          <Logo4 className="h-[80px] lg:h-[98px] mx-2" />
          <Logo5 className="h-[80px] lg:h-[98px] mx-2" />
          <Logo6 className="h-[80px] lg:h-[98px] mx-2" />
          <Logo7 className="h-[80px] lg:h-[98px] mx-2" />
        </div>
        <div className="logos-slide flex justify-center items-center mt-4 lg:mt-0">
          <Logo1 className="h-[80px] lg:h-[98px] mx-2" />
          <Logo2 className="h-[80px] lg:h-[98px] mx-2" />
          <Logo3 className="h-[80px] lg:h-[98px] mx-2" />
          <Logo4 className="h-[80px] lg:h-[98px] mx-2" />
          <Logo5 className="h-[80px] lg:h-[98px] mx-2" />
          <Logo6 className="h-[80px] lg:h-[98px] mx-2" />
          <Logo7 className="h-[80px] lg:h-[98px] mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
