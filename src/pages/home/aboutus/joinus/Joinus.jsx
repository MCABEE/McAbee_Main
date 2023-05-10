import React from 'react'
import "./joinus.scss"
import aboutusarowpng from "../../../../assets/aboutusarrow.png"

export const Joinus = () => {
    return (
        <div className='joinus'>
            <h2 className='fw-700 text-center'>Join us</h2>
            <p className='text-center'>See is there is a suitable position for you here.</p>
            <div className='joinuscards d-flex justify-content-between flex-column flex-lg-row'>
                <div className='div1'>
                    <h5>Flutter Developer,Sr</h5>
                    <p>Inviting passionate, experienced Flutter Developers to join with our team. Qualified candidates share your profile with us!</p>
                    <img src="src\assets\readmorearrow.png" alt="" />
                </div>
                <div className='div2'>
                    <h5>Full Stack Developer,Sr</h5>
                    <p>Inviting passionate, experienced Full Stack Developers to join with our team. Qualified candidates share your profile with us!</p>
                    <img src="src\assets\readmorearrow.png" alt="" />
                </div>
                <div className='div3'>
                    <h5>Software Tester,Sr</h5>
                    <p>Inviting experienced Software Tester to join with our team. Qualified candidates share your profile with us!</p>
                    <img src="src\assets\readmorearrow.png" alt="" />
                </div>
            </div>
            <div className='aboutusarrow'>
                <img src={aboutusarowpng} alt="" />
            </div>
            <button className='btn btn-outline-secondary'>Search and Apply</button>

        </div>
    )
}
