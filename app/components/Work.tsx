"use client"
import React from 'react';
import { Highlight } from "./ui/hero-highlight";
  import { useMediaQuery } from "../hooks/use-media-query";



const Work = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url(/assets/2.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', 
      }}
      
    >
      <div className={`flex flex-col py-44 2xl:px-20 lg:px-20 bg-black/60 ${!isDesktop && 'work'}`}>
      <div className="flex flex-col w-full gap-4 leading-10 text-center uppercase md:text-left">
        <h2 className="font-semibold text-white text-md">What we do</h2>
        <h1 className="text-3xl font-bold md:text-4xl text-white/85 leading-relax workHeading">
          We know the <Highlight className="text-black dark:text-black">  ins and outs </Highlight> of luxurious buildings
        </h1>
        <div className='bg-black p-2 rounded-full lg:w-[54%] 2xl:w-[37%] shadow-lg'>
        <p className="text-[#CC5500] "> And it shows in our magnificent edifices ALL over the big city of Lagos 
        
</p>
</div>
      </div>



      <div className={`grid grid-cols-2 gap-12 px-10 ${!isDesktop && 'workGrid'}`}>
  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
      <img
        className="object-contain w-full h-full "
        src="https://img.icons8.com/?size=100&id=7687&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-2xl font-semibold workIconFont">Design</h3>
      <span className="text-sm text-white/80 workFontP">Architectural designs</span>
    </div>
  </div>

  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=9342&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-2xl font-semibold workIconFont">Construction</h3>
      <span className="text-sm text-white/80 workFontP">Capable construction engineers</span>
    </div>
  </div>



  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=cQUE9D1CWfuG&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-2xl font-semibold workIconFont">Interior decoration</h3>
      <span className="text-sm text-white/80 workFontP">Stylish and luxurious interiors to suite your rich taste</span>
    </div>
  </div>



  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=102879&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-2xl font-semibold workIconFont">Project Management</h3>
      <span className="text-sm text-white/80 workFontP">Sleep, rest assured your project is in safe hands</span>
    </div>
  </div>


  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=DRqAsQCxcDuW&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-2xl font-semibold workIconFont">Property Valuation</h3>
      <span className="text-sm text-white/80 workFontP">Know the current worth of your properties</span>
    </div>
  </div>


  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#CC5500] socialsImage">
      <img
        className="object-contain w-full h-full "
        src="https://img.icons8.com/?size=100&id=47076&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#CC5500] text-2xl font-semibold workIconFont">Property Marketing</h3>
      <span className="text-sm text-white/80 workFontP">Sell your properties quicker</span>
    </div>
  </div>



  </div>


      </div>
    </div>
  );
};

export default Work;
