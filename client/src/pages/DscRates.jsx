import React from "react";
import {
  BadgeCheck,
  ShieldCheck,
  FileSignature,
  ArrowRight,
} from "lucide-react";
import { plans } from "@/data/dscData";




const DscRates = () => {

  return (
    <section className="w-full min-h-screen bg-[#FCFCFC] pb-24  font-[Montserrat]">

      {/* TOP */}

      <div className="relative w-full lg:h-[42vh] mb-15 ">
        <img src="/hero-section-imgs/dsc-img.png" className=" w-full h-full object-cover"/>
        <div className="w-full h-full absolute top-0 left-0 bg-black/20 "/>
      </div>

      <div className="max-w-7xl mx-auto grid justify-start mb-20 px-4">

        <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-medium mb-4">
          Pricing
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black">
          DSC Certificate Plans
        </h1>

        <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-8">
          Fast, secure, and government-compliant digital signature services
          for individuals, businesses, and professionals.
        </p>
      </div>

      {/* CARDS */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10">

        {plans.map((plan, index) =>{
          const Icon = plan.icon
          return ( <div
            key={index}
            className={`relative rounded-[18px] border p-8 transition-all duration-500
            hover:-translate-y-2 hover:shadow-2xl shadow-md
            ${
              plan.popular
                ? "bg-blue-700 text-white border-black scale-[1.02]"
                : "bg-white border-gray-200 "
            }`}
          >

          

            {plan.popular && (
              <div className="absolute top-5 right-5 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
                Popular
              </div>
            )}

            {/* ICON */}

            <Icon 
              className={`w-6 h-6 rounded-2xl flex items-center justify-center mb-6
              ${
                plan.popular
                  ? "bg-white/10"
                  : "bg-gray-100"
              }`}
           />
              
            

            {/* TITLE */}

            <h2 className="text-2xl font-semibold tracking-tight">
              {plan.title}
            </h2>

            <p
              className={`mt-2 text-sm
              ${
                plan.popular
                  ? "text-gray-300"
                  : "text-gray-500"
              }`}
            >
              {plan.subtitle}
            </p>

            {/* PRICE */}

            <div className="mt-6 mb-6">

              <h3 className={`text-5xl font-bold tracking-tight ${plan.popular ? "text-white" : "text-blue-800"}`}>
                {plan.price}
              </h3>

              <span
                className={`text-sm mt-2 block
                ${
                  plan.popular
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                Starting Price
              </span>
            </div>

            {/* FEATURES */}

            <div className="flex flex-col gap-4 mb-6">

              {plan.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                >

                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-white
                    ${
                      plan.popular
                        ? "bg-white/10"
                        : "bg-blue-700"
                    }`}
                  >
                    ✓
                  </div>

                  <span
                    className={`text-sm
                    ${
                      plan.popular
                        ? "text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    {feature}
                  </span>

                </div>
              ))}
            </div>

            {/* BUTTON */}

            <button
              className={`group w-full h-14 rounded-full flex items-center justify-center gap-2
              transition-all duration-300 cursor-pointer
              ${
                plan.popular
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              Get Started

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </div>)
        } 
         
        )}
      </div>
    </section>
  );
};

export default DscRates;