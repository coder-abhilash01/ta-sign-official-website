import React from "react";
import {
    ArrowRight,
    BadgeCheck,
    Clock3,
    ShieldCheck,
    CheckCircle2,
    PhoneCall,
} from "lucide-react";

import { Link } from "react-router-dom";
import CallToAction from "@/components/CallToAction";
import { assistanceData, industries, isoCertificates, process, trustPoints } from "@/data/Iso";
import Industries from "@/components/Industries";
import { Helmet } from "react-helmet-async";



const ISOPage = () => {
    return (
        <>
        
        <Helmet>
  <title>
    ISO Certification Services in India | TA Sign
  </title>

  <meta
    name="description"
    content="Apply for ISO certification with expert guidance and documentation support for businesses across India."
  />
</Helmet>

 <section className="w-full bg-[#FCFCFC] overflow-hidden">

            {/* HERO */}

            <section className="relative pt-20 pb-24">

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}

                        <div>

                          
                          

                                <span className="text-sm  text-blue-700 tracking-[0.25em] uppercase">
                                    ISO Registration Services
                                </span>

                          

                            <h1
                                className="mt-8 text-5xl md:text-7xl
                font-semibold tracking-tight leading-[0.95]
                text-neutral-900"
                            >
                                ISO Certification
                                <br />
                                Assistance
                            </h1>

                            <p
                                className="mt-8 text-lg leading-relaxed
                text-neutral-600 max-w-xl"
                            >
                                Professional support for ISO certification,
                                documentation and registration assistance
                                for businesses, consultants and firms
                                across India.
                            </p>

                            {/* TRUST POINTS */}

                            <div className="mt-8 space-y-1 grid sm:grid-cols-2 gap-4">

                                {trustPoints.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="text-[#0040FA]"
                                        />

                                        <p className="text-neutral-700">
                                            {item}
                                        </p>

                                    </div>
                                ))}

                            </div>

                            {/* BUTTONS */}

                            <CallToAction />

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div
                                className="bg-white border  border-neutral-200 shadow-2xl
                                 overflow-hidden"  >

                                <div
                                    className="aspect-[4/3] p-10 flex flex-col justify-between
                                     bg-[url('/hero-section-imgs/ISO-img.png')]  bg-cover bg-center"    >

                                    <div className="flex justify-between items-start">  <div>

                                        <p className="text-blue-100 text-sm uppercase tracking-[0.25em]" >
                                            Certified </p>

                                        <h3 className="text-white text-5xl font-semibold mt-4">   ISO</h3>

                                    </div>

                                        <BadgeCheck size={48}
                                            className="text-white" />

                                    </div>

                                    <div>

                                        <p className="text-blue-100 text-sm">
                                            Trusted Registration Assistance
                                        </p>

                                        <div
                                            className="mt-5 flex items-center gap-3 text-white text-sm"
                                        >
                                            <Clock3 size={16} />

                                            <span>
                                                Professional Support
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ISO TYPES */}

            <section className="pb-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-2xl">

                        <p
                            className="text-sm uppercase
              tracking-[0.25em]
              text-blue-700 mb-5"
                        >
                            Certification Types
                        </p>

                        <h2
                            className="text-4xl md:text-5xl
              font-semibold tracking-tight
              text-neutral-900"
                        >
                            ISO Certifications
                            <br />
                            We Assist With
                        </h2>

                    </div>

                    <div
                        className="grid md:grid-cols-2
            xl:grid-cols-3 gap-8 mt-16"
                    >

                        {isoCertificates.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-[32px]
                border border-neutral-200 p-8 shadow-md
                hover:-translate-y-2 transition-all
                duration-500 hover:shadow-2xl"
                            >

                                <div
                                    className="w-16 h-16 rounded-2xl
                  bg-[#eef3ff] flex items-center
                  justify-center"
                                >
                                    <ShieldCheck
                                        size={30}
                                        className="text-[#0040FA]"
                                    />
                                </div>

                                <h3
                                    className="mt-8 text-3xl
                  font-semibold tracking-tight
                  text-neutral-900"
                                >
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-neutral-500">
                                    {item.subtitle}
                                </p>

                                <p
                                    className="mt-6 text-[15px]
                  leading-relaxed text-neutral-600"
                                >
                                    {item.desc}
                                </p>

                                <div
                                    className="mt-8 pt-6 border-t
                  border-neutral-100 flex items-center
                  justify-between"
                                >

                                    <p
                                        className="font-semibold
                    text-[#0040FA]"
                                    >
                                        {item.price}
                                    </p>

                                    <a
                                        href="https://wa.me/919306746685"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/btn flex items-center
                    gap-2 text-sm font-medium"
                                    >
                                        Talk Now

                                        <ArrowRight
                                            size={16}
                                            className="group-hover/btn:translate-x-1 transition"
                                        />

                                    </a>

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
                        className="bg-white rounded-[40px]
            border border-neutral-200
            p-10 lg:p-14"
                    >

                        <div className="max-w-2xl">

                            <p
                                className="text-sm uppercase
                tracking-[0.25em]
                text-blue-700 mb-5"
                            >
                                Process
                            </p>

                            <h2
                                className="text-4xl md:text-5xl
                font-semibold tracking-tight
                text-neutral-900"
                            >
                                Simple Registration Flow
                            </h2>

                        </div>

                        <div
                            className="grid md:grid-cols-5
              gap-6 mt-16"
                        >

                            {process.map((item, index) => (
                                <div key={index}>

                                    <div
                                        className="w-14 h-14 rounded-2xl
                    bg-[#0040FA] text-white flex
                    items-center justify-center
                    font-semibold text-lg"
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

            </section>

            {/* INDUSTRIES */}

            <Industries />
            {/* QUICK SUPPORT */}

            <section className="pb-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div
                        className="bg-white border border-neutral-200
            rounded-[36px] p-8 lg:p-12"
                    >

                        <div
                            className="flex flex-col lg:flex-row
              lg:items-end justify-between gap-10"
                        >

                            <div className="max-w-2xl">

                                <p
                                    className="text-sm uppercase
                  tracking-[0.25em]
                  text-blue-700 mb-5"
                                >
                                    Registration Support
                                </p>

                                <h2
                                    className="text-4xl md:text-5xl
                  font-semibold tracking-tight
                  text-neutral-900 leading-tight"
                                >
                                    Professional ISO
                                    <br />
                                    Assistance
                                </h2>

                                <p
                                    className="mt-6 text-lg
                  leading-relaxed text-neutral-600"
                                >
                                    We assist businesses, CA firms,
                                    consultants and professionals with
                                    ISO documentation, registration and
                                    certification support.
                                </p>

                            </div>

                            <a
                                href="https://wa.me/919306746685"
                                target="_blank"
                                rel="noreferrer"
                                className="group h-14 px-8 rounded-full
                bg-[#0040FA] text-white flex items-center
                justify-center gap-3 w-fit
                hover:bg-[#0030c9] transition-all"
                            >
                                Chat On WhatsApp

                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition"
                                />

                            </a>

                        </div>

                        <div className="grid md:grid-cols-3 gap-5 mt-14">

                            {assistanceData.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-[28px]
                  border border-neutral-200
                  p-6 hover:border-[#0040FA]
                  transition-all duration-300"
                                >

                                    <div
                                        className="w-12 h-12 rounded-2xl
                    bg-[#eef3ff] flex items-center
                    justify-center"
                                    >
                                        <ShieldCheck
                                            size={22}
                                            className="text-[#0040FA]"
                                        />
                                    </div>

                                    <h3
                                        className="mt-5 text-xl
                    font-semibold tracking-tight
                    text-neutral-900"
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="mt-3 text-neutral-600
                    leading-relaxed text-[15px]"
                                    >
                                        {item.desc}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>

        </section>
</>
       
    );
};

export default ISOPage;