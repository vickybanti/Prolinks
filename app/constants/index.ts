import { Content } from "next/dist/compiled/@next/font/dist/google";
import { HoveredLink, ProductItem } from "../components/ui/NavbarMenu";

export const NAVLINKS = [
    {
      label: "Homepage",
      route: "/",
      icon: "/assets/icons/home.svg",
    },
      
        {
          id:1,
          label: "Ongoing",
          route: "#",
          icon: "/assets/icons/image.svg",
          productItems: [
            {
              id:1,
              title: "Algochurn",
              href: "#",
              src: "/assets/ongoing/PIC 3 Research centre Hallmark University Ijebu Itele.jpg",
              description: "Prespective view of ongoing project at Hallmark University",
            },
            {
              id:2,
              title: "Orimolade project 1",
              href: "https://tailwindmasterkit.com",
              src: "/assets/ongoing/New Orimolade_Scene 1.jpg",
              description:"Prespective view of ongoing orimolade project",
            },
            {
              id:3,
              title: "Ogba project",
              href: "https://gomoonbeam.com",
              src: "/assets/2 Colity Studio Kayode st Ogba.jpg",
              description: "Perspective view of ongoing ogba project.",
            },

            {
              id:4,
              title: "Ogba project 2",
              href: "https://gomoonbeam.com",
              src: "/assets/ongoing/trtr.jpg",
              description: "Perspective view of department of civil engineering admin building at Hallmark University.",
            },
            
          ],
        },


         {
          label: "Completed",
          route: "#",
          icon: "/assets/icons/image.svg",
          productItems: [
            {
              id:1,
              title: "Hallmark University project",
              href: "https://algochurn.com",
              src: "/assets/completed/Hallmark-1280x720.jpg",
              description: "Hallmark projects",
            },
            {
              id:2,
              title: "Western gate",
              href: "https://tailwindmasterkit.com",
              src: "/assets/completed/Westgate Area capture.png",
              description:
                "Western gate tower",
            },
            {
              id:3,
              title: "Ikoyi project",
              href: "https://gomoonbeam.com",
              src: "/assets/completed/IMG-20190916-WA0022.jpg",
              description: "Ikoyi tower project.",
            },
            {
              id:4,
              title: "Orimolade project",
              href: "https://userogue.com",
              src: "/assets/completed/New Orimolad.jpg",
              description:
                "Respond to government RFPs, RFIs and RFQs 10x faster using AI.",
            },
          ],
        },

      
      
    
    {
      id:2,
      label: "Properties",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.svg",
      
      
    },

    {
      id:3,
      label: "Services",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.svg",
     
      
    },

    {id:4,
      label: "About",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.svg",
      
    },
    
  ];
  
  export const cards =[{
    id: 1,
    content: "This is the first card.",
    thumbnail: "./assets/5.jpg",
    className: "bg-white",
  },
 
  {
    id: 3,
    content: "A simple text card.",
    thumbnail: "./assets/3.jpg",
  },
];
  
  export const transformationTypes = {
    restore: {
      type: "restore",
      title: "Restore Image",
      subTitle: "Refine images by removing noise and imperfections",
      config: { restore: true },
      icon: "image.svg",
    },
    removeBackground: {
      type: "removeBackground",
      title: "Background Remove",
      subTitle: "Removes the background of the image using AI",
      config: { removeBackground: true },
      icon: "camera.svg",
    },
    fill: {
      type: "fill",
      title: "Generative Fill",
      subTitle: "Enhance an image's dimensions using AI outpainting",
      config: { fillBackground: true },
      icon: "stars.svg",
    },
    remove: {
      type: "remove",
      title: "Object Remove",
      subTitle: "Identify and eliminate objects from images",
      config: {
        remove: { prompt: "", removeShadow: true, multiple: true },
      },
      icon: "scan.svg",
    },
    recolor: {
      type: "recolor",
      title: "Object Recolor",
      subTitle: "Identify and recolor objects from the image",
      config: {
        recolor: { prompt: "", to: "", multiple: true },
      },
      icon: "filter.svg",
    },
  };
  
  export const aspectRatioOptions = {
    "1:1": {
      aspectRatio: "1:1",
      label: "Square (1:1)",
      width: 1000,
      height: 1000,
    },
    "3:4": {
      aspectRatio: "3:4",
      label: "Standard Portrait (3:4)",
      width: 1000,
      height: 1334,
    },
    "9:16": {
      aspectRatio: "9:16",
      label: "Phone Portrait (9:16)",
      width: 1000,
      height: 1778,
    },
  };
  
  export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
  };
  
  export const creditFee = -1;