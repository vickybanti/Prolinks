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

const isDesktop = useMediaQuery("(min-width: 768px)");


  return (
    <div className={`${!isDesktop && 'work'} px-32 py-44 overflow-hidden text-white`}>
      <div className='px-10'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">Properties</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className='text-2xl text-[#A08C5B] capitalize py-7'>Completed Projects</h1>
        <p className="text-gray-400 py-7">{COMPLETED.length} properties</p>

        {/* Grid container for property cards */}
        <div className={`${!isDesktop && 'projectGrid'} grid items-center justify-center w-full h-full grid-cols-3 gap-3`}>
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
              status={item.propertyType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;