import React,{useContext}from "react";
import { ThemeContext } from "../ThemeContext";
import FooterLogo from "../Assets/FooterLogo";
import Insta from "../Assets/SocialMedia/Insta";
import Ball from "../Assets/SocialMedia/Ball";
import Twitter from "../Assets/SocialMedia/Twitter";
import Youtube from "../Assets/SocialMedia/Youtube";
import Email from "../Assets/Email";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-[1440px] h-[328px] mx-auto pt-4 dark:bg-[#121212]">
      <div className="flex justify-between items-center mt-8">
        {/* Company Info */}
        <div className="flex flex-col justify-start items-start w-[350px] h-[190px]">
          <FooterLogo />
          <div className="font-normal text-[14px] leading-[20px] text-[#f5f7fa] mt-10">
            <p>Copyright © 2020 Landify UI Kit.</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex justify-center items-center w-[176px] h-[32px] mt-10 gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Insta />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Ball />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Youtube />
            </a>
          </div>
        </div>
        {/* Company Links */}
        <div className="flex justify-between items-start w-[635px] h-[200px]">
          <div className="flex flex-col gap-[24px]">
            <div className="text-white font-semibold text-[20px] leading-[28px]">
              Company
            </div>
            <div className="text-[#f5f7fa] font-normal text-[14px] leading-[20px] flex flex-col gap-[12px]">
              <a href="#" className="hover:underline">
                About us
              </a>
              <a href="#" className="hover:underline">
                Blog
              </a>
              <a href="#" className="hover:underline">
                Contact us
              </a>
              <a href="#" className="hover:underline">
                Pricing
              </a>
              <a href="#" className="hover:underline">
                Testimonials
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="text-white font-semibold text-[20px] leading-[28px]">
              Support
            </div>
            <div className="text-[#f5f7fa] font-normal text-[14px] leading-[20px] flex flex-col gap-[12px]">
              <a href="#" className="hover:underline">
                Help Center
              </a>
              <a href="#" className="hover:underline">
                Terms Of Service
              </a>
              <a href="#" className="hover:underline">
                Legal
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Status
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-[24px]">
            <div className="text-white font-semibold text-[20px] leading-[28px]">
              Stay up to date
            </div>
            <div className="text-[#f5f7fa] font-normal text-[14px] leading-[20px] flex flex-col gap-[12px]">
              <Email />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
