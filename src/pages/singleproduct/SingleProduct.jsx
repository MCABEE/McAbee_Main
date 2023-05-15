import React from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2'
import HeroSection2 from '../../components/herosection2/HeroSection2'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs"
import { Footer2 } from '../../components/footer2/Footer2'
import SingleProductComponent from './singleproductComponent/SingleProductComponent'

const SingleProduct = () => {
    return (
        <div className='careers-page-wrapper pb-3'>
            <div className='container pt-3'>
                <Navbar2 />
            </div>
            <div className='container'>
                <HeroSection2 />
                <div className=' pt-2 pb-2 border-top border-bottom '>
                    <p className='m-0'>
                        <Link className='text-dark' to="/products"><BsArrowLeft size={25} /><span className='ps-3'>Back to Products</span>
                        </Link>
                    </p>
                </div>
                <SingleProductComponent/>
            </div>

            <Footer2 />

        </div>
    )
}

export default SingleProduct