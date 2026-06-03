import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Clock3,
  Scale,
  PhoneCall,
  IdCard,
} from "lucide-react";
import CallToAction from "@/components/CallToAction";
import { documents, plans, process, trustPoints } from "@/data/trademark";
import TeamSupportSection from "@/components/TeamSupportSection";





const TrademarkPage = () => {
  return (
    <section className="w-full bg-[#f6f8f8] text-neutral-900 overflow-hidden">
      {/* HERO */}

      <section className=" pb-10 ">
        <div className=" mx-auto ">



            <div
              className="w-full h-auto max-h-screen relative py-5
              border border-neutral-200
              bg-white p-5 md:p-10 bg-[url('/hero-section-imgs/trademark-img.png')] bg-cover bg-center image "
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-1"/>
          
   <div className="grid lg:grid-cols-2 gap-16 items-center z-12">
            {/* LEFT */}

            <div className="z-10">
            <h2
              className="uppercase
              text-white mb-4 mt-8 text-2xl md:text-6xl
                leading-tight tracking-tight
                font-semibold"
            >
              Trademark Registration
            </h2>

           

              <p
                className="mt-6 md:text-lg leading-relaxed
                text-white/80 max-w-xl"
              >
                Professional trademark filing assistance
                for brand names, logos and businesses with
                documentation support and filing guidance.
              </p>

              

              <div className="mt-10 grid sm:grid-cols-2 gap-2 md:gap-5">
                {trustPoints.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#e3e4e9]"
                    />

                    <span className="text-white/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <CallToAction/>
            </div>

            {/* RIGHT */}
          <div className="h-full  flex items-end md:justify-end z-10">
          <div className="flex flex-col gap-10 ">
             <h1
                className="mt-8 text-lg md:text-xl
                leading-tight tracking-wide
                font-normal text-white/40 uppercase mr-15 font-[Philosopher]"
              >
               Protect Your Brand <br/> Before  Someone Else Claims It
              </h1> <p className="text-white/60 flex gap-5"><span className="border-r pr-5  border-white/30"> ™ REGISTER</span>  <span className="border-r pr-5 border-white/30">™ PROTECT </span> <span>™ GROW</span></p>
            </div> </div> 

          </div>


            </div>

       
        </div>
      </section>

      {/* PLANS */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p
              className="text-sm uppercase
              tracking-[0.25em]
              text-blue-700 mb-4"
            >
              Trademark Services
            </p>

            <h2
              className="text-4xl md:text-5xl
              font-semibold tracking-tight"
            >
              Choose Your
              <br />
              Service Plan
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {plans.map((item, index) => (
              <div
                key={index}
                className="bg-white border
                border-neutral-200
                rounded-[24px]
                p-6 hover:border-neutral-300
                transition-all duration-300 shadow-md hover:shadow-2xl"
              >
                <div className="flex justify-between   items-center">
                 <div>
                  <span className="text-4xl font-semibold tracking-tight text-blue-800">
                    ₹{item.price}
                  </span>

                  <span className="text-sm text-neutral-500 mb-1">
                    / service
                  </span></div> 
                  <p className="text-sm text-black/50 font-medium tracking-wide">(Gov Fee not included)</p>
                </div>

                <h3
                  className="mt-5 text-[28px]
                  font-semibold tracking-tight"
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-neutral-600 leading-7">
                  {item.desc}
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  {item.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="w-5 h-5 rounded-full
                        bg-[#eef3ff]
                        flex items-center justify-center"
                      >
                        <CheckCircle2
                          size={12}
                          className="text-[#0040FA]"
                        />
                      </div>

                      <span className="text-sm text-neutral-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-8 pt-6
                  border-t border-neutral-100"
                >
                  <p className="text-sm text-neutral-500 leading-6">
                    Professional assistance and support
                    included with every service plan.
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="bg-white border
            border-neutral-200
            rounded-[28px]
            p-10 lg:p-14"
          >
            <div className="max-w-2xl">
              <p
                className="text-sm uppercase
                tracking-[0.25em]
                text-neutral-400 mb-4"
              >
                Process
              </p>

              <h2
                className="text-4xl md:text-5xl
                font-semibold tracking-tight"
              >
                Simple Registration
                <br />
                Workflow
              </h2>
            </div>

            <div className="relative mt-16">
              <div
                className="hidden md:block absolute
                top-7 left-0 w-full h-px
                bg-neutral-200"
              />

              <div className="grid md:grid-cols-4 gap-8 relative">
                {process.map((item, index) => (
                  <div key={index}>
                    <div
                      className="w-14 h-14 rounded-2xl
                      bg-[#0040FA] text-white
                      flex items-center justify-center
                      text-lg font-semibold relative z-10"
                    >
                      0{index + 1}
                    </div>

                    <p className="mt-5 text-lg font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DOCUMENTS */}

     <section className="pb-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-4">
        Required Documents
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
        Documents You'll Need
      </h2>

      <p className="mt-5 text-neutral-600 leading-7">
        Keep the following documents ready before starting your trademark
        application process.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-16">
      {documents.map((item, index) => (
        <div
          key={index}
          className="group bg-white border border-neutral-200 rounded-3xl p-6
          hover:border-blue-200 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start justify-between">

            <div className="flex gap-5">

              <div
                className="w-14 h-14 rounded-2xl
                bg-gradient-to-br from-blue-50 to-blue-100
                flex items-center justify-center
                shrink-0"
              >
                <IdCard
                  size={24}
                  className="text-[#0040FA]"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>

                <p className="mt-2 text-neutral-500 text-sm leading-6">
                  Required during trademark filing and
                  verification process.
                </p>
              </div>

            </div>

            <span
              className="text-5xl font-bold text-neutral-100
              group-hover:text-blue-100 transition"
            >
              0{index + 1}
            </span>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>

  

      {/* CTA */}

     <TeamSupportSection
     heading = "Need Help With Trademark Filing?"
     subHeading="Trademark Support"
     supportMessage= "Get professional guidance for trademark registration, filing and documentation."
     />
    </section>
  );
};

export default TrademarkPage;