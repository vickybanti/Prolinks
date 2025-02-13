export const COMPLETED = [
  {
    id:1,
      propertyType:"residentials",
      title: "Orimolade project",
      route: "/property/orimolade",
      icon: "/assets/completed/residentials/NewOrimolad.jpg",
      description: "5 Bedroom semi detached duplex with a basement and roof-top garden.",
      location:"Orimolade Estate, Adeniyi Jones Avenue, Ikeja, Lagos",      

  },
  {
    id:2,
      title: "Ikorodu project",
      propertyType:"residentials",
      route: "/property/Ikorodu",
      icon: "/assets/completed/residentials/duplex1.jpg",
      description: "5 Bedroom semi detached duplex with a basement and roof-top garden.",
      location:"Orimolade Estate, Adeniyi Jones Avenue, Ikeja, Lagos",      

  },
  {
    id:3,
    title: "5 bedroom duplex",
    propertyType:"residentials",
    route: "/property/ipaja",
    icon: "/assets/completed/residentials/dertyuio.jpg",
    description: "5 Bedroom duplex .",
    location:" Command Ipaja, Lagos",  
  },
  {
    id:4,
      propertyType:"commercial",
      title: "Ogba project",
      route: "/property/ogba",
      icon: "/assets/Ogba.jpg",
      description: "COLITY STUDIOS, DM AUDIO VISUALS  MANUFACTURES .",
      location:" OGBA, LAGOS STATE",  
  },
 
  {
    id:6,
    title: "Lascofedd project",
    propertyType:"commercial",
    route: "/property/lascofedd",
    icon: "/assets/completed/commercial/Lascofedd.jpg",
    description: "LAGOS STATE CO-OPERATIVE FEDERATION (LASCOFED) MIXED-USE BUILDING .",
    location:"  WEMPCO ROAD, OGBA, LAGOS STATE", 
  },

  {
    id:7,
    propertyType:"educational",
    title: "Hallmark university projects ",
    route: "/property/Hallmark",
    icon: "/assets/completed/admin/Hallmark.jpg",
    description: "ADMINISTRATIVE BLOCK AND RESEARCH CENTER AT HALLMARK UNIVERSITY",
    location:" JEBU ITELE, OGUN STATE",    
  },
  {
    id:8,
    title: "Library ",
    propertyType:"educational",
    route: "/property/library",
    icon: "/assets/completed/admin/89.jpg",
    description: "Facaulty of law library at Ilorin",
    location:" Ilorin, Kwara STATE", 
  },
  {
    id:9,
    title: "Osun project",
    propertyType:"educational",
    route: "/property/laboratory",
    icon: "/assets/completed/admin/frontnear.jpg",
    description: "Engineering Laboratory, Department of Civil Engineering .",
    location:" Federal Polytechnic Ede, Ede, Osun State",      
  },
  {
    id:10,
    propertyType:"Shopping",
    title: "WESTGATE SUPERMARKET AND PHARMACY",
    route: "/property/west-gate-supermarket-and-pharmacy",
    icon: "/assets/completed/shopping/IMG-20190916-WA0022.jpg",
    description: "WESTGATE SUPERMARKET AND PHARMACY",
    location:"OLOWOORA, MAGODO, LAGOS.",      
  },
  {
    id:11,
    propertyType:"Shopping",
    title: "CMART PHARMACY AND SUPERMARKET",
    route: "/property/cmart-supermarket-and-pharmacy",
    icon: "/assets/completed/shopping/20210917_122818.jpg",
    description: "CMART SUPERMARKET AND PHARMACY",
    location:"ABOYA DACOLE,  LEKKI PHASE 1, LAGOS", 
  }
]

export const ONGOING = [
  {
    id:1,
    title: "Algochurn",
    route: "/property/A",
    icon: "/assets/ongoing/1.jpg",
    description: "Prespective view of ongoing project at Hallmark University",
    location:" Federal Polytechnic Ede, Ede, Osun State",      

  },
  {
    id:2,
    title: "Orimolade project 1",
    route: "https://tailwindmasterkit.com",
    icon: "/assets/ongoing/New Orimolade_Scene 1.jpg",
    location:" Federal Polytechnic Ede, Ede, Osun State",      
    description:"Prespective view of ongoing orimolade project",
  },
  {
    id:3,
    title: "Ogba project",
    route: "https://gomoonbeam.com",
    icon: "/assets/2 Colity Studio Kayode st Ogba.jpg",
    location:" Federal Polytechnic Ede, Ede, Osun State",      
    description: "Perspective view of ongoing ogba project.",
  },

 
  
]

export const NAVLINKS = [
    
      
       

         {
          id:2,
          label: "Completed",
          route: "#",
          icon: "https://img.icons8.com/?size=100&id=60641&format=png&color=000000",
          productItems: [
            {
              title: "Engineering Laboratory University project",
              href: `/property/osun-project`,
              src: "/assets/completed/admin/89.jpg",
              description: "Check out educational projects",
              route:"/property-type/educational"
            },
            {
              title: "Western gate supermarket",
              href: "/property/west-gate-supermarket-and-pharmacy",
              src: "/assets/completed/Westgate.png",
              description:
                "Check out shopping projects",
              route:"/property-type/shopping"
            },
            {
              title: "Ikoyi project",
              href: "/property/lascofedd-project",
              src: "/assets/completed/commercial/Lascofedd.jpg",
              description: "Check out commercial/office projects.",
              route:"/property-type/commercial"
            },
            {
              title: "Orimolade project",
              href: "/property/orimolade-project",
              src: "/assets/completed/New Orimolad.jpg",
              route:"/property-type/shopping",
              description:
                "Check out residential projects",
            },
          ],
        },

      
      
    
   

    {
      id:3,
      label: "Services",
      route: "/services",
      icon: "https://img.icons8.com/?size=100&id=59992&format=png&color=000000",
     
      
    },
    {
      id:4,
      label: "Properties",
      route: "/projects",
      icon: "https://img.icons8.com/?size=100&id=61091&format=png&color=000000",
      
    },
    

    {
      id:4,
      label: "Contact",
      route: "/contact",
      icon: "https://img.icons8.com/?size=100&id=61091&format=png&color=000000",
      
    },
    
  ];

  export const residentials = [
    {
      id:1,
      propertyType:"residentials",
      title: "Orimolade project",
      route: "/property/orimolade-project",
      icon: "/assets/completed/residentials/NewOrimolad.jpg",
      description: "5 Bedroom semi detached duplex with a basement and roof-top garden.",
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
      propertyType:"residentials",
      route: "/property/Ikorodu",
      icon: "/assets/completed/residentials/duplex1.jpg",
      description: "5 Bedroom semi detached duplex with a basement and roof-top garden.",
      location:"Orimolade Estate, Adeniyi Jones Avenue, Ikeja, Lagos",      
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
      id:3,
      title: "5 bedroom duplex",
      propertyType:"residentials",
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
      propertyType:"commercial",
      title: "Ogba project",
      route: "/property/ogba-project",
      icon: "/assets/completed/commercial/ogba.jpg",
      description: "COLITY STUDIOS, DM AUDIO VISUALS  MANUFACTURES .",
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
          src:"/assets/completed/commercial/ogba.jpg",
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
      propertyType:"commercial",
      route: "/property/lascofedd",
      icon: "/assets/completed/commercial/Lascofedd.jpg",
      description: "LAGOS STATE CO-OPERATIVE FEDERATION (LASCOFED) MIXED-USE BUILDING .",
      location:"  WEMPCO ROAD, OGBA, LAGOS STATE",      
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
          src:"/assets/completed/commercial/office.jpg",
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
      propertyType:"educational",
      title: "Hallmark university projects ",
      route: "/property/Hallmark",
      icon: "/assets/completed/admin/Hallmark.jpg",
      description: "ADMINISTRATIVE BLOCK AND RESEARCH CENTER AT HALLMARK UNIVERSITY",
      location:" JEBU ITELE, OGUN STATE",      
      images:[
       
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
          src:"/assets/completed/admin/Hallmark.jpg",
          alt:"Hallmark project",
          title: "Hallmark unoversity administrative building",
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
      propertyType:"educational",
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
      propertyType:"educational",
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
 
  export const shopping = [
    {
      id:1,
      propertyType:"Shopping",
      title: "West gate supermarket and pharmacy",
      route: "property/west-gate-supermarket-and-pharmacy",
      icon: "/assets/completed/shopping/IMG-20190916-WA0022.jpg",
      description: "WESTGATE SUPERMARKET AND PHARMACY",
      location:"OLOWOORA, MAGODO, LAGOS.",      
      images:[
        {
          src:"/assets/completed/shopping/IMG-20190916-WA0022.jpg",
          alt:"West gate project",
          title: "West gate shopping and pharmacy project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        },
        {
          src:"/assets/completed/shopping/Westgate.png",
          alt:"West gate project",
          title: "West gate shopping and pharmacy project",
          firstButton:"View",
          secondButton:"View",
          firstColour: "blue",
          secondColour: "blue",
        
        }    

    ]
  },
  {
    id:2,
    propertyType:"Shopping",
    title: "cmart supermarket and pharmacy",
    route: "/property/cmart-supermarket-and-pharmacy",
    icon: "/assets/completed/shopping/20210917_122818.jpg",
    description: "CMART SUPERMARKET AND PHARMACY",
    location:"ABOYADACOLE,  LEKKIPHASE 1, LAGOS",      
    images:[
      {
        src:"/assets/completed/shopping/20210917_122818.jpg",
        alt:"cmart project",
        title: "Cmart shopping and pharmacy project",
        firstButton:"View",
        secondButton:"View",
        firstColour: "blue",
        secondColour: "blue",
      },
      {
        src:"/assets/completed/shopping/20210917_122818.jpg",
        alt:"Cmart project",
        title: "Cmart shopping and pharmacy project",
        firstButton:"View",
        secondButton:"View",
        firstColour: "blue",
        secondColour: "blue",
      
      }    
    ]
  }
]
  
  
  export const FOOTERLINKS=[
    {
      id:1,
      "title":"Main menu",
      "subTitle":[
        {
        id:5,
        label:"Services",
        route:"/services"
      },

      {
        id:2,
        label:"Properties",
        route:"/projects"
      },

      {
        id:3,
        label:"Privacy policy",
        route:"/privacy"
      },
    ]

     
    },

    {
      id:2,
      "title":"Featured",
      "subTitle":[
        {
          id:1,
          label:"Hallmark",
          href:"hallmark"
          
        },
        {
          id:2,
          label:"West gate",
          href:"west-gate-supermarket-and-pharmacy"
        },
        {
          id:3,
          label:"Iyana ipaja",
          href:"5-bedroom-duplex"
        },
        {
          id:4,
          label:"Ikorodu",
          href:"ikorodu-project"
        },
      ]
    },
    {
      id:3,
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