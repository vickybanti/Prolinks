"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavbarMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ColourfulText } from "./ui/colourful-text";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { Button } from "./ui/button";
import { useMediaQuery } from "../hooks/use-media-query";
import MobileNav from "./MobileNav";
import { NAVLINKS } from "../constants";

export function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <div className="relative w-full">
      <DesktopNavbar />
    </div>
  ) : (
    <MobileNav />
  );
}

function Logo() {
  return (
    <Link href="/">
     <BackgroundGradient className="rounded-[22] bg-black dark:bg-zinc-900 text-[#A0865B]">
            <h2>Project Prolinks</h2>
          </BackgroundGradient>
    </Link>
  );
}

function DesktopNavbar() {
  const [active, setActive] = useState<string | null>(null);

  console.log(NAVLINKS); // Debugging log to verify NAVLINKS

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black dark:bg-black shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1">
          {NAVLINKS.map((link) => (
            
            <Menu setActive={setActive} key={link.label}>
              
              <MenuItem setActive={setActive} active={active} item={link.label}>
                
              {link.productItems && link.productItems.length > 0 &&
              <div
              className={`${link.productItems.length > 0 ? 'text-sm grid grid-cols-2 gap-10 p-4':'bg-none border-none'}`}
            >
              
                {link.productItems.map((prod) => (
                  
                    <ProductItem
                                  key={prod.title}

                      title={prod.title}
                      href={prod.href}
                      src={prod.src}
                      description={prod.description}
                    />
                ))}
                </div>
}

           </MenuItem>
         </Menu>

          ))}
        </div>

        {/* Login Button */}
        <div className="flex-shrink-0">
          
        </div>
      </div>
    </div>
  );
}
