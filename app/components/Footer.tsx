import React from "react";
import { FOOTERLINKS } from "../constants";
import { Meteors } from "./ui/meteors";

const Footer = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(/assets/footerPics.jpg)`,
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="text-[#A08C5B] bg-gradient-to-b from-black to-black/90 w-full min-h-screen px-8 md:px-20 lg:px-32 pt-32">
        {/* Footer Content */}
        <div className="mx-auto flex justify-between gap-10">
          {/* Branding */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-bold">Prolinks</h2>
          </div>

          {/* Footer Links */}
          {FOOTERLINKS.map((footer) => (
            <div className="w-full md:w-1/4 flex flex-col" key={footer.id}>
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
          <div className="w-full md:w-1/4 flex flex-col">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="p-3 font-light cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#A08C5B] hover:text-black">
              info@prolinks.com
            </p>
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
