import AboutSection from '@/components/AboutSection'
import CategoryPackages from '@/components/CategoryPackages'
import HeroWithForm from '@/components/HeroSection'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroWithForm/>
      <AboutSection/>
      <CategoryPackages/>
      <Services/>
      <Testimonials/>
    </div>
  )
}

export default Home