"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/use-media-query";
import Link from "next/link";


export function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 820px) and (max-width: 1024px)");


    
  return (
    <div className={`bg-white h-screen px-10 ${!isDesktop && 'hero'} ${isTablet && 'hero mt-52'}`}>
    <motion.div
    initial={{ opacity: 0.0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
  
        className="max-w-full 2xl:py-24 lg:py-32">
      <LayoutGrid cards={cards} />
    </motion.div>
    </div>
  );
}

const SkeletonOne = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const isTablet = useMediaQuery("(min-width: 820px) and (max-width: 1024px)");



  return (
    <div className={`h-full px-20 py-2 mx-auto ${!isDesktop && '-ml-14 px-3 w-[300px]'} ${isTablet && 'px-3 w-full'} flex justify-center items-center flex-wrap flex-col`}>
      <p className="flex flex-wrap w-full px-10 text-xl font-bold text-white md:text-4xl 2xl:text-center">
      Hallmark University Administrative building, Ijebu, Ogun State. 
      

      </p>
      <p className="text-base font-normal text-white"></p>
      <p className={`${!isDesktop && 'px-7 ml-3'} ${isTablet && 'px-7 ml-3'} 2xl:max-w-lg my-4 text-base font-normal text-neutral-200`}>
      Inspiring innovation and learning at Hallmark 
      University, Ijebu-Itele, Ogun State.


      </p>
      <Link href={`/property-type/educational`} className="text-white p-3 bg-[#CC5500] hover:text-black my-10">See related projects</Link>

    </div>
  );
};

const SkeletonTwo = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 820px) and (max-width: 1024px)");


  return (
    <div className={`h-full px-20 py-2 mx-auto ${!isDesktop && '-ml-14 px-3 w-[300px]'} ${isTablet && 'px-3 w-full'} flex justify-center items-center flex-wrap flex-col`}>
      <p className="w-full px-10 text-xl font-bold text-white md:text-4xl flex-flex-wrap 2xl:text-center">
      Westgate Mall, Magodo Lagos premier shopping destination.
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className={`${!isDesktop && 'px-3'} ${isTablet && 'px-3'} 2xl:max-w-lg my-4 text-base font-normal text-neutral-200`}>
      Redefining retail experiences at Westgate Mall, Magodo Lagos premier shopping destination
      </p>
      <Link href={`/property-type/shopping`} className="text-white p-3 bg-[#CC5500] hover:text-black my-10">See related projects</Link>

    </div>
  );
};
const SkeletonThree = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 820px) and (max-width: 1024px)");


  return (
    <div className={`h-full px-20 py-2 mx-auto ${!isDesktop && '-ml-14 px-3 w-[300px]'} ${isTablet && 'px-3 w-full'} flex justify-center items-center flex-wrap flex-col`}>
      <p className="flex flex-wrap max-w-lg px-10 text-xl font-bold text-center text-white md:text-4xl">
      Lascofedd
        Office buildings
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className={`${!isDesktop && 'px-3'} max-w-lg my-4 text-base font-normal text-neutral-200`}>
      Modern workspace reimagined
       – where productivity meets innovative design.


        
      </p>
      <Link href={`/property-type/commercial`} className="text-white p-3 bg-[#CC5500] hover:text-black my-10">See related projects</Link>

    </div>
  );
};
const SkeletonFour = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 820px) and (max-width: 1024px)");


  return (
    <div className={`h-full px-20 py-2 mx-auto ${!isDesktop && '-ml-14 px-3 w-[300px]'} ${isTablet && 'px-3 w-full'} flex justify-center items-center flex-wrap flex-col`}>
      <p className={`text-xl font-bold text-white md:text-4xl max-w-lg flex flex-wrap 2xl:text-center `}>

        Serene Residentials
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className={`${!isDesktop && 'px-3 w-[200px]'} ${isTablet && 'px-3 w-full items-center justify-center'} 2xl:max-w-lg my-4 text-base font-normal text-neutral-200`}>
      A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
      perfect place to relax, unwind, and enjoy life.
      </p>
      <Link href={`/property-type/residentials`} className="text-white p-3 bg-[#CC5500] hover:text-black my-10">See related projects</Link>

    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "2xl:col-span-2 lg:col-span-2 lg:h-[450px] 2xl:h-[450px]",
    thumbnail:
      "/assets/completed/Hallmark-1280x720.jpg",
    title: "Administrative buildings"

      },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "2xl:col-span-1 lg:col-span-1",
    title:"Shopping mall",
    thumbnail:
      
    "assets/completed/IMG-20190916-WA0022.jpg" },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "2xl:col-span-1 lg:col-span-1 lg:h-[300px] 2xl:h-[450px]",
    title:"Office building",
    thumbnail:
     "/assets/Lascofedd.jpg" 
    },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "2xl:col-span-2 lg:col-span-2",
    title:"residentials",
    thumbnail:
    "assets/jj1_5 - Photo.jpg"      
},
];
