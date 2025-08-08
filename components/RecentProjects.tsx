"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data";
import { PinContainer } from "./ui/3D-pin";

const RecentProjects = () => {
  return (
    <div
      className="pt-10 pb-5 sm:pt-20 sm:mt-[-86px] sm:pb-20 mb-[-70px]"
      id="projects"
    >
      <h1 className="heading mb-10 lg:pb-10 sm:mb-10">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-y-14 gap-x-24 mt-12 sm:mt-20">
        {projects.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-start sm:w-[570px] w-[90vw] sm:min-h-[30rem] min-h-fit mb-10 sm:mb-0"
          >
            {/* Make whole card clickable via div + onClick */}
            <div
              className="w-fit cursor-pointer"
              onClick={() => window.open(item.link, "_blank")}
            >
              <PinContainer title={item.name}>
                {/* Card Image */}
                <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden lg:h-[30.5vh] sm:mb-0">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="absolute top-0 left-0 w-full h-full object-cover z-10"
                  />
                </div>

                {/* Card Text */}
                <h1 className="font-bold text-purple lg:text-1xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{ color: "#BEC1DD", margin: "1vh 0" }}
                >
                  {item.des}
                </p>

                {/* Tech Icons & Links */}
                <div className="flex items-center justify-between mt-7 mb-3 w-full">
                  {/* Tech icons */}
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  {/* GitHub + Live Site Links */}
                  <div
                    className="flex items-center gap-5 pr-5"
                    onClick={(e) => e.stopPropagation()} // Prevent outer onClick
                  >
                    {/* GitHub Repo */}
                    <a
                      href={item.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <span className="hidden sm:inline text-sm sm:text-base text-purple">
                        GitHub
                      </span>
                      <FaGithub className="text-purple" />
                    </a>

                    {/* Live Site */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <span className="hidden sm:inline text-sm sm:text-base text-purple">
                        Live Site
                      </span>
                      <FaLocationArrow className="text-purple" />
                    </a>
                  </div>
                </div>
              </PinContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
