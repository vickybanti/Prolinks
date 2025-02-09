"use client"
import React from 'react'
import { Highlight } from "@/app/components/ui/hero-highlight";
import { Carousel } from "@/app/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {motion} from "framer-motion"
import { useMediaQuery } from "../hooks/use-media-query";



const Page = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const router = useRouter()
    const slides1 = [
      { src: '/assets/2.jpg' },
      { src: '/assets/ogba.jpg' },
      { src: '/assets/completed/residentials/duplex2.jpg' },
    ];

     const slides2 = [
      { src: '/assets/ongoing/1.jpg' },
      { src: '/assets/ongoing/3.jpg' },
      { src: '/assets/completed/IMG-20190916-WA0022.jpg' },
    ];

    const slides3 = [
        { src: '/assets/completed/commercial/Lascofedd.jpg' },
        { src: '/assets/completed/residentials/dghjh.jpg' },
        { src: '/assets/completed/IMG-20190916-WA0022.jpg' },
      ];
  return (

    
      <>
      <motion.div 
       initial={{ x: -30, opacity: 0.2 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ ease: "easeInOut", duration: 1.5 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: false }} className="pb-24">
      <div
            className="w-full h-full"

          style={{
              backgroundImage: `url(/assets/2.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
          }}

      >
          <div className="flex flex-col py-44 px-40 bg-black/90 work">
              <div className="flex items-center justify-center py-10 flex-col w-full gap-4 leading-10 text-center uppercase md:text-left">
                  <h2 className=" font-semibold text-white text-md">What we do</h2>
                  <h1 className="text-5xl font-bold text-white/60 leading-[80px] text-center py-5">
                      We deliver <Highlight className="text-black dark:text-white">  EXCELLENCE </Highlight> in all our services
                  </h1>
                  <p className="text-[#A08C5B] text-2xl py-14 border-b border-[#A08C5B]"> And it shows in our magnificent edifices ALL over the big city of Lagos

                  </p>


              </div>



              <div className="grid grid-cols-2 gap-12 pt-10 workGrid">
                  {/* First Item */}
                  <div className="flex items-center space-x-4 h-[100px] py-20">
                      <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full px-3 bg-[#A08C5B]">
                          <img
                              className="object-contain w-full h-full"
                              src="https://img.icons8.com/?size=100&id=7687&format=png&color=000000"
                              alt="trophy-emoji" />
                      </div>
                      <div className="flex flex-col">
                          <h3 className="text-[#A08C5B] text-2xl font-semibold ">Design</h3>
                          <span className="text-[8px] text-white/60 py-6 leading-[24px]">We understand the importance of visually capturing architectural designs to showcase the full potential of a property by seamlessly blending 2D and 3D techniques to provide our clients with
                              a comprehensive visual representation of their projects.</span>
                      </div>
                  </div>

                  {/* First Item */}
                  <div className="flex items-center space-x-4 h-[100px] py-20">
                      <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
                          <img
                              className="object-contain w-full h-full"
                              src="https://img.icons8.com/?size=100&id=9342&format=png&color=000000"
                              alt="trophy-emoji" />
                      </div>
                      <div className="flex flex-col">
                          <h3 className="text-[#A08C5B] text-2xl font-semibold">Construction</h3>
                          <span className="text-xs text-white/60 py-6 leading-[24px]">We ensure that every construction project we undertake is executed with the highest level of craftsmanship and attention to detail. To achieve this, we prioritize employing the best hands in the industry including knowledgeable project managers
                              who are dedicated to upholding our standards of excellence.</span>
                      </div>
                  </div>



                  {/* third Item */}
                  <div className="flex items-center space-x-4 h-[100px] py-20">
                      <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
                          <img
                              className="object-contain w-full h-full"
                              src="https://img.icons8.com/?size=100&id=cQUE9D1CWfuG&format=png&color=000000"
                              alt="trophy-emoji" />
                      </div>
                      <div className="flex flex-col">
                          <h3 className="text-[#A08C5B] text-2xl font-semibold">Interior decoration</h3>
                          <span className="text-xs text-white/60 py-6 leading-[24px]">We understand that well-designed interiors have the power to enhance the overall value and appeal of a property. That is why we offer comprehensive interior design services that are tailored to our clients
                              unique preferences, needs, and objectives.
                          </span>
                      </div>
                  </div>



                  {/* Fourth Item */}
                  <div className="flex items-center space-x-4 h-[100px] py-20">
                      <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
                          <img
                              className="object-contain w-full h-full"
                              src="https://img.icons8.com/?size=100&id=102879&format=png&color=000000"
                              alt="trophy-emoji" />
                      </div>
                      <div className="flex flex-col">
                          <h3 className="text-[#A08C5B] text-2xl font-semibold">Project Management</h3>
                          <span className="text-xs text-white/60 py-6 leading-[24px]">Our commitment to excellence and strategic decision-making allows us to navigate the complex real estate market with confidence,
                              ensuring optimal outcomes for our clients and stakeholders.</span>
                      </div>
                  </div>


                  {/* Fifth Item */}
                  <div className="flex items-center space-x-4 h-[100px] py-20">
                      <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
                          <img
                              className="object-contain w-full h-full"
                              src="https://img.icons8.com/?size=100&id=DRqAsQCxcDuW&format=png&color=000000"
                              alt="trophy-emoji" />
                      </div>
                      <div className="flex flex-col">
                          <h3 className="text-[#A08C5B] text-2xl font-semibold">Property Valuation</h3>
                          <span className="text-xs text-white/60 py-6 leading-[24px]">We offer comprehensive valuation services specifically tailored to the luxury real estate market, ensuring our clients receive precise and reliable assessments of their high-value assets because we recognize that luxury properties
                              possess unique attributes that require a specialized approach.</span>
                      </div>
                  </div>


                  {/* sixth Item */}
                  <div className="flex items-center space-x-4 h-[100px] py-20">
                      <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full p-3 bg-[#A08C5B]">
                          <img
                              className="object-contain w-full h-full"
                              src="https://img.icons8.com/?size=100&id=47076&format=png&color=000000"
                              alt="trophy-emoji" />
                      </div>
                      <div className="flex flex-col">
                          <h3 className="text-[#A08C5B] text-2xl font-semibold">Property Marketing</h3>
                          <span className="text-xs text-white/60 py-6 leading-[24px]">Marketing luxury real estate requires a distinct approach. We combine traditional and digital marketing techniques to create a
                              comprehensive and impactful marketing campaign for each property.</span>
                      </div>
                  </div>



              </div>

              </div>
          </div>

          <motion.div 
                 initial={{ y: -30, opacity: 0.2 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ ease: "easeInOut", duration: 1.5 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: false }} 
                 className="flex items-center justify-between gap-4 bg-black workGrid">
            
            <div className="items-center w-1/2 h-full p-40 services">
           <p className="font-semibold text-white"> From</p>
<h1 className="text-[#A08C5B] text-6xl uppercase py-3 servicesHeading">Exquisuite Architecture</h1>
<p className="py-2 text-white text-md items-center justify-center leading-[32px]">
we celebrate the exquisite beauty and elegance of majestic architecture. We specialize in representing and showcasing properties that embody timeless design, 
meticulous craftsmanship, 
and awe-inspiring architectural feats. </p>
</div>
<div className="justify-end w-1/2 h-full py-20 px-40 overflow-hidden servicesCarousel">

           <Carousel slides={slides1} />
          </div>
          </motion.div>

          <motion.div 
                 initial={{ x: -30, opacity: 0.2 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ ease: "easeInOut", duration: 1.5 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: false }} className="flex items-center justify-between gap-4 bg-black workGrid">
{isDesktop &&
          <div className='justify-start w-1/2 h-full py-20 px-40 overflow-hidden servicesCarousel'>

<Carousel slides={slides2} />
</div>
}
            <div className="items-center w-1/2 h-full p-32 services">
           <p className="font-semibold text-white"> to the use of</p>
<h1 className="text-[#A08C5B] text-6xl uppercase py-3 servicesHeading">Competent Engineering</h1>
<p className="py-2 text-white text-md leading-[32px]">
We take pride in our commitment to building exceptional properties using advanced engineering techniques. We believe that true luxury goes beyond aesthetics, encompassing the integration of innovative engineering solutions that enhance the structural integrity, 
functionality, and sustainability of each property. </p>
</div>

{!isDesktop &&
          <div className='justify-start w-1/2 h-full py-20 px-40 overflow-hidden servicesCarousel'>

<Carousel slides={slides2} />
</div>
}

          </motion.div>

 <motion.div 
        initial={{ x: -30, opacity: 0.2 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }} className="flex items-center justify-between gap-4 bg-black workGrid">
            <div className="items-center w-1/2 h-full p-40 services ">
           <p className="font-semibold text-white"> to</p>
<h1 className="text-[#A08C5B] text-6xl uppercase py-3 servicesHeading">LUXURIOUS FINISHING</h1>
<p className="py-2 text-white text-md leading-[32px]">
we celebrate the exquisite beauty and elegance of majestic architecture. We specialize in representing and showcasing properties that embody timeless design, 
meticulous craftsmanship, 
and awe-inspiring architectural feats. </p>

<Button onClick={()=>router.push("/projects")} className="mt-8">See More...</Button>
</div>
<div className="justify-end w-1/2 h-full py-20 px-40 overflow-hidden servicesCarousel">

           <Carousel slides={slides3} />
          </div>
          </motion.div>

      </motion.div>
      </>
     

  )
}

export default Page