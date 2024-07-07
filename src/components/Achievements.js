import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import A1 from "../Assets/Counts/A1.png";
import A2 from "../Assets/Counts/A2.png";
import A3 from "../Assets/Counts/A3.png";
import A4 from "../Assets/Counts/A4.png";

const Achievements = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [memberCount, setMemberCount] = useState(0);
  const [clubCount, setClubCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);
  const [paymentCount, setPaymentCount] = useState(0);

  // Define the target values for counts
  const targetCounts = {
    members: 2245341,
    clubs: 46328,
    bookings: 828867,
    payments: 1926436,
  };

  const achievementsRef = useRef(null);
  const isAchievementsVisible = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isAchievementsVisible.current && achievementsRef.current) {
        const top = achievementsRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight) {
          isAchievementsVisible.current = true;

          // Start animations when achievements section comes into view
          animateCount(targetCounts.members, setMemberCount);
          animateCount(targetCounts.clubs, setClubCount);
          animateCount(targetCounts.bookings, setBookingCount);
          animateCount(targetCounts.payments, setPaymentCount);
        }
      }
    };

    const animateCount = (targetValue, setStateFunc) => {
      let currentCount = 0;
      const increment = Math.ceil(targetValue / 100); // Adjust increment based on desired animation speed

      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetValue) {
          clearInterval(interval);
          currentCount = targetValue;
        }
        setStateFunc(currentCount);
      }, 20); // Adjust the interval based on desired smoothness

      // Clean up intervals on component unmount
      return () => {
        clearInterval(interval);
      };
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    // Clean up scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[1440px] h-[288px] mx-auto dark:bg-[#121212]">
      <div className="flex justify-evenly items-center h-full" ref={achievementsRef}>
        {/* Left */}
        <div className="w-[540px] h-[120px]">
          <p className="font-semibold text-[36px] leading-[44px] text-[#4d4d4d] dark:text-white">
            Helping a local
          </p>
          <p className="font-semibold text-[36px] leading-[44px] text-[#4caf4f]">
            business reinvent itself
          </p>
          <p className="font-normal text-[16px] leading-[24px] text-[#717171] mt-4 dark:text-white">
            we reached here with our dedication and hardwork
          </p>
        </div>

        {/* Right */}
        <div className="w-[540px] h-[160px]">
          <div className="flex justify-center items-center h-[60px]">
            {/* First row of achievements */}
            <div className="flex justify-center items-center w-[255px] gap-3">
              <div>
                <img src={A1} alt="" className="w-[45px]" />
              </div>
              <div>
                <div className="font-bold text-[28px] leading-[36px] text-[#18191f] dark:text-white">
                  {memberCount.toLocaleString()}
                </div>
                <div className="font-normal text-[16px] leading-[24px] text-[#717171] dark:text-white">
                  Members
                </div>
              </div>
            </div>
            {/* Second row of achievements */}
            <div className="flex justify-center items-center w-[255px] gap-3">
              <div>
                <img src={A2} alt="" className="w-[45px]" />
              </div>
              <div>
                <div className="font-bold text-[28px] leading-[36px] text-[#18191f] dark:text-white">
                  {clubCount.toLocaleString()}
                </div>
                <div className="font-normal text-[16px] leading-[24px] text-[#717171] dark:text-white">
                  Clubs
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10 h-[60px]">
            {/* Third row of achievements */}
            <div className="flex justify-center items-center w-[255px] gap-3">
              <div>
                <img src={A3} alt="" className="w-[45px]" />
              </div>
              <div>
                <div className="font-bold text-[28px] leading-[36px] text-[#18191f] dark:text-white">
                  {bookingCount.toLocaleString()}
                </div>
                <div className="font-normal text-[16px] leading-[24px] text-[#717171] dark:text-white">
                  Bookings
                </div>
              </div>
            </div>
            {/* Fourth row of achievements */}
            <div className="flex justify-center items-center w-[255px] gap-3">
              <div>
                <img src={A4} alt="" className="w-[45px]" />
              </div>
              <div>
                <div className="font-bold text-[28px] leading-[36px] text-[#18191f] dark:text-white">
                  {paymentCount.toLocaleString()}
                </div>
                <div className="font-normal text-[16px] leading-[24px] text-[#717171] dark:text-white">
                  Payments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
