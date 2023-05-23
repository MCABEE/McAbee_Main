import React, { useEffect } from 'react'
import { Footer2 } from '../../components/footer2/Footer2'
import { HeroSection } from '../../components/heroSection/HeroSection'
import { Navbar2 } from '../../components/navbar2/Navbar2'
import { BsArrowRight } from "react-icons/bs"
import "./home2.scss"
import ProductCarousel2 from './productCarousel2/ProductCarousel2'
import PRODUCTS from '../../data/products'
import { useNavigate, Link } from 'react-router-dom'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


let herosectionData = {
    "image": false,
    "topic": "Think Different Make Difference!",
    "content": "A pure play internet company have multiple products in various sectors.",
    "button": "Learn More",
    "background": "herosecimgBg"
}

const Home2 = () => {
    const navigate = useNavigate()

    const home2Animation1 = useAnimation();
    const home2Animation2 = useAnimation();
    const home2Animation3 = useAnimation();
    const home2Animation4 = useAnimation();
    const home2Animation5 = useAnimation();
    const home2Animation6 = useAnimation();
    const home2Animation7 = useAnimation();

    const [home2ref1, home2inView1] = useInView({ threshold: 0.1, triggerOnce: true });
    const [home2ref2, home2inView2] = useInView({ threshold: 0.1, triggerOnce: true });
    const [home2ref3, home2inView3] = useInView({ threshold: 0.1, triggerOnce: true });
    const [home2ref4, home2inView4] = useInView({ threshold: 0.1, triggerOnce: true });
    const [home2ref5, home2inView5] = useInView({ threshold: 0.1, triggerOnce: true });
    const [home2ref6, home2inView6] = useInView({ threshold: 0.1, triggerOnce: true });
    const [home2ref7, home2inView7] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (home2inView1) { home2Animation1.start({ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1 } }); }
        if (!home2inView1) { home2Animation1.start({ opacity: 0, y: -75 }); }
    }, [home2inView1]);

    useEffect(() => {
        if (home2inView2) { home2Animation2.start({ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1 } }); }
        if (!home2inView2) { home2Animation2.start({ opacity: 0, y: -75 }); }
    }, [home2inView2]);

    useEffect(() => {
        if (home2inView3) { home2Animation3.start({ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1 } }); }
        if (!home2inView3) { home2Animation3.start({ opacity: 0, y: -75 }); }
    }, [home2inView3]);

    useEffect(() => {
        if (home2inView4) { home2Animation4.start({ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1 } }); }
        if (!home2inView4) { home2Animation4.start({ opacity: 0, y: -75 }); }
    }, [home2inView4]);

    useEffect(() => {
        if (home2inView5) { home2Animation5.start({ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1 } }); }
        if (!home2inView5) { home2Animation5.start({ opacity: 0, y: -75 }); }
    }, [home2inView5]);

    useEffect(() => {
        if (home2inView6) { home2Animation6.start({ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1 } }); }
        if (!home2inView6) { home2Animation6.start({ opacity: 0, y: -75 }); }
    }, [home2inView6]);

    useEffect(() => {
        if (home2inView7) { home2Animation7.start({ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1 } }); }
        if (!home2inView7) { home2Animation7.start({ opacity: 0, y: -75 }); }
    }, [home2inView7]);

    return (
        <div className='careers-page-wrapper pb-3' style={{ overflowX: "hidden" }}>
            <HeroSection data={herosectionData} />
            <motion.div className="container position-absolute" style={{ top: "1rem", right: "50%", transform: "translateX(50%)" }}>
                <Navbar2 />
            </motion.div>
            <div className="container pt-5 ">
                <motion.div ref={home2ref1} animate={home2Animation1}>
                    <h5 className='fw-700 pb-2'>PRODUCTS</h5>
                    <h3 className='fw-700 pb-2'>We have the Team, technology and Tenacity</h3>
                    <div className='ps-3' style={{ borderLeft: "3px solid #FF4BB7", textAlign: "justify" }}>
                        <p>Today’s customers want to shop on their terms. They expect a consistent experience across touchpoints: in-store, online, or mobile. With each channel having its own data, processes, and context, managing multiple capabilities has become extremely complex.</p>
                        <p>Our products creates a foundation for future retail that transcends the boundaries of channels and touchpoints. Today’s customers want to shop on their terms. They expect a consistent experience across touchpoints: in-store, online, or mobile. With each channel having its own data, processes, and context, managing multiple capabilities has become extremely complex.</p>
                    </div>
                </motion.div>
                <motion.button
                    className='btn btn-outline-secondary mt-3 ms-4' onClick={() => navigate("/products")} >Know More</motion.button>
                {/* carousel  */}
                <motion.div ref={home2ref2} animate={home2Animation2}>
                    <ProductCarousel2 />
                </motion.div>
                <motion.div ref={home2ref3} animate={home2Animation3} className='text-end' >
                    <h5 className='fw-700 pb-2'>SERVICES</h5>
                    <h3 className='fw-700 pb-2'>We have the Team, technology and Tenacity</h3>
                    <div className='pe-3' style={{ borderRight: "3px solid #FF4BB7", textAlign: "justify" }}>
                        <p>Today’s customers want to shop on their terms. They expect a consistent experience across touchpoints: in-store, online, or mobile. With each channel having its own data, processes, and context, managing multiple capabilities has become extremely complex.</p>
                        <p>Our products creates a foundation for future retail that transcends the boundaries of channels and touchpoints. Today’s customers want to shop on their terms. They expect a consistent experience across touchpoints: in-store, online, or mobile. With each channel having its own data, processes, and context, managing multiple capabilities has become extremely complex.</p>
                    </div>
                </motion.div>
                <motion.div ref={home2ref4} animate={home2Animation4}
                    className='d-flex gap-4 pt-5 pb-3 mt-3 flex-column flex-md-row justify-content-between'>
                    <div className='text-center text-lg-start'>
                        <h5 className='fw-700'>Mobile App Development</h5>
                        <p>Extensive experience building modern web applications using React Javascript library (including modern features).</p>
                    </div>
                    <div className='text-center'>
                        <h5 className='fw-700'>Mobile App Development</h5>
                        <p>Extensive experience building modern web applications using React Javascript library (including modern features).</p>
                    </div>
                    <div className='text-center text-lg-end'>
                        <h5 className='fw-700'>Mobile App Development</h5>
                        <p>Extensive experience building modern web applications using React Javascript library (including modern features).</p>
                    </div>
                </motion.div>
                <motion.div ref={home2ref5} animate={home2Animation5} className='d-flex justify-content-center'>
                    <button className='btn btn-outline-secondary ' onClick={() => navigate("/services")}>Know More</button>
                </motion.div>

                <motion.div ref={home2ref6} animate={home2Animation6}
                    className='d-flex flex-column py-5 my-3 flex-lg-row justify-content-between align-items-center'>
                    <div className=' py-4 col col-lg-6'>
                        <h5 className='fw-700 pb-2'>CAREER</h5>
                        <h3 className='fw-700 pb-2'>Discover your New Career</h3>
                        <p>Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right here - including yours.</p>
                        <div className='d-flex  align-items-center' >
                            Explore Openings <Link to="/careers" className='text-dark exploreOpeningsbtn ms-4' ><BsArrowRight size={20} /></Link>
                        </div>
                    </div>
                    <div className='bg-white border px-5 py-4 .newsBox ' style={{ maxWidth: "400px", borderRadius: "1rem" }}>
                        <h5 className='fw-700 pb-2'>News</h5>
                        <div>
                            <h6 className='fw-700 text-muted'>Extensive experience building modern web applications using React.</h6>
                            <p>Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right ..</p>
                        </div>
                        <button className='btn btn-outline-secondary'>More News</button>

                    </div>
                </motion.div>
                <motion.div ref={home2ref7} animate={home2Animation7} className='pb-4' >
                    <h5 className='fw-700 pb-2'>ABOUT</h5>
                    <h3 className='fw-700 pb-2'>We have the Team, technology and Tenacity</h3>
                    <div className='d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between'>
                        <div className='col col-md-8 col-lg-9'>
                            <div className='ps-3' style={{ borderLeft: "3px solid #FF4BB7", textAlign: "justify" }}>
                                <p>Today’s customers want to shop on their terms. They expect a consistent experience across touchpoints: in-store, online, or mobile. With each channel having its own data, processes, and context, managing multiple capabilities has become extremely complex.</p>
                                <p>Our products creates a foundation for future retail that transcends the boundaries of channels and touchpoints. Our products creates a foundation for future retail that transcends the boundaries of channels and touchpoints.</p>
                            </div>
                        </div>
                        <div className='col-5 homesubmenu  col-md-3 col-lg-2 my-2 text-start text-lg-end '>
                            <p className='border-bottom' style={{ cursor: "pointer" }}>Our Story</p>
                            <p className='border-bottom' style={{ cursor: "pointer" }}>The Team</p>
                            <p className='border-bottom' style={{ cursor: "pointer" }}>Our Principles</p>
                            <p className='border-bottom' style={{ cursor: "pointer" }}>Future</p>
                        </div>
                    </div>
                    <button className='btn btn-outline-secondary mt-3 ms-4' onClick={() => navigate("/whoweare")} >Know More</button>

                </motion.div>











            </div>

            <Footer2 />
        </div>
    )
}

export default Home2