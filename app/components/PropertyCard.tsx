import Footer from '@/app/components/Footer';
import { Navbar } from '@/app/components/Navbar';
import Image from 'next/image';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



const PropertyCard = ({ label, description, images,src,alt}:{
    label:string;
    description:string;
    images? :string[];
    src:any;
    alt?:string;


}) => {
  return (
    <div className='mt-20 overflow-hidden'>
      <Navbar />
    <div className='flex flex-col w-screen h-screen px-10 py-10'>
    <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/projects/completed">{label}</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>{label}</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>


      <h1 className='text-2xl text-[#A08C5B] py-3'>{label}</h1>
      <div className='flex items-center gap-3'>
        <p className='p-2 text-sm font-semibold text-white bg-green-600'>
          Featured
        </p>

        <p className='p-2 text-sm font-semibold text-white bg-orange-500'>
          Featured
        </p>

        <p className='p-2 text-sm font-semibold text-white bg-green-600'>
          Featured
        </p>
      </div>
      <div className='w-full h-full px-5'>
        <div className='flex justify-between w-full gap-3 my-10'>
        
                
           
          <><div className='w-full h-full'>

                <Image src={src[0]} width={600} height={600} className='object-cover w-full h-[120%]' alt={label} />
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
                    <Image src={src[1]} width={500} height={250} className='object-cover w-full h-full' alt={label} />
                    <Image src={src.length > 2 ? src[2] : src[1]} width={500} height={250} className='object-cover w-full h-full' alt={label} />
                </div>
                
                </>
    
      </div>

      

      </div>

     
    </div>
    <div className='w-full h-full px-20 mt-96'>
<h1 className='py-10 text-2xl text-white'>DESCRIPTION</h1>
<p className='py-10 text-sm text-white'>
  {description}
</p>
</div>
    <Footer />
    </div>
  );
};

export default PropertyCard;