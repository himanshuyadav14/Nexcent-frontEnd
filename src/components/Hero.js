import React, { useState, useEffect } from "react";
import Illustration from "./Illustration";

import Dots from "./Dots";

import Illustration2 from "./Illustration2.png";
import Illustration3 from "./Illustration3.png";

const Hero = () => {
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
    <div className="relative h-[599px] max-w-[1440px] mx-auto text-black bg-[#F5F7FA]">
      {/* Content Wrapper */}
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Left and Right Sections */}
        <div className="flex justify-around items-center w-full">
          {/* Left Side */}
          <div className="w-[657px] h-[276px] gap-[32px]">
            <div>
              <h1 className="font-[600px] text-[64px] text-[#4d4d4d] leading-[76px]">
                {screens[activeScreen].title}
              </h1>
              <h2 className="font-[600px] text-[64px] text-[#4caf4f] leading-[76px]">
                {screens[activeScreen].subtitle}
              </h2>
            </div>

            <p className="font-[400px] text-[16px] text-[#717171] leading-[24px] mt-[30px]">
              {screens[activeScreen].text}
            </p>

            <button className="w-[128px] h-[52px] px-[32px] py-[14px] mt-[20px] rounded-[4px] bg-[#4caf4f] text-white">
              Register
            </button>
          </div>

          {/* Right Side */}
          <div className="flex justify-center items-center">
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
