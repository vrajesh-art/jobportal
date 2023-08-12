import React from 'react'

const footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="footer-middle  ">
                        <div className="row align-items-center middle-one spacing">
                            <div className="col-6 col-md-4 container-email ">
                                <input type="text" placeholder="Email Us" />
                                <button className="btn-footer">Send</button>
                            </div>
                            <div className="col-6 col-md-3 container-client spacing">
                                <div className="icon">
                                    <i class="fa-regular fa-face-smile fa-2x"></i>
                                </div>
                                <div className="client-text">
                                    <h4>Happy Clients</h4>
                                    <p>1000+ Clients benefited</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 container-client spacing">
                                <div className="icon">
                                    <i class="fa-regular fa-user fa-2x"></i>
                                </div>
                                <div className="client-text">
                                    <h4>Happy Clients</h4>
                                    <p>1000+ Clients benefited</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-2 container-client ">
                                <h4>Total Resumes</h4>
                            </div>
                        </div>
                    </div>

                    {/* middle bottom starts here */}
                    <div className="middle-bottom">


                        <div className="container">
                            <div className="row d-flex">

                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4  justify-content-lg-center bottom-3">
                                    <div className="bottom-title-3">
                                        <h4 className="bottom-tag-last">Contact</h4>
                                        <div className="bottom-title-3">
                                            <p>portals@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4  justify-content-lg-center bottom-2">
                                    <div className="bottom-title-2">
                                        <h4 className="bottom-tag">Links</h4>
                                        <div className="bottom-title-2">
                                            <ul>
                                                <li>About Us</li>
                                                <li>Jobs</li>
                                                <li>Employers</li>
                                                <li>Industry</li>
                                                <li>Ratings</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4  justify-content-lg-center bottom-2">
                                    <div className="bottom-title-2">
                                        <h4 className="bottom-tag">Available On</h4>
                                        <div className="bottom-title-2">
                                            <ul>
                                                <li>App Store</li>
                                                <li>Google Play Store</li>
                                                <li>Windows</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-8">
                                    <div className="company-details">
                                        <div className="logo-details ">
                                            <img className="logo-img d-flex" src="./images/logo.png" alt="" />
                                            <div className="logo-text">

                                                <p>Our Job-portal is One of the best in the Company</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>
                        <hr />
                    </div>

                </div>

            </footer>
        </>
    )
}

export default footer
