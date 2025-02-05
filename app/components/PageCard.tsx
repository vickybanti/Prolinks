import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const PageCard = ({status,propertyLabel, title, description,icon, location, route,id,property }:{
    id:number;
    title:string;
    propertyLabel?:string;
    description?:string;
    property?:any;
    location?:string;
    route:string;
    icon:string;
    status?:string;
    }) => {
  return (
  
        <div className="flex flex-col items-center h-full bg-white/5">
      <Link href={route}>

        <div className="relative h-[300px] w-[100%] ">

        <Image src={icon} alt={title} className="object-cover" fill/>
        
        <div className="absolute top-4 flex w-full justify-end pr-6 gap-2">
        <p className="text-white bg-black/60 p-2 text-xs">{status}</p>
       {propertyLabel && <p className="text-white bg-[green] p-2 text-xs">{propertyLabel}</p>}
        </div>
        

        </div>
        <p className='text-lg text-[#A08C5B] p-3'>{location}</p>
        <p className='text-gray-300 text-xs p-3'>{description}</p>
        </Link>

      </div>
    


  )
}

export default PageCard