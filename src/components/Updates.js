import React from "react";
import M1 from "../Assets/Updates/M1.png";
import M2 from "../Assets/Updates/M2.png";
import M3 from "../Assets/Updates/M3.png";
import RightArrow from "../Assets/RightArrow";

const Updates = () => {
  return (
    <div className="w-[1440px] h-[506px] mx-auto mt-8 mb-24">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[1110px] h-[124px] mx-auto text-center">
          <h1 className="font-semibold text-[36px] leading-[44px] text-[#4d4d4d]">
            Caring is the new marketing
          </h1>
          <p className="w-[628px] mx-auto font-normal text-[16px] leading-[24px] text-[#717171] mt-4">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <div className="flex justify-between items-center h-[366px] mt-8 gap-[16px]">
          {/* Card1 */}
          <div className="w-[368px] h-[366px] flex flex-col relative">
            <div>
              <img src={M1} alt="" />
            </div>
            <div
              className="w-[317px] h-[176px] p-[16px] rounded-[8px] bg-[#f5f7fa] absolute bottom-0 right-[26px] flex flex-col justify-center items-center"
              style={{ boxShadow: "0px 8px 16px 0px #ABBED166" }}
            >
              <p className="text-center font-semibold text-[20px] leading-[28px] text-[#717171]">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <div className="flex justify-center items-center mt-6">
                <p className="font-semibold text-[#4caf4f] text-[20px] leading-[28px] mr-2">
                  Readmore
                </p>
                <RightArrow />
              </div>
            </div>
          </div>
          {/* Card2 */}
          <div className="w-[368px] h-[366px] flex flex-col relative">
            <div>
              <img src={M2} alt="" />
            </div>
            <div
              className="w-[317px] h-[176px] p-[16px] rounded-[8px] bg-[#f5f7fa] absolute bottom-0 right-[26px] flex flex-col justify-center items-center"
              style={{ boxShadow: "0px 8px 16px 0px #ABBED166" }}
            >
              <p className="text-center font-semibold text-[20px] leading-[28px] text-[#717171]">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <div className="flex justify-center items-center mt-6">
                <p className="font-semibold text-[#4caf4f] text-[20px] leading-[28px] mr-2">
                  Readmore
                </p>
                <RightArrow />
              </div>
            </div>
          </div>

          {/* Card3 */}
          <div className="w-[368px] h-[366px] flex flex-col relative">
            <div>
              <img src={M3} alt="" />
            </div>
            <div
              className="w-[317px] h-[176px] p-[16px] rounded-[8px] bg-[#f5f7fa] absolute bottom-0 right-[26px] flex flex-col justify-center items-center"
              style={{ boxShadow: "0px 8px 16px 0px #ABBED166" }}
            >
              <p className="text-center font-semibold text-[20px] leading-[28px] text-[#717171]">
                Revamping the Membership Model with Triathlon Australia
              </p>
              <div className="flex justify-center items-center mt-6">
                <p className="font-semibold text-[#4caf4f] text-[20px] leading-[28px] mr-2">
                  Readmore
                </p>
                <RightArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
