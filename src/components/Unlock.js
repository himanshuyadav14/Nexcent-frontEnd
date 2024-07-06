import React from "react";
import Achievement from "../Assets/Achievement";

const Unlock = () => {
  return (
    <div className="w-[1440px] h-[433px] mt-16 mx-auto">
      <div className="flex justify-evenly items-center ">
        <div className="w-[442px] h-[433px]">
          <Achievement />
        </div>
        <div>
          <div className="w-[601px] h-[184px]">
            <div className="font-semibold text-[36px] leading-[44px] text-[#4d4d4d] mt-[-160px]">
              The unseen of spending three years at Pixelgrade
            </div>
            <div className="font-normal text-[14px] leading-[20px] text-[#717171] mt-8">
              When joining the JustGo Community, your success becomes our
              success. In other words, our Customer Success team will be on hand
              from day one to ensure we understand your requirements, share your
              goals and work with you for a smooth adoption of our software.
            </div>
          </div>

          <button className="mt-12 bg-[#4caf4f] rounded-[4px] px-[10px] py-[26px] w-[151px] h-[52px] text-white flex items-center justify-center">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
