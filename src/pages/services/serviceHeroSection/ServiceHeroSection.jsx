import React from 'react'
//image import
import Serviceheroectionimage from "../../../assets/servicesHeroSection.png"
//import styles
import "./servicesHeroSection.scss"

export const ServiceHeroSection = () => {
    return (
        <>
            <div className='ServicesHeroSection-wrapper'>
                <div className='ServicesHeroSection-left'>
                    <h3>Our Services</h3>
                    <p>What we do</p>
                </div>
                <div className='ServicesHeroSection-right'>
                    <div className='w-100 h-100'>
                        <img  src={Serviceheroectionimage} alt="" className='w-100 h-100'  style={{borderRadius:"1rem"}}/>
                    </div>
                    <p>End to end solution for our customers tailored to their needs is what makes us different.</p>
                     <p>   Not only it saves cost, but makes it easy for the customers to engage with our solutions.</p>
                </div>
            </div>
        </>
    )
}
