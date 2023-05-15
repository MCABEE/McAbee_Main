import React from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2'
import { Footer2 } from '../../components/footer2/Footer2'
import HeroSection2 from '../../components/herosection2/HeroSection2'
import ProductCarousel from '../home/productCarousel/ProductCarousel'
import ProductsContainer from './productsContainer/ProductsConatiner'

export const Products = () => {
  return (
    <div className='careers-page-wrapper pb-3'>
    <div className='container pt-3'>
      <Navbar2 />
    </div>
    <div className='container'>
        <HeroSection2 />
        <ProductsContainer/>
      </div>

    

    <Footer2 />

  </div>
  )
}
