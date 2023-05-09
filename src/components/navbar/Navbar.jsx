import React, { useState } from 'react'
import "./navbar.css"
import { RiMenu3Fill } from "react-icons/ri"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const navbarClass = `navigationbar navbar navbar-expand-lg ${isMobileMenuOpen ? ' mobile-menu-open' : ''}`;

  return (
    <div className='navigation'>
      <nav className={navbarClass}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-700" to="/contact">MCABEE</Link>
          <button className="navbar-toggler menubtn" onClick={toggleMobileMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <RiMenu3Fill />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
              <li className="nav-item navigation-item ">
                <Link className="nav-link navigation-link" to="/whatwedo">What We Do</Link>
              </li>
              <li className="nav-item navigation-item">
                <Link className="nav-link navigation-link" to="/whoweare">Who We Are</Link>
              </li>
              <li className="nav-item navigation-item">
                <Link className="nav-link navigation-link" to="/products">Products</Link>
              </li>
              <li className="nav-item navigation-item">
                <Link className="nav-link navigation-link" to="/services">Services</Link>
              </li>
              <li className="nav-item navigation-item">
                <Link className="nav-link navigation-link" to="/careers">Careers</Link>
              </li>
              <li className="nav-item navigation-item">
                <Link className="nav-link navigation-link" to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
