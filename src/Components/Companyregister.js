// file named (Companyregister.js) contains the code for Company Register
import React, { useState } from 'react';
import "./App.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Empimg from './Empimg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import Select from 'react-select';


const Companyregister = () => {
    const [visible, setvisible] = useState(false);



    const [value, Setvalue] = useState(null)
    const options = [
        { value: "Mumbai", label: "Mumbai" },
        { value: "Delhi", label: "Delhi" },
        { value: "Gurgaon", label: "Gurgaon" },
        { value: "Banglore", label: "Banglore" }
    ]

    const Mode = [
        { value: "Full-Time", label: "Full-Time" },
        { value: "Part-Time", label: "Part-Time" },
    ]

    const years = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
        { value: 6, label: 6 },
        { value: 7, label: 7 },
        { value: 8, label: 8 },
        { value: 9, label: 9 },
        { value: 10, label: 10 },
        { value: "more than 10", label: "more than 10" }
    ]

    const [show, setShow] = useState(true)

    // ... Your existing code ...

    return (
        <Container>
            <Row className=" mainrow justify-content-md-center" >
                <Col lg={6} md={8} sm={12}>
                    <Form className="Formmain" >
                        <h3 className="text text-center" >Company Signup</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <h4 className="chill just">Company's Details</h4>
                            </Form.Label>
                            <Form.Control className="chilling Bigcontrol" type="text" placeholder="Company's Name" required />
                            <Form.Control className="chilling Bigcontrol" style={{ marginTop: "10px" }} type="text" placeholder="Industry/Sector details" required />
                            <Form.Control className="chilling settlewidthmargin" type="text" as="textarea" rows={3} placeholder="Company's Brief Overview" required />

                            <Form.Control className="chilling Bigcontrol" style={{ marginTop: "10px" }} type="text" placeholder="Company's Website Details" />
                            <Form.Control className="chilling Bigcontrol" style={{ marginTop: "10px" }} type="text" placeholder="Company's Size" />
                            <Form.Control className="chilling Bigcontrol" style={{ marginTop: "10px" }} type="text" placeholder="Company's Location" />
                            <Form.Control className="chilling Bigcontrol" style={{ marginTop: "10px" }} type="text" placeholder="Company's Logo" />


                            <Form.Label > <h4 className='chill settletopleft'>Contact Information</h4></Form.Label>



                            <Row>

                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <Form.Control className="chilling settlewidthmargin" type="text" placeholder="Contact Person's Name" required />
                                    <Form.Control className="chilling settlewidthmargin" type="text" placeholder="Contact Person's Number" required />
                                    <Form.Control className="chilling settlewidthmargin" type="text" placeholder="Contact Person's Email Id" required />
                                </Col>
                            </Row>



                            <Form.Label>
                                <h4 className=' chill just'>Create Username And Password</h4>
                            </Form.Label>
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <Form.Control className='chilling settleleftwidth' type="email" placeholder="Enter  Email" required />
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <Form.Control className='chilling settlepassword' type="text" placeholder="Password" required />
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <Form.Control className='chilling settlepasswordverify' type="text" placeholder="Verify Password" required />
                                </Col>
                            </Row>

                            <p className="mt-3 text-center">Company Already Registered <span><NavLink to="/Clogin">Log In</NavLink></span></p>
                        </Form.Group>
                        <Button className='btn'
                            variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col lg={6} md={4} sm={12}>
                    <div style={{ position: "sticky", top: "0" }}>
                        <Empimg />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Companyregister;

