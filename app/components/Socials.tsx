"use client";

import { motion } from "framer-motion";
import React from "react";
import { Highlight } from "./ui/hero-highlight";


 
export function Socials() {
  return (
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="2xl:pt-28 lg:pt-52 md:pt-52 flex flex -col items-center h-full justify-center container max-w-full "
      >
        <div className=" lg:grid lg:grid-cols-2 md:flex md:flex-col lg:gap-12 md:gap-36  px-40
        ">
        <div className="flex flex-col items-center justify-center">
        <div className="text-3xl font-bold text-center uppercase dark:text-black-400 text-white/50">
        
        <div className="max-w-4xl font-bold leading-relaxed text-center md:text-2xl lg:text-4xl text-neutral-700 dark:text-white lg:leading-snug lg:w-full md:w-1/2">
        Top notch <Highlight className="text-black dark:text-white"> projects </Highlight>  with a perfect mix of....
           </div>
        

        </div>
        <div className="flex font-extralight md:text-sm text-[#A08C5b] py-10 text-lg">
        
        <p className="px-4">ARCHITECTURE</p>
             <p className="px-4">
                ENGINEERING </p>
             <p className="px-4"> CONSTRUCTION</p>

        </div>
        

        <button className="flex gap-2 items-center p-5 text-black bg-[#A08C5B] hover:text-[#A08C5B] backdrop-blur-sm border border-black hover:bg-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(212,175,55,0.5)] text-sm transition duration-400">
        ONGOING PROJECTS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512">
  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
</svg>
</button>            
          
        </div>

        <div className="grid grid-cols-2 gap-12">
  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[80px] h-[80px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B] socialsImg">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=60012&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#A08C5B] text-xl font-semibold">25+</h3>
      <span className="text-sm text-white/50">Achievements</span>
    </div>
  </div>

  {/* Second Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[80px] h-[80px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=37862&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#A08C5B] text-xl font-semibold">15+</h3>
      <span className="text-sm text-white/50">years of experience</span>
    </div>
  </div>

   {/* Fourth Item */}
   <div className="flex items-center space-x-4 h-[100px]">
  <div className="w-[80px] h-[80px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
  <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=34520&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#A08C5B] text-xl font-semibold">300+</h3>
      <span className="text-sm text-white/50">Building projects</span>
    </div>
  </div>

  {/* Third Item */}
  <div className="flex items-center space-x-4 h-[100px]">
  <div className="w-[80px] h-[80px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
  <img
        className="object-contain w-full h-full animate-pulse"
        src="https://img.icons8.com/?size=100&id=uLaytFdQhTaZ&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#A08C5B] text-xl font-semibold">700+</h3>
      <span className="text-sm text-white/50">Happy Homeowners and tenants</span>
    </div>
  </div>

 


        </div>

        
        </div>
      </motion.div>
  );
}
