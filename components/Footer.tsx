"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContactClick = () => {
    if (isMobile) {
      window.location.href = "mailto:nareshk874090@gmail.com";
    } else {
      window.open("https://www.linkedin.com/in/nareshk8740/", "_blank");
    }
  };

  return (
    <footer className="w-full text-white py-8 px-4 md:px-[7vw] bg-transparent" id="footer">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
        {/* Logo and Button */}
        <div className="flex flex-col items-center md:items-start gap-1 text-4xl font-bold tracking-wide">
          <span>
            {isMobile ? (
              <>NARESH<span className="text-purple">.</span></>
            ) : (
              <>Naresh<span className="text-purple">.</span></>
            )}
          </span>

          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={handleContactClick}
          />
        </div>

        {/* Conditional Link Group */}
        <div className="w-full md:w-auto">
          {isMobile ? (
            // Mobile Layout
            <div className="flex flex-col items-center gap-6">
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div className="flex flex-col gap-2 items-center">
                  <Link href="#projects">Recent</Link>
                  <Link href="#personal-info">Qualification</Link>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <Link href="#tech-stack">Skills</Link>
                  <Link href="https://drive.google.com/file/d/1q0zsJG-6EqiIQr08zufNkJyibuBjF3BQ/view?usp=sharing">Download CV</Link>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm">
                <Link href="#home">Home</Link>
                <Link href="#personal-info">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
              </div>
            </div>
          ) : (
            // Large Screen Layout
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
              <div className="flex flex-col gap-2" />
              <div className="flex flex-col gap-2">
                <Link href="#projects">Recent</Link>
                <Link href="#personal-info">Qualification</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="#tech-stack">Skills</Link>
                <Link href="https://drive.google.com/file/d/1q0zsJG-6EqiIQr08zufNkJyibuBjF3BQ/view?usp=sharing">Download CV</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="#home">Home</Link>
                <Link href="#personal-info">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 my-8 w-full" />

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-xl">
        {socialMedia.map((info) => (
          <a
            key={info.id}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="icon" width={20} height={20} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
