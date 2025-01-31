import React from "react";
import Tesla from "../Assets/Tesla.png";
import Logo1 from "../Assets/ClientLogos/Logo1";
import Logo2 from "../Assets/ClientLogos/Logo2";
import Logo3 from "../Assets/ClientLogos/Logo3";
import Logo4 from "../Assets/ClientLogos/Logo4";
import Logo5 from "../Assets/ClientLogos/Logo5";
import Logo6 from "../Assets/ClientLogos/Logo6";
import RightArrow from "../Assets/RightArrow";
import "./Customer.css";

const Customer = () => {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 lg:px-0">
        <div className="md:w-[330px] md:h-[380px] mb-6 md:mb-0">
          <img src={Tesla} alt="" className="w-full h-full rounded-[8px]" />
        </div>
        
        <div className="w-full md:w-[748px] md:h-[324px] flex flex-col justify-center items-center md:ml-8">
          <div className="text-center md:text-left">
            <p className="font-[500px] text-[16px] leading-[24px] text-[#717171] dark:text-white">
              “We have enjoyed working with the JustGo system to setup and go
              live with our new membership platform. The initial effort to
              organise it along the lines of how our sport currently works was
              quick and relatively easy. The new system has already massively
              improved the time and effort it takes to setup and process member
              and club applications. It will help us to communicate with people
              in our sport in a much more effective way, and collect data to
              help us improve how our sport is governed.”
            </p>
            <h2 className="font-semibold text-[20px] leading-[28px] text-[#4caf4f] mt-4">
              Tim Smith
            </h2>
            <p className="font-normal text-[16px] text-[#89939E] leading-[24px] mt-2 dark:text-white">
              British Dragon Boat Racing Association
            </p>
          </div>
          <div className="flex justify-between items-center w-full mt-4">
            <div className="logo">
              <div className="logo-slide">
                <Logo1 />
                <Logo2 />
                <Logo3 />
                <Logo4 />
                <Logo5 />
                <Logo6 />
              </div>
              <div className="logo-slide">
                <Logo1 />
                <Logo2 />
                <Logo3 />
                <Logo4 />
                <Logo5 />
                <Logo6 />
              </div>
            </div>
            <div className="flex justify-between items-center w-full md:w-[223px] mt-4 md:mt-0">
              <a href="#" className="flex items-center">
                <p className="font-semibold text-[20px] leading-[28px] text-[#4caf4f] mr-2">
                  Meet all customers
                </p>
                <RightArrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
