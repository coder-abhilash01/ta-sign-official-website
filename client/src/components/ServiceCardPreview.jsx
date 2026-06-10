import React, { useRef } from "react";
import ServiceCard from "@/components/ServiceCard";
import AboutUs from "./AboutUs";
import ServiceInfo from "./ServiceInfo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const containerRef = useRef(null);
 


  return (
    <section ref={containerRef} className="w-full bg-neutral-50/50 py-32 px-6 selection:bg-[#0040FA] selection:text-black">
      
    
      <div className="max-w-7xl mx-auto border-b border-neutral-200 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="space-y-3">
        
        <p
              className="text-sm uppercase
              tracking-[0.25em]
              text-blue-600 mb-4"
            >
              
              what we offer
            </p>
               
          <h2 className="text-5xl lg:text-7xl font-bold tracking- text-neutral-900 uppercase font-[Philosopher] tracking-tighter ">
            Our Services
          </h2>
        </div>
        <div>
          <p className="text-base lg:text-lg text-neutral-500 font-normal leading-relaxed max-w-md">
            End-to-end digital compliance solutions built specifically to support the transactional workflows of modern corporate practices.
          </p>
        </div>
      </div>


      <div className="mt-20">
        <ServiceInfo />
      </div>

      <AboutUs />

    </section>
  )
}

export default ServicesSection