import React from "react";
import C1 from "../Assets/Community/C1.js";
import C2 from "../Assets/Community/C2.js";
import C3 from "../Assets/Community/C3.js";
import Rectangle from "../Assets/Community/Rectangle.js";

const Community = () => {
  return (
    <div className="w-[1440px] h-[416px] mt-4 mx-auto">
      <div className="flex flex-col justify-center items-center w-[542px] h-[120px] mx-auto">
        <div className="text-[36px] font-semibold text-[#4d4d4d] leading-[44px]">
          Manage your entire community
        </div>
        <div className="text-[36px] font-semibold text-[#4d4d4d] leading-[44px] mt-2">
          in a single system
        </div>
        <div className="font-normal text-[16px] leading-[24px] h-[24px] text-[#717171] mt-4">
          Who is Nexcent suitable for?
        </div>
      </div>

      <div className="h-[280px] flex justify-between items-center mt-11">
        {/* Membership Organization */}
        <div className="flex flex-col items-center w-[299px] h-[260px] relative">
          <C1 />
          <div className="absolute top-[5px] left-[140px] z-[-10]">
            <Rectangle />
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-bold leading-[36px] text-[28px] text-[#4d4d4d] mt-4">
              Membership
            </p>
            <p className="font-bold leading-[36px] text-[28px] text-[#4d4d4d] mb-4">
              Organisations
            </p>
            <p className="font-normal text-[14px] leading-[20px] text-[#717171] text-center">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
        {/* National Associations */}
        <div className="flex flex-col items-center w-[299px] h-[260px] relative">
          <C2 />
          <div className="absolute top-[5px] left-[140px] z-[-10]">
            <Rectangle />
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-bold leading-[36px] text-[28px] text-[#4d4d4d] mt-4">
              National
            </p>
            <p className="font-bold leading-[36px] text-[28px] text-[#4d4d4d] mb-4">
              Associations
            </p>
            <p className="font-normal text-[14px] leading-[20px] text-[#717171] text-center">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
        {/* Clubs and Groups */}
        <div className="flex flex-col items-center w-[299px] h-[260px] relative">
          <C3 />
          <div className="absolute top-[5px] left-[140px] z-[-10]">
            <Rectangle />
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-bold leading-[36px] text-[28px] text-[#4d4d4d] mt-4">
              Clubs And
            </p>
            <p className="font-bold leading-[36px] text-[28px] text-[#4d4d4d] mb-4">
              Groups
            </p>
            <p className="font-normal text-[14px] leading-[20px] text-[#717171] text-center">
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
