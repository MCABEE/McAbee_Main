import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { HeroSection } from '../../components/heroSection/HeroSection'
import { Footer } from '../../components/footer/Footer'
import { AboutUs } from './aboutus/AboutUs'
import { Joinus } from './aboutus/joinus/Joinus'
import { Questions } from '../contact/questions/Questions'
import { BottomGradient } from '../../components/bottomGradient/BottomGradient'
import  ProductCarousel  from './productCarousel/ProductCarousel'


let herosectionData = {
  "image": true,
  "topic": "Think Different Make Difference!",
  "content": "A pure play internet company have multiple products in various sectors.",
  "button": "Learn More"
}

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection data={herosectionData} />
      <div>
        <p className='text-center py-5 m-0 px-2'>You can check out some of our amazing products here. Experience the difference from the similar one's!</p>
        <div className='col-9 col-lg-10 mx-auto'><ProductCarousel /></div>
        <div className='pt-5 text-center'><a href="#" className='btn btn-outline-secondary '>View all products</a></div>
        
      </div>
      <AboutUs />
      <div className='container'>
        <Questions />
      </div>
      <Footer />
      <BottomGradient />
    </div>
  )
}
