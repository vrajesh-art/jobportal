import React from 'react'
import './trainings.css'
import javascript from '../images/javascript.png'
import html from '../images/html.png'
import node from '../images/nodejs.png'
import angular from '../images/angular.png'
import react from '../images/reactjs.png'
import css from '../images/css.png'
import typescript from '../images/typescript.png'
const Trainings = () => {
    return (
        <>

            <div className="main-box">
                <h1 className="header">Services provided by us</h1>

                <div className="container-box">
                    <div className="box">
                        <img src={javascript} alt="" />
                        <h3>Javascript</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, labore.</p>
                        <a href="#" className='btn'>read more</a>
                    </div>
                    <div className="box">
                        <img src={node} alt="" />
                        <h3>Nodejs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, labore.</p>
                        <a href="#" className='btn'>read more</a>
                    </div>
                    <div className="box">
                        <img src={react} alt="" />
                        <h3>React.js</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, labore.</p>
                        <a href="#" className='btn'>read more</a>
                    </div>
                    <div className="box">
                        <img src={html} alt="" />
                        <h3>HTML</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, labore.</p>
                        <a href="#" className='btn'>read more</a>
                    </div>
                    <div className="box">
                        <img src={css} alt="" />
                        <h3>Css</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, labore.</p>
                        <a href="#" className='btn'>read more</a>
                    </div>
                    <div className="box">
                        <img src={typescript} alt="" />
                        <h3>Typescript</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, labore.</p>
                        <a href="#" className='btn'>read more</a>
                    </div>
                    <div className="box">
                        <img src={angular} alt="" />
                        <h3>Angular</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, labore.</p>
                        <a href="#" className='btn'>read more</a>
                    </div>
                    <div className="box">
                        <img src={typescript} alt="" />
                        <h3>Next.js</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, labore.</p>
                        <a href="#" className='btn'>read more</a>
                    </div>
                </div>



            </div>

        </>
    )
}

export default Trainings
