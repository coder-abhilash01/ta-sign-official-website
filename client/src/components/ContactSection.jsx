import React from 'react'
import ContactForm from './ContactForm'
import FounderDetail from './FounderDetail'

const ContactSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#FCFCFC] py-20 px-6 md:px-10 ">

      <div className="max-w-7xl mx-auto grid  lg:grid-cols-2 gap-16 items-start ">

        {/* LEFT SIDE */}
<div className="top-24">

  <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-medium mb-4">
    Contact Us
  </p>

  <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
    Expert Assistance For DSC, Trademark & Compliance Services
  </h1>

  <p className="text-gray-600 text-lg leading-8 mt-8 max-w-xl">
    Whether you need a Digital Signature Certificate, Trademark Registration,
    ISO Certification, GST-related assistance, or eTender support, our team
    is ready to guide you through the process.
  </p>


  {/* FOUNDER CARD */}

  <FounderDetail/>

</div>

        {/* RIGHT SIDE */}

        <div className="bg-white border-t border-b border-gray-400 sm:rounded-[32px] p-4 md:p-8 sm:shadow-md shadow-black/50">

          <div className="mb-5">

            <h2 className="text-3xl font-semibold tracking-tight text-black">
              Send Your Query
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              We usually respond within a few hours.
            </p>

          </div>

        <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
