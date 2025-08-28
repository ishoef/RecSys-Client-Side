import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import RecentQueries from "./Recent-Queries/RecentQueries";
import WhyChoose from "./WhyChoose/WhyChoose";
import WhatYouGet from "./WhatYouGet/WhatYouGet";
import OurCommunity from "./OurCommunity/OurCommunity";
import HowItWorks from "./HowItWorks/HowItWorks";
import SmalHero from "../../Components/smalHero/smalHero";

const Home = () => {
  useEffect(() => {
    document.title = "Home | RecSyS";
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-gray-100">
      {/* Large Hero for desktop */}
      <div className="hidden lg:block z-0">
        <Hero />
      </div>

      {/* Small Hero for mobile */}
      <SmalHero />

      {/* Main Sections */}
      <RecentQueries />
      <WhyChoose />
      <WhatYouGet />
      <OurCommunity />
      <HowItWorks />
    </div>
  );
};

export default Home;
