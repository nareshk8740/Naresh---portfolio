"use client";

import React from "react";
import Image from "next/image";
import { education } from "@/data"; // Make sure the path to your education data is correct

const Education = () => {
  return (
    <section
      id="personal-info"
      className="py-24 px-[7vw] mt-[-70px] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold"> My <span className="text-purple text-4xl font-bold">Qualification</span></h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A continual journey of growth, learning, and academic excellence.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line in Center */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full z-0" />

        {/* Timeline Entries */}
        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className="relative flex mb-28 flex-col sm:flex-row items-center"
            >
              {/* Left Side Card */}
              <div className={`hidden sm:block w-1/2 ${isLeft ? "pr-10" : ""}`}>
                {isLeft && <TimelineCard edu={edu} align="right" />}
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-[#8245ec] border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full z-10 flex justify-center items-center">
                {/* <Image
                  src={edu.img}
                  alt={edu.school}
                  width={64}
                  height={64}
                  className="object-cover rounded-full"
                /> */}
              </div>

              {/* Right Side Card */}
              <div className={`hidden sm:block w-1/2 ${!isLeft ? "pl-10" : ""}`}>
                {!isLeft && <TimelineCard edu={edu} align="left" />}
              </div>

              {/* Mobile Layout */}
              <div className="sm:hidden w-full mt-20">
                <TimelineCard edu={edu} align="center" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const TimelineCard = ({
  edu,
  align,
}: {
  edu: any;
  align: "left" | "right" | "center";
}) => {
  const alignment =
    align === "left"
      ? "sm:ml-auto text-left"
      : align === "right"
      ? "sm:ml-auto text-left"
      : "text-center mx-auto";

  return (
    <div
      className={`w-full max-w-2xl p-4 sm:p-6 rounded-2xl shadow-xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_12px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-[1.02] z-10 ${alignment}`}
    >
      {/* Header: Image + Text */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="w-20 h-14 bg-white rounded-md overflow-hidden shrink-0">
          <Image
            src={edu.img}
            alt={edu.school}
            width={80}
            height={56}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Degree Info */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {edu.degree}
          </h3>
          <h4 className="text-sm text-gray-300">{edu.school}</h4>
          <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
        </div>
      </div>

      {/* Grade */}
      {edu.grade && (
        <p className="mt-3 text-sm text-purple font-semibold">
          Grade: <span className="text-gray-300">{edu.grade}</span>
        </p>
      )}

      {/* Description */}
      <p className="mt-2 text-sm text-gray-400 leading-relaxed">
        {edu.desc}
      </p>
    </div>
  );
};



export default Education;
