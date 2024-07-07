import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Cal from "../Assets/Cal";

const Calendar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-full mx-auto pt-8 pb-10 md:pb-16 dark:bg-[#121212]">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Calendar */}
          <div className="w-full md:w-[441px] h-[443px] mb-8 md:mb-0">
            <Cal />
          </div>
          {/* Text and Button */}
          <div className="w-full md:w-[670px]">
            <p className="font-semibold text-[24px] md:text-[36px] leading-[32px] md:leading-[44px] text-[#4d4d4d] dark:text-white">
              How to design your site footer like we did
            </p>
            <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#717171] mt-4 md:mt-6 dark:text-white">
              One event calendar shared across National, Regional and Club events
              to simplify your event experience. Allowing you to create waiting
              lists, share data capture, issue credential for course completion,
              apply smart purchasing rules and much more.
            </p>
            <button className="mt-4 md:mt-6 text-white bg-[#4caf4f] px-4 md:px-6 py-3 md:py-4 rounded-md flex justify-center items-center w-full md:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
