import React from 'react'
import "./herosection.css"
import { GoogleMapIcon } from '../../assets/GoogleMapIcon';

export const HeroSection = ({ data }) => {
  const { image, topic, content, button } = data
  return (
    <div className='hero-section'>
      <div className='hero-section-content text-white'>
        {
          image && (
            <div className='GoogleMapIconContainer'>
              <GoogleMapIcon className="w-100" />
            </div>
          )
        }

        <h3>{topic}</h3>
        <p className='pb-4'>{content}</p>
        {
          button && <a className='heroSectionbtn' href='#'>{button}</a>
        }

      </div>
    </div>
  )
}
