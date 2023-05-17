import React, { useRef, useState } from 'react'
import { SendResume } from '../../../Services/api';


const CareerOpeningApply = ({ JOBOPENINGS }) => {

    const [formOpen, setformOpen] = useState(false)
    const [toggleJobDesc, settoggleJobDesc] = useState(false)
    const [successmsg, setsuccessmsg] = useState(false)

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

    return (
        <>
            {

            }
            <div className='pt-4 pb-5'>
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
                    <div className='d-flex justify-content-between'>
                        <p className='fw-700 '>Apply</p>
                        <p>
                            <a className='text-dark' data-bs-toggle="collapse" onClick={() => setformOpen(!formOpen)} href="#careeropeningApplyCollapse-formopenclose" aria-expanded="false">
                                {formOpen ? "Close" : "Open"}
                            </a></p>
                    </div>
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
                            <input type="file" className="form-control btn btn-primary" id="myFile" name="resume" />
                        </div>
                        <div className='d-flex gap-5 mt-5 align-items-center'>
                            <button type='submit' className='btn btn-outline-secondary '>Submit</button>
                            <div className='text-success'>{successmsg ? "Application has been successfully submited." : ""}</div>
                        </div>
                    </form>
                </div>

            </div>
        </>

    )
}

export default CareerOpeningApply