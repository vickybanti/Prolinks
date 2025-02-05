import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


const PageCard = ({status,propertyLabel, title, description,icon, location, route }:{
    id:number;
    title:string;
    propertyLabel?:string;
    description?:string;
    property?:string;
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
        
        <div className="absolute flex justify-end w-full gap-2 pr-6 top-4">
        <p className="p-2 text-xs text-white bg-black/60">{status}</p>
       {propertyLabel && <p className="text-white bg-[green] p-2 text-xs">{propertyLabel}</p>}
        </div>
        

        </div>
        <p className='text-lg text-[#A08C5B] p-3'>{location}</p>
        <p className='p-3 text-xs text-gray-300'>{description}</p>
        </Link>

      </div>
    


  )
}

export default PageCard