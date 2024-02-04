

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBars } from 'react-icons/fa'; // Import the toggle icon
import './header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <h2>
                            <i className="fa-brands fa-stumbleupon"></i>Job-Port
                        </h2>
                    </div>
                    <div className="toggle-button" onClick={toggleNavbar}>
                        <FaBars />
                    </div>

                    <nav className={`menu ${showNavbar ? 'active' : ''}`}>
                        <ul id="MenuItem">
                            <li>
                                <span><NavLink to="/home">Home</NavLink></span>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>

                            <li>
                                <span><NavLink to="/Elogin">Elogin</NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to="/Clogin">Clogin</NavLink></span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;
