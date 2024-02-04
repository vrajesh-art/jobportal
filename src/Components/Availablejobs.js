import React, { useState } from 'react'
import './availablejobs.css'
import Data from './Data'

const Availablejobs = () => {

    const [noofElement, setnoofElement] = useState(2);
    const slice = Data.cardData.slice(0, noofElement)
    const loadMore = () => {
        setnoofElement(noofElement + noofElement)
    }
    return (
        <>

            <section className="job-list" id="jobs">
                <h1 className="job-text">Featured Jobs</h1>
                {slice.map((item, index) => {
                    return (

                        <div className="job-card">
                            <div className="job-name">
                                <img className='job-profile' src={require(`../images/${item?.img}`)} />
                                <div className="job-detail">
                                    <h4>{item.company}</h4>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc} </p>
                                </div>
                            </div>
                            <div className="job-label">
                                <a className='label-a'>{item.skilla}</a>
                                <a className='label-b'>{item.skillb}</a>
                                <a className='label-c'>{item.skillc}</a>

                            </div>
                            <div className="job-posted">
                                posted 2 mins ago
                            </div>
                        </div>)

                })}
                <button className="job-more" onClick={() => loadMore()}>More list</button>
            </section>
        </>
    )
}

export default Availablejobs
