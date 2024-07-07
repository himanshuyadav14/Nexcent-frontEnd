import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import M1 from "../Assets/Updates/M1.png";
import M2 from "../Assets/Updates/M2.png";
import M3 from "../Assets/Updates/M3.png";
import RightArrow from "../Assets/RightArrow";

const Updates = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-full mx-auto pt-10 pb-20 md:pb-30 dark:bg-[#263238]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center">
          <div className="max-w-[1110px] text-center">
            <h1 className="font-semibold text-[36px] md:text-[48px] leading-[44px] text-[#4d4d4d] dark:text-white">
              Caring is the new marketing
            </h1>
            <p className="max-w-[768px] mx-auto mt-4 font-normal text-[16px] md:text-[18px] leading-[24px] text-[#717171] dark:text-white">
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-8 gap-8">
            {/* Card1 */}
            <div className="w-full md:w-[368px] h-[366px] relative">
              <img src={M1} alt="" className="w-full h-full object-cover rounded-[8px]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-[16px] rounded-b-[8px] bg-[#f5f7fa] shadow-md">
                <p className="text-center font-semibold text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#717171]">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <div className="flex justify-center items-center mt-2 md:mt-4">
                  <a href="#" className="flex items-center">
                    <p className="font-semibold text-[#4caf4f] text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] mr-2">
                      Read More
                    </p>
                    <RightArrow />
                  </a>
                </div>
              </div>
            </div>
            {/* Card2 */}
            <div className="w-full md:w-[368px] h-[366px] relative mt-8 md:mt-0">
              <img src={M2} alt="" className="w-full h-full object-cover rounded-[8px]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-[16px] rounded-b-[8px] bg-[#f5f7fa] shadow-md">
                <p className="text-center font-semibold text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#717171]">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </p>
                <div className="flex justify-center items-center mt-2 md:mt-4">
                  <a href="#" className="flex items-center">
                    <p className="font-semibold text-[#4caf4f] text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] mr-2">
                      Read More
                    </p>
                    <RightArrow />
                  </a>
                </div>
              </div>
            </div>
            {/* Card3 */}
            <div className="w-full md:w-[368px] h-[366px] relative mt-8 md:mt-0">
              <img src={M3} alt="" className="w-full h-full object-cover rounded-[8px]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-[16px] rounded-b-[8px] bg-[#f5f7fa] shadow-md">
                <p className="text-center font-semibold text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#717171]">
                  Revamping the Membership Model with Triathlon Australia
                </p>
                <div className="flex justify-center items-center mt-2 md:mt-4">
                  <a href="#" className="flex items-center">
                    <p className="font-semibold text-[#4caf4f] text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] mr-2">
                      Read More
                    </p>
                    <RightArrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
