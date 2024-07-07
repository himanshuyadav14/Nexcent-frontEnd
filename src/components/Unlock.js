import React from "react";
import Achievement from "../Assets/Achievement";

const Unlock = () => {
  return (
    <div className="w-full mx-auto dark:bg-[#263238]">
      <div className="max-w-[1440px] mx-auto px-[48px] pt-[64px] pb-[32px]">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-[442px] md:h-[433px] mb-[32px] md:mb-0">
            <Achievement />
          </div>
          <div className="md:ml-[64px] md:w-[601px]">
            <div className="font-semibold text-[36px] leading-[44px] text-[#4d4d4d] dark:text-white mb-[24px]">
              The unseen of spending three years at Pixelgrade
            </div>
            <div className="font-normal text-[14px] leading-[20px] text-[#717171] dark:text-white mb-[24px]">
              When joining the JustGo Community, your success becomes our
              success. In other words, our Customer Success team will be on hand
              from day one to ensure we understand your requirements, share your
              goals and work with you for a smooth adoption of our software.
            </div>
            <button className="bg-[#4caf4f] rounded-[4px] px-[10px] py-[12px] md:py-[26px] w-[100px] md:w-[151px] h-[36px] md:h-[52px] text-white flex items-center justify-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
