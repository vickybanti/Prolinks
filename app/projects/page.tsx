"use client";
import { COMPLETED } from '@/app/constants';
import PageCard from '@/app/components/PageCard';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/app/components/ui/breadcrumb";
import { useMediaQuery } from "../hooks/use-media-query";

const ProjectPage = () => {
//   const params = useParams();
//   const project = Array.isArray(params.project) ? params.project[0] : params.project;
//   const allProperties = [
//     ...commercial.map((item) => ({ ...item, propertyType: item.propertyType || 'commercial' })),
//     ...residentials.map((item) => ({ ...item, propertyType: item.propertyType || 'residential' })),
//     ...educational.map((item) => ({ ...item, propertyType: item.propertyType || 'educational' })),
//   ];

//   interface PropertyData {
//     id: number;
//     title: string;
//     description: string;
//     icon: string;
//     location: string;
//     route: string;
//     propertyType: string;
//     images: { src: string; alt: string; title: string; firstButton: string; secondButton: string; firstColour: string; secondColour: string; }[];
//   }

//   const [propertyData, setPropertyData] = useState<PropertyData[]>([]);

//   useEffect(() => {
//     const filteredProperties = allProperties.filter(
//       (item) => project && item.propertyType.toLowerCase() === project.toLowerCase()
//     );
//     setPropertyData(filteredProperties);
//   }, [project]);

//   if (!propertyData.length) {
//     return <div>Loading...</div>;
//   }

const isDesktop = useMediaQuery("(min-width: 780px)");


  return (
    <div className={`${!isDesktop && 'px-4'} 2xl:px-20 lg:px-20 py-44 overflow-hidden text-white`}>
      <div className='2xl:px-10 lg:px-10'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className='text-gray-700'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-700">Properties</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className='text-2xl text-[#CC5500] capitalize py-7'>Completed Projects</h1>
        <p className="text-gray-600 py-7">{COMPLETED.length} properties</p>

        {/* Grid container for property cards */}
        <div className={`${!isDesktop && 'flex flex-col w-full px-1'} 2xl:grid lg:grid 2xl:items-center lg:items-center 2xl:justify-center lg:justify-center w-full h-full 2xl:grid-cols-3 lg:grid-cols-3 gap-3`}>
          {COMPLETED.map((item) => (
            <PageCard
              id={item.id}
              key={item.id}
              icon={item.icon} // Ensure the correct prop type
              location={item.location}
              route={`/property/${item.title.toLowerCase().replace(/ /g, '-')}`}
              description={item.description}
              title={item.title}
              property={item.propertyType}
              propertyLabel={item.propertyType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;