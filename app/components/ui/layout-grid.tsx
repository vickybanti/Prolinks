"use client";
import React, { useState } from "react";
import {  motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { JSX } from "react/jsx-runtime";
import { useMediaQuery } from "../../hooks/use-media-query";


type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title?:string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");


  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };
  

  return (
    <div className={`relative grid w-full h-full grid-cols-1 gap-4 p-10 mx-auto md:grid-cols-3 max-w-full ${!isDesktop && 'layoutCard'}`}>
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            onMouseLeave={() => handleOutsideClick()}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? `rounded-lg cursor-pointer absolute inset-0 max-h-full max-w-full ${!isDesktop && 'h-1/2 w-full px-5 py-8'} m-auto z-50 flex justify-center items-center flex-wrap flex-col`
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
              <h1>{card.title}</h1>
            {selected?.id === card.id && 
            <SelectedCard selected={selected} onClick={handleOutsideClick}/>}
            
            
            <ImageComponent card={card} 
            />
           
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card;  }) => {
  return (
    <><motion.img
          layoutId={`image-${card.id}-image`}
          src={card.thumbnail}
          height="500"
          width="500"
          className={cn(
              "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
          )}
          alt="thumbnail" />

<h3 className="absolute cursor-pointer uppercase inset-0 flex items-center justify-center text-2xl font-bold text-white text-center hover:bg-white/10 bg-black/50 rounded-lg hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(-white/10) hover:text-[#785F37]">
          {card.title}
        </h3>
          </>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null; onClick: () => void }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className={`bg-transparent h-full w-full flex px-20 flex-col justify-center rounded-lg shadow-2xl relative z-[60] ${!isDesktop && 'w-full px-0 h-full ml-[-100px]'}`}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className={`absolute inset-0 z-10 w-full h-full px-4 ${!isDesktop && 'w-full py-4'} bg-black opacity-60`}
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={`relative px-2 w-full pb-4 z-[70] ${!isDesktop && 'w-1/2}'}`}
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
