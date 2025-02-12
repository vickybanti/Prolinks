"use client"
import React from "react";
import { FOOTERLINKS } from "../constants";
import { Meteors } from "./ui/meteors";
import { useMediaQuery } from "../hooks/use-media-query";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  return (
    <div
      className="container relative h-full max-w-full overflow-hidden bg-fixed bg-black bg-center bg-cover"
      style={{
        backgroundImage: `url(/assets/footerPics.jpg)`,
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="text-[#A08C5B] bg-gradient-to-b from-black to-black/90 max-w-full footPad">
        {/* Footer Content */}
        <div className={`flex justify-between gap-10 mx-auto px-40 py-20 ${!isDesktop && 'footer'}`}>
          {/* Branding */}
          <div className="2xl:mt-[-40px] lg:mt-[-25px] mr-6">
          <div className="flex justify-start mr-6"> 
            <Link href="/">
              <div className="flex flex-col items-center gap-0">
                <Image
                  src="/assets/logo/logo3.jpg"
                  width={1000}
                  height={50}
                  alt="logo"
                  className="object-cover"
                />
                <h2 className={`mt-[-30px] px-10 ${!isDesktop && 'mt-[-70px] text-xl'}`}>Prolinks</h2>
              </div>
            </Link>
          </div>
          </div>

          {/* Footer Links */}
          {FOOTERLINKS.map((footer) => (
            <div className="flex flex-col w-full" key={footer.id}>
              <h2 className="text-lg font-semibold">{footer.title}</h2>
              {footer.subTitle.map((sub) => (
                <Link
                href={"href" in sub ? `/property/${sub.href} `: "#"}
                  key={sub.id}
                  className="text-sm w-1/2 py-1 cursor-pointer font-light transition-all duration-300 ease-in-out hover:bg-[#A08C5B] hover:text-black"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Contact Us Section */}
          <div className="flex flex-col w-64">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <div className="flex items-center">
              
           <img src=" https://img.icons8.com/?size=100&id=107436&format=png&color=000000" 
           width="32px"
           height="2px"
           className="object-contain"/>
           <a 
  href="https://www.google.com/maps/search/?api=1&query=13,+Dayo+Kuye+Close,+New+Oko-Oba,+Abulegba,+Lagos" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-blue-500 hover:underline"
>
  View on Google Maps
</a>
            </div>
            <div className="flex items-center">
              
              <img src="https://img.icons8.com/?size=100&id=12921&format=png&color=000000"
              width="32px"
              height="2px"
              className="object-contain"/>
            <p className="p-3 text-sm">0803-302-9830</p>
            </div>

            <div className="flex items-center">
              
           <img src=" https://img.icons8.com/?size=100&id=OumT4lIcOllS&format=png&color=000000" 
           width="32px"
           height="2px"
           className="object-contain"/>
           <a href="mailto:tundeadekola@yahoo.com" className="p-3 text-sm text-[#A08C5B] hover:underline">
  tundeadekola@yahoo.com
</a>

            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-3 mt-3 text-center">
          <p className="text-[#A08C5B] text-xs">
            &copy; 2025 Project Prolinks. All Rights Reserved.
          </p>
        </div>

      </div>
      <Meteors number={30} />

    </div>
  );
};

export default Footer;
