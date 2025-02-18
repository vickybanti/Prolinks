"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/use-media-query";
import { NAVLINKS } from "../constants";
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

const MobileNav = () => {
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 414px)");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="flex items-center justify-between px-2 py-4 mx-auto"
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo/logo2.jpg"
            width={100}
            height={50}
            alt="Prolinks Logo"
            className="object-contain"
          />
        </Link>

        {/* Mobile Navigation Menu */}
        <nav>
          <DropdownMenu open={isMenuOpen} onOpenChange={setMenuOpen}>
            {/* Menu Button */}
            <DropdownMenuTrigger asChild>
              <button onClick={toggleMenu} className="cursor-pointer">
                <Image
                  src={
                    isMenuOpen
                      ? "https://img.icons8.com/?size=100&id=OnvcRudMyrz9&format=png&color=cc5500" // Close icon
                      : "https://img.icons8.com/?size=100&id=120374&format=png&color=cc5500" // Menu icon
                  }
                  alt={isMenuOpen ? "Close Menu" : "Open Menu"}
                  width={32}
                  height={32}
                className={isMenuOpen ? "transform rotate-180 duration-300" : "transition-all linear duration-300"}
                />
              </button>
            </DropdownMenuTrigger>

            {/* Dropdown Content */}
            {isMenuOpen && (
              <DropdownMenuContent className={`w-[430px] bg-white border-none ${!isDesktop && "w-[354px]"}`}>
                <DropdownMenuLabel />

                <DropdownMenuSeparator />

                {/* Navigation Links */}
                <DropdownMenuGroup className="space-y-2">
                  {NAVLINKS.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <div key={link.id}>
                        {/* Parent Link */}
                        {!link.productItems ? (
                          <DropdownMenuItem
                            className={`p-4 ${
                              isActive
                                ? "bg-[#CC5500] text-white"
                                : "text-[#CC5500] hover:bg-[#CC5500] hover:text-white transition-all duration-700"
                            }`}
                          >
                            <Link href={link.route}>{link.label}</Link>
                          </DropdownMenuItem>
                        ) : (
                          /* Submenu */
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="p-4 text-[#CC5500]">
                              {link.label}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent className="bg-white border-[#CC5500] min-w-[400px] w-auto absolute ml-[-360px] top-14 shadow-lg">
                                {link.productItems.map((product) => (
                                  <DropdownMenuItem
                                    key={product.title}
                                    className="hover:bg-[#CC5500] text-[#CC5500] hover:text-black transition-all duration-300"
                                  >
                                    <a
                                      href={product.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center space-x-3"
                                    >
                                      <Image src={product.src} alt={product.title} width={60} height={60} />
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
            )}
          </DropdownMenu>
        </nav>
      </motion.div>
    </header>
  );
};

export default MobileNav;
