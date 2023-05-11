import React, { useEffect } from 'react'
import "./joinus.scss"
import aboutusarowpng from "../../../../assets/aboutusarrow.png"
import readmoreArrow from "../../../../assets/readmorearrow.png"
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const Joinus = () => {
    const joinusanimation1 = useAnimation();
    const joinusanimation2 = useAnimation();
    const joinusanimation3 = useAnimation();
    const joinusanimation4 = useAnimation();
    const joinusanimation5 = useAnimation();
    const joinusanimation6 = useAnimation();

    const [joinusref1, joinusinView1] = useInView({ threshold: 0.2 });
    const [joinusref2, joinusinView2] = useInView({ threshold: 0.2 });
    const [joinusref3, joinusinView3] = useInView({ threshold: 0.2 });
    const [joinusref4, joinusinView4] = useInView({ threshold: 0.2 });
    const [joinusref5, joinusinView5] = useInView({ threshold: 0.2 });
    const [joinusref6, joinusinView6] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (joinusinView1) {
            joinusanimation1.start({
                opacity: 1, y: 0,
                transition: { delay: 0.25, duration: 0.25 },
            });
        }
        if (!joinusinView1) { joinusanimation1.start({ opacity: 0, y: 75 }); }
    }, [joinusinView1]);
    
    useEffect(() => {
        if (joinusinView2) {
            joinusanimation2.start({
                opacity: 1, x: 0,
                transition: { delay: 0.25, duration: 0.25 },
            });
        }
        if (!joinusinView2) { joinusanimation2.start({ opacity: 0, x: -100 }); }
    }, [joinusinView2]);
    
    useEffect(() => {
        if (joinusinView3) {
            joinusanimation3.start({
                opacity: 1, scale: 1,
                transition: { delay: 0.65, duration: 0.25 },
            });
        }
        if (!joinusinView3) { joinusanimation3.start({ opacity: 0, scale: 0.5 }); }
    }, [joinusinView3]);
    
    useEffect(() => {
        if (joinusinView4) {
            joinusanimation4.start({
                opacity: 1, x: 0,
                transition: { delay: 0.45, duration: 0.25 },
            });
        }
        if (!joinusinView4){ joinusanimation4.start({ opacity: 0, x: 100 }); }
    }, [joinusinView4]);
    
    useEffect(() => {
        if (joinusinView5) {
            joinusanimation5.start({
                opacity: 1, x: 0, scale:1,
                transition: { delay: 0.35, duration: 0.25 },
            });
        }
        if (!joinusinView5){ joinusanimation5.start({ opacity: 0, x: -300,scale:0 }); }
    }, [joinusinView5]);
    
    useEffect(() => {
        if (joinusinView6) {
            joinusanimation6.start({
                opacity: 1, x: 0,scale:1,
                transition: { delay: 0.65, duration: 0.25 },
            });
        }
        if (!joinusinView6){ joinusanimation6.start({ opacity: 0, x: 300,scale:0}); }
    }, [joinusinView6]);

    return (
        <div className='joinus pt-5'>
            <motion.div ref={joinusref1} animate={joinusanimation1} >
                <h2 className='fw-700 text-center'>Join us</h2>
                <p className='text-center mt-3'>See is there is a suitable position for you here.</p>
            </motion.div>
            <div className='joinuscards d-flex justify-content-between flex-column flex-lg-row mt-5'>
                <motion.div className='div1' ref={joinusref2} animate={joinusanimation2} >
                    <h5>Flutter Developer,Sr</h5>
                    <p>Inviting passionate, experienced Flutter Developers to join with our team. Qualified candidates share your profile with us!</p>
                    <a href=""><img src={readmoreArrow} alt="" /></a>
                </motion.div>
                <motion.div className='div2' ref={joinusref3} animate={joinusanimation3}>
                    <h5>Full Stack Developer,Sr</h5>
                    <p>Inviting passionate, experienced Full Stack Developers to join with our team. Qualified candidates share your profile with us!</p>
                    <a href="#"><img src={readmoreArrow} alt="" /></a>
                </motion.div>
                <motion.div className='div3' ref={joinusref4} animate={joinusanimation4}>
                    <h5>Software Tester,Sr</h5>
                    <p>Inviting experienced Software Tester to join with our team. Qualified candidates share your profile with us!</p>
                    <a href="#"><img src={readmoreArrow} alt="" /></a>
                </motion.div>
            </div>
            <motion.div className='aboutusarrow' ref={joinusref5} animate={joinusanimation5} >
                <img src={aboutusarowpng} alt="" />
            </motion.div>
            <motion.button className='btn btn-outline-secondary' ref={joinusref6} animate={joinusanimation6}>Search and Apply</motion.button>

        </div>
    )
}
