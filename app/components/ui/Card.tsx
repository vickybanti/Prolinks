"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Card({
  image,
  className = "",
  title,
  subtitle,
  contentTitle,
  ContentSubtitle,
  img,
  colour
 
}: {
  image: string;
  className?: string;
  title:string;
  subtitle:string;
  contentTitle:string;
  ContentSubtitle:string;
  img:string;
  colour?:string
 
}) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card rounded-sm shadow-xl flex flex-col justify-between p-4",
          className
        )}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        {/* Overlay */}
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black/50 group-hover/card:bg-black opacity-60"></div>

        {/* Author Info */}
        <div className="flex flex-row items-center space-x-4 z-10">
          
           <div className={`h-5 w-5 rounded-full border-2 border-${colour} object-cover text-white`}>
           {img}
           </div>
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {title}
            </p>
            <p className="text-sm text-gray-400">{subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="text-content">
          <h1 className="font-semibold text-xl md:text-2xl text-gray-50 relative z-10">
            {contentTitle}
          </h1>
          <div className="flex justify-between">
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {ContentSubtitle}
          </p>

          <p className="font-thin text-sm text-gray-50 relative z-10 my-4"> Details...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
