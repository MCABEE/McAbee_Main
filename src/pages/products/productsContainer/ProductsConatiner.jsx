import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { FaGooglePlay } from "react-icons/fa"
import { BsApple } from "react-icons/bs"



import "./productcontainer.scss"

import products from "../../../data/products"


export default function ProductsContainer() {

    return (
        <>
            <div>
                {
                    products?.map((item) => {
                        return (
                            <div className="carouselcard col col-lg-8 border">
                                {/* main image */}
                                <div>
                                    <img src={item.image} className="swiper-lazy" alt="" />
                                </div>
                                {/* details card */}
                                <div className=" card-body p-3">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex align-items-end ">
                                            <div>
                                                <div className="productLogo">
                                                    <img src={item.logo} alt="" />
                                                </div>
                                                <h6 className="ps-2 fw-700 text-muted">{item.title}</h6>
                                            </div>
                                            <div>
                                                Upcoming
                                            </div>
                                        </div>
                                    </div>
                                    <p className="producttext text-secondary pt-2">{item.content}</p>

                                    <div className=" position-absolute bottom-0 pb-3" style={{ width: "80%" }}>
                                        <div className="d-flex justify-content-between">
                                            <a className="text-muted pc-learnmore" style={{ fontSize: "1rem" }}>Learn More</a>
                                            <div className="d-flex gap-3">
                                                <BsApple className="pc-bs-apple" size={20} />
                                                <FaGooglePlay className="pc-googleplay" size={20} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>

    );
}
