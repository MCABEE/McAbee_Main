import React, { useEffect, useRef, useState } from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2';
import HeroSection2 from '../../components/herosection2/HeroSection2';
import { Footer2 } from '../../components/footer2/Footer2';
import { SendEnquiry } from '../../Services/api';
import { RiShareForward2Fill } from "react-icons/ri"
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services2 = () => {

    //animate
    const serviceConsultation2Animation1 = useAnimation();
    const [displaySearchFilter, setdisplaySearchFilter] = useState(true)

    const [formOpen, setFormOpen] = useState(false)
    const [showsuccessmsg, setShowsuccessmsg] = useState(false)
    const [successmsg, setsuccessmsg] = useState(true)
    const [showProgress, setshowProgress] = useState(false)
    const [selectedFile, setselectedFile] = useState(null)

    const [serviceConsultation2ref1, serviceConsultation2inView1] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (serviceConsultation2inView1) { serviceConsultation2Animation1.start({ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1 } }); }
        if (!serviceConsultation2inView1) {serviceConsultation2Animation1.start({ opacity: 0, y: -75 }); }
    }, [serviceConsultation2inView1]);
    //animation completes here


    const serviceList = ["Mobile App Development", "Web Application Development", "Automation", "Cloud Hosting", "Digital Marketing", "Big Data Analytics"] //sets the list option for herosection2 which is going as object prop 

    const SelectedProduct = PRODUCTS.filter((PRODUCT) => filterProduct === PRODUCT.productName) //filters the job which the user select through a select list in herosection2

    const handleFileinputChange = (e) => {
        e.preventDefault()
        setselectedFile(e.target.files[0])
    }


    
    
    const serviceSection2 = {
        "title": "SERVICES",
        "tagline": "Future makes simple, through Technology",
        "shortDesc1": "Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right here - including yours. Kickstart your journey today.",
        "List": serviceList,
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);
        formRef.current.reset();   // Reset the form values
        setselectedFile(null)
        setshowProgress(true)
        const res = await SendEnquiry(data)
        if (res.status === "ok") {
            setshowProgress(false)
            setsuccessmsg(true)
            setshowsuccessmsg(true)
        } else {
            setshowProgress(false)
            setsuccessmsg(false)
            setshowsuccessmsg(true)
        }
        setTimeout(() => {
            setshowsuccessmsg(false)
        }, 8000);
    };
    return (
        <div className='careers-page-wrapper pb-3'>
            <div className='container pt-3'>
                <Navbar2 />
            </div>
            <div className='container'>
                <HeroSection2 data={serviceSection2} displaySearchFilter={displaySearchFilter} />
                <div className=' pt-4 pb-5 border-top'>
                    <p className='pt-3'>Enter the required service, including your contact details here !</p>
                </div>
                <motion.div ref={serviceConsultation2ref1} animate={serviceConsultation2Animation1} className='col col-md-8 col-lg-6 '>
                    <a href="#careeropeningApplyCollapse-formopenclose" onClick={() => setformOpen(!formOpen)} className='text-dark' data-bs-toggle="collapse" aria-expanded="false">
                        <div className='d-flex justify-content-between'>
                            <p className='fw-700 '>Book a Consultation</p>
                            <p>

                                {formOpen ? "Close" : "Open"}
                            </p>
                        </div></a>
                    <form onSubmit={handleSubmit} className="collapse" id="careeropeningApplyCollapse-formopenclose">
                        <div className='d-flex flex-column gap-4 pt-3'>
                            {/* select service */}
                            <select className="form-select" name='ServiceSelected' aria-label="Default select example">
                                <option value={"no_service_selected"}>Select Service</option>
                                <option value="Mobile_App_Development">Mobile App Development</option>
                                <option value="Web_Application_Development">Web Application Development</option>
                                <option value="Automation">Automation</option>
                                <option value="Cloud_Hosting">Cloud Hosting</option>
                                <option value="Digital_Marketing">Digital_Marketing</option>
                                <option value="Big_Data_Analytics">Big Data Analytics</option>
                            </select>
                            {/* Name input */}
                            <input type="text" name='name' className="form-control" placeholder="Full Name (of Authorized Person)" />
                            {/* Address input */}
                            <input type="text" name='company_name' className="form-control" placeholder="Company Name" />
                            {/* email input */}
                            <input type="text" name='email' className="form-control" placeholder="Email-id" />
                            {/* Mobile input */}
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">+91</span>
                                <input type="text" name='mobile' className="form-control" placeholder="Contact Number" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            {/* textt field */}
                            <div className="mb-3">
                                <textarea className="form-control" name='clientRequirement' rows="3" placeholder='A brief about your requirement'></textarea>
                            </div>
                            {/* file input */}
                            <div >
                                <div className="btn btn-primary btn-file">
                                    <RiShareForward2Fill size={30} />
                                    <span> Add Files</span>
                                    <input type="file" onChange={handleFileinputChange} name="document" />
                                </div>
                                {
                                    selectedFile ? <span className='ps-4'>{selectedFile.name}</span> : ""
                                }
                            </div>
                        </div>
                        <div className='d-flex gap-5 mt-5 align-items-center'>
                            <button type='submit' className='btn btn-outline-secondary '>Submit</button>
                            {
                                showProgress
                                    ? (<div className="spinner-border text-secondary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    ) : ""
                            }
                            {
                                showsuccessmsg
                                    ? (
                                        successmsg
                                            ? <span className='text-success'>Enquiry has been successfully submited. We will get back tou you within 24 hrs.</span>
                                            : <span className='text-danger'>Something went wrong. Please try again.</span>
                                    )
                                    : ""
                            }
                        </div>
                    </form>
                </motion.div>
            </div>
            <Footer2 />
        </div>
    )
}

export default Services2