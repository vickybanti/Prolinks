import { Content } from "next/dist/compiled/@next/font/dist/google";
import { HoveredLink, ProductItem } from "../components/ui/NavbarMenu";

export const NAVLINKS = [
    {
      id:1,
      label: "Homepage",
      route: "/",
      icon: "/assets/icons/home.svg",
    },
      
        {
          id:2,
          label: "Ongoing",
          route: "#",
          icon: "/assets/icons/image.svg",
          productItems: [
            {
              title: "Algochurn",
              href: "#",
              src: "/assets/ongoing/PIC 3 Research centre Hallmark University Ijebu Itele.jpg",
              description: "Prespective view of ongoing project at Hallmark University",
            },
            {
              title: "Orimolade project 1",
              href: "https://tailwindmasterkit.com",
              src: "/assets/ongoing/New Orimolade_Scene 1.jpg",
              description:"Prespective view of ongoing orimolade project",
            },
            {
              title: "Ogba project",
              href: "https://gomoonbeam.com",
              src: "/assets/2 Colity Studio Kayode st Ogba.jpg",
              description: "Perspective view of ongoing ogba project.",
            },

            {
              title: "Ogba project 2",
              href: "https://gomoonbeam.com",
              src: "/assets/ongoing/trtr.jpg",
              description: "Perspective view of department of civil engineering admin building at Hallmark University.",
            },
            
          ],
        },


         {
          id:3,
          label: "Completed",
          route: "#",
          icon: "/assets/icons/image.svg",
          productItems: [
            {
              title: "Hallmark University project",
              href: "https://algochurn.com",
              src: "/assets/completed/Hallmark-1280x720.jpg",
              description: "Hallmark projects",
            },
            {
              title: "Western gate",
              href: "https://tailwindmasterkit.com",
              src: "/assets/completed/Westgate Area capture.png",
              description:
                "Western gate tower",
            },
            {
              title: "Ikoyi project",
              href: "https://gomoonbeam.com",
              src: "/assets/completed/IMG-20190916-WA0022.jpg",
              description: "Ikoyi tower project.",
            },
            {
              title: "Orimolade project",
              href: "https://userogue.com",
              src: "/assets/completed/New Orimolad.jpg",
              description:
                "Respond to government RFPs, RFIs and RFQs 10x faster using AI.",
            },
          ],
        },

      
      
    
    {
      id:4,
      label: "Properties",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.svg",
      
      
    },

    {
      id:5,
      label: "Services",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.svg",
     
      
    },

    {
      id:6,
      label: "About",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.svg",
      
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
  
  export const FOOTERLINKS=[
    {
      id:1,
      "title":"Main menu",
      "subTitle":[
        {
        id:1,
        label:"About"
      },

      {
        id:2,
        label:"Properties"
      },

      {
        id:3,
        label:"Privacy policy"
      },
    ]

     
    },

    {
      id:2,
      "title":"Featured",
      "subTitle":[
        {
          id:1,
          label:"Hallmark"
        },
        {
          id:2,
          label:"West gate"
        },
        {
          id:3,
          label:"Lekki"
        },
        {
          id:4,
          label:"Ikoyi"
        },
      ]
    },
    {
      id:2,
      "title":"Explore",
      "subTitle":[
        {
          id:1,
          label:"Search"
        },
        {
          id:2,
          label:"Ongoing"
        },
        {
          id:3,
          label:"Completed"
        },
       
      ]
    },


   


  ]