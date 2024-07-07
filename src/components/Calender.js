import React,{ useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Cal from "../Assets/Cal";

const Calender = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-[1440px] h-[500px] pb-10 pt-8 mx-auto dark:bg-[#121212]">
      <div className="flex justify-between items-center">
        <div className="w-[441px] h-[443px]">
          <Cal />
        </div>
        <div className="w-[670px] h-[308px]">
          <p className="font-semibold text-[36px] leading-[44px] text-[#4d4d4d] dark:text-white">
            How to design your site footer like we did
          </p>
          <p className="font-normal text-[14px] leading-[20px] text-[#717171] mt-4 dark:text-white">
            One event calendar shared across National, Regional and Club events
            to simplify your event experience. Allowing you to create waiting
            lists, share data capture, issue credential for course completion,
            apply smart purchasing rules and much more.
          </p>
          <button className="mt-4 text-white bg-[#4caf4f] w-[151] h-[52px] px-[10px] py-[26px] rounded-[4px] flex justify-center items-center">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calender;
