import React from 'react'
import "./contactdetails.css"

export const ContactDetails = () => {
    return (
        <>
            <div className='contact-page-details-content pt-5'>
                <h4>General Enquiries</h4>
                <div >
                    <div className='d-flex pb-1 '>
                        <div className='col-2 col-md-1'>Phone:</div>
                        <div className=' d-flex flex-column flex-md-row'>
                            <div className='ps-3'><a href="tel:+919072208666">+91 90722 08666</a> </div>
                            <div className='ps-3'><a href="tel:+919072205666">+91 90722 05666</a></div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='col-2 col-md-1'>Email:</div>
                        <div className='ps-3'><a href="mailto:mail@mcabee.in">mail@mcabee.in</a></div>
                    </div>
                </div>

            </div>
            <div className='contact-page-details-content pt-5'>
                <h4>For Specific Suport, Choose from below</h4>
                <table className='table contact-page-detail-table'>
                    <tbody className='border-top'>
                        <tr>
                            <td >For business</td>
                            <td ><a href="mailto:business@mcabee.in">business@mcabee.in</a></td>
                        </tr>
                        <tr>
                            <td>Job Seekers</td>
                            <td><a href="mailto:hr@mcabee.in">hr@mcabee.in</a></td>
                        </tr>
                        <tr>
                            <td>Our Employees</td>
                            <td><a href="mailto:family@mcabee.in">family@mcabee.in</a></td>
                        </tr>
                        <tr>
                            <td>Investor's</td>
                            <td><a href="mailto:investor@mcabee.in">investor@mcabee.in</a></td>
                        </tr>
                        <tr>
                            <td>Media/PR</td>
                            <td><a href="mailto:media@mcabee.in">media@mcabee.in</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='contact-page-details-content pt-4'>
                <h4>Find a Location</h4>
                <table className='table contact-page-detail-table'>
                    <tbody className='border-top'>
                        <tr >
                            <td>
                                <div>India</div>
                                <div className='d-flex gap-4 flex-column flex-md-row py-3'>
                                    <div className='w-50'>
                                        <div className='fw-700 '>Chennai</div>
                                        <div className='pe-1'>
                                            <div>715A, Spencer Plaza</div>
                                            <div>Mount Road, Anna Salai, Chennai - 600 002</div>
                                            <div>Tamil Nadu, India</div>
                                        </div>
                                    </div>
                                    <div className='w-50'>
                                        <div className='fw-700 '>Kochi</div>
                                        <div className='pe-1'>
                                            <div>2nd Floor, Valamkottil Towers</div>
                                            <div>Judgemuku, Kakkanadu, Kochi - 682 021</div>
                                            <div>Kerala, India</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr><td>United Kingdom</td></tr>
                        <tr><td>Australia</td></tr>
                        <tr><td>Kuwait</td></tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
