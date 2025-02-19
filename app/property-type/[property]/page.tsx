"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { commercial, residentials, educational, shopping } from '@/app/constants';
import PageCard from '@/app/components/PageCard';
import { motion } from 'framer-motion';
import { useMediaQuery } from "@/app/hooks/use-media-query";


const PropertyPage = () => {
  const isDesktop = useMediaQuery("(min-width: 780px)");
    const params = useParams();
  const property = Array.isArray(params.property) ? params.property[0] : params.property || '';
  const allProperties = [
    ...commercial.map((item) => ({ ...item, propertyType: item.propertyType || 'commercial' })),
    ...residentials.map((item) => ({ ...item, propertyType: item.propertyType || 'residential' })),
    ...educational.map((item) => ({ ...item, propertyType: item.propertyType || 'educational' })),
    ...shopping.map((item) => ({ ...item, propertyType: item.propertyType || 'shopping' })),

  ];

  interface PropertyData {
    id: number;
    title: string;
    description: string;
    icon: string;
    location: string;
    route: string;
    propertyType: string;
    images: { src: string; alt: string; title: string; firstButton: string; secondButton: string; firstColour: string; secondColour: string; }[];
  }

  const [propertyData, setPropertyData] = useState<PropertyData[]>([]);

  useEffect(() => {
    const filteredProperties = allProperties.filter(
      (item) => item.propertyType.toLowerCase() === property.toLowerCase()
    );
    setPropertyData(filteredProperties);
  }, [property]);

  if (!propertyData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${!isDesktop && 'work'} 2xl:px-20 lg:px-20 mt-20 overflow-hidden text-white`}>
      <div className={`py-10 ${!isDesktop && 'px-2'}`}>
        <h1 className='text-2xl text-[#CC5500] capitalize py-7'>{property} Projects</h1>
        <p className="text-gray-400">Explore {property} buildings</p>
        <p className="text-white py-7">{propertyData.length} properties</p>

        <motion.div
          initial={{ x: -30, opacity: 0.2 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className={`grid w-full h-full grid-cols-3 gap-8 my-4 ${!isDesktop && 'projectGrid'}`}
        >
          {propertyData.map((item) => (
            <PageCard
              key={item.id}
              id={item.id}
              icon={item.icon}
              location={item.location}
              route={`/property/${item.title.toLowerCase().replace(/ /g, '-')}`}
              description={item.description}
              title={item.title}
              property={property}
              propertyLabel={property}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PropertyPage;
