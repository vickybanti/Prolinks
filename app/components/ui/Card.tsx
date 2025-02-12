"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";



export function Card({
  image,
  className = "",
  title,
  subtitle,
  contentTitle,
  ContentSubtitle,
  img,
  colour,
  href,
  
 
}: {
  image?: string;
  className?: string;
  title:string;
  subtitle:string;
  contentTitle?:string;
  ContentSubtitle?:string;
  img?: React.ReactNode;
  colour?:string;
  href:string;

 
}) {
  return (
    <div className="w-full max-w-xs group/card ">
      <div
        className={cn(
          "cursor-pointer w-full relative rounded-sm shadow-xl flex flex-col justify-between p-4 ",
          className
        )}
        
        style={{
          backgroundImage: `url(${image&&image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        {/* Overlay */}
       <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-10 hover:bg-black/45"></div>
        {/* Author Info */}
        <div className="z-10 flex flex-row items-center space-x-4 ">
           <div className={`h-5 w-5 rounded-full border-2 border-${colour} object-cover text-white `}>
           {img}
           </div>
          <div className="flex flex-col ">
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
          <p className="relative z-10 my-4 text-xs font-normal text-gray-50">
            {ContentSubtitle}
          </p>
          <Link href={href} className="flex px-2 my-3 hover:bg-black/45">
          <p className="relative z-10 text-sm font-thin text-gray-50"> Details</p>
          <div className="w-4">
          <Image src="https://img.icons8.com/?size=100&id=59862&format=png&color=179797" alt="arrow" width={30} height={3} />
          </div>
          </Link>
          

          </div>
        </div>
      </div>
    </div>
  );
}
