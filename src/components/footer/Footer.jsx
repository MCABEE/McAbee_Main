import React from 'react'
import "./footer.scss"
import { FooterTabs } from './footertabs/FooterTabs'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa"

export const Footer = () => {
    return (
        <div className="container-fluid footer-container mt-5 pt-5" style={{ borderTop: "1px dashed black" }}>
            <footer >
                <div className="footerTab">
                    <FooterTabs data={["Company", "About", "Careers", "Products", "Services"]} />
                    <FooterTabs data={["Products", "Firstlook", "Notepad", "Search Engine", "View all"]} />
                    <FooterTabs data={["Services", "Product Design", "Mobile Application", "Web Application", "More"]} />
                    <FooterTabs data={["Support", "Business Consulting", "HR Support", "Product Related", "General Queries"]} />

                    <div className='footericontab pt-3'>
                        <h5 className='fw-bold fs-6 text-end  text-muted'>Follow us on</h5>
                        <div className='d-flex gap-2'>
                            <a className='footerIconDiv' href='https://www.facebook.com/'><FaFacebookF color='white' size="1.2rem" /></a>
                            <a className='footerIconDiv' href='https://www.linkedin.com/'><FaLinkedinIn color='white' size="1.2rem" /></a>
                            <a className='footerIconDiv' href='https://twitter.com/home'> <FaTwitter color='white' size="1.2rem" /></a>
                            <a className='footerIconDiv' href='https://www.whatsapp.com/'><FaWhatsapp color='white' size="1.2rem" /></a>
                        </div>
                        <div className='position-relative ' style={{fontSize:"12px"}}>
                            <span><a href="#">Privacy</a> </span>
                            <span className='px-3 termscookiesverLine'><a href="#">Term</a></span>
                            <span><a href="#">Cookies</a> </span>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
                    <p>Copyright (c) 2023 <span className='fw-bold'>MCABEE</span></p>
                    <select className="form-select" style={{ width: "15rem",fontSize:"0.8rem" }}>
                        <option >Select Region</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </footer>
        </div>
    )
}
