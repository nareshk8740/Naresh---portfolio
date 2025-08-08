'use client'
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "./GridGlobe";
import MagicButton from "../MagicButton";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
       " grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  header,
  icon,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  anchorId,
}: {
    id:number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  anchorId?: string;
}) => {

  const rightLists = ["TypeScript", "NextJS", "MongoDB"];
  const leftLists = ["ReactJS", "Express", "Javascript",];
  const helloLists = ["PostgreSQL", "Vapi", "Firebase","TailwindCSS"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "nareshk874090@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    },3000);
  };


  return ( 
     <div id={anchorId}
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

        <div className={`${id === 6 && "flex justify-center"} h-full`}> 

            <div className="w-full h-full absolute">
                {img && (
                    <img
                    src={img}
                    alt={img}
                    className={cn(imgClassName, "object-cover object-center ")}
                    />
            )}
             </div>

            <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}>
                {spareImg && (
                    <img
                        src={spareImg}
                        alt={spareImg}
                        className="object-cover object-center w-full h-full"
                    />
                )}
            </div>

         {id === 6 && (
        
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div className={cn(titleClassName,"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")}>
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {description}
            </div>
            <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
                {title}
            </div>
       

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div
  className={cn(
    "flex flex-col lg:flex-row gap-3 mt-4 lg:mt-0",
    "items-start justify-center lg:items-center lg:justify-center"
  )}
>
  <div className="flex flex-wrap  mt-2 gap-2 md:gap-3 lg:gap-4">
    {[...leftLists, ...rightLists, ...helloLists].map((item, i) => (
      <span
        key={i}
        className="py-2 px-3 text-xs md:text-sm lg:text-base opacity-70 rounded-lg text-center bg-[#10132E]"
      >
        {item}
      </span>
    ))}
  </div>
</div>

          )}

           {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <Lottie  key={copied ? "playing" : "not-playing"} options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
               
              />
            </div>
          )}


        </div> 
      </div>
       </div>
   
  );
};
