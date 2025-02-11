"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/use-media-query";
import Link from "next/link";


export function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

    
  return (
    <div className={`bg-black h-screen ${!isDesktop && 'hero'}`}>
    <motion.div
    initial={{ opacity: 0.0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
  
        className="max-w-full 2xl:py-24 lg:py-20 px-8">
      <LayoutGrid cards={cards} />
    </motion.div>
    </div>
  );
}

const SkeletonOne = () => {

  return (
    <div className='h-full px-20 py-2 mx-auto flex justify-center items-center flex-wrap flex-col'>
      <p className="text-xl font-bold text-white md:text-4xl w-full flex flex-wrap px-10 text-center">
      Hallmark University Administrative building, Ijebu, Ogun State. 
      

      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
      Inspiring innovation and learning at Hallmark 
      University, Ijebu-Itele, Ogun State.


      </p>
      <Link href={`/property-type/educational`} className="text-white p-3 bg-[#A08C5B] hover:text-black my-10">See related projects</Link>

    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className='h-full px-20 py-2 mx-auto flex justify-center items-center flex-wrap flex-col'>
      <p className="text-xl font-bold text-white md:text-4xl w-full flex-flex-wrap px-10 text-center">
      Westgate Mall, Magodo Lagos premier shopping destination.
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
      Redefining retail experiences at Westgate Mall, Magodo Lagos premier shopping destination
      </p>
      <Link href={`/property-type/shopping`} className="text-white p-3 bg-[#A08C5B] hover:text-black my-10">See related projects</Link>

    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className='h-full px-20 py-2 mx-auto flex justify-center items-center flex-wrap flex-col'>
      <p className="text-xl font-bold text-white md:text-4xl max-w-lg flex flex-wrap px-10 text-center">
      Lascofedd
        Office buildings
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
      Modern workspace reimagined
       – where productivity meets innovative design.


        
      </p>
      <Link href={`/property-type/commercial`} className="text-white p-3 bg-[#A08C5B] hover:text-black my-10">See related projects</Link>

    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className='h-full px-20 py-2 mx-auto flex justify-center items-center flex-wrap flex-col'>
      <p className="text-xl font-bold text-white md:text-4xl max-w-lg flex flex-wrap text-center">

        Serene Residentials
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
      A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
      perfect place to relax, unwind, and enjoy life.
      </p>
      <Link href={`/property-type/residentials`} className="text-white p-3 bg-[#A08C5B] hover:text-black my-10">See related projects</Link>

    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-2 lg:h-[300px] 2xl:h-[450px]",
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
    className: "col-span-1 lg:h-[300px] 2xl:h-[450px]",
    title:"Office building",
    thumbnail:
     "/assets/Lascofedd.jpg" 
    },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-2",
    title:"residentials",
    thumbnail:
    "assets/jj1_5 - Photo.jpg"      
},
];
