"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CardDemo() {
  return (
    <div className="w-full max-w-xs group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
        )}
      >
        <div className="absolute top-0 left-0 w-full h-full transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="z-10 flex flex-row items-center space-x-4">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/manu.png"
            className="object-cover w-10 h-10 border-2 rounded-full"
          />
          <div className="flex flex-col">
            <p className="relative z-10 text-base font-normal text-gray-50">
              Manu Arora
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="relative z-10 text-xl font-bold md:text-2xl text-gray-50">
            Author Card
          </h1>
          <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
            Card with Author avatar, complete name and time to read - most
            suitable for blogs.
          </p>
        </div>
      </div>
    </div>
  );
}
