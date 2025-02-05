import PageCard from '@/app/components/PageCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb"



import {motion} from "framer-motion"

import React from 'react';
import { commercial, residentials, educational,shopping } from '@/app/constants';

const page = async({ params }: { params: { property: string } }) => {
  const { property } = await params;

  // Determine the correct dataset based on property type
  const propertyData =
    property === "commercial" ? commercial :
    property === "residentials" ? residentials :
    property === "educational" ? educational :
    property === "shopping" ? shopping:
    [];

  return (
    <div className='px-20 mt-20 overflow-hidden text-white'>
      <div className='px-10 py-10'>

            <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
           
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">{property}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>


        <h1 className='text-2xl text-[#A08C5B] capitalize py-7'>{property} Projects</h1>
        <p className="text-gray-400">Explore {property} buildings</p>
        <p className="text-gray-400 py-7">{propertyData.length} properties</p>

        {/* Grid container for property cards */}
        <motion.div 
       initial={{ x: -30, opacity: 0.2 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ ease: "easeInOut", duration: 1.5 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: false }}
           className='grid items-center justify-center w-full h-full grid-cols-3 gap-3'>
          {propertyData.map((item) => (
            <PageCard
              key={item.id}
              id={item.id}
              icon={item.icon} // Ensure the correct prop type
              location={item.location}
              route={`/property/${item.title.toLowerCase().replace(/ /g, '-')}`}
              description={item.description}
              title={item.title}
              property={property}
              propertyLabel={property}
              status='Completed'

            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default page;
