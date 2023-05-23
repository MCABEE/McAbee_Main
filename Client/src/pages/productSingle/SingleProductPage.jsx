import React, { useEffect, useState } from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2'
import { Footer2 } from '../../components/footer2/Footer2'
import HeroSection2 from '../../components/herosection2/HeroSection2'

import { BsArrowLeft } from "react-icons/bs"
import PRODUCTS from '../../data/products'
import SingleProductComponent from './singleproductComponent/SingleProductComponent'
import { useParams, Link } from 'react-router-dom'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const SingleProductPage = () => {

    const { singleProduct } = useParams()

    const [filterProduct, setfilterProduct] = useState("All")//changes the selection menu in the herosection 2
    const [SelectedProduct, setSelectedProduct] = useState()
    const [displaySelectMenu, setdisplaySelectMenu] = useState(false)
    const [displaySearchFilter, setdisplaySearchFilter] = useState(true)
    const [renderProductPage, setrenderProductPage] = useState(false) //tell which component to render (job openings or job apply component)

    const productList = PRODUCTS.map((PRODUCT) => PRODUCT.productName) //sets the list option for herosection2 which is going as object prop 

    useEffect(() => {
        const FilterParams = PRODUCTS.filter((PRODUCT) => singleProduct === PRODUCT.params)
        setfilterProduct(FilterParams[0].productName)
    }, [])

    useEffect(() => {
        setSelectedProduct(PRODUCTS.filter((PRODUCT) => filterProduct === PRODUCT.productName)[0])
    }, [filterProduct])

    //filters the job which the user select through a select list in herosection2

    const productSection2 = {
        "title": "PRODUCTS",
        "tagline": "Find, What we have",
        "shortDesc1": "You can check out some of our amazing products here. Experience the difference from similar one’s in the market. Our aim is to make some useful applications that are needed in the life of a common man. ",
        "List": productList,
    }

    //Animation 
    const singleProductAnimation1 = useAnimation();

    const [singleProductref1, singleProductinView1] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (singleProductinView1) { singleProductAnimation1.start({ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1 } }); }
        if (!singleProductinView1) { singleProductAnimation1.start({ opacity: 0, y: -75 }); }
    }, [singleProductinView1]);


    return (
        <div className='careers-page-wrapper pb-3'>
            <div className='container pt-3'>
                <Navbar2 />
            </div>
            <div className='container'>
                <HeroSection2 data={productSection2} filter={filterProduct} setfilter={setfilterProduct} diplayListOption={renderProductPage} displaySelectMenu={displaySelectMenu} displaySearchFilter={displaySearchFilter} />
                <div className=' pt-2 pb-2 border-top border-bottom '>
                    <Link to="/products" className='text-dark' style={{ cursor: 'pointer' }}><BsArrowLeft size={25} /><span className='ps-3'>Back to Products</span>
                    </Link>
                </div>
                <motion.div ref={singleProductref1} animate={singleProductAnimation1} >
                    {
                        SelectedProduct && <SingleProductComponent data={SelectedProduct} />
                    }
                </motion.div>
            </div>
            <Footer2 />

        </div>
    )
}
