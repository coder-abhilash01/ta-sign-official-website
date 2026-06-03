import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Usb,
  CheckCircle2,
  Clock3,
  PhoneCall,
  Fingerprint,
} from "lucide-react";
import CallToAction from "@/components/CallToAction";
import { features, process, tokenPlans, trustPoints } from "@/data/tokens";



const BuyTokenPage = () => {
  return (
    <section className="w-full bg-[#f7f7f5] overflow-hidden text-neutral-900">
      {/* HERO */}

      <section className="pt-16 lg:pt-20 pb-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}

            <div>
             <p
              className="text-sm uppercase
              tracking-[0.25em]
              text-blue-600 mb-4"
            >
              DSC Tokens
            </p>

              <h1
                className="mt-8 text-5xl md:text-6xl
                leading-tight tracking-tight
                font-semibold text-neutral-900"
              >
                Secure DSC
                
                Tokens
              </h1>

              <p
                className="mt-6 text-lg leading-relaxed
                text-neutral-600 max-w-xl"
              >
                Trusted USB tokens for DSC registration,
                digital signing and professional compliance
                work with setup assistance and support.
              </p>

              {/* TRUST POINTS */}

              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                {trustPoints.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#0040FA]"
                    />

                    <span className="text-neutral-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            <CallToAction/>
            </div>

            {/* RIGHT */}

            <div className="relative">
              <div
                className="relative overflow-hidden
                rounded-[28px]
                border border-neutral-200
                bg-[#0f172a]"
              >
                <div
                  className="relative
                  aspect-[4/3]
                  bg-[url('/tokens/token-img3.png')]
                  bg-cover bg-center
                  flex flex-col justify-between
                  p-10"
                >
               

                
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TOKEN SECTION */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p
                className="text-sm uppercase
                tracking-[0.25em]
                text-blue-600 mb-4"
              >
                Available Tokens
              </p>

              <h2
                className="text-4xl md:text-5xl
                font-semibold tracking-tight
                text-neutral-900"
              >
                Choose Your
                <br />
                USB Token
              </h2>
            </div>

            <p className="text-neutral-500 max-w-md leading-relaxed">
              Professional USB tokens with compatibility
              support for DSC registration and signing.
            </p>
          </div>

          {/* CARDS */}

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {tokenPlans.map((item, index) => (
              <div
                key={index}
                className="group bg-white
                border border-neutral-200
                rounded-[24px]
                overflow-hidden
                shadow-md
                hover:border-neutral-300
                hover:shadow-xl
                
                transition-all duration-300"
              >
                {/* IMAGE */}

                <div
                  className="relative w-full h-[130px]
                  bg-neutral-50
                  border-b border-neutral-100
                  flex items-center justify-center p-8"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" w-2/3  object-cover
                    transition duration-300
                    group-hover:scale-[1.02]"
                  />
                </div>

                {/* CONTENT */}

                <div className="p-6 flex flex-col">
                  {/* PRICE */}

                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-blue-800">
                      ₹{item.price}
                    </span>

                    <span className="text-sm text-neutral-500 mb-1">
                      / token
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    className="mt-4 text-[28px]
                    font-semibold tracking-tight
                    text-neutral-900"
                  >
                    {item.title}
                  </h3>

                  {/* DESC */}

                  <p
                    className="mt-2 text-[15px]
                    leading-7 text-neutral-600"
                  >
                    {item.desc}
                  </p>

                  {/* FEATURES */}

                  <div className="mt-5 flex flex-col gap-3">
                    {features.map((feature, i) => (
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
                Ordering Process
              </p>

              <h2
                className="text-4xl md:text-5xl
                font-semibold tracking-tight
                text-neutral-900"
              >
                Simple & Fast
              </h2>
            </div>

            <div className="relative mt-16">
              {/* LINE */}

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

                    <p
                      className="mt-5 text-lg
                      font-medium text-neutral-800"
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="rounded-[32px]
            bg-[#0f172a]
            border border-white/10
            px-10 py-14 lg:px-16"
          >
            <div
              className="flex flex-col lg:flex-row
              lg:items-center
              justify-between gap-10"
            >
              <div className="max-w-2xl">
                <p
                  className="text-blue-300
                  uppercase tracking-[0.25em]
                  text-sm mb-5"
                >
                  TA SIGN Support
                </p>

                <h2
                  className="text-4xl lg:text-5xl
                  font-semibold text-white
                  leading-tight tracking-tight"
                >
                  Need Help Choosing
                  <br />
                  The Right Token?
                </h2>

                <p
                  className="mt-6 text-lg
                  leading-relaxed
                  text-neutral-300"
                >
                  We help professionals, firms and businesses
                  select compatible DSC USB tokens with
                  installation assistance.
                </p>
              </div>

              <a
                href="https://wa.me/919306746685"
                target="_blank"
                rel="noreferrer"
                className="group h-14 px-8 rounded-xl
                bg-white text-black
                flex items-center justify-center
                gap-3 font-medium
                hover:bg-neutral-200
                transition-all duration-300
                w-fit"
              >
                Chat On WhatsApp

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BuyTokenPage;