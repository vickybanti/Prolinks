"use client";
import React from "react";
import { ProductItem } from "./ui/NavbarMenu";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { useMediaQuery } from "../hooks/use-media-query";
import MobileNav from "./MobileNav";
import { NAVLINKS } from "../constants";
import { usePathname } from "next/navigation";
import {motion} from 'framer-motion'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"



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
  const pathname = usePathname();


  console.log(NAVLINKS); // Debugging log to verify NAVLINKS

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-black shadow-sm dark:bg-black">
      <motion.div 
       initial={{ x: -30, opacity: 0.2 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ ease: "easeInOut", duration: 1.5 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: false }}
      className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1 text-[#A08C5B]">
        {NAVLINKS.map((link) => {
                              const isActive = link.route === pathname;
                              return (<NavigationMenu>
    <NavigationMenuList className="relative z-10" key={link.id}>
    <NavigationMenuItem className={`relative px-3 py-3 overflow-hidden transition-all duration-700 ${isActive ? 'inset-0 bg-gradient-to-b from-[#A08C5B] to-black text-white' : 'bg-black text-[#A08C5B] group'}`} key={link.id}>
  {/* Background Gradient Overlay */}
  <span className="absolute inset-0 bg-gradient-to-b from-[#A08C5B] to-black scale-y-0 origin-top transition-transform duration-700 group-hover:scale-y-100"></span>
  
        {/* If there are product items, show dropdown, else just a link */}
        {link.productItems && link.productItems.length > 0 ? (
          <>
            <NavigationMenuTrigger className={`relative z-10 hover:text-black hover:bg-transparent flex`}>
<Image src={link.icon} alt="icon" width={32} height={32} className="text-white"/>
{link.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
            <div className="text-sm grid grid-cols-2 gap-10 p-[10px] w-auto min-w-[650px] max-w-fit bg-black border-none">
            {link.productItems.map((prod) => (
                  <NavigationMenuLink key={prod.title} href={link.route}>
                    <ProductItem
                      title={prod.title}
                      href={prod.href}
                      src={prod.src}
                      description={prod.description}
                    />
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </>
        ) : (
          <NavigationMenuLink href={link.route} className="relative z-10">{link.label}</NavigationMenuLink>
        )}
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>)
                              
})}

          

            
        </div>

        {/* Login Button */}
        <div className="flex-shrink-0">
          
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
