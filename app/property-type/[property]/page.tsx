"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { commercial, residentials, educational, shopping } from '@/app/constants';
import PageCard from '@/app/components/PageCard';
import { motion } from 'framer-motion';

const PropertyPage = () => {
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
    <div className='px-20 mt-20 overflow-hidden text-white'>
      <div className='px-10 py-10'>
        <h1 className='text-2xl text-[#A08C5B] capitalize py-7'>{property}</h1>
        <p className="text-gray-400">Explore {property} buildings</p>
        <p className="text-white py-7">{propertyData.length} properties</p>

        <motion.div
          initial={{ x: -30, opacity: 0.2 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className='grid w-full h-full grid-cols-3 gap-8 mx-auto my-4'
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
