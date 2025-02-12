"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "./ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAVLINKS } from "../constants";
import {motion} from 'framer-motion'
import { useMediaQuery } from "../hooks/use-media-query";



const MobileNav = () => {
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 378px)");

  return (
    <div>
      {/* Header Section */}
      <header className="fixed top-0 left-0 z-50 w-full bg-black shadow-sm">
         
        <motion.div 
         initial={{ x: -30, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ ease: "easeInOut", duration: 1.5 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: false }}
        className="flex items-center justify-between px-8 py-4 mx-auto">
          {/* Logo */}
          <Link href="/">
        <Image src="/assets/logo/logo3.jpg" width={100} height={50} alt="logo" className="object-contain" />
       </Link>

          {/* Mobile Navigation Dropdown */}
          <nav>
            <DropdownMenu>
              {/* Menu Trigger */}
              <DropdownMenuTrigger asChild>
                <Image
                  src="/menu.svg"
                  alt="menu"
                  width={32}
                  height={32}
                  className="cursor-pointer "
                />
              </DropdownMenuTrigger>

              {/* Dropdown Content */}
              <DropdownMenuContent className={`w-[430px] mx-auto bg-black border-black ${!isDesktop && 'w-[354px]'} `}>
                {/* Logo Inside Dropdown */}
                <DropdownMenuLabel>
                  {/* <Link href="/">
                    <h2 className="mb-2 text-xl font-extrabold text-white">
                      Prolinks
                    </h2>
                  </Link> */}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* Navigation Links */}
                <DropdownMenuGroup className="space-y-2">
                  {NAVLINKS.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <div key={link.id}>
                        {/* Parent Link */}
                        {!link.productItems && (
                          <DropdownMenuItem
                            className={`p-4 ${
                              isActive
                                ? "text-[#785F37] bg-black"
                                : "text-black bg-[#785F37] hover:text-[#785F37] hover:bg-black transition-all duration-700"
                            }`}
                          >
                            <Link href={link.route}>{link.label}</Link>
                          </DropdownMenuItem>
                        )}

                        {/* Submenu */}
                        {link.productItems && (
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger  className={`p-4 ${
                              isActive
                                ? "text-[#785F37] bg-black"
                                : "text-black bg-[#785F37] hover:text-[#785F37] hover:bg-black transition-all duration-700"
                            }`}>
                              {link.label}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent className="bg-black border-[#785F37] min-w-[400px] w-auto absolute ml-[-360px] top-14 transform shadow-lg">
                                {link.productItems.map((product) => (
                                  <DropdownMenuItem
                                    key={product.title}
                                    className="hover:bg-[#785F37] text-[#785F37] hover:text-black transition-all duration-300"
                                  >
                                    <a
                                      href={product.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center space-x-3"
                                    >
                                      <Image
                                        src={product.src}
                                        alt={product.title}
                                        width={60}
                                        height={60}
                                      />
                                      <span className="w-52">{product.title}</span>
                                    </a>
                                  </DropdownMenuItem>
                                ))}
                                <DropdownMenuSeparator />
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        )}
                      </div>
                    );
                  })}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </motion.div>
      </header>
    </div>
  );
};

export default MobileNav;
