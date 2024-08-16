import React from "react";
import Navbar from "./Components/Navbar";
import WelcomeMessage from "./Components/WelcomeMessage";
import OurMission from "./Components/OurMission";
import Features from "./Components/Features";
import ContactUs from "./Components/ContactUs";

function HomePage() {
  return (
    <div className="flex-grow flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <WelcomeMessage />
      </main>
      <OurMission />
      <Features />
      <ContactUs />
    </div>
  );
}

export default HomePage;