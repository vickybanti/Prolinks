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
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ColourfulText } from "./ui/colourful-text";
import { NAVLINKS } from "../constants";
import {motion} from 'framer-motion'


const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div>
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-sm">
         
        <motion.div 
         initial={{ x: -30, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ ease: "easeInOut", duration: 1.5 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: false }}
        className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link href="/">

            <h2 className="font-extrabold text-xl text-white">Prolinks</h2>
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
              <DropdownMenuContent className="w-[400px] mx-auto bg-black border-black">
                {/* Logo Inside Dropdown */}
                <DropdownMenuLabel>
                  {/* <Link href="/">
                    <h2 className="font-extrabold text-xl mb-2 text-white">
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
                            <DropdownMenuPortal className="relative">
                              <DropdownMenuSubContent className="bg-black border-[#785F37] w-[600px] absolute top-10 mx-auto transform shadow-lg p-4">
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
                                      <span>{product.title}</span>
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
