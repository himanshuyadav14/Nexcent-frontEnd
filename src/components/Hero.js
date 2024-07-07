import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Illustration from "../Assets/Illustration";
import Dots from "../Assets/Dots";
import Illustration2 from "../Assets/Illustration2.png";
import Illustration3 from "../Assets/Illustration3.png";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const screens = [
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      text: "Where to grow your business as a photographer: site or social media?",
      illustration: <Illustration className="w-[391px] h-[407px]" />,
    },
    {
      title: "Discover new trends",
      subtitle: "for 2024",
      text: "Explore the latest trends and innovations in photography.",
      illustration: (
        <img
          src={Illustration2}
          alt="Illustration 2"
          className="w-[391px] h-[407px]"
        />
      ),
    },
    {
      title: "Build your portfolio",
      subtitle: "with our help",
      text: "Learn how to showcase your work effectively to attract clients.",
      illustration: (
        <img
          src={Illustration3}
          alt="Illustration 3"
          className="w-[391px] h-[407px]"
        />
      ),
    },
  ];

  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [screens.length]);

  return (
    <div className="relative h-[599px] max-w-[1440px] mx-auto text-black bg-[#F5F7FA] dark:bg-[#263238] overflow-hidden">
      {/* Content Wrapper */}
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Left and Right Sections */}
        <div className="flex flex-col lg:flex-row justify-around items-center w-full">
          {/* Left Side */}
          <div className="w-full lg:w-[657px] h-[276px] gap-[32px] lg:gap-0 lg:mr-8">
            <div>
              <h1 className="font-semibold text-3xl lg:text-[64px] text-[#4d4d4d] dark:text-white leading-[40px] lg:leading-[76px]">
                {screens[activeScreen].title}
              </h1>
              <h2 className="font-semibold text-3xl lg:text-[64px] text-[#4caf4f] leading-[40px] lg:leading-[76px]">
                {screens[activeScreen].subtitle}
              </h2>
            </div>
            <p className="text-sm lg:text-base text-[#717171] dark:text-white leading-[20px] lg:leading-[24px] mt-4 lg:mt-[30px]">
              {screens[activeScreen].text}
            </p>
            <button className="w-24 lg:w-[128px] h-10 lg:h-[52px] px-4 lg:px-[32px] py-2 lg:py-[14px] mt-4 lg:mt-[20px] rounded-[4px] bg-[#4caf4f] text-white">
              Register
            </button>
          </div>

          {/* Right Side (hidden in mobile and tab) */}
          <div className="hidden lg:flex justify-center items-center">
            {screens[activeScreen].illustration}
          </div>
        </div>
      </div>

      {/* Absolute Positioned Dots */}
      <div className="absolute bottom-4 flex justify-center w-full">
        <Dots
          screens={screens}
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
        />
      </div>
    </div>
  );
};

export default Hero;
