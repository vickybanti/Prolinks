import PageCard from '@/app/components/PageCard';



import React from 'react';
import { commercial, residentials, educational } from '@/app/constants';

const Page = async({ params }: { params: { property: string } }) => {
  const { property } = await params;

  // Determine the correct dataset based on property type
  const propertyData =
    property === "commercial" ? commercial :
    property === "residentials" ? residentials :
    property === "educational" ? educational :
    [];

  return (
    <div className='px-20 mt-20 overflow-hidden text-white'>
      <div className='px-10 py-10'>
        <h1 className='text-2xl text-[#A08C5B] capitalize py-7'>{property}</h1>
        <p className="text-gray-400">Explore {property} buildings</p>
        <p className="text-white py-7">{propertyData.length} properties</p>

        {/* Grid container for property cards */}
        <div className='grid w-full h-full grid-cols-3 gap-3 items-center justify-center'>
          {propertyData.map((item) => (
            <PageCard
              id={item.id}
              icon={item.icon} // Ensure the correct prop type
              location={item.location}
              route={`/property/${item.title.toLowerCase().replace(/ /g, '-')}`}
              description={item.description}
              title={item.title}
              property={property}

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
