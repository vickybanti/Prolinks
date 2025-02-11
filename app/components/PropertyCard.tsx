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
  const isDesktop = useMediaQuery("(min-width: 820px)");

  return (
    <div className='mt-24 overflow-hidden'>
      <div className='flex flex-col w-screen h-auto px-10 py-10'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/property-type/${propertyType}`}>{propertyType}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">{label}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className='text-2xl text-[#A08C5B] py-3'>{label}</h1>
        <div className='flex items-center gap-3'>
          <p className='p-2 text-xs text-white bg-orange-500'>{propertyType}</p>
          <p className='p-2 text-xs text-white bg-green-600'>Completed</p>
        </div>

        {/* Image Section */}
        <div className={`w-full px-5 my-10 ${isDesktop ? 'flex gap-3' : 'flex flex-col items-center'}`}>
          {/* Main Image */}
          <div className='w-full md:w-2/3 2xl:w-2/3'>
            <Image 
              src={src[0]} 
              width={800} 
              height={500} 
              className='object-cover w-full h-[400px] rounded-lg' 
              alt={label} 
            />
          </div>

          {/* Secondary Images */}
          <div className='hidden md:flex md:flex-col md:w-1/3 gap-3 2xl:flex 2xl:flex-col 2xl:w-1/3 2xl:gap-3'>
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
      <div className='w-full px-10 md:px-20 py-5'>
        <h1 className='py-5 text-2xl text-white'>DESCRIPTION</h1>
        <p className='text-sm text-white'>{description}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
