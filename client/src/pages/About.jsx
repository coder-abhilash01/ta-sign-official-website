import AboutUs from '@/components/AboutUs'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <div>
         <Helmet>
  <title>
    About TA Sign | Trusted Business Compliance Services
  </title>

  <meta
    name="description"
    content="Learn about TA Sign and our mission to provide DSC, Trademark Registration, ISO Certification and business compliance services."
  />
</Helmet>

<AboutUs/>
    </div>
  )
}

export default About
