import React, { useState } from 'react'
import './toppart.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select'
import Header from './Header';
import { NavLink } from "react-router-dom";

const Toppart = () => {
    const [value, Setvalue] = useState(null)
    const locations = [
        { value: "Mumbai", label: "Mumbai" },
        { value: "Delhi", label: "Delhi" },
        { value: "Gurgaon", label: "Gurgaon" },
        { value: "Banglore", label: "Banglore" }
    ]
    const Company = [
        { value: "Tcs", label: "Tcs" },
        { value: "infosys", label: "Infosys" },
        { value: "thub", label: "thub" },
        { value: "All", label: "All" }
    ]
    return (
        <>
            <div className="top-part">

                <div className="header">
                    <Header />
                </div>
                <div className="container-header">
                    <Row classname="Rowstyle">
                        <Col lg={6} md={8} sm={12} className="first">

                            <div className="content">
                                <h1 className="text">Get The Best Job And Accelerate Your Carrier</h1>
                            </div>
                            <Form classname="top">
                                <div className="search-container">
                                    <div className="searchbar">
                                        <div className="just main-input">
                                            <Form.Control className="chilling Bigcontrol" type="text" placeholder="Enter Keywords" required />
                                        </div>
                                        <div className=" just   main-location">
                                            <Select defaultValue={value} options={locations}
                                                onChange={Setvalue}
                                                placeholder="Location" />
                                        </div>
                                        <div className=" just main-comapany">
                                            <Select placeholder="Company" options={Company} defaultValue={value} onChange={Setvalue} />
                                        </div>
                                        <div className="filter">
                                            <NavLink to="/Filter"><img src="./images/edit.png" alt="" srcset="" /></NavLink>
                                            {/* <img src="./images/edit.png" alt="" srcset="" /> */}
                                        </div>
                                        <div className="btn">
                                            Search
                                        </div>

                                    </div>
                                </div>
                            </Form>
                            <div className="popular">
                                <h4 className="popular-search">Popular searches</h4>
                                <div className="results">
                                    <div className="  margin  website">
                                        Website Developers
                                    </div>
                                    <div className=" margin just app">
                                        Application Developer
                                    </div>
                                    <div className="  margin just manager">
                                        Manager
                                    </div>
                                    <div className="just margin engineering">
                                        Engineering
                                    </div>
                                </div>
                            </div>


                        </Col>

                        <Col lg={6} md={4} sm={12} >
                            <div className="second">
                                <img src="./images/back123.png" alt="" srcset="" />
                            </div>
                        </Col>
                    </Row>
                </div>



            </div></>
    )
}

export default Toppart
