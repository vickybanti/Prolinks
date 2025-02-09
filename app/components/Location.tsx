import { Card } from "./ui/Card";
import { TextGenerateEffect } from "./ui/text-generate-effect";


export const Location = () => {
  const words = `We beautify everywhere we go`;

  return (
      <div className="2xl:px-40 lg:px-40 pb-44 bg-black h-full location">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center uppercase md:text-left">
          <h2 className="text-xl font-semibold text-gray-700">Explore by Location</h2>
          <TextGenerateEffect duration={4} words={words} />
        </div>

        {/* Card Grid */}
        <div className="xl:flex xl:flex-wrap xl:gap-5 lg:grid lg:grid-cols-2 justify-between mt-8 ">
          {/* First Row (3 Cards) */}
          <div className="flex flex-wrap w-full 2xl:gap-44 lg:gap-4 md:gap-8 location-grid">
            <Card
              image="/assets/dertyuio.jpg"
              title="Ipaja"
              className="2xl:basis-[32%] 2xl:w-[150%] lg:w-full h-72 md:full xl:h-72"
              subtitle="5-BEDROOM DUPLEX"
              ContentSubtitle="Residentials"
              colour="black"
            />

            <Card
              image="/assets/completed/Library.jpg"
              className="2xl:basis-[32%] 2xl:w-[150%] lg:w-full h-72 md:full xl:h-72"
              title="Hallmark"
              subtitle="Library"
              ContentSubtitle="School library"
              colour="none"
            />

            <Card
              image="/assets/completed/20210917_122818.jpg"
              className="2xl:basis-[32%] 2xl:w-[150%] lg:w-full h-72 md:full xl:h-72"
              title="Lekki"
              subtitle="City Mall"
              ContentSubtitle="Shopping"
              colour="black"
            />

          
          </div>

          {/* Second Row (2 Cards) */}
          <div className="loc-grid location-grid flex flex-wrap w-full 2xl:gap-[27rem] lg:gap-44 md:gap-44">
            <Card
              image="/assets/office.jpg"
              className="2xl:basis-[49%] 2xl:w-[226.2%] lg:w-[153%] h-72 md:[153%] xl:h-72"
              title="WEMPCOROAD"
              subtitle="MIXED-USE BUILDINGS"
              ContentSubtitle="Commercial/Office building"
              colour="none"
            />

            <Card
              image="/assets/completed/Westgate.png"
              className="2xl:basis-[49%] 2xl:w-[226.2%] lg:w-[153%] h-72 md:[153%] xl:h-72"
              title="Magodo"
              subtitle="Shopping"
              colour="black"
            />
          </div>
        </div>
      </div>
  );
};
