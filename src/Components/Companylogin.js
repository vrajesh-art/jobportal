// file named (Companylogin.js) contains the code for Company Login

import React from 'react';
import "./home.css"
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Empimg from "./Empimg";
import { NavLink } from "react-router-dom";
import Header from '../Components/Header'
import Footero from '../Components/Footero'
export const Companylogin = () => {
    return (
        <>
            <Header />
            <Container style={{ marginBottom: '150px' }}>
                <Row className=" rowmain m-auto" >
                    <Col lg={6} md={6} sm={12} xs={12} className="mt-lg-5 mt-0 mb-4">
                        <Form className='mainform'>
                            <h3 className=" signup text-center" >Company Login</h3>
                            <Form.Group className="mt-4 " controlId="formBasicEmail">
                                <Form.Control className="settlecontrol" type="email" placeholder="Enter email" required />
                                <Form.Text className=" textsettle justify-content-center d-flex ">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mt-4 " controlId="formBasicPassword">
                                <Form.Control type="text" className="settlecontrol" placeholder="Password" required />
                            </Form.Group>

                            <p className="mt-3 text-center">company not registered, <span><NavLink to="/Cregister">Signup</NavLink></span></p>

                            <Button className='btn' variant="dark" type="submit">
                                Submit
                            </Button>


                        </Form>

                    </Col >

                    <Col lg={6} md={6} sm={12} className="mb-4 mt-lg-4" >
                        <Empimg />
                    </Col>
                </Row >
            </Container >
            <Footero />
        </>
    )
}

export default Companylogin;
