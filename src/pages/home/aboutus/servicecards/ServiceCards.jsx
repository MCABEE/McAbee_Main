import React from 'react'
import "./servicecards.scss"


export const ServiceCards = () => {

    return (
        <div className='servicecard d-flex flex-column flex-lg-row justify-content-evenly mt-5'>
            <div className='servicecard1 '>
                <p className='fs-6 fw-700'>Explore Products, <br /> Endless Possiblities ...</p>
                <p>We are working to introduce some amazing products with great features to the market by adding some innovative elements in areas where there is a need for innovation and great business potential.</p>
                <p>We want it to be completely different from the existing ones and innovative enough to be ripe for the next generation.</p>
                <p>Click here to view more</p>
                <button className='text-muted'>Explore</button>
            </div>
            <div className='servicecard1 servicecard2'>
                <p className='fs-6 fw-bold'>Service offerings .. <br /> Your perfect technology partner..</p>
                <p>From Start-up companies to corporate entries, we are capable to lead them in their web mobile application development,product design and development, digital and social media marketing, cloud hosting and big data analysis related projects.</p>
                <p>From the moment of the ideation to project implimentation and service, we are capable of providing dedicated support</p>
                <p>Read more about our sevices</p>
                <button className='text-muted'>Learn more</button>
            </div>
            <div className='servicecard3'>
                <p className='fs-6 fw-bold'>In the <span className='fs-5'>NEWS</span></p>
                <div className='border-bottom'>
                    <p className='fw-700'>MCABEE launched 'Firstlook' a social app for matchmaking, the first of its kind.</p>
                    <p>India's first social network to help find life partners has launched, ushering in a quarter century long shift in the online matchmaking era.</p>
                    <p className="date">01 July 2023</p>
                </div>
                <div className='pt-3'>
                    <p className='fw-700'>MCABEE announced their 'Notepad' app today.</p>
                    <p>MCABEE announced that their new product 'Notepad' app will be launched in 2023 itself.</p>
                    <p className="date">22 June 2023</p>
                </div>
                <a href="/">More</a>
            </div>
        </div>

    )
}
