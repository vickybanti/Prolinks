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
          route: "/projects/ongoing",
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
          route: "/property-type/admin",
          icon: "/assets/icons/image.svg",
          productItems: [
            {
              title: "Hallmark University project",
              href: `/property/osun-project`,
              src: "/assets/completed/Hallmark-1280x720.jpg",
              description: "Check out educational projects",
              route:"/property-type/admin"
            },
            {
              title: "Western gate",
              href: "/property-type/residentials",
              src: "/assets/completed/Westgate Area capture.png",
              description:
                "Check out shopping projects",
              route:"/property-type/residentials"
            },
            {
              title: "Ikoyi project",
              href: "https://gomoonbeam.com",
              src: "/assets/completed/commercial/Lascofedd.jpg",
              description: "Check out commercial/office projects.",
              route:"/property-type/commercial"
            },
            {
              title: "Orimolade project",
              href: "/property-type/commercial",
              src: "/assets/completed/New Orimolad.jpg",
              route:"/property-type/shopping",
              description:
                "Check out residential projects",
            },
          ],
        },

      
      
    
    {
      id:4,
      label: "Properties",
      route: "/property-type/duplex",
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

  export const residentials = [
    {
      id:1,
      title: "Orimolade project",
      route: "/property/orimolade",
      icon: "/assets/completed/residentials/NewOrimolad.jpg",
      description: "5 Bedroom semi detached duplex with a basementAnd roof-top garden.",
      location:"Orimolade Estate, Adeniyi Jones Avenue, Ikeja, Lagos",      
      images:[
        {
          src:"/assets/completed/residentials/NewOrimolad.jpg",
          alt:"Orimolade project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        },
        {
          src:"/assets/completed/residentials/NewOrimoladee.jpg",
          alt:"Orimolade project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        
        }    

    ]
      
    },

    {
      id:2,
      title: "Ikorodu project",
      route: "/property/Ikorodu",
      icon: "/assets/completed/residentials/duplex1.jpg",
      description: "5 Bedroom semi detached duplex with a basementAnd roof-top garden.",
      location:"OrimoladeEstate, Adeniyi Jones Avenue, Ikeja, Lagos",      
      images:[
        {
          src:"/assets/completed/residentials/duplex2.jpg",
          alt:"Ikorodu project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        
        },
        {
          src:"/assets/completed/residentials/duplex1.jpg",
          alt:"Ikorodu project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        
        }
        
      
    ]
      
    },

    {
      id:2,
      title: "5 bedroom duplex",
      route: "/property/ipaja",
      icon: "/assets/completed/residentials/dertyuio.jpg",
      description: "5 Bedroom duplex .",
      location:" Command Ipaja, Lagos",      
      images:[
        {
          src:"/assets/completed/residentials/dertyuio.jpg",
          alt:"Ipaja project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        },
        {
          src:"/assets/completed/residentials/dghjh.jpg",
          alt:"Ipaja project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        },
        {
          src:"/assets/completed/residentials/drtyujk.jpg",
          alt:"Ipaja project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        }      

    ]
      
    },
  ]
  
  export const commercial = [
    {
      id:1,
      title: "Ogba project",
      route: "/property/ogba",
      icon: "/assets/completed/commercial/ogba.jpg",
      description: "COLITYSTUDIOS, DM AUDIOVISUALS  MANUFACTURES .",
      location:" OGBA, LAGOS STATE",      
      images:[
        {
          src:"/assets/completed/commercial/ogba.jpg",
          alt:"Ogba project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",

        },

        {
          src:"/assets/completed/commercial/office.jpg",
          alt:"Ogba project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",

        },
       
    ]
    },

    {
      id:2,
      title: "Lascofedd project",
      route: "/property/lascofedd",
      icon: "/assets/completed/commercial/Lascofedd.jpg",
      description: "LAGOS STATE CO-OPERATIVE FEDERATION (LASCOFED) MIXED-USE BUILDING .",
      location:"  WEMPCOROAD, OGBA, LAGOSSTATE",      
      images:[
        {
          src:"/assets/completed/commercial/Lascofedd.jpg",
          alt:"Lascofedd project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        },
        {
          src:"/assets/completed/commercial/office1.jpg",
          alt:"Lascofedd project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        },

        {
          src:"/assets/completed/commercial/office2.jpg",
          alt:"Lascofedd project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        }       
        
        
    ]
    }
  ]
 

  export const educational = [

    {
      id:1,
      title: "Hallmark university projects ",
      route: "/property/Hallmark",
      icon: "/assets/completed/admin/Hallmark.jpg",
      description: "ADMINISTRATIVE BLOCK AND RESEARCH CENTER AT HALLMARK UNIVERSITY",
      location:" JEBU ITELE, OGUN STATE",      
      images:[
        {
          src:"/assets/completed/admin/Hallmark.jpg",
          alt:"Hallmark project",
          title: "Hallmark unoversity administrative building",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        },

        {
          src:"/assets/completed/admin/research.jpg",
          alt:"Hallmark project",
          title: "Hallmark university Research center",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        },

        {
          src:"/assets/completed/admin/Library.jpg",
          alt:"Library project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        }
        
    ]
    },
    {
      id:2,
      title: "Library ",
      route: "/property/library",
      icon: "/assets/completed/admin/89.jpg",
      description: "Facaulty of law library at Ilorin",
      location:" Ilorin, Kwara STATE",      
      images:[
        {
          src:"/assets/completed/admin/Library.jpg",
          alt:"Library project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        },

        {
          src:"/assets/completed/admin/Library.jpg",
          alt:"Library project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        },

        {
          src:"/assets/completed/admin/Library.jpg",
          alt:"Library project",
          title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        }
        
    ]
    },

    {
      id:3,
      title: "Osun project",
      route: "/property/laboratory",
      icon: "/assets/completed/admin/frontnear.jpg",
      description: "Engineering Laboratory, Department of Civil Engineering .",
      location:" Federal Polytechnic Ede, Ede, Osun State",      
      images:[
        {
        src:"/assets/completed/admin/frontnear.jpg",
        alt:"Osun project",
        title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
      },  
      {
        src:"/assets/completed/admin/trtr.jpg",
        alt:"Osun project",
        title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
      },
      {
        src:"/assets/completed/admin/perspective.jpg",
        alt:"Osun project",
        title: "Orimolade project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
      }     
      
      
    ]
    }
  ]
 
  
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