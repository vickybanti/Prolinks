import React from "react";
import { FOOTERLINKS } from "../constants";
import { Meteors } from "./ui/meteors";

const Footer = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-fixed bg-center bg-cover container h-full bg-black"
      style={{
        backgroundImage: `url(/assets/footerPics.jpg)`,
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="text-[#A08C5B] bg-gradient-to-b from-black to-black/90 w-full px-8 md:px-20 lg:px-32 py-20 md:py-32">
        {/* Footer Content */}
        <div className="flex justify-between gap-10 mx-auto">
          {/* Branding */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-bold">Prolinks</h2>
          </div>

          {/* Footer Links */}
          {FOOTERLINKS.map((footer) => (
            <div className="flex flex-col w-full md:w-1/4" key={footer.id}>
              <h2 className="text-xl font-semibold">{footer.title}</h2>
              {footer.subTitle.map((sub) => (
                <p
                  key={sub.id}
                  className="text-sm w-full px-2 py-1 cursor-pointer font-light transition-all duration-300 ease-in-out hover:bg-[#A08C5B] hover:text-black"
                >
                  {sub.label}
                </p>
              ))}
            </div>
          ))}

          {/* Contact Us Section */}
          <div className="flex flex-col w-64">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <div className="flex items-center]">
              
           <img src=" https://img.icons8.com/?size=100&id=107436&format=png&color=000000" 
           width="32px"
           height="2px"
           className="object-contain"/>
           <p className="text-xs p-3 font-light cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#A08C5B] hover:text-black">
           
            13, Dayo Kuyeclose,New Oko-oba, Abulegba, Lagos
            </p>
            </div>
            <div className="flex items-center]">
              
              <img src="https://img.icons8.com/?size=100&id=12921&format=png&color=000000"
              width="32px"
              height="2px"
              className="object-contain"/>
            <p className="py-2 text-sm">0803-302-9830</p>
            </div>

            <div className="flex items-center]">
              
           <img src=" https://img.icons8.com/?size=100&id=OumT4lIcOllS&format=png&color=000000" 
           width="32px"
           height="2px"
           className="object-contain"/>
            <p className="py-2 text-sm">tundeadekola@yahoo.com</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-[#A08C5B] pt-4 mt-56">
          <p className="text-[#A08C5B]">
            &copy; 2025 Project Prolinks. All Rights Reserved.
          </p>
        </div>

      </div>
      <Meteors number={30} />

    </div>
  );
};

export default Footer;
