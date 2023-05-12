import React, { useEffect, useState } from 'react'
import "./footer.scss"
import { FooterTabs } from './footertabs/FooterTabs'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import upbottomarrow from "../../assets/Layer-38.png"

export const Footer = () => {

    const [selectvalue, setselectvalue] = useState("Select Region")

    const handleSelectValue = (e)=>{
        e.preventDefault()
        setselectvalue(e.target.value)
    }

    const footeranimation1 = useAnimation()

    const [footerref1,footerinView1] = useInView({threshold:0.2})

    useEffect(()=>{
        if(footerinView1){
            footeranimation1.start({opacity:1,x:0,transition:{delay:0.25,duration:0.25}})
        }
        if(!footerinView1){footeranimation1.start({opacity:0,x:75})}
    },[footerinView1])

    return (
        <motion.div className="container-fluid footer-container mt-5 pt-5" style={{ borderTop: "1px dashed black" }} ref={footerref1}
        animate={footeranimation1}>
            <footer >
                <div className="footerTab position-relative">
                    <FooterTabs data={["Company", "About", "Careers", "Products", "Services"]} />
                    <FooterTabs data={["Products", "Firstlook", "Notepad", "Search Engine", "View all"]} />
                    <FooterTabs data={["Services", "Product Design", "Mobile Application", "Web Application", "More"]} />
                    <FooterTabs data={["Support", "Business Consulting", "HR Support", "Product Related", "General Queries"]} />

                    <div className='footericontab pt-3'>
                        <h5 className='fw-bold fs-6 text-end  text-muted'>Follow us on</h5>
                        <div className='d-flex gap-2'>
                            <a className='footerIconDiv footerfbsocialmediaicon' href='https://www.facebook.com/'><FaFacebookF className='' /></a>
                            <a className='footerIconDiv footerlinkedinmediaicon' href='https://www.linkedin.com/'><FaLinkedinIn className='' /></a>
                            <a className='footerIconDiv footertweetsocialmediaicon' href='https://twitter.com/home'> <FaTwitter className='' /></a>
                            <a className='footerIconDiv footerwhastapsocialmediaicon' href='https://www.whatsapp.com/'><FaWhatsapp className='' /></a>
                        </div>
                        <div className='position-relative ' style={{fontSize:"14px"}}>
                            <span><a className='texthoverunderline' href="#">Privacy</a> </span>
                            <span className='px-3 termscookiesverLine texthoverunderline'><a href="#">Term</a></span>
                            <span><a className='texthoverunderline' href="#">Cookies</a> </span>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4 mt-4 border-top">
                    <p>Copyright (c) 2023 <span className='fw-bold'><a href="#">MCABEE</a> </span></p>
                    <select value={selectvalue} onChange={(e)=>handleSelectValue(e)} className="form-select"  style={{ width: "15rem",fontSize:"0.8rem" }}>
                        <option >Select Region</option>
                        <option value="1">India</option>
                        <option value="2">Europe</option>
                        <option value="3">Australia-NZ</option>
                        <option value="4">US-Canada</option>
                        <option value="5">Middle East</option>
                    </select>
                </div>
                <div className='upbotomarrowdiv'>
                   <a href="#"> <img src={upbottomarrow} alt="" className='upbotomarrow' /></a>
                </div>
            </footer>
        </motion.div>
    )
}
