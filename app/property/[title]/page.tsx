"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { commercial, residentials, educational } from '@/app/constants';
import PropertyCard from '@/app/components/PropertyCard';

const PropertyPage = () => {
  const params = useParams();
  const title = Array.isArray(params.title) ? params.title[0] : params.title;
  const allProperties = [...commercial, ...residentials, ...educational];

  interface PropertyData {
    title: string;
    description: string;
    icon: string;
    location: string;
    route: string;
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
  }, [title, allProperties]);

  if (!propertyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>label, description, images, src, alt
      <PropertyCard 
      
      label={propertyData.title}
      description={propertyData.description}
      src={propertyData.images.map((img)=>img.src)}
      alt={propertyData.title}
      />
      </div>
  );
};

export default PropertyPage;