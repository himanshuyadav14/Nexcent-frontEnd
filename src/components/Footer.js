import React, { useContext } from "react";
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
    <div className="w-full mx-auto pt-4 pb-8 px-4 md:px-0 dark:bg-[#121212]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 mt-8">
          {/* Company Info */}
          <div className="flex flex-col items-start w-full md:w-[350px]">
            <FooterLogo />
            <div className="font-normal text-sm text-[#f5f7fa] mt-6">
              <p>Copyright © 2020 Landify UI Kit.</p>
              <p>All rights reserved</p>
            </div>
            <div className="flex justify-center items-center w-full md:w-[176px] mt-6 gap-4">
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
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex flex-col gap-4">
              <div className="text-white font-semibold text-lg leading-6">
                Company
              </div>
              <div className="text-[#f5f7fa] font-normal text-sm leading-5 flex flex-col gap-2">
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
            <div className="flex flex-col gap-4">
              <div className="text-white font-semibold text-lg leading-6">
                Support
              </div>
              <div className="text-[#f5f7fa] font-normal text-sm leading-5 flex flex-col gap-2">
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
            <div className="flex flex-col gap-4">
              <div className="text-white font-semibold text-lg leading-6">
                Stay up to date
              </div>
              <div className="text-[#f5f7fa] font-normal text-sm leading-5 flex flex-col gap-2">
                <Email />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
