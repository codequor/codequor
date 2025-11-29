import React from 'react'
import WhoWeAre from '../components/Whoweare'
import Hero from '../components/Hero';
import ServicesSection from '../components/Service';

import ProjectsSection from '../components/ProjectSection';
import TestimonialsSection from '../components/Testimonials';

import AIFloatingButton from './AI';
import BrainTrustSection from '../components/BrainTrustSection';
import WhyChooseUs from '../components/CooseUs';
const Landingpage = () => {
  return (
    <div>
       <Hero/>
     
    <WhoWeAre/>
    <ServicesSection/>
    {/* <BrainTrustSection/> */}
    <WhyChooseUs/>
    <ProjectsSection/>
    {/* <TestimonialsSection/> */}
    <AIFloatingButton/>
    </div>
  )
}

export default Landingpage
