import React, { useRef, useState } from 'react'
import { Navbar2 } from '../../components/navbar2/Navbar2';
import HeroSection2 from '../../components/herosection2/HeroSection2';
import { Footer2 } from '../../components/footer2/Footer2';
import SERVICES from '../../data/services';

const Services2 = () => {

    const [filterservice, setfilterservice] = useState("All")//changes the selection menu in the herosection 2
    const [displaySelectMenu, setdisplaySelectMenu] = useState(false)

    const [renderServicePage, setrenderServicePage] = useState(false) //tell which component to render (job openings or job apply component)
    const [formOpen, setformOpen] = useState(false)
    const [successmsg, setsuccessmsg] = useState(false)

    const serviceList = ["Mobile App Development", "Web Application Development", "Automation", "Cloud Hosting", "Digital Marketing", "Big Data Analytics"] //sets the list option for herosection2 which is going as object prop 

    //const SelectedProduct = PRODUCTS.filter((PRODUCT) => filterProduct === PRODUCT.productName) //filters the job which the user select through a select list in herosection2

    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);

        const res = await SendResume(data)
        setsuccessmsg(true)
        // Reset the form values
        formRef.current.reset();
    };


    const serviceSection2 = {
        "title": "SERVICES",
        "tagline": "Future makes simple, through Technology",
        "shortDesc1": "Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right here - including yours. Kickstart your journey today.",
        "List": serviceList,
    }
    return (
        <div className='careers-page-wrapper pb-3'>
            <div className='container pt-3'>
                <Navbar2 />
            </div>
            <div className='container'>
                <HeroSection2 data={serviceSection2} filter={filterservice} setfilter={setfilterservice} diplayListOption={renderServicePage} displaySelectMenu={displaySelectMenu} />
                <div className=' pt-4 pb-5 border-top'>
                    {
                        renderServicePage ? (
                            <p className='pt-3'>We directly accept applications from eligible candidates and conduct interviews for the selection. We have not authorized </p>
                        ) : (
                            <p className='pt-3'>Enter the required service, including your contact details here !</p>
                        )
                    }

                </div>
                {
                    renderServicePage
                        ? (
                            <div>
                                <div className="row mx-0 gy-5 pb-3" style={{ columnGap: "6rem" }}>
                                    {
                                        SERVICES?.map((SERVICE) => {
                                            return (
                                                <div key={SERVICE.title} className="col-12 px-0 border-bottom col-md-5">
                                                    <h6 className='fw-700'>{SERVICE.title}</h6>
                                                    <p >{SERVICE.shortDesc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='mt-5 pb-3'>
                                    <p>We directly accept applications from eligible candidates and conduct interviews for the selection. We have not authorized any individual or entity to conduct recruitment or interview for employment in this company. If any vacancy's posted above is fit for you, Apply here.</p>
                                    <button className='btn btn-outline-secondary mt-3'>Book a Consultation</button>
                                </div>
                            </div>

                        ) : (
                            <div className='col col-md-8 col-lg-6 '>
                                <a href="#careeropeningApplyCollapse-formopenclose" onClick={() => setformOpen(!formOpen)} className='text-dark' data-bs-toggle="collapse" aria-expanded="false">
                                    <div className='d-flex justify-content-between'>
                                        <p className='fw-700 '>Book a Consultation</p>
                                        <p>

                                            {formOpen ? "Close" : "Open"}
                                        </p>
                                    </div></a>
                                <form onSubmit={handleSubmit} ref={formRef} className="collapse" id="careeropeningApplyCollapse-formopenclose">
                                    <div className='d-flex flex-column gap-4 pt-3'>
                                        {/* select service */}
                                        <select className="form-select" aria-label="Default select example">
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
                                        <input type="text" name='address' className="form-control" placeholder="Company Name" />
                                        {/* email input */}
                                        <input type="text" name='email' className="form-control" placeholder="Email-id" />
                                        {/* Mobile input */}
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1">+91</span>
                                            <input type="text" name='mobile' className="form-control" placeholder="Contact Number" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        {/* textt field */}
                                        <div class="mb-3">
                                            <textarea class="form-control" name='clientRequirement' rows="3" placeholder='A brief about your requirement'></textarea>
                                        </div>
                                        {/* file input */}

                                        <input type="file" className="form-control btn btn-primary" id="myFile" name="resume" />
                                    </div>
                                    <div className='d-flex gap-5 mt-5 align-items-center'>
                                        <button type='submit' className='btn btn-outline-secondary '>Submit</button>
                                        <div className='text-success'>{successmsg ? "Application has been successfully submited." : ""}</div>
                                    </div>
                                </form>
                            </div>
                        )
                }
            </div>



            <Footer2 />

        </div>
    )
}

export default Services2