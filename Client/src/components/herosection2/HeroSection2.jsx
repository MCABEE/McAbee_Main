import React, { useEffect } from 'react'
import "./herosection2.scss"
import { motion } from "framer-motion"

//react icon import 
import { BiSearchAlt2 } from "react-icons/bi"

const HeroSection2 = ({ data, setfilter, filter, diplayListOption, displaySelectMenu, displaySearchFilter }) => {

  return (
    <motion.div initial={{ opacity: 0, y: -75 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1 }} className='pt-5 pb-4'>
      <h5 className='fw-700'>{data.title}</h5>
      <h4 className='fw-700 fs-3 pt-2'>{data.tagline}</h4>
      <div className='pt-2 d-flex flex-column flex-md-row gap-3'>
        <div className='col col-lg-6 text-muted'>
          {data.shortDesc1}
        </div>
        <div className={`col col-lg-6 d-flex gap-2 ps-0 ps-lg-5`} style={{ height: "2.5rem" }}>
          {
            displaySelectMenu
              ? (
                <select className="form-select herosec2Select  h-100 border rounded" value={filter} onChange={(e) => setfilter(e.target.value)} aria-label="Default select example" >
                  <option value="All" disabled={diplayListOption ? false : true}>{data.title === "PRODUCTS" ? "PRODUCTS" : data.title === "CAREER" ? "All Openings" : "Region"}</option>
                  {
                    data.List.map((item) => {
                      return <option key={item} value={item}>{item}</option>
                    })
                  }
                </select>
              ) : ""
          }
          {
            displaySearchFilter
              ? (
                <div className="input-group mb-3 herosec2Search border rounded h-100">
                  <span className="input-group-text border-0 " id="basic-addon1"><BiSearchAlt2 /> </span>
                  <input type="text" className="form-control border-0" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              ) : ""
          }

        </div>
      </div>
    </motion.div>
  )
}

export default HeroSection2