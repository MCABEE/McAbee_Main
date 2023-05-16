import React from 'react'

const jobOpenings = [
    {
        "title": "UI/UX Designer",
        "experience&openings": "2yr experience | 01 Opening",
        "description": "Extensive experience building modern web applications using React Javascript library (including modern features).",
        "postedon": "12 May 2023"
    },
    {
        "title": "FullStack Developer",
        "experience&openings": "2yr experience  |  03 opening",
        "description": "Extensive experience building modern web applications using React Javascript library (including modern features).",
        "postedon": "12 May 2023"
    },
    {
        "title": "Flutter Developer",
        "experience&openings": "2yr experience  |  02 Opening",
        "description": "Extensive experience building modern web applications using React Javascript library (including modern features).",
        "postedon": "12 May 2023"
    },
]

const CareerOpenings = ({JOBOPENINGS }) => {
    
    return (
        <>
            { <div className=' pt-4 pb-3 border-top'>
            <h4 className='fw-700 fs-3 pt-2 pb-0 text-center text-lg-start'>14 Openings</h4>
            <div className="row gap-3">
                {
                    JOBOPENINGS?.map((OPENING) => {
                        console.log("openinjkg",OPENING);
                        return (
                            <div key={OPENING.jobTitle} className="col-12 col-md-5 py-4">
                                <h6 className='fw-700'>{OPENING.jobTitle}</h6>
                                <p className='mb-2  fw-bold ' style={{ fontSize: "0.9rem" }}>{OPENING.experience} yr experience  |  {OPENING.noOfOpenings} Opening </p>
                                <p>{OPENING.shortDesc}</p>
                                <p className='text-muted' style={{ fontSize: "0.9rem" }}>Posted on: {OPENING.postedOn}</p>
                                <button className='btn btn-outline-secondary '>APPLY</button>
                            </div>
                        )
                    })
                }


            </div>
        </div>}
        </>
    )
}

export default CareerOpenings