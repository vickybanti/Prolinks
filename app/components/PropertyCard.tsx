"use client"
import Image from 'next/image';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";
import { useMediaQuery } from "../hooks/use-media-query";

const PropertyCard = ({ label, description, src, propertyType }: {
  label: string;
  description: string;
  images?: string[];
  src: string[];
  alt?: string;
  propertyType: string;
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className={`mt-24 overflow-hidden 2xl:mt-32 `}>
      <div className={`flex flex-col w-screen h-auto 2xl:px-20 lg:px-20 py-10 ${!isDesktop && 'px-4 min-w-[100%]'}`}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-gray-500">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/property-type/${propertyType}`}>{propertyType}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium text-gray-900">{label}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className='text-2xl text-[#CC5500] py-3'>{label}</h1>
        <div className='flex items-center gap-3'>
        {propertyType && <p className={`text-white p-2 ${propertyType === 'residentials' ? 'bg-green-950' : propertyType === 'commercial' ? 'bg-red-950' : propertyType === 'educational' ? 'bg-purple-800' : 'bg-[#020408]'} text-xs uppercase`}>{propertyType}</p>} 
        <p className='p-2 text-xs text-white bg-gray-600'>Completed</p>
        </div>

        {/* Image Section */}
        <div className={`w-full my-10 2xl:mt-20 ${isDesktop ? 'flex gap-3' : 'flex flex-col items-center'}`}>
          {/* Main Image */}
          <div className='w-full md:w-2/3 2xl:w-2/3 lg:w-2/3'>
            <Image 
              src={src[0]} 
              width={800} 
              height={410} 
              className='object-cover w-full h-[410px] rounded-lg' 
              alt={label} 
            />
          </div>

          {/* Secondary Images */}
          <div className='hidden gap-3 md:flex md:flex-col md:w-1/3 2xl:flex 2xl:flex-col 2xl:w-1/3 2xl:gap-3'>
            {src.length > 1 && (
              <Image 
                src={src[1]} 
                width={400} 
                height={200} 
                className='object-cover w-full h-[200px] rounded-lg' 
                alt={label} 
              />
            )}
            {src.length > 2 ? (
              <Image 
                src={src[2]} 
                width={400} 
                height={200} 
                className='object-cover w-full h-[200px] rounded-lg' 
                alt={label} 
              />
            )
          :
           (
            <Image 
              src={src[0]} 
              width={400} 
              height={200} 
              className='object-cover w-full h-[200px] rounded-lg' 
              alt={label} 
            />
          )

          }
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className={`w-full py-10 2xl:px-20 lg:px-20 ${!isDesktop && 'px-4'}`}>
        <h1 className='py-5 text-2xl text-black'>DESCRIPTION</h1>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
