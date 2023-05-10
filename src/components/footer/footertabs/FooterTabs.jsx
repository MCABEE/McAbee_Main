import React from 'react'
import "./footertabs.scss"

export const FooterTabs = ({ data }) => {
    return (
         data && (
            <div className='footerTabs'>
                <h5 className='fw-bold fs-6 text-muted pb-1'>{data[0]}</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-1"><a href="#" className="nav-link p-0 text-body-secondary">{data[1]}</a></li>
                    <li className="nav-item mb-1"><a href="#" className="nav-link p-0 text-body-secondary">{data[2]}</a></li>
                    <li className="nav-item mb-1"><a href="#" className="nav-link p-0 text-body-secondary">{data[3]}</a></li>
                    <li className="nav-item mb-1"><a href="#" className="nav-link p-0 text-body-secondary">{data[4]}</a></li>
                    <li className="nav-item mb-1"><a href="#" className="nav-link p-0 text-body-secondary">{data[5]}</a></li>
                </ul>
            </div>
        )
    )
}
