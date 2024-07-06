import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Unlock from "./components/Unlock";
import Achievements from "./components/Achievements";

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

    </div>
  );
}

export default App;
