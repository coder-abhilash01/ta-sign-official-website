
import React, { use, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Marquee from '@/components/Marquee';
import HeroSection from '@/components/HeroSection';
import WhattsappFloatIcon from '@/components/WhattsappFloatIcon';

import ServiceCardPreview from '@/components/ServiceCardPreview';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import FrequentlyAskedQues from '@/components/FrequentlyAskedQues';
import ContactUs from './ContactUs';
import QuickAccessTools from '@/components/QuickAccessTools';

const Home = () => {



  return (
    <div className='z-20'>

      <HeroSection />
      <QuickAccessTools/>

      <Marquee />


      <ServiceCardPreview />


      <Carousel />
      <FrequentlyAskedQues />
      
<ContactUs/>
      <WhattsappFloatIcon />
      


    </div>
  )
}

export default Home
