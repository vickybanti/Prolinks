"use client"
import { Card } from "./ui/Card";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useMediaQuery } from "../hooks/use-media-query";

export const Location = () => {
  const isDesktop = useMediaQuery("(min-width: 820px)");

  const words = `We beautify everywhere we go`;

  return (
      <div className={`2xl:px-20 lg:px-20 pb-44 bg-black h-full ${!isDesktop && 'location'}`}>
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center uppercase md:text-left">
          <h2 className="text-xl font-semibold text-gray-700">Explore by Location</h2>
          <TextGenerateEffect duration={4} words={words} />
        </div>

        {/* Card Grid */}
        <div className="justify-between mt-8 overflow-hidden lg:w-full xl:flex xl:flex-wrap xl:gap-5">
          {/* First Row (3 Cards) */}
          <div className="flex flex-wrap w-full 2xl:gap-[15rem] lg:gap-[83px] md:gap-8 location-grid">
            <Card
              image="/assets/dertyuio.jpg"
              title="Ipaja"
              className="2xl:basis-[32%] 2xl:w-[170%] lg:w-[120%] h-72 md:full xl:h-72"
              subtitle="5-BEDROOM DUPLEX"
              ContentSubtitle="Residentials"
              colour="black"
              href="/property/5-bedroom-duplex"
            />

            <Card
              image="/assets/completed/Library.jpg"
              className="2xl:basis-[32%] 2xl:w-[170%] lg:w-[120%] h-72 md:full xl:h-72"
              title="Hallmark"
              subtitle="Library"
              ContentSubtitle="School library"
              colour="none"
              href="/property/hallmark-university-projects-"
            />

            <Card
              image="/assets/completed/20210917_122818.jpg"
              className="2xl:basis-[32%] 2xl:w-[170%] lg:w-[120%] h-72 md:full xl:h-72"
              title="Lekki"
              subtitle="City Mall"
              ContentSubtitle="Shopping"
              colour="black"
              href="/property/cmart-supermarket-and-pharmacy"
            />

          
          </div>

          {/* Second Row (2 Cards) */}
          <div className={`${!isDesktop && 'loc-grid location-grid'} flex flex-wrap w-full 2xl:gap-[33rem] lg:gap-[280px] md:gap-44`}>
            <Card
              image="/assets/office.jpg"
              className="2xl:basis-[49%] 2xl:w-[255%] lg:w-[184%] h-72 md:[153%] xl:h-72"
              title="WEMPCOROAD"
              subtitle="MIXED-USE BUILDINGS"
              ContentSubtitle="Commercial/Office building"
              colour="none"
              href="/property/lascofedd-project"
            />

            <Card
              image="/assets/completed/Westgate.png"
              className="2xl:basis-[49%] 2xl:w-[255%] lg:w-[184%] h-72 md:[153%] xl:h-72"
              title="Magodo"
              subtitle="Shopping"
              colour="black"
              ContentSubtitle="Mall"
              href="/property/west-gate-supermarket-and-pharmacy"
            />
          </div>
        </div>
      </div>
  );
};
