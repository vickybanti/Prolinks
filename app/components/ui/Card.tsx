"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CarouselProps = {
  items: string[];
  autoplay?: boolean;
  interval?: number;
};

export function Card({
  image,
  className = "",
  title,
  subtitle,
  contentTitle,
  ContentSubtitle,
  img,
  colour,
  
 
}: {
  image?: string;
  className?: string;
  title:string;
  subtitle:string;
  contentTitle:string;
  ContentSubtitle:string;
  img:string;
  colour?:string;

 
}) {
  return (
    <div className="w-full max-w-xs group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card rounded-sm shadow-xl flex flex-col justify-between p-4",
          className
        )}
        
        style={{
          backgroundImage: `url(${image&&image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full transition duration-300 bg-black/50 group-hover/card:bg-black opacity-60">
        
        </div>

        {/* Author Info */}
        <div className="z-10 flex flex-row items-center space-x-4">
          
           <div className={`h-5 w-5 rounded-full border-2 border-${colour} object-cover text-white`}>
           {img}
           </div>
          <div className="flex flex-col">
            <p className="relative z-10 text-base font-normal text-gray-50">
              {title}
            </p>
            <p className="text-sm text-gray-400">{subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="text-content">
          <h1 className="relative z-10 text-xl font-semibold md:text-2xl text-gray-50">
            {contentTitle}
          </h1>
          <div className="flex justify-between">
          <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
            {ContentSubtitle}
          </p>

          <p className="relative z-10 my-4 text-sm font-thin text-gray-50"> Details...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
