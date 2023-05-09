import React from 'react'
import "./footer.scss"
import { FooterTabs } from './footertabs/FooterTabs'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa"

export const Footer = () => {
    return (
        <div className="container-fluid footer-container" style={{ borderTop: "1px dashed black" }}>
            <footer className="pt-4">
                <div className="footerTab">
                    <FooterTabs data={["Company", "About", "Careers", "Products", "Services"]} />
                    <FooterTabs data={["Products", "Firstlook", "Notepad", "Search Engine", "View all"]} />
                    <FooterTabs data={["Services", "Product Design", "Mobile Application", "Web Application", "More"]} />
                    <FooterTabs data={["Support", "Business Consulting", "HR Support", "Product Related", "General Queries"]} />

                    <div className='footericontab'>
                        <h5 className='fw-bold text-end text-muted pb-2'>Follow us on</h5>
                        <div className='d-flex gap-2'>
                            <a className='footerIconDiv' href='https://www.facebook.com/'><FaFacebookF color='white' size="1.4rem" /></a>
                            <a className='footerIconDiv' href='https://www.linkedin.com/'><FaLinkedinIn color='white' size="1.4rem" /></a>
                            <a className='footerIconDiv' href='https://twitter.com/home'> <FaTwitter color='white' size="1.4rem" /></a>
                            <a className='footerIconDiv' href='https://www.whatsapp.com/'><FaWhatsapp color='white' size="1.4rem" /></a>
                        </div>
                        <div>
                            <span className='pe-2'>Privacy</span>
                            <span className='px-2' style={{ borderLeft: "1px solid black", borderRight: "1px solid black" }}>Term</span>
                            <span className='ps-2'>Cookies</span>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
                    <p>Copyright (c) 2023 <span className='fw-bold'>MCABEE</span></p>
                    <select className="form-select" style={{ width: "15rem" }}>
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
