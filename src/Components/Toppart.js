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
import back from '../images/back123.png'
import edit from '../images/edit.png'
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
                <Container className="container-header">
                    <Row classname="Rowstyle">
                        <Col lg={6} md={8} sm={12} style={{ marginTop: '-40px' }}>

                            <div className="content" style={{ marginLeft: '5px' }}>
                                <h1 className="text">Get The Best Job And Accelerate Your Carrier</h1>
                            </div>
                            <Form >
                                <div className="search-container mt-lg-4">
                                    <Row className="searchbar">
                                        <Col lg={3} className='mb-2'>
                                            <Form.Control className="" type="text" placeholder="Enter Keywords" required />
                                        </Col>
                                        <Col lg={3} className='mb-2'>
                                            <Select defaultValue={value} options={locations}
                                                onChange={Setvalue}
                                                placeholder="Location" />
                                        </Col>
                                        <Col lg={3} className='mb-2'>
                                            <Select placeholder="Company" options={Company} defaultValue={value} onChange={Setvalue} />
                                        </Col>

                                        <Col className="filter mb-2" lg={3} >
                                            <NavLink to="/Filter"><img src={edit} alt="" srcset="" /></NavLink>
                                            {/* <img src="./images/edit.png" alt="" srcset="" /> */}
                                        </Col>


                                    </Row>




                                </div>
                                <button className="btn ms-2 mt-4">
                                    Search
                                </button>
                            </Form>

                            <Row className='mt-3'>
                                <Col ><h2 className="popular-search text-sm-center text-lg-start">Popular Searches</h2></Col>
                            </Row>
                            <Container><Row>

                                <Col lg={4} sm={6} className=" margin mb-3">
                                    Website Developers
                                </Col>
                                <Col lg={4} sm={6} className=" margin mb-3">
                                    Application Developer
                                </Col>
                                <Col lg={4} sm={6} className=" margin mb-3">
                                    Manager
                                </Col >
                                <Col lg={4} sm={6} className="margin mb-3">
                                    Engineering
                                </Col>

                            </Row></Container>



                        </Col>

                        <Col lg={6} md={4} sm={12} style={{ marginTop: '50px' }}>

                            <img src={back} className='img-fluid' />

                        </Col>
                    </Row>
                </Container>



            </div ></>
    )
}

export default Toppart
