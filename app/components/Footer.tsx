"use client"
import React from "react";
import { FOOTERLINKS } from "../constants";
import { Meteors } from "./ui/meteors";
import { useMediaQuery } from "../hooks/use-media-query";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 820px) and (max-width: 1024px)");

  
  return (
    <div
      className="container relative h-full max-w-full overflow-hidden bg-fixed bg-center bg-cover bg-white/80"
      style={{
        backgroundImage: `url(/assets/footerPics.jpg)`,
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="text-[#CC5500] bg-gradient-to-b from-white to-white/90 max-w-full footPad">
        {/* Footer Content */}
        <div className={`flex justify-between 2xl:gap-48 mx-auto px-20 py-20 ${!isDesktop && 'footer'} ${isTablet && 'px-2 -ml-20 gap-10'}`}>
          {/* Branding */}
          <div className={`2xl:mt-[-40px] lg:mt-[-25px] mr-40 ${isTablet && 'mr-2'}`}>
          <div className="flex justify-start pr-30"> 
            <Link href="/">
              <div className="flex flex-col items-center gap-0">
                <Image
                  src="/assets/logo/logo2.jpg"
                  width={1000}
                  height={50}
                  alt="logo"
                  className="object-cover bg-blend-multiply"
                />
                <h2 className={`mt-[-30px] px-10 ${!isDesktop && 'mt-[-30px] text-2xl'}`}>Prolinks</h2>
              </div>
            </Link>
          </div>
          </div>

          {/* Footer Links */}
          {FOOTERLINKS.map((footer) => (
            <div className={`flex flex-col w-full ${!isDesktop && 'py-3'}`} key={footer.id}>
              <h2 className="text-lg font-semibold">{footer.title}</h2>
              {footer.subTitle.map((sub) => (
                <Link
                href={"href" in sub ? `/property/${sub.href} `: "#"}
                  key={sub.id}
                  className="text-sm py-1 cursor-pointer font-light transition-all duration-300 ease-in-out hover:bg-[#CC5500] hover:text-black w-full"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Contact Us Section */}
          <div className="flex flex-col w-64 mr-20">
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
  className="p-3 text-sm text-[#CC5500] hover:underline"
>
13,Dayo Kuye Close <br />
New Oko-Oba, <br />
Abulegba,Lagos
</a>
            </div>
            <div className="flex items-center">
              
              <img src="https://img.icons8.com/?size=100&id=12921&format=png&color=000000"
              width="32px"
              height="2px"
              className="object-contain"/>
            <a 
  href="tel:08033029830" 
 className="p-3 text-sm text-[#CC5500] hover:underline">
  0803-302-9830
</a>

            </div>

            <div className="flex items-center">
              
           <img src=" https://img.icons8.com/?size=100&id=OumT4lIcOllS&format=png&color=000000" 
           width="32px"
           height="2px"
           className="object-contain"/>
           <a href="mailto:tundeadekola@yahoo.com" className="p-3 text-sm text-[#CC5500] hover:underline">
  tundeadekola@yahoo.com
</a>

            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-3 mt-3 text-center">
          <p className="text-[#CC5500] text-xs">
            &copy; {new Date().getFullYear()} Project Prolinks. All Rights Reserved.
          </p>
        </div>

      </div>
      <Meteors number={30} />

    </div>
  );
};

export default Footer;
