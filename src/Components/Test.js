//file named (Test.js) contains the code for Employee register
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
import Header from '../Components/Header'
import Footero from './Footero';
const Test = () => {
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
        <>
            <Header />
            <Container style={{ marginBottom: '150px' }}>
                <Row className=" mainrow justify-content-md-center" >
                    <Col lg={6} md={8} sm={12}>
                        <Form className="Formmain" >
                            <h3 className="text text-center" >Employee Signup</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h4 className="just chill">Personal Details</h4>
                                </Form.Label>
                                <Form.Control className="chilling Bigcontrol" type="text" placeholder="Enter Full Name" required />


                                <Form.Label > <h4 className='chill settletopleft'>Contact Information</h4></Form.Label>


                                {/* <Form.Control style={{ margin: "5px" }} type="phone" placeholder="Enter Contact Number" />
                                <Form.Control style={{ margin: "5px" }} type="email" placeholder="Enter your email" />
                                <Form.Control style={{ margin: "5px" }} type="address" placeholder="Enter Your Address" /> */}
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control className="chilling settleleftright-margin" type="number" placeholder="Enter Contact Number" required />
                                    </Col>

                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control className="chilling Contactemail " type="email" placeholder="Enter your email" required />
                                    </Col>
                                    {/* <Form.Control style={{ margin: "5px" }} type="address" placeholder="Enter Your Address" /> */}
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Form.Control className="chilling settlewidthmargin" type="text" as="textarea" rows={3} placeholder="Enter Your Address" required />
                                    </Col>
                                </Row>
                                <Form.Label> <h4 className="chill Smalllabel">Personal Information</h4></Form.Label>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control className=" chilling somefive" type="date" placeholder="Date Of Birth" required />
                                        <Form.Label className="just">Birth Date</Form.Label>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control className="chilling Fixwidth" type="text" placeholder="Prefered languages" required />
                                    </Col>
                                </Row>
                                <Form.Label> <h4 className='chill Smalllabel'>Educational Background</h4></Form.Label>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control className='chilling somefive' type="text" placeholder="Highest qualification" required />
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>

                                        <Form.Control className='chilling smallcontrol' type="date" placeholder="Graduation Date" required />
                                        <Form.Label className='just'>Graduation Date</Form.Label>
                                    </Col>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Form.Control className='chilling settlewidthmargin' type="text" as="textarea" rows={3} placeholder="Institutes attended" required />
                                    </Col>
                                </Row>
                                <Form.Label> <h4 className='chill settletopleft'>Select The Below Option</h4></Form.Label>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div className='just'>
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
                                    <Form.Label> <h4 className='chill settletopleft'>Experience</h4></Form.Label>
                                    <Row>
                                        <Col lg={12} md={12} sm={12} xs={12}>
                                            <Form.Control className='chilling settleleftwidth' type="text" placeholder="Enter Job Position" />
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <div className='chilling settleleftright-margin' >
                                                <Select options={years} defaultValue={value} placeholder="No of years" onChange={Setvalue} />
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <Form.Control className='chilling marginlefttop-width' type="text" placeholder="Employer name" />
                                        </Col>
                                    </Row>



                                    <Row>
                                        <Form.Label> <p style={{ marginLeft: "10px", marginTop: "6px" }}> <h4 className="chill">Enter your Duration Below</h4></p></Form.Label>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <Form.Control className='chilling somefive' type="date" />
                                            <Form.Label className='just'>From</Form.Label>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6}>
                                            <Form.Control className='chilling somefive-width' type="date" />
                                            <Form.Label className='just'>To</Form.Label>
                                        </Col>
                                    </Row>
                                </div>}

                                <Form.Label style={{ marginLeft: "7px" }}> <h4 className='chill smalllabel'>Desired Job Role</h4></Form.Label>


                                {/* <Form.Control style={{ margin: "5px" }} type="phone" placeholder="Enter Contact Number" />
                                <Form.Control style={{ margin: "5px" }} type="email" placeholder="Enter your email" />
                                <Form.Control style={{ margin: "5px" }} type="address" placeholder="Enter Your Address" /> */}
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Form.Control className='chilling Bigcontrol' type="text" placeholder="Job Position" required />
                                    </Col>

                                    {/* <Col lg={6} md={6} sm={6} xs={6}>
                                    <Form.Control style={{ marginTop: "10px", marginLeft: "5px" }} type="email" placeholder="Prefered Location" />
                                </Col> */}

                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div className='chilling settleleftright-margin'>
                                            <Select options={options} defaultValue={value} placeholder=" Prefered Location" onChange={Setvalue} required />
                                        </div>
                                    </Col>

                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div className='chilling marginlefttop-width' >
                                            <Select options={Mode} defaultValue={value} placeholder=" Prefered Mode" onChange={Setvalue} required />
                                        </div>
                                    </Col>
                                    {/* <Form.Control style={{ margin: "5px" }} type="address" placeholder="Enter Your Address" /> */}

                                </Row>
                                <Form.Label> <h4 className='chill Smalllabel'>Upload Resume</h4></Form.Label>
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>

                                        <div className='chilling divleftright-margin'>

                                            {/* <Form.Label>Default file input example</Form.Label> */}
                                            <Form.Control type="file" required />

                                        </div>
                                    </Col>
                                </Row>

                                <Form.Label>
                                    <h4 className='chill just'>Create Username And Password</h4>
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

                                <p className=" chill mt-3 text-center">Already a user <span><NavLink to="/Elogin">login</NavLink></span></p>
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
            <Footero />
        </>
    )
}

export default Test;
