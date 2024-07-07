import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Unlock from "./components/Unlock";
import Achievements from "./components/Achievements";
import Calender from "./components/Calender";
import Customer from "./components/Customer";
import Updates from "./components/Updates";

function App() {
  return (
    <div>
      <div className="bg-[#F5F7FA]">
        <Navbar />
        <Hero />
      </div>
      <Clients />
      <Community />
      <Unlock />
      <div className="bg-[#F5F7FA]">
        <Achievements/>
      </div>
      <Calender/>
      <div className="bg-[#F5F7FA]">
        <Customer/>
      </div>
      <Updates/>

    </div>
  );
}

export default App;
