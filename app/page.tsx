
"use client";

import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Education from "@/components/PersonalInfo";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { socialMedia } from "@/data";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip" id="home">
      
    <div className="absolute top-4 left-0 right-0 z-50 px-4 sm:px-10 flex flex-row justify-between items-center gap-3">

  {/* Left: Name */}
  <div className="flex flex-row items-center gap-3">
    <div className="px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-purple rounded-full shadow-lg text-sm sm:text-lg font-semibold tracking-wide">
      NARESH KUMAR.
    </div>
  </div>

  {/* Right: Social Media Icons */}
  <div className="flex gap-2">
    {socialMedia.map((info) => (
      <a
        key={info.id}
        href={info.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
      >
        <img src={info.img} alt="icon" width={16} height={16} />
      </a>
    ))}
  </div>
</div>

      {/* ✅ Main Content */}
      <div className="max-w-7xl w-full mt-0 sm:mt-0 lg:mt-36">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Approach />
        <Education/>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
