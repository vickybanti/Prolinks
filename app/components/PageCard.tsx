import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


const PageCard = ({propertyLabel, title, description,icon, location, route }:{
    id:number;
    title:string;
    propertyLabel?:string;
    description?:string;
    property?:string;
    location?:string;
    route:string;
    icon:string;
    }) => {
  return (
  
        <div className="flex flex-col h-full bg-white/5">
      <Link href={route}>

        <div className="h-[300px] w-[100%] relative ">

        <Image src={icon} alt={title} className="object-cover" fill/>
        <div className="absolute flex justify-end w-full gap-2 pr-6 top-4">
       {propertyLabel && <p className={`text-white ${propertyLabel === 'residentials' ? 'bg-[#4d964d]' :propertyLabel === 'commercial' ? 'bg-blue-400':'bg-red-950'} px-1 py-1 text-[10px] uppercase`}>{propertyLabel}</p>}
        </div>
        
        
        

        </div>
        <div className="px-2 py-4">
        <p className='text-lg uppercase text-[#A08C5B] '>{location}</p>
        <p className='text-xs text-gray-300'>{description}</p>
        </div>
        </Link>

      </div>
    


  )
}

export default PageCard