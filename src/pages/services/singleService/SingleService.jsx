import React from 'react'


import android from "../../../assets/serviceicons/android.png"
import api from "../../../assets/serviceicons/api.png"

export const SingleService = ({ data }) => {
    const { logoicon, title, content,background } = data
    return (
        <div className={`border mt-4  px-4 py-3 ${background}`} style={{ borderRadius: "2rem", width: "48%" }}>
            <div className='bg-secondary rounded p-2' style={{ height: "5rem", width: "5rem" }}>
                <img src={logoicon} alt="" className='h-100 w-100' />
            </div>
            <h3 className='fw-700 fs-2 py-3 text-white'> {title}</h3>
            <p>{content}</p>
        </div>
    )
}
