import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const PageCard = ({ title, description,icon, location, route,id,property }:{
    id:number;
    title:string;
    description:string;
    property:any;
    location:string;
    route:string;
    icon:string;
    }) => {
  return (
  
        <div className="flex flex-col items-center h-full bg-white/5">
      <Link href={route}>

        <div className="relative h-[300px] w-[100%] ">

        <Image src={icon} alt={title} className="object-cover" fill/>


        </div>
        <p className='text-lg text-[#A08C5B] p-3'>{location}</p>
        <p className='text-gray-300 text-xs p-3'>{description}</p>
        </Link>

      </div>
    


  )
}

export default PageCard