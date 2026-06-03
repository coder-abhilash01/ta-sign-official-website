import React, { useState } from "react";

import {
  ArrowRight,
  Mail,
  Phone,
  User,
  FileSignature,
  Contact,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";



const ContactUs = () => {


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

  <div className="mt-10 bg-white border rounded-3xl p-5 shadow-sm font-[Montserrat]">

    <div className="flex flex-col sm:flex-row gap-5  sm:items-center">

      <img
        src="/founder.jpeg"
        alt="Founder"
        className="w-28 h-28 rounded-2xl object-cover"
      />

      <div>

        <h2 className="text-xl font-semibold text-black tracking-tight">
          Anil Tiwari
        </h2>

        <p className="text-gray-400 tracking-wide">
          Founder, TA SIGN
        </p>

        <p className="text-sm text-gray-600 mt-3 max-w-md">
          Helping businesses, advocates, CAs and professionals with
          Digital Signature Certificates, Trademark Registration and
          compliance services since 2016.
        </p>

      </div>

    </div>

    <div className="grid sm:grid-cols-2 gap-4 mt-6">

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <Phone size={18} />
        </div>

        <div>
          <p className="text-sm text-gray-500">Call Us</p>
          <h3 className="font-semibold">
            +91 9306746685
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <Mail size={18} />
        </div>

        <div>
          <p className="text-sm text-gray-500">Email</p>
          <h3 className="font-semibold">
            dsc.knp1@gmail.com
          </h3>
        </div>
      </div>

    </div>

  </div>

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
  );
};

export default ContactUs;