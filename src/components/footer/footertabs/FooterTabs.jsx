import React from 'react'

export const FooterTabs = ({ data }) => {
    return (
         data && (
            <div className=''>
                <h5 className='fw-bold text-muted pb-2'>{data[0]}</h5>
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
