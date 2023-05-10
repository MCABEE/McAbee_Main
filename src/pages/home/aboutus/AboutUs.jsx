import React, { useEffect, useRef, useState } from 'react'
import "./aboutus.scss"
import { ServiceCards } from './servicecards/ServiceCards'
import { Joinus } from './joinus/Joinus'
import aboutusimg from "../../../assets/aboutus.png"
import CountUp from 'react-countup'

export const AboutUs = () => {
    const [counter, setcounter] = useState(false)
    const elementRef = useRef(null);

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setcounter(true)
            } else {
                setcounter(false)// element is not visible, do something else
            }
        });
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // adjust as needed
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [elementRef]);

    return (
        <div className='aboutus-content pt-5'>
            <h2 className='fw-700 text-center m-0'>About us</h2>
            <p className='text-center m-0 mt-3'>A team that treats technology as a passion!</p>
            <div className='d-flex flex-column flex-md-row col col-md-10 col-lg-8 my-4 pb-5 gap-3 mx-auto justify-content-between'>
                <div className='d-flex flex-column text-center'>
                    <div className='fw-bold fs-4' ref={elementRef} >
                        {
                            counter && <CountUp start={0} end={100} duration={2} delay={0} />
                        }
                    </div>

                    <div className='fs-4 text-muted'>thousand +</div>
                    <div >product users globally</div>
                </div>
                <div className='d-flex flex-column text-center'>
                    <div className='fw-bold fs-4' ref={elementRef} >
                        {
                            counter && <CountUp start={0} end={14} duration={2} delay={0} />
                        }
                    </div>
                    <div className='fs-4 text-muted'>countries</div>
                    <div >products presence in</div>
                </div>
                <div className='d-flex flex-column text-center'>
                    <div className='fw-bold fs-4' ref={elementRef} >0{
                        counter && <CountUp start={0} end={3} duration={2} delay={0} />
                    }</div>
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
                <ServiceCards />
            </div>
            <div>
                <Joinus />
            </div>
        </div>
    )
}
