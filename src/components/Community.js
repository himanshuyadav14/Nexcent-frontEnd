import React from "react";
import C1 from "../Assets/Community/C1.js";
import C2 from "../Assets/Community/C2.js";
import C3 from "../Assets/Community/C3.js";
import Rectangle from "../Assets/Community/Rectangle.js";

const Community = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-0">
      <div className="flex flex-col justify-center items-center md:w-[542px] mx-auto mt-10">
        <div className="text-[36px] font-semibold text-[#4d4d4d] leading-[44px] text-center dark:text-white">
          Manage your entire community
        </div>
        <div className="text-[36px] font-semibold text-[#4d4d4d] leading-[44px] mt-2 text-center dark:text-white">
          in a single system
        </div>
        <div className="font-normal text-[16px] leading-[24px] h-[24px] text-[#717171] mt-4 text-center dark:text-white">
          Who is Nexcent suitable for?
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-11">
        {/* Membership Organization */}
        <div className="flex flex-col items-center w-full md:w-[299px] h-[260px] relative mb-8 md:mb-0">
          <div className="relative">
            <C1 />
            <div className="absolute top-0 left-[50%] transform -translate-x-1/2 z-[-10]">
              <Rectangle />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-bold leading-[36px] text-[28px] text-[#4d4d4d] mt-4 dark:text-white">
              Membership
            </p>
            <p className="font-bold leading-[36px] text-[28px] text-[#4d4d4d] mb-4 dark:text-white">
              Organisations
            </p>
            <p className="font-normal text-[14px] leading-[20px] text-[#717171] text-center px-4 dark:text-white">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
        {/* National Associations */}
        <div className="flex flex-col items-center w-full md:w-[299px] h-[260px] relative mb-8 md:mb-0">
          <C2 />
          <div className="absolute top-0 left-[50%] transform -translate-x-1/2 z-[-10]">
            <Rectangle />
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-bold leading-[36px] text-[28px] text-[#4d4d4d] mt-4 dark:text-white">
              National
            </p>
            <p className="font-bold leading-[36px] text-[28px] text-[#4d4d4d] mb-4 dark:text-white">
              Associations
            </p>
            <p className="font-normal text-[14px] leading-[20px] text-[#717171] text-center px-4 dark:text-white">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
        {/* Clubs and Groups */}
        <div className="flex flex-col items-center w-full md:w-[299px] h-[260px] relative">
          <C3 />
          <div className="absolute top-0 left-[50%] transform -translate-x-1/2 z-[-10]">
            <Rectangle />
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-bold leading-[36px] text-[28px] text-[#4d4d4d] mt-4 dark:text-white">
              Clubs And
            </p>
            <p className="font-bold leading-[36px] text-[28px] text-[#4d4d4d] mb-4 dark:text-white">
              Groups
            </p>
            <p className="font-normal text-[14px] leading-[20px] text-[#717171] text-center px-4 dark:text-white">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Community;
