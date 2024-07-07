import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Unlock from "./components/Unlock";
import Achievements from "./components/Achievements";
import Calender from "./components/Calender";
import Customer from "./components/Customer";
import Updates from "./components/Updates";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import {ThemeContext } from "./ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme == "dark" ? "dark" : ""}`}>
      <div className="bg-[#F5F7FA] dark:bg-[#121212]">
        <Navbar />
      </div>
      <div className="bg-[#F5F7FA] dark:bg-[#263238]">
        <Hero />
      </div>
      <div className="bg-[#fff] dark:bg-[#121212]">
        <Clients />
        <Community />
      </div>
      <div className="dark:bg-[#263238]">
      <Unlock />
      </div>
      <div className="bg-[#F5F7FA] dark:bg-[#121212]">
        <Achievements />
      </div>
      <div className="dark:bg-[#121212]">
        <Calender />
      </div>
      <div className="bg-[#F5F7FA] dark:bg-[#263238]">
        <Customer />
      </div>
      <div className="dark:bg-[#263238]">
        <Updates />
      </div>
      <div className="bg-[#F5F7FA] dark:bg-[#121212]">
        <Demo />
      </div>
      <div className="bg-[#263238] dark:bg-[#121212]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
