"use client";
import React, { useState, useRef, useEffect } from "react";
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
  
        className="h-screen pt-20 pb-32 w-full">
      <LayoutGrid cards={cards} />
    </motion.div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Hallmark University Administrative building, Ijebu, Ogun State. 
      

      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      "Inspiring innovation and learning at Hallmark University, Ijebu-Itele, Ogun State."


      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Westgate mall, Magodo
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Redefining retail experiences at Westgate Mall, Magodo Lagos premier shopping destination
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Office buildings
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      "Modern workspace reimagined – where productivity meets innovative design."


        
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Serene Residentials
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
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
