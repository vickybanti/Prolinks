import React from 'react';
import { Highlight } from "./ui/hero-highlight";


const Work = () => {
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
      <div className="flex flex-col py-44 px-44 bg-black/80">
      <div className="flex flex-col w-full gap-4 leading-10 text-center uppercase md:text-left">
        <h2 className="font-semibold text-white text-md">What we do</h2>
        <h1 className="text-3xl font-bold md:text-4xl text-white/30 leading-relax">
          We know the <Highlight className="text-black dark:text-white">  ins and outs </Highlight> of luxurious buildings
        </h1>
        <p className="text-[#A08C5B]"> And it shows in our magnificent edifices ALL over the big city of Lagos 

</p>
      </div>



      <div className="grid grid-cols-2 gap-12 px-10">
  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=7687&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#A08C5B] text-2xl font-semibold">Design</h3>
      <span className="text-sm text-white/50">Architectural designs</span>
    </div>
  </div>

  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=9342&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#A08C5B] text-2xl font-semibold">Construction</h3>
      <span className="text-sm text-white/50">Capable construction engineers</span>
    </div>
  </div>



  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=cQUE9D1CWfuG&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#A08C5B] text-2xl font-semibold">Interior decoration</h3>
      <span className="text-sm text-white/50">Stylish and luxurious interiors to suite your rich taste</span>
    </div>
  </div>



  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=102879&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#A08C5B] text-2xl font-semibold">Project Management</h3>
      <span className="text-sm text-white/50">Sleep, rest assured your project is in safe hands</span>
    </div>
  </div>


  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=DRqAsQCxcDuW&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#A08C5B] text-2xl font-semibold">Property Valuation</h3>
      <span className="text-sm text-white/50">Know the ccurrent worth of your properties</span>
    </div>
  </div>


  {/* First Item */}
  <div className="flex items-center space-x-4 h-[100px]">
    <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
      <img
        className="object-contain w-full h-full"
        src="https://img.icons8.com/?size=100&id=47076&format=png&color=000000"
        alt="trophy-emoji"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[#A08C5B] text-2xl font-semibold">Property Marketing</h3>
      <span className="text-sm text-white/50">Sell your properties quicker</span>
    </div>
  </div>



  </div>


      </div>
    </div>
  );
};

export default Work;
