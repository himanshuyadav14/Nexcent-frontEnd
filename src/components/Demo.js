import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import RightArrow from "../Assets/RightArrow";

const Demo = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-full mx-auto px-4 pt-10 pb-10">
      <div className="max-w-[1440px] h-[300px] mx-auto">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="max-w-[887px] mx-auto mt-4 px-4">
            <p className="font-semibold text-4xl md:text-5xl lg:text-6xl leading-[76px] text-[#4d4d4d] dark:text-white">
              Pellentesque suscipit fringilla libero eu.
            </p>
          </div>
          <div className="mt-8">
            <button className="text-white bg-[#4caf4f] px-6 md:px-10 py-4 md:py-6 rounded-[4px] flex items-center">
              Give a Demo
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004"
                  stroke="white"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
