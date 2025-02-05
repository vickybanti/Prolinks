"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { motion } from "framer-motion";

export function Hero() {
    
  return (
    <div className="bg-black">
    <motion.div
    initial={{ opacity: 0.0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
  
        className="w-full h-screen pt-20 pb-32">
      <LayoutGrid cards={cards} />
    </motion.div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
      Hallmark University Administrative building, Ijebu, Ogun State. 
      

      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
      Inspiring innovation and learning at Hallmark 
      University, Ijebu-Itele, Ogun State.


      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
      Westgate mall, Magodo
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
      Redefining retail experiences at Westgate Mall, Magodo Lagos premier shopping destination
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Office buildings
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
      Modern workspace reimagined – where productivity meets innovative design.


        
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Serene Residentials
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
      A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
      perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 lg:h-[300px]",
    thumbnail:
      "/assets/completed/Hallmark-1280x720.jpg",
    title:"Administrative buildings"

      },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    title:"Shopping mall",
    thumbnail:
      
    "assets/completed/IMG-20190916-WA0022.jpg" },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1 lg:h-[300px]",
    title:"Office building",
    thumbnail:
     "/assets/Lascofedd.jpg" 
    },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    title:"residentials",
    thumbnail:
    "assets/jj1_5 - Photo.jpg"      
},
];
