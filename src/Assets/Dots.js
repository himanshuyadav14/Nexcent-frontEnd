import React from "react";

const Dots = ({ screens, activeScreen, setActiveScreen }) => {
  return (
    <div className="flex justify-center absolute bottom-4 w-full">
      {screens.map((_, index) => (
        <button
          key={index}
          className={`w-4 h-4 rounded-full mx-2 ${
            index === activeScreen ? "bg-[#4caf4f]" : "bg-gray-300"
          }`}
          onClick={() => setActiveScreen(index)}
        ></button>
      ))}
    </div>
  );
};

export default Dots;
