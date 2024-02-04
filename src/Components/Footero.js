import React from 'react'
import './footerjust.css'
import { Container } from 'react-bootstrap'

const Footero = () => {
    return (
        <>
            <div className="footer_wapper">
                <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
                    <section className="d-flex justify-content-between p-4 toppart" >
                        <div className="text-center mb-4">
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div className='top-icons row align-items-center ms-lg-5 ms-sm-0'>
                            <a href className="text-white col-sm-3 col-lg-2">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href className="text-white  col-sm-3 col-lg-2">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href className="text-white col-sm-3 col-lg-2">
                                <i className="fab fa-google" />
                            </a>
                            <a href className="text-white col-sm-3 col-lg-2">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href className="text-white col-sm-3 col-lg-2">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a href className="text-white col-sm-3 col-lg-2">
                                <i className="fab fa-github" />
                            </a>
                        </div>

                        <hr />
                    </section>
                    <section className>
                        <div className="container text-center text-md-start">
                            <div className="row">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h2>
                                        <i className="fa-brands fa-stumbleupon"></i>JoB-Port
                                    </h2>

                                    <p>
                                        One of the best website for finding job as per your skills and passion
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Products</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p>
                                        <a href="#!" className="text-white">Software</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Designer</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Analyst</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Product Manager</a>
                                    </p>
                                </div>
                                <iv className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p>
                                        <a href="#!" className="text-white">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">About us</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">clients</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Help</a>
                                    </p>
                                </iv>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p><i className="fas fa-home mr-3" /> Dadar, Mumbai , India</p>
                                    <p><i className="fas fa-envelope mr-3" /> info@example.com</p>
                                    <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2020 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/">jportal.com</a>
                    </div>
                </footer>

            </div>



        </>
    )
}

export default Footero
