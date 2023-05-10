import React, { useState } from 'react'
import "./navbar.css"
import { RiMenu3Fill } from "react-icons/ri"
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }
  return (
    <>
      <div className={`container navigation ${isChecked ? 'h-100' : ''}`}>
        <div className=' container d-flex position-relative align-items-center justify-content-between pt-3 '>
          <div className='fs-3 text-white'>
          <Link to="/" className='text-white'>MCABEE</Link>
          </div>
          <div className=''>
            <input type="checkbox" id="check" onChange={handleCheckboxChange}/>
            <label htmlFor="check">
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
                  <a href="https://www.linkedin.com/"><FaLinkedinIn className='iconliks ' size={26} color='#0579b6' /></a>
                  <a href="https://www.facebook.com/"><FaFacebookF className='mx-4 iconliks ' size={26} color='#4b69b1' /></a>
                  <a href="https://www.twitter.com/"><FaTwitter className='iconliks' size={26} color='#37b1e2' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
