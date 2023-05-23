import React, { useEffect, useRef, useState } from 'react'
import { SendResume } from '../../../Services/api';
import { RiShareForward2Fill } from "react-icons/ri"
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const CareerOpeningApply = ({ JOBOPENINGS }) => {

    //animate
    const CareerOpeningApplyAnimation1 = useAnimation();

    const [CareerOpeningApplyref1, CareerOpeningApplyinView1] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (CareerOpeningApplyinView1) { CareerOpeningApplyAnimation1.start({ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1 } }); }
        if (!CareerOpeningApplyinView1) { CareerOpeningApplyAnimation1.start({ opacity: 0, y: -75 }); }
    }, [CareerOpeningApplyinView1]);

    //

    const [formOpen, setformOpen] = useState(false)
    const [toggleJobDesc, settoggleJobDesc] = useState(false)
    const [showsuccessmsg, setshowsuccessmsg] = useState(false)
    const [successmsg, setsuccessmsg] = useState(true)
    const [showProgress, setshowProgress] = useState(false)
    const [submiterror, setsubmiterror] = useState(false)
    const [selectedFile, setselectedFile] = useState(null)
    const formRef = useRef(null);

    const handleFileinputChange = (e) => {
        e.preventDefault()
        setsubmiterror(false)
        setselectedFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);
        data.jobtitle = JOBOPENINGS.jobTitle
        setselectedFile(null)
        if (data.resume.name === "") {
            setsubmiterror(true)
        } else {
            formRef.current.reset();
            setshowProgress(true)
            const res = await SendResume(data)
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
        }
        //

        // // Reset the form values

    };

    return (
        <>
            <motion.div ref={CareerOpeningApplyref1} animate={CareerOpeningApplyAnimation1} className='pt-4 pb-5'>
                <h6 className='fw-700'>{JOBOPENINGS.jobTitle}</h6>
                <p className='mb-2 fw-bold ' style={{ fontSize: "0.9rem" }}>{JOBOPENINGS.experience}yr experience <span className='text-muted'>|</span> {JOBOPENINGS.noOfOpenings} Opening</p>
                <p className='m-0 pb-2'>{JOBOPENINGS.shortDesc}</p>
                <p className='text-muted' style={{ fontSize: "0.9rem" }}>Posted on: {JOBOPENINGS.postedOn}</p>
                <p className='fw-bold'>Job Description</p>
                <ul className='p-0' style={{ textAlign: "justify" }}>
                    {
                        JOBOPENINGS.jobDesc.slice(0, 2).map((item, i) => {
                            return <li key={i}>{item}</li>
                        })
                    }
                    <div className="collapse" id="careeropeningApplyCollapse-description">
                        {
                            JOBOPENINGS.jobDesc.slice(2).map((item, i) => {
                                return <li key={i}>{item}</li>
                            })
                        }
                    </div>
                    <p className='text-primary pt-3' >
                        <a data-bs-toggle="collapse" onClick={() => settoggleJobDesc(!toggleJobDesc)} href="#careeropeningApplyCollapse-description" aria-expanded="false">
                            {toggleJobDesc ? "Less" : "More ..."}
                        </a></p>
                </ul>
                <p className='fw-bold'>Job Location : {JOBOPENINGS.location}</p>
                <div className='col col-md-8 col-lg-6 '>
                    <a href="#careeropeningApplyCollapse-formopenclose" className='text-dark' onClick={() => setformOpen(!formOpen)} data-bs-toggle="collapse" aria-expanded="false">
                        <div className='d-flex justify-content-between'>
                            <p className='fw-700 '>Apply</p>
                            <p>
                                {formOpen ? "Close" : "Open"}
                            </p>
                        </div>
                    </a>
                    <form onSubmit={handleSubmit} ref={formRef} className="collapse" id="careeropeningApplyCollapse-formopenclose">
                        <div className='d-flex flex-column gap-4 pt-3'>
                            {/* Name input */}
                            <input type="text" name='name' className="form-control" placeholder="Full Name" />
                            {/* Address input */}
                            <input type="text" name='address' className="form-control" placeholder="Address" />
                            {/* Mobile input */}
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">+91</span>
                                <input type="text" name='mobile' className="form-control" placeholder="Mobile Number" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            {/* email input */}
                            <input type="text" name='email' className="form-control" placeholder="Email-id" />
                            {/* file input */}
                            <div >
                                <div className="btn btn-primary btn-file">
                                    <RiShareForward2Fill size={30} />
                                    <span> Upload CV</span>
                                    <input type="file" onChange={handleFileinputChange} name="resume" accept=".pdf" capture="filesystem" />
                                </div>
                                {
                                    selectedFile ? <span className='ps-4'>{selectedFile.name}</span> : ""
                                }
                            </div>
                        </div>
                        {
                            submiterror ? <span className='text-danger'>Please attach your Resume*</span> : ""
                        }

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
                                            ? <span className='text-success'>Application has been Submitted successfully.</span>
                                            : <span className='text-danger'>Something went wrong. Please try again.</span>
                                    )
                                    : ""
                            }
                        </div>
                    </form>
                </div>

            </motion.div>
        </>

    )
}

export default CareerOpeningApply