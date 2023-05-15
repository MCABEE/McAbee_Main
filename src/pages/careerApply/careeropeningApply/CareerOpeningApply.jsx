import React from 'react'

//import react icons
import { BsArrowLeft } from "react-icons/bs"
import { Link } from 'react-router-dom'

const CareerOpeningApply = () => {
    return (
        <>
            <div className='pt-4 pb-5'>
                <h6 className='fw-700'>UI/UX Designer</h6>
                <p className='mb-2 fw-bold ' style={{ fontSize: "0.9rem" }}>2yr experience | 01 Opening</p>
                <p className='m-0 pb-2'>Extensive experience building modern web applications using React Javascript library (including modern features).</p>
                <p className='text-muted' style={{ fontSize: "0.9rem" }}>Posted on: 12 May 2023</p>
                <p className='fw-bold'>Job Description</p>
                <ul className='p-0' style={{ textAlign: "justify" }}>
                    <li>Work as part of an Agile delivery team, collaborating with others to understand requirements, analyze and refine stories, and design, implement & test solutions.</li>
                    <li>Deliver applications and frameworks that are modular, performant, tested, documented, and meet current UI development best practices.</li>
                    <div className="collapse" id="careeropeningApplyCollapse-description">
                        <li>Build testable software, and the unit & e2e test suites to validate it. Reduce defects in your product and ensure other developers can refactor your code with confidence.</li>
                        <li>Build for reuse. Where an existing solution does not exist, write code that is generic, modular, tested, documented, and packaged for other developers.</li>
                        <li>Mentor and educate junior developers in development best practices. Help create a culture of learning and continuous improvement. Build and participate in the wider UI community.</li>
                    </div>
                    <p className='text-primary pt-3' >
                        <a data-bs-toggle="collapse" href="#careeropeningApplyCollapse-description" aria-expanded="false">
                            More ...
                        </a></p>
                </ul>
                <p className='fw-bold'>Job Location : Chennai</p>
                <div className='w-50'>
                    <div className='d-flex justify-content-between'>
                        <p className='fw-700 '>Apply</p>
                        <p>
                            <a className='text-dark' data-bs-toggle="collapse" href="#careeropeningApplyCollapse-formopenclose" aria-expanded="false">
                                Open
                            </a></p>
                    </div>
                    <div className="collapse" id="careeropeningApplyCollapse-formopenclose">
                        <div className='d-flex flex-column gap-4 pt-3'>
                            <input type="text" className="form-control" placeholder="Full Name" />
                            <input type="text" className="form-control" placeholder="Address" />
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">+91</span>
                                <input type="text" className="form-control" placeholder="Mobile Number" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <input type="text" className="form-control" placeholder="Email-id" />
                            <input type="file" className="form-control btn btn-primary" id="myFile" name="filename" />
                        </div>
                        <div className='d-flex gap-5 mt-5 align-items-center'>
                            <button type='submit' className='btn btn-outline-secondary '>Submit</button>
                            <div className='text-success'>Application has been successfully submited.</div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default CareerOpeningApply