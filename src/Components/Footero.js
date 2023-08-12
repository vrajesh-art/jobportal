import React from 'react'
import './footerjust.css'

const Footero = () => {
    return (
        <>
            <div className="footer" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-1">
                            <h3>Download Our App</h3>
                            <p>Download App for Andorid and ios mobile phone</p>
                            <div className="applogo">
                                <img src="Images/play-store.png" alt="" />
                                <img src="Images/app-store.png" alt="" />
                            </div>
                        </div>

                        <div className="footer-col-2">
                            <h2><i className="fa-brands fa-stumbleupon"></i>NueVera</h2>
                            <p> Our Purpose Is To Sustainably Make The Pleasure And Benefits The Corporate World!!!
                            </p>
                        </div>

                        <div className="footer-col-3">
                            <h3>Usefull Links</h3>
                            <ul>
                                <li>Help & Support</li>
                                <li>Careers</li>
                                <li>Privacy Policy</li>
                                <li>Joining Guides </li>
                            </ul>
                        </div>

                        <div className="footer-col-4">
                            <h3>Follow US</h3>
                            <ul>
                                <li><i className="fa-brands fa-facebook "></i>Facebook</li>
                                <li><i className="fa-brands fa-instagram"></i>Instagram</li>
                                <li><i className="fa-brands fa-twitter"></i>Twitter</li>
                                <li><i className="fa-brands fa-youtube"></i>Youtube</li>
                            </ul>
                        </div>

                    </div>
                    <hr />
                    <p className="copyright">Copyright 2023 -Vrajesh Shetty</p>
                </div>
            </div>
        </>
    )
}

export default Footero
