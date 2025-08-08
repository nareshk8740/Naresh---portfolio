"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaDownload, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative py-24 lg:py-36">
      {/* Spotlight Background */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Grid Background Overlay */}
      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:90px_90px]",
            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.2)_1px,transparent_4px),linear-gradient(to_bottom,rgba(228,228,231,0.2)_1px,transparent_4px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.2)_1px,transparent_4px),linear-gradient(to_bottom,rgba(38,38,38,0.2)_1px,transparent_4px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      {/* Main Hero Section */}
      <div className="relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Profile Image */}
          <div className="shrink-0">
            <img
              src="/naresh.jpg"
              alt="Naresh Kumar"
              className="w-40 h-40 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white dark:border-white-100 shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
            {/* Role Badge */}
            <div className="bg-blue-100/20 text-blue-100 px-4 py-1 rounded-full text-xs font-semibold mb-4 tracking-wide">
              FULLSTACK DEVELOPER
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
              NARESH <span className="text-blue-100">KUMAR.</span>
            </h1>

            {/* Animated Text */}
            <TextGenerateEffect
              words="Bringing Ideas to Life with Modern Web Technologies"
              className="text-[18px] md:text-2xl lg:text-3xl mt-4"
            />

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <div className="inline-flex">
                <a
                  href="https://drive.google.com/file/d/1q0zsJG-6EqiIQr08zufNkJyibuBjF3BQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagicButton
                    title="View CV"
                    icon={<FaFileAlt />}
                    position="left"
                  />
                </a>
              </div>

              <div className="inline-flex">
                <a
                  href="https://drive.google.com/file/d/1q0zsJG-6EqiIQr08zufNkJyibuBjF3BQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagicButton
                    title="Download CV"
                    icon={<FaDownload />}
                    position="left"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
