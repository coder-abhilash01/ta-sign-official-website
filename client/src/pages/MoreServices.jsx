import React from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/servicesData";
import TeamSupportSection from "@/components/TeamSupportSection";
import { Helmet } from "react-helmet-async";

const MoreServices = () => {
  return (

    <>
   <Helmet>
  <title>
    FSSAI, GeM Portal, GMP & Startup India Registration Services | TA Sign
  </title>

  <meta
    name="description"
    content="Get professional assistance for FSSAI Registration, GeM Portal Registration, GMP Certification and Startup India Registration with expert guidance from TA Sign."
  />
</Helmet>


<section className="bg-[#FCFCFC] pb-20 ">
      <div className="w-full  ">

        {/* Heading */}

        <div className=" w-full h-[40vh] relative text-center mb-20 bg-[url('/hero-section-imgs/service-img.jpg')] bg-center bg-cover">
<div className="absolute w-full h-full top-0 bg-black/40 z-2"/>
  </div>

  <div className="flex flex-col items-center mb-20 px-6">
    
          <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-medium">
            Additional Services
          </p>

          <h1 className=" text-3xl sm:text-5xl font-semibold mt-4">
            Business Registration &
            Certification Services
          </h1>

          <p className="text-neutral-600 max-w-3xl mx-auto mt-6 text-lg">
            Helping businesses stay compliant,
            certified, and ready for growth.
          </p>
  </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 px-5 sm:px-12 md:px-20 mb-20">

          {services.map((service) => {
           

            return (
              <div
                key={service.title}
                className="bg-white border rounded-3xl p-4 sm:p-8 shadow-md shadow-blue-900/50 hover:shadow-xl transition-all duration-300"
              >

                <div className="w-40 h-14 rounded-2xl  flex items-center justify-center mb-6">
                <img  src={service.icon}/>
                </div>

                <h2 className="text-2xl font-semibold">
                  {service.title}
                </h2>

                <p className="text-neutral-600 mt-4 leading-7">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {service.benefits.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-neutral-100 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <a href="https://wa.me/919306746685"
                target="_blank"
                rel="noreferrer">
                    <button
                  className="mt-8 flex items-center gap-2 font-medium text-blue-600 cursor-pointer"
                >
                  Enquire Now

                  <ArrowRight
                    size={18}
                  />
                </button>
                    </a>

              </div>
            );
          })}
        </div>

        {/* CTA */}


       <TeamSupportSection heading= "Need Help With Registration?" 
       subHeading="Registration Support"
       supportMessage="Our team can assist you with documentation, verification, and end-to-end registration support."/>

      </div>
    </section>
</>
    
  );
};

export default MoreServices;