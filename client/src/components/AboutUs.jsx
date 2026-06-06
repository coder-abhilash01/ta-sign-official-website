import React from 'react'
import { useLocation } from 'react-router-dom'
import FounderDetail from './FounderDetail'

const AboutUs = () => {
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <>
 
<section className="max-w-7xl mx-auto sm:px-6 mt-10 pb-10">

      {/* TOP */}
     

      <div className="grid lg:grid-cols-12 gap-16 border-b border-neutral-200 pb-16">

        <div className="lg:col-span-5">

          <p className="text-sm uppercase tracking-[0.2em] text-blue-600 mb-6">
            About Us
          </p>

          <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 font-[Philosopher] uppercase">
            TA Sign
          </h2>

          <p className="mt-5 text-neutral-500 text-lg leading-relaxed">
            A digital services initiative by Tiwari Associates, founded by Anil Tiwari in 2016.
          </p>

        </div>

        <div className="lg:col-span-7">

          <p className="text-2xl lg:text-3xl leading-snug text-neutral-900 font-medium">
            We help businesses, professionals and individuals complete digital signature and registration-related work in a simpler, faster and more reliable way.
          </p>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="grid lg:grid-cols-12 gap-16 pt-16 items-start">

        {/* LEFT */}

        <div className="lg:col-span-4 space-y-10">

          <div>
            <h3 className="text-5xl font-semibold tracking-tight text-neutral-900">
              20,000+
            </h3>

            <p className="mt-2 text-neutral-500">
              Applications and services processed
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-semibold tracking-tight text-neutral-900">
              200+
            </h3>

            <p className="mt-2 text-neutral-500">
              Connected CA & business partners
            </p>
          </div>

        </div>

        {/* RIGHT */}

        <div className="lg:col-span-8 space-y-7 text-[17px] leading-relaxed text-neutral-600">

          <p>
            Over the years, we have assisted clients with DSC issuance, USB token setup, trademark registration, ISO certification, GST-related support and document processing services.
          </p>

          <p>
            Many people approach us after struggling with technical setup issues, delayed processing or confusing government portals. Our goal is to make the process easier and less time-consuming.
          </p>

          <p>
            Along with service support, we also provide utility downloads, token drivers and commonly required resources in one place so clients can quickly access what they need.
          </p>

          <p>
            We believe good service is not about complicated promises — it is about clear communication, proper guidance and dependable support whenever clients need assistance.
          </p>

        </div>

      </div>
<div className='max-w-4xl mx-auto'>{pathname === "/about" && <FounderDetail/>}</div> 
    </section>
</>
    
  )
}

export default AboutUs