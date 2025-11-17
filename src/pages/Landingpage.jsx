import React from 'react'
import WhoWeAre from '../components/Whoweare'
import Hero from '../components/Hero';
import ServicesSection from '../components/Service';

import ProjectsSection from '../components/ProjectSection';
import TestimonialsSection from '../components/Testimonials';
const Landingpage = () => {
  return (
    <div>
       <Hero/>
    <WhoWeAre/>
    <ServicesSection/>
    <ProjectsSection/>
    {/* <TestimonialsSection/> */}
    </div>
  )
}

export default Landingpage
