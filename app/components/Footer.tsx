"use client"
import React from "react";
import { FOOTERLINKS } from "../constants";
import { Meteors } from "./ui/meteors";
import { useMediaQuery } from "../hooks/use-media-query";

const Footer = () => {
  
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div
      className="relative max-w-full overflow-hidden bg-fixed bg-center bg-cover container h-full bg-black"
      style={{
        backgroundImage: `url(/assets/footerPics.jpg)`,
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="text-[#A08C5B] bg-gradient-to-b from-black to-black/90 px-40 py-10 max-w-full footPad">
        {/* Footer Content */}
        <div className={`flex justify-between gap-10 mx-auto ${!isDesktop && 'footer'}`}>
          {/* Branding */}
          <div className={`w-full ${!isDesktop && 'footerContent'}`}>
            <h2 className="text-2xl font-bold">Prolinks</h2>
          </div>

          {/* Footer Links */}
          {FOOTERLINKS.map((footer) => (
            <div className="flex flex-col w-full" key={footer.id}>
              <h2 className="text-xl font-semibold">{footer.title}</h2>
              {footer.subTitle.map((sub) => (
                <p
                  key={sub.id}
                  className="text-sm w-1/2 py-1 cursor-pointer font-light transition-all duration-300 ease-in-out hover:bg-[#A08C5B] hover:text-black"
                >
                  {sub.label}
                </p>
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
           <p className="text-xs p-3 font-light cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#A08C5B] hover:text-black">
           
            13, Dayo Kuyeclose,New Oko-oba, Abulegba, Lagos
            </p>
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
            <p className="p-3 text-sm">tundeadekola@yahoo.com</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t-[2px] border-[#A08C5B] mt-3 pt-3">
          <p className="text-[#A08C5B] text-sm">
            &copy; 2025 Project Prolinks. All Rights Reserved.
          </p>
        </div>

      </div>
      <Meteors number={30} />

    </div>
  );
};

export default Footer;
