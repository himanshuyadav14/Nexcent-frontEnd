import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";

function App() {
  return (
    <div>
      <div className="bg-[#F5F7FA]">
        <Navbar />
        <Hero />
      </div>
      <Clients />
      <Community />
    </div>
  );
}

export default App;
