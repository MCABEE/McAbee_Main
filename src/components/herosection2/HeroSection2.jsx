import React, { useEffect } from 'react'

//react icon import 
import {BiSearchAlt2} from "react-icons/bi"

const HeroSection2 = () => {
    
    
  return (
    <div className='pt-5 pb-4'>
      <h5 className='fw-700'>CAREER</h5>
      <h4 className='fw-700 fs-3 pt-2'>Discover Your New Career</h4>
      <div className='pt-2 d-flex flex-column flex-md-row gap-3'>
        <div className='w-100 w-lg-50 text-muted'>
          Mcabee needs more creative people and technologists. Search open roles for designers, developers, analysts and more. Mcabee careers start right here - including yours.
          Kickstart your journey today.
        </div>
        <div className='w-100 w-lg-50 d-flex gap-2 border rounded' style={{ height: "2.5rem" }}>
          <select className="form-select h-100 border-0" aria-label="Default select example" style={{ width: "40%" }}>
            <option value="1">UI/UX Designer</option>
            <option value="2">Full Stack Developer</option>
            <option value="3">Flutter Developer</option>
          </select>
          <div className="input-group mb-3 border-0">
            <span className="input-group-text border-0" id="basic-addon1"><BiSearchAlt2/> </span>
            <input type="text" className="form-control border-0" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection2