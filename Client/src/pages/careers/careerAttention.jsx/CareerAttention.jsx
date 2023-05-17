import React, { useRef, useState } from 'react'
import "./careerAttention.scss"
//import react icons
import { RiShareForward2Fill } from "react-icons/ri"
import { SendResume } from '../../../Services/api'

const CareerAttention = () => {
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
        setTimeout(() => {
            setsuccessmsg(false);
          }, 5000);
    };

    return (
        <div className='mt-4 pt-4 border-top '>
            <h5 className='fw-bold pb-2 text-center text-lg-start'>Attention</h5>
            <div className='d-flex flex-column gap-5 flex-lg-row align-items-center justify-content-between'>
                <p style={{ width: "80%" }}>We directly accept applications from eligible candidates and conduct interviews for the selection. We have not authorized any individual or entity to conduct recruitment or interview for employment in this company. If any vacancy's posted above is fit for you, <a href='#'> Apply here</a>.
                    <br />
                    Otherwise share your cv here, we will let you know, when the suitable vacancy’s available.</p>
                <form ref={formRef} onSubmit={handleSubmit} className="d-flex flex-column gap-2 justify-content-between align-items-center">
                    <input type="file" className="form-control btn btn-primary" id="myFile" name="resume" accept=".pdf" capture="filesystem" aria-label="Send your resume" />
                    <div className='d-flex w-100 justify-content-between align-items-center'> 
                        <button type='submit' className='btn btn-outline-success ' style={{ width: "fit-content" }}>Submit</button>
                        <p className='m-0 text-success'>{successmsg?" Applied successfully.":""}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CareerAttention