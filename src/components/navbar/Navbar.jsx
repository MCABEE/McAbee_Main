import React, { useState } from 'react'
import "./navbar.css"
import { RiMenu3Fill } from "react-icons/ri"
import { FaLinkedinIn,FaFacebookF,FaTwitter } from "react-icons/fa"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div className=' container mx-auto w-100'>
        <div className='d-flex justify-content-between align-items-center pt-3 container position-absolute '>
          <div className='fs-3 text-white'>
            MCABEE
          </div>
          <div>
            <input type="checkbox" id="check" className='z-3' />
            <label for="check">
              <RiMenu3Fill color={"#8dcff4"} size={25} />
            </label>

            <div className="sidebar z-3">
              <div className='sidebarcontentwrapper'>
                <header>MCABEE</header>
                <ul>
                  <li><Link className="nav-link navigation-link" to="/whatwedo">What We Do</Link></li>
                  <li><Link className="nav-link navigation-link" to="/whoweare">Who We Are</Link></li>
                  <li><Link className="nav-link navigation-link" to="/products">Products</Link></li>
                  <li><Link className="nav-link navigation-link" to="/services">Services</Link></li>
                  <li> <Link className="nav-link navigation-link" to="/careers">Careers</Link></li>
                  <li><Link className="nav-link navigation-link" to="/contact">Contact</Link></li>
                </ul>
                <div className='text-center pb-4'>
                  <a href="https://www.linkedin.com/"><FaLinkedinIn className='iconliks ' size={26} color='#0579b6'/></a>
                  <a href="https://www.facebook.com/"><FaFacebookF className='mx-4 iconliks ' size={26} color='#4b69b1'/></a>
                  <a href="https://www.twitter.com/"><FaTwitter className='iconliks' size={26} color='#37b1e2'/></a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}
