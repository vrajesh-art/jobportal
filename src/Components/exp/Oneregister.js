import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Empimg from './Empimg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import Select from 'react-select'

const Oneregister = () => {
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
    return (
        <>
            <div className='PersonalAndEdu' >
                <Row className="ms-4" style={{ marginTop: "50px", }}>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <Form style={{ border: "2px solid black", boxShadow: "0 15px 20px rgba(0, 0, 0, 0.2)", borderRadius: "20px", display: "flex", flexDirection: "column" }}>
                            <h3 className="text-center" style={{ marginTop: "80px" }}>Register</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h4 style={{ marginLeft: "10px" }}>Personal Details</h4>
                                </Form.Label>
                                <Form.Control style={{ width: "98%", marginLeft: "5px" }} type="text" placeholder="Enter Full Name" required />


                                <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Contact Information</h4></Form.Label>


                                {/* <Form.Control style={{ margin: "5px" }} type="phone" placeholder="Enter Contact Number" />
                                <Form.Control style={{ margin: "5px" }} type="email" placeholder="Enter your email" />
                                <Form.Control style={{ margin: "5px" }} type="address" placeholder="Enter Your Address" /> */}
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ marginRight: "5px", marginLeft: "10px" }} type="number" placeholder="Enter Contact Number" required />
                                    </Col>

                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ marginRight: "5px" }} type="email" placeholder="Enter your email" required />
                                    </Col>
                                    {/* <Form.Control style={{ margin: "5px" }} type="address" placeholder="Enter Your Address" /> */}
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Form.Control style={{ width: "98%", margin: "8px 8px 0px 8px" }} type="text" as="textarea" rows={3} placeholder="Enter Your Address" required />
                                    </Col>
                                </Row>
                                <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Personal Information</h4></Form.Label>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ marginLeft: "5px" }} type="date" placeholder="Date Of Birth" required />
                                        <Form.Label style={{ marginLeft: "10px" }}>Date Of Birth</Form.Label>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ marginRight: "20px" }} type="text" placeholder="Prefered languages" required />
                                    </Col>
                                </Row>
                                <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Educational Background</h4></Form.Label>
                                <Row>
                                    <Col lg={8} md={8} sm={8} xs={8}>
                                        <Form.Control style={{ marginLeft: "5px" }} type="text" placeholder="Enter Highest Qualification" required />
                                    </Col>
                                    <Col lg={4} md={4} sm={4} xs={4}>

                                        <Form.Control style={{ marginLeft: "5px", width: "90%" }} type="date" placeholder="Graduation Date" required />
                                        <Form.Label style={{ marginLeft: "10px" }}>Graduation Date</Form.Label>
                                    </Col>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Form.Control style={{ width: "98%", margin: "8px 8px 0px 8px" }} type="text" as="textarea" rows={3} placeholder="Institutes attended" required />
                                    </Col>
                                </Row>
                                <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Select The Below Option</h4></Form.Label>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div style={{ marginLeft: "10px" }}>
                                            <input type="radio" name='isyes' onClick={() => setvisible(false)} />Fresher
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div>
                                            <input type="radio" name='isyes' onClick={() => setvisible(true)} />Experienced
                                        </div>
                                    </Col>
                                </Row>
                                {visible && <div className="experienced">
                                    <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Experience</h4></Form.Label>
                                    <Row>
                                        <Col lg={12} md={12} sm={12} xs={12}>
                                            <Form.Control style={{ marginRight: "5px", marginLeft: "5px", width: "98%" }} type="text" placeholder="Enter Job Position" />
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <div style={{ marginTop: "10px", marginLeft: "5px" }}>
                                                <Select options={years} defaultValue={value} placeholder="No of years" onChange={Setvalue} />
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <Form.Control style={{ marginLeft: "5px", marginTop: "10px", width: "96%" }} type="text" placeholder="Name Of Employer" />
                                        </Col>
                                    </Row>



                                    <Row>
                                        <Form.Label> <p style={{ marginLeft: "10px", marginTop: "6px" }}>Enter your Duration Below</p></Form.Label>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <Form.Control style={{ marginLeft: "5px" }} type="date" />
                                            <Form.Label style={{ marginLeft: "10px" }}>From</Form.Label>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <Form.Control style={{ marginLeft: "5px", width: "96%" }} type="date" />
                                            <Form.Label style={{ marginLeft: "10px" }}>To</Form.Label>
                                        </Col>
                                    </Row>
                                </div>}

                                <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Desired Job Role</h4></Form.Label>


                                {/* <Form.Control style={{ margin: "5px" }} type="phone" placeholder="Enter Contact Number" />
                                <Form.Control style={{ margin: "5px" }} type="email" placeholder="Enter your email" />
                                <Form.Control style={{ margin: "5px" }} type="address" placeholder="Enter Your Address" /> */}
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Form.Control style={{ marginRight: "5px", marginLeft: "5px", width: "98%" }} type="text" placeholder="Enter Job Position" required />
                                    </Col>

                                    {/* <Col lg={6} md={6} sm={6} xs={6}>
                                    <Form.Control style={{ marginTop: "10px", marginLeft: "5px" }} type="email" placeholder="Prefered Location" />
                                </Col> */}

                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div style={{ marginTop: "10px", marginLeft: "5px" }}>
                                            <Select options={options} defaultValue={value} placeholder="Select Prefered Location" onChange={Setvalue} required />
                                        </div>
                                    </Col>

                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div style={{ marginTop: "10px", marginLeft: "5px", width: "96%" }}>
                                            <Select options={Mode} defaultValue={value} placeholder="Select Prefered Mode" onChange={Setvalue} required />
                                        </div>
                                    </Col>
                                    {/* <Form.Control style={{ margin: "5px" }} type="address" placeholder="Enter Your Address" /> */}

                                </Row>
                                <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Upload Resume</h4></Form.Label>
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>

                                        <div style={{ marginRight: "5px", marginLeft: "5px" }}>

                                            {/* <Form.Label>Default file input example</Form.Label> */}
                                            <Form.Control type="file" required />

                                        </div>
                                    </Col>
                                </Row>

                                <Form.Label>
                                    <h4 style={{ marginLeft: "10px" }}>Create Username And Password</h4>
                                </Form.Label>
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Form.Control style={{ width: "98%", marginLeft: "5px" }} type="email" placeholder="Enter Your Email" required />
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ width: "98%", marginLeft: "5px", marginTop: "10px" }} type="text" placeholder="Enter Your Password" required />
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ width: "98%", marginLeft: "5px", marginTop: "10px" }} type="text" placeholder="Verify Your Password" required />
                                    </Col>
                                </Row>

                                <p className="mt-3 text-center">Already a user <span><NavLink to="/Signin">Sign In</NavLink></span></p>
                            </Form.Group>

                            <Button style={{
                                width: "100px", margin: "auto", marginBottom: "10px"
                            }} variant="dark" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div style={{ position: "sticky", top: "0" }}>
                            <Empimg />
                        </div>
                    </Col>
                </Row>
            </div >
        </>
    )
}

export default Oneregister