import React from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2'

//import styles

import CareerOpeningApply from './careeropeningApply/CareerOpeningApply'

//import react icons
import { BsArrowLeft } from "react-icons/bs"
import { Link } from 'react-router-dom'
import HeroSection2 from '../../components/herosection2/HeroSection2'


const CareerApply = () => {
    return (
        <div className='careers-page-wrapper pb-3'>
            <div className='container pt-3'>
                <Navbar2 />
            </div>
            <div className='container'>
                <HeroSection2 />
                <div className=' pt-2 pb-2 border-top border-bottom '>

                    <p className='m-0'>
                        <Link className='text-dark' to="/careers"><BsArrowLeft size={25} /><span className='ps-3'>Back to Careers</span>
                        </Link></p>

                </div>
                <CareerOpeningApply />

            </div>
        </div>
    )
}

export default CareerApply