import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CareerOpenings = ({ JOBOPENINGS }) => {
    //animate
    const careerOpeningsAnimation1 = useAnimation();

    const [careerOpeningsref1, careerOpeningsinView1] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (careerOpeningsinView1) { careerOpeningsAnimation1.start({ opacity: 1, y: 0, transition: { delay: 0.75, duration: 1 } }); }
        if (!careerOpeningsinView1) { careerOpeningsAnimation1.start({ opacity: 0, y: -75 }); }
    }, [careerOpeningsinView1]);

    //

    const calculateTotalOpenings = () => {
        return JOBOPENINGS.reduce((accumulator, current) => accumulator + (current.noOfOpenings), 0);
    }
    return (
        <>
            {<motion.div ref={careerOpeningsref1} animate={careerOpeningsAnimation1} className=' pt-4 pb-3 border-top'>
                <h4 className='fw-700 fs-3 pt-2 pb-0  text-start'>0{calculateTotalOpenings()} Openings</h4>
                <div className="row gap-3">
                    {
                        JOBOPENINGS?.map((OPENING) => {
                            return (
                                <div key={OPENING.jobTitle} className="col-12 col-md-5 py-4">
                                    <h6 className='fw-700'>{OPENING.jobTitle}</h6>
                                    <p className='mb-2  fw-bold ' style={{ fontSize: "0.9rem" }}>0{OPENING.experience} yr experience  <span className='text-muted'>|</span>  0{OPENING.noOfOpenings} Opening </p>
                                    <p>{OPENING.shortDesc}</p>
                                    <p className='text-muted' style={{ fontSize: "0.9rem" }}>Posted on: {OPENING.postedOn}</p>
                                    <Link to={`/careers/${OPENING.params}`}><button className='btn btn-outline-secondary' >APPLY</button></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>}
        </>
    )
}

export default CareerOpenings