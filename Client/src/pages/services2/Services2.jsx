import React, { useState } from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2';
import HeroSection2 from '../../components/herosection2/HeroSection2';
import { Footer2 } from '../../components/footer2/Footer2';

const Services2 = () => {

    const [filterservice, setfilterservice] = useState("All")//changes the selection menu in the herosection 2
    const [displaySelectMenu, setdisplaySelectMenu] = useState(false)

    const [renderServicePage, setrenderServicePage] = useState(false) //tell which component to render (job openings or job apply component)

    const serviceList = ["Mobile App Development", "Web Application Development", "Automation", "Cloud Hosting", "Digital Marketing","Big Data Analytics"] //sets the list option for herosection2 which is going as object prop 

    //const SelectedProduct = PRODUCTS.filter((PRODUCT) => filterProduct === PRODUCT.productName) //filters the job which the user select through a select list in herosection2

    const serviceSection2 = {
        "title": "SERVICES",
        "tagline": "Future makes simple, through Technology",
        "shortDesc1": "Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right here - including yours. Kickstart your journey today.",
        "List": serviceList,
    }
    return (
        <div className='careers-page-wrapper pb-3'>
            <div className='container pt-3'>
                <Navbar2 />
            </div>
            <div className='container'>
                <HeroSection2 data={serviceSection2} filter={filterservice} setfilter={setfilterservice} diplayListOption={renderServicePage} displaySelectMenu={displaySelectMenu}/>
                <div className=' pt-5 pb-3 border-top'>

                </div>
            </div>



            <Footer2 />

        </div>
    )
}

export default Services2