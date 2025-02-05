import PageCard from '@/app/components/PageCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb"





import React from 'react';
import { COMPLETED,ONGOING } from '@/app/constants';

const Page = async({ params }: { params: { project: string } }) => {
  const { project } = await params;

  // Determine the correct dataset based on property type
  const propertyData =
    project === "completed" ? COMPLETED :
    project === "ongoing" ? ONGOING :
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
              <BreadcrumbPage className="text-white">{project}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>


        <h1 className='text-2xl text-[#A08C5B] capitalize py-7'>{project} Projects</h1>
        <p className="text-gray-400 py-7">{project.length} properties</p>

        {/* Grid container for property cards */}
        <div className='grid items-center justify-center w-full h-full grid-cols-3 gap-3'>
          {propertyData.map((item) => (
            <PageCard
              id={item.id}
              key={item.id}
              icon={item.icon} // Ensure the correct prop type
              location={item.location}
              route={`/property/${item.title.toLowerCase().replace(/ /g, '-')}`}
              description={item.description}
              title={item.title}
              property={project}
              status={project}

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
