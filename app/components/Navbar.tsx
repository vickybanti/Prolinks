"use client";
import React from "react";
import { ProductItem } from "./ui/NavbarMenu";
import Link from "next/link";
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
  const isDesktop = useMediaQuery("(min-width: 780px)");
  


  return isDesktop ? (
    <div className="relative w-full">
      <DesktopNavbar />
    </div>
  ) : (
    <MobileNav />
  );
}




function DesktopNavbar() {
  const pathname = usePathname();


  console.log(NAVLINKS); // Debugging log to verify NAVLINKS

  return (
    <div className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-white">
      <motion.div 
       initial={{ x: -30, opacity: 0.2 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ ease: "easeInOut", duration: 1.5 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: false }}
      className="flex items-center justify-between w-full px-14 py-4">
        {/* Logo */}
        <div className="top-0 left-0 ml-5 flex items-center">
        <Link href="/">
        <Image src="/assets/logo/logo1.jpg" width={100} height={50} alt="logo" className="object-contain" />
       </Link>
        </div>

{/* Navigation Links */}
<div className="flex left-0 space-x-1 text-[#CC5500] ml-auto mr-3">
  {NAVLINKS.map((link) => {
    const isActive = link.route === pathname;
    return (
      <NavigationMenu key={link.id}>
        <NavigationMenuList className="relative z-10">
          <NavigationMenuItem
            className={`relative px-3 py-3 overflow-hidden transition-all duration-700 ${
              isActive
                ? "inset-0 bg-gradient-to-b from-[#CC5500] to-white text-black"
                : "bg-white text-[#CC5500] group"
            }`}
          >
            {/* Background Gradient Overlay */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#CC5500] to-white scale-y-0 origin-top transition-transform duration-700 group-hover:scale-y-100"></span>

            {/* If there are product items, show dropdown, else just a link */}
            {link.productItems && link.productItems.length > 0 ? (
              <>
                <NavigationMenuTrigger className="relative z-10 flex hover:text-[#CC5500] hover:bg-transparent ">
                  {link.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="text-sm grid grid-cols-2 gap-10 p-[10px] w-auto min-w-[650px] max-w-fit bg-white border-none ">
                    {link.productItems.map((prod) => (
                      <NavigationMenuLink key={prod.title} href={link.route}>
                        <div>
                          <ProductItem
                            title={prod.title}
                            href={prod.href}
                            src={prod.src}
                            description={prod.description}
                          />
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink href={link.route} className="relative z-10">
                {link.label}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
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
