"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/use-media-query";
import Link from "next/link";

export function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className={`bg-black h-screen py-10 ${!isDesktop && 'flex flex-col'}`}>
      <motion.div
        initial={{ opacity: 0.0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="max-w-full 2xl:py-24 lg:py-44 px-8"
      >
        <LayoutGrid cards={cards} />
      </motion.div>
    </div>
  );
}

interface SkeletonComponentProps {
  title: string;
  description: string;
  link: string;
  href: string;
}

const SkeletonComponent: React.FC<SkeletonComponentProps> = ({ title, description, link, href }) => {
  return (
    <div className="h-full w-full px-5 py-4 flex flex-col items-center text-center">
      <p className="text-xl font-bold text-white md:text-4xl max-w-lg">{title}</p>
      <p className="my-4 text-base font-normal text-neutral-200">{description}</p>
      <Link href={href} className="text-white p-3 bg-[#A08C5B] hover:text-black my-10">
        {link}
      </Link>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonComponent 
                title="Hallmark University Administrative building, Ijebu, Ogun State." 
                description="Inspiring innovation and learning at Hallmark University, Ijebu-Itele, Ogun State." 
                link="See related projects" 
                href="/property-type/educational" 
              />,
    className: "w-full lg:col-span-2 lg:h-[300px] 2xl:h-[450px]",
    thumbnail: "/assets/completed/Hallmark-1280x720.jpg",
  },
  {
    id: 2,
    content: <SkeletonComponent 
                title="Westgate Mall, Magodo Lagos premier shopping destination." 
                description="Redefining retail experiences at Westgate Mall, Magodo Lagos." 
                link="See related projects" 
                href="/property-type/shopping" 
              />,
    className: "w-full lg:col-span-1",
    thumbnail: "assets/completed/IMG-20190916-WA0022.jpg",
  },
  {
    id: 3,
    content: <SkeletonComponent 
                title="Lascofedd Office Buildings" 
                description="Modern workspace reimagined – where productivity meets innovative design." 
                link="See related projects" 
                href="/property-type/commercial" 
              />,
    className: "w-full lg:col-span-1 lg:h-[300px] 2xl:h-[450px]",
    thumbnail: "/assets/Lascofedd.jpg",
  },
  {
    id: 4,
    content: <SkeletonComponent 
                title="Serene Residentials" 
                description="A house surrounded by greenery and nature’s beauty. The perfect place to relax, unwind, and enjoy life." 
                link="See related projects" 
                href="/property-type/residentials" 
              />,
    className: "w-full lg:col-span-2",
    thumbnail: "assets/jj1_5 - Photo.jpg",
  },
];
