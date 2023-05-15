import React from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2'

//import styles
import "./careers.scss"
import { Footer2 } from '../../components/footer2/Footer2'
import CareerOpenings from './openings/CareerOpenings'
import CareerAttention from './careerAttention.jsx/CareerAttention'
import HeroSection2 from '../../components/herosection2/HeroSection2'

const heroSection2={
  "title":"CAREER",
  "tagline":"Discover Your New Career",
  "shortDesc1":"Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right here - including yours.Kickstart your journey today."
}

export const Careers = () => {
  return (
    <div className='careers-page-wrapper pb-3'>
      <div className='container pt-3'>
        <Navbar2 />
      </div>
      <div className='container'>
        <HeroSection2 data={heroSection2}/>
        <CareerOpenings />
        <CareerAttention />
      </div>

      <Footer2 />

    </div>
  )
}
