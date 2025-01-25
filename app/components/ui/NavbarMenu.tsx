"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};


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
        className="cursor-pointer text-[#A08C5B] font-semibold uppercase dark:text-white hover:text-white duration-700"
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
              <motion.div layout className="w-max h-full p-4">
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
      className="relative rounded-xs flex justify-center space-x-4 px-3 py-3 duration-700 ease-linear bg-none hover:bg-gradient-to-b hover:from-[#785F37] hover:to-transparent hover:bg-[length:100%_150%] hover:text-black"
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
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-[#A0865B] dark:text-white">
          {title}
        </h4>
        <p className="text-[#785F37] text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
