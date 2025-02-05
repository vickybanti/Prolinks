"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { commercial, residentials, educational } from '@/app/constants';
import PropertyCard from '@/app/components/PropertyCard';
import {motion} from "framer-motion"

const PropertyPage = () => {
  const params = useParams();
  const title = Array.isArray(params.title) ? params.title[0] : params.title;
  const allProperties = [
    ...commercial.map((item) => ({ ...item, propertyType: item.propertyType || 'commercial' })),
    ...residentials.map((item) => ({ ...item, propertyType: item.propertyType || 'residential' })),
    ...educational.map((item) => ({ ...item, propertyType: item.propertyType || 'educational' })),
  ];

  interface PropertyData {
    title: string;
    description: string;
    icon: string;
    location: string;
    route: string;
    propertyType: string;
    images: { src: string; alt: string; title: string; firstButton: string; secondButton: string; firstColour: string; secondColour: string; }[];
  }

  const [propertyData, setPropertyData] = useState<PropertyData | null>(null);

  useEffect(() => {
    const property = allProperties.find(
      (item) => title && item.title.toLowerCase().replace(/ /g, '-') === title.toLowerCase().replace(/ /g, '-')
    );
    if (property) {
      setPropertyData(property);
    } else {
      console.log('Property not found');
    }
  }, [title]); // Remove allProperties from the dependency array

  if (!propertyData) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div 
    initial={{ x: -30, opacity: 0.2 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 1.5 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false }}>
      <PropertyCard 
        label={propertyData.title}
        description={propertyData.description}
        src={propertyData.images.map((img) => img.src)}
        alt={propertyData.title}
        propertyType={propertyData.propertyType}
      />
    </motion.div>
  );
};

export default PropertyPage;