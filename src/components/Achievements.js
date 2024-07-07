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
    <div className="w-full mx-auto dark:bg-[#121212]">
      <div className="max-w-[1440px] mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row justify-center items-center" ref={achievementsRef}>
          {/* Text Section */}
          <div className="md:w-[540px] mb-8 md:mb-0 text-center md:text-left">
            <p className="font-semibold text-[24px] leading-[32px] text-[#4d4d4d] dark:text-white">
              Helping a local
            </p>
            <p className="font-semibold text-[24px] leading-[32px] text-[#4caf4f]">
              business reinvent itself
            </p>
            <p className="font-normal text-[16px] leading-[24px] text-[#717171] mt-4 dark:text-white">
              We reached here with our dedication and hard work.
            </p>
          </div>

          {/* Image and Counts Section */}
          <div className="md:ml-12 md:w-[720px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Members */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6 md:mb-0">
                <img src={A1} alt="Members Icon" className="w-[30px] md:w-[45px]" />
                <div className="text-center md:text-left">
                  <div className="font-bold text-[24px] leading-[36px] text-[#18191f] dark:text-white">
                    {memberCount.toLocaleString()}
                  </div>
                  <div className="font-normal text-[14px] leading-[20px] text-[#717171] dark:text-white">
                    Members
                  </div>
                </div>
              </div>

              {/* Bookings */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6 md:mb-0">
                <img src={A3} alt="Bookings Icon" className="w-[30px] md:w-[45px]" />
                <div className="text-center md:text-left">
                  <div className="font-bold text-[24px] leading-[36px] text-[#18191f] dark:text-white">
                    {bookingCount.toLocaleString()}
                  </div>
                  <div className="font-normal text-[14px] leading-[20px] text-[#717171] dark:text-white">
                    Bookings
                  </div>
                </div>
              </div>

              {/* Clubs */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6 md:mb-0">
                <img src={A2} alt="Clubs Icon" className="w-[30px] md:w-[45px]" />
                <div className="text-center md:text-left">
                  <div className="font-bold text-[24px] leading-[36px] text-[#18191f] dark:text-white">
                    {clubCount.toLocaleString()}
                  </div>
                  <div className="font-normal text-[14px] leading-[20px] text-[#717171] dark:text-white">
                    Clubs
                  </div>
                </div>
              </div>

              {/* Payments */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                <img src={A4} alt="Payments Icon" className="w-[30px] md:w-[45px]" />
                <div className="text-center md:text-left">
                  <div className="font-bold text-[24px] leading-[36px] text-[#18191f] dark:text-white">
                    {paymentCount.toLocaleString()}
                  </div>
                  <div className="font-normal text-[14px] leading-[20px] text-[#717171] dark:text-white">
                    Payments
                  </div>
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
