import React from 'react'

import { FaGooglePlay } from "react-icons/fa"
import { BsApple } from "react-icons/bs"

//import styles
import "./singleProductComponent.scss"
//img import 
import productImg from "../../../assets/homeassets/firstlookproductimg.png"

const SingleProductComponent = () => {
    return (
        <div className='SingleProductComponent d-flex pt-5  flex-column flex-md-row ' >
            <div className='SingleProductComponent-left border'>
                <div >
                    <img src={productImg} className='w-100 h-100' alt="" />
                </div>
                <div className='p-4 pt-5 position-relative'>
                    <h6 className='fw-700'>FIRSTLOOK</h6>
                    <p className='pt-3' style={{ textAlign: "justify" }}>A social network for Indian’s to find life partner’s. It was the first of it’s kind globally.</p>
                    <div className='position-absolute end-0 bg-primary px-2 text-white' style={{ top: "3rem", fontSize: "0.8rem" }}>UPCOMING</div>
                </div>
            </div>
            <div className='SingleProductComponent-right'>
                <h4 className='fw-700'>FIRSTLOOK</h4>
                <p className='pt-2 text-muted' style={{ textAlign: "justify" }}>Content is everywhere. It’s very often the first way your users will engage with your product. So it’s important that your content speaks to them. Content testing is how you make sure that your content is understood and well-perceived by your audience. In this article, we’ll cover what content testing is, the methods of testing content available to you, and a step-by-step guide on how to plan and conduct your research. For an expert take on content testing, we spoke to Vaida Pakulyte, UX Research & Design at Electrolux, Steve Howe, Content Designer at Shopify, and Nicole Michaelis, UX Writer at Spotify.</p>
                <div className='d-flex flex-column flex-md-row justify-content-between gap-5'>
                    <div className='col col-lg-4'>
                        <div>
                            <h5 className='fw-700 m-0'>100,000+</h5>
                            <p style={{ fontSize: "0.9m" }}>Downloads</p>
                        </div>
                        <div>
                            <h5 className='fw-700 m-0'>4.2</h5>
                            <p style={{ fontSize: "0.9m" }}>Rating on Playstore</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.9m" }}>For downloads, Check it with</p>
                        </div>
                        <a className='btn btn-outline-secondary p-2' href="#" type='button'><FaGooglePlay size={32}/><span className='ps-2'>Google Playstore</span></a>
                    </div>
                    <div className='col col-lg-4'>
                        <div>
                            <h5 className='fw-700 m-0'>100,000+</h5>
                            <p style={{ fontSize: "0.9m" }}>Downloads</p>
                        </div>
                        <div>
                            <h5 className='fw-700 m-0'>4.2</h5>
                            <p style={{ fontSize: "0.9m" }}>Rating on Playstore</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.9m" }}>For downloads, Check it with</p>
                        </div>
                        <a className='btn btn-outline-secondary p-2' href="#"><BsApple size={32}/><span className='ps-2'>Apple Appstore</span></a>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default SingleProductComponent