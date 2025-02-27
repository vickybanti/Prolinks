"use client";
import React from "react";
import { motion } from "framer-motion";
import Link, {LinkProps} from "next/link";
import Image from "next/image";
import { FC, ReactNode } from 'react';

interface HoveredLinkProps extends LinkProps {
  children: ReactNode;
}




export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const hasChildren = React.Children.count(children) > 0;


  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.7 }}
        className={`${active &&'text-black bg-[#CC5500] p-3 transition-all linear duration-300'} cursor-pointer text-[#CC5500] font-semibold uppercase dark:text-white hover:text-white duration-700`}
      >
        {item}
      </motion.p>
      {active === item && hasChildren && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 10 }}
          transition={{ duration: 0.9 }}
        >
          <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active"
              className="bg-black dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
            >
              <motion.div layout className="h-full p-4 w-max">
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={`relative rounded-xs flex justify-center space-x-4 px-3 py-3 duration-700 ease-linear bg-none hover:bg-gradient-to-b hover:from-[#785F37] hover:to-transparent hover:bg-[length:100%_150%] hover:text-black`}
    >
      {children}
    </nav>
  );
};


export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex items-center w-full space-x-4">
    {/* Image Container */}
    <div className="flex-shrink-0 h-20 w-36">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="object-cover w-full h-full rounded-md shadow-2xl"
      />
    </div>
  
    {/* Text Content */}
    <div className="flex flex-col justify-center">
      <h4 className="text-md font-bold mb-1 text-[#CC5500] dark:text-white">
        {title}
      </h4>
      <p className="text-[#11100e] text-xs max-w-[12rem] dark:text-neutral-300">
        {description}
      </p>
    </div>
  </Link>
  
  );
};

export const HoveredLink: FC<HoveredLinkProps> = ({ children, ...rest }) => {
  return (
    <Link {...rest} className="text-neutral-700 dark:text-neutral-200 hover:text-black">
      {children}
    </Link>
  );
};
