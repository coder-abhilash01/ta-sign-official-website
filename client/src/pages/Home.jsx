import React from "react";
import { Helmet } from "react-helmet-async";

import Marquee from "@/components/Marquee";
import HeroSection from "@/components/HeroSection";
import WhattsappFloatIcon from "@/components/WhattsappFloatIcon";
import ServiceCardPreview from "@/components/ServiceCardPreview";
import Carousel from "@/components/Carousel";
import FrequentlyAskedQues from "@/components/FrequentlyAskedQues";
import QuickAccessTools from "@/components/QuickAccessTools";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          TA Sign | Digital Signature Certificate, ISO & Trademark Services
        </title>

        <meta
          name="description"
          content="TA Sign provides Digital Signature Certificates (DSC), Trademark Registration, ISO Certification, USB Tokens and business compliance services across India."
        />
      </Helmet>

      <div className="z-20">
        <HeroSection />

        <QuickAccessTools />

        <Marquee />

        <ServiceCardPreview />

        <Carousel />

        <FrequentlyAskedQues />

        <ContactSection />

        <WhattsappFloatIcon />
      </div>
    </>
  );
};

export default Home;