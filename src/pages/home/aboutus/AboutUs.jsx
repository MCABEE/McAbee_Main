import React from 'react'
import "./aboutus.scss"
import { ServiceCards } from './servicecards/ServiceCards'
import { Joinus } from './joinus/Joinus'
import aboutusimg from "../../../assets/aboutus.png"

export const AboutUs = () => {
    return (
        <div className='aboutus-content'>
            <h2 className='fw-700 text-center'>About us</h2>
            <p className='text-center'>A team that treats technology as a passion!</p>
            <div className='d-flex flex-column flex-md-row col col-md-10 col-lg-8 mx-auto pb-4 justify-content-between'>
                <div className='d-flex flex-column text-center'>
                    <div className='fw-bold fs-4'>100</div>
                    <div className='fs-4 text-muted'>thousand +</div>
                    <div >product users globally</div>
                </div>
                <div className='d-flex flex-column text-center'>
                    <div className='fw-bold fs-4'>14</div>
                    <div className='fs-4 text-muted'>countries</div>
                    <div >products presence in</div>
                </div>
                <div className='d-flex flex-column text-center'>
                    <div className='fw-bold fs-4'>03</div>
                    <div className='fs-4 text-muted'>products</div>
                    <div >globally recognized</div>
                </div>
            </div>
            <div className='d-flex align-items-center flex-column flex-lg-row gap-2'>
                <div className='aboutusimg col col-lg-6'>
                    <img src={aboutusimg} />
                </div>
                <div className='aboutusimgcontent border '>
                    <p className='text-muted'>WHO WE ARE</p>
                    <p className='fs-4'>we step into the future with a passionate mind and competitive intelligence.</p>
                    <p style={{ fontSize: "0.9rem" }}>In this rapidly changing world of technology, we pursue it with a competitive intelligence. We focus more making market fit SaaS products. We achieve that goal by redefining the existing products or inventing new products.</p>
                    <p style={{ fontSize: "0.9rem" }}>And also we provide technical support for startup to enterprise level projects.</p>
                    <button className='btn btn-outline-secondary'>more</button>
                </div>
            </div>
            <div className='AUsServiceCards d-flex justify-content-evenly'>
                <ServiceCards/>
            </div>
        <div className='pb-5'>
            <Joinus/>
        </div>
        </div>
    )
}
