import React from 'react'
import "./herosection.css"
import { GoogleMapIcon } from '../../assets/GoogleMapIcon';
import { motion } from "framer-motion"
import {BsArrowRight} from "react-icons/bs"

export const HeroSection = ({ data }) => {
  
  const { image, topic, content, button,background } = data
  return (
    <div className={`hero-section ${background}`}>
      <div className='hero-section-content text-white'>
        {
          image && (
            <motion.div initial={{ opacity: 0, y: "-200vh" }}
            animate={{ opacity: 1, y: 1 }}
            transition={{delay:1.5}}  className='GoogleMapIconContainer'>
              <GoogleMapIcon width={5} height={5}/>
            </motion.div>
          )
        }

        <motion.p
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: 1 }}
          transition={{delay:0.5,duration:1        }} className='heroTitle'>
            {topic}
            </motion.p>
        <motion.p initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: 1 }}
          transition={{delay:3 ,duration:1 }} className='pb-5 herocontent'>{content}</motion.p>
        {
          button && <motion.div initial={{ opacity: 0, x: "50vw" }}
          animate={{ opacity: 1, x: 1 }}
          transition={{delay:4.5,duration:1}} className='d-flex  align-items-center' >
           Let's Talk <a href="#" className='text-dark heroSectionbtn ms-4' ><BsArrowRight size={20}/></a>
            </motion.div>
        }

      </div>
    </div>
  )
}
