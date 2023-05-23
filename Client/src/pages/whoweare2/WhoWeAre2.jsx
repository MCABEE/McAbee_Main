import React, { useEffect, useState } from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2';
import HeroSection2 from '../../components/herosection2/HeroSection2';
import CareerOpenings from '../careers/openings/CareerOpenings';
import { Footer2 } from '../../components/footer2/Footer2';

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhoweAre2 = () => {

    const [displaySelectMenu, setdisplaySelectMenu] = useState(false)
    const [displaySearchFilter, setdisplaySearchFilter] = useState(false)

    const heroSection2 = {
        "title": "ABOUT",
        "tagline": "We have the Team, technology and Tenacity",
        "shortDesc1": "Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right here - including yours. Kickstart your journey today.",
        "List": []
    }

    // animations 
    const whoweare2Animation1 = useAnimation();
  const [whoweare2ref1, whoweare2inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  useEffect(() => {
    if (whoweare2inView1) {whoweare2Animation1.start({opacity: 1, y: 0,transition: { delay: 0.5, duration: 1 }});}
    if (!whoweare2inView1) { whoweare2Animation1.start({ opacity: 0, y: -75 }); }
  }, [whoweare2inView1]);
  
  //animation2
    const whoweare2Animation2 = useAnimation();
  const [whoweare2ref2, whoweare2inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  useEffect(() => {
    if (whoweare2inView2) {whoweare2Animation2.start({opacity: 1, y: 0,transition: { delay: 0.75, duration: 1 }});}
    if (!whoweare2inView2) { whoweare2Animation2.start({ opacity: 0, y: -75 }); }
  }, [whoweare2inView2]);

  //animation3
    const whoweare2Animation3 = useAnimation();
  const [whoweare2ref3, whoweare2inView3] = useInView({ threshold: 0.1, triggerOnce: true });
  useEffect(() => {
    if (whoweare2inView3) {whoweare2Animation3.start({opacity: 1, y: 0,transition: { delay: 0.75, duration: 1 }});}
    if (!whoweare2inView3) { whoweare2Animation3.start({ opacity: 0, y: -75 }); }
  }, [whoweare2inView3]);

  //animation4
    const whoweare2Animation4 = useAnimation();
  const [whoweare2ref4, whoweare2inView4] = useInView({ threshold: 0.1, triggerOnce: true });
  useEffect(() => {
    if (whoweare2inView4) {whoweare2Animation4.start({opacity: 1, y: 0,transition: { delay: 0.75, duration: 1 }});}
    if (!whoweare2inView4) { whoweare2Animation4.start({ opacity: 0, y: -75 }); }
  }, [whoweare2inView4]);

    return (
        <div className='careers-page-wrapper pb-3'>
            <div className='container pt-3'>
                <Navbar2 />
            </div>

            <div className='container'>
                <HeroSection2 data={heroSection2} displaySelectMenu={displaySelectMenu} displaySearchFilter={displaySearchFilter} />
                <div className='pb-4  border-top'>
                    <motion.div ref={whoweare2ref1} animate={whoweare2Animation1} className='pt-5'>
                        <h4 className='pb-3'>Who we are</h4>
                        <p>Extensive experience building modern web applications using React Javascript library (including modern features).</p>
                        <p style={{textAlign:"justify"}}>Work as part of an Agile delivery team, collaborating with others to understand requirements, analyze and refine stories, and design, implement & test solutions. Deliver applications and frameworks that are modular, performant, tested, documented, and meet current UI development best practices. Build testable software, and the unit & e2e test suites to validate it. Reduce Build for reuse. Where an existing solution does not exist, write code that is generic, modular, tested, documented, and packaged for other developers. Mentor and educate junior developers in development best practices. Help create a culture of learning and continuous improvement. Build and participate in the wider UI community.
                        </p>
                    </motion.div>
                    <motion.div ref={whoweare2ref2} animate={whoweare2Animation2} className='pt-5'>
                        <h4 className='pb-3'>2012 - Seeding as a startup</h4>
                        <p style={{textAlign:"justify"}}>Work as part of an Agile delivery team, collaborating with others to understand requirements, analyze and refine stories, and design, implement & test solutions. Deliver applications and frameworks that are modular, performant, tested, documented, and meet current UI development best practices. Build testable software, and the unit & e2e test suites to validate it. Reduce Build for reuse. Where an existing solution does not exist, write code that is generic, modular, tested, documented, and packaged for other developers. Mentor and educate junior developers in development best practices. Help create a culture of learning and continuous improvement. Build and participate in the wider UI community.
                        </p>
                    </motion.div>
                    <motion.div ref={whoweare2ref3} animate={whoweare2Animation3} className='pt-5'>
                        <h4 className='pb-3'>The Team</h4>
                        <p style={{textAlign:"justify"}}>Work as part of an Agile delivery team, collaborating with others to understand requirements, analyze and refine stories, and design, implement & test solutions. Deliver applications and frameworks that are modular, performant, tested, documented, and meet current UI development best practices. Build testable software, and the unit & e2e test suites to validate it. Reduce Build for reuse. Where an existing solution does not exist, write code that is generic, modular, tested, documented, and packaged for other developers. Mentor and educate junior developers in development best practices. Help create a culture of learning and continuous improvement. Build and participate in the wider UI community.
                        </p>
                    </motion.div>
                    <motion.div ref={whoweare2ref4} animate={whoweare2Animation4} className='pt-5'>
                        <h4 className='pb-3'>Our Values and Principles</h4>
                        <p style={{textAlign:"justify"}}>Work as part of an Agile delivery team, collaborating with others to understand requirements, analyze and refine stories, and design, implement & test solutions. Deliver applications and frameworks that are modular, performant, tested, documented, and meet current UI development best practices. Build testable software, and the unit & e2e test suites to validate it. Reduce Build for reuse. Where an existing solution does not exist, write code that is generic, modular, tested, documented, and packaged for other developers. Mentor and educate junior developers in development best practices. Help create a culture of learning and continuous improvement. Build and participate in the wider UI community.
                        </p>
                    </motion.div>
                    
                </div>

            </div>

            <Footer2 />
        </div>
    )
}

export default WhoweAre2