import { Card } from "./ui/Card";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export const Location = () => {
  const words = `We beautify everywhere we go`;

  return (
      <div className="px-40 py-44 bg-black h-full">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center uppercase md:text-left">
          <h2 className="text-xl font-semibold text-gray-700">Explore by Location</h2>
          <TextGenerateEffect duration={8} words={words} />
        </div>

        {/* Card Grid */}
        <div className="flex flex-wrap gap-5 justify-between mt-8 ">
          {/* First Row (3 Cards) */}
          <div className="flex flex-wrap w-full gap-44">
            <Card
              image="/assets/dertyuio.jpg"
              title="Ipaja"
              className="basis-[42%] w-[150%] h-72"
              subtitle="5-BEDROOM DUPLEX"
              ContentSubtitle="Residentials"
              colour="black"
            />

            <Card
              image="/assets/completed/Library.jpg"
              className="basis-[42%] w-[150%] h-72"
              title="Hallmark"
              subtitle="Library"
              ContentSubtitle="School library"
              colour="none"
            />

            <Card
              image="/assets/completed/20210917_122818.jpg"
              className="basis-[42%] h-72 w-[150%]"
              title="Lekki"
              subtitle="City Mall"
              ContentSubtitle="Shopping"
              colour="black"
            />

          
          </div>

          {/* Second Row (2 Cards) */}
          <div className="flex flex-wrap w-full gap-[27rem]">
            <Card
              image="/assets/office.jpg"
              className="basis-[49%] w-[226.2%] h-72"
              title="WEMPCOROAD"
              subtitle="MIXED-USE BUILDINGS"
              ContentSubtitle="Commercial/Office building"
              colour="none"
            />

            <Card
              image="/assets/completed/Westgate.png"
              className="basis-[49%] w-[226.2%] h-72"
              title="Magodo"
              subtitle="Shopping"
              colour="black"
            />
          </div>
        </div>
      </div>
  );
};
