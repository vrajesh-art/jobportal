import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Empimg from './Empimg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const register = () => {
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
                                <Form.Control style={{ width: "98%", marginLeft: "5px" }} type="email" placeholder="Enter Full Name" />


                                <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Contact Information</h4></Form.Label>


                                {/* <Form.Control style={{ margin: "5px" }} type="phone" placeholder="Enter Contact Number" />
                                <Form.Control style={{ margin: "5px" }} type="email" placeholder="Enter your email" />
                                <Form.Control style={{ margin: "5px" }} type="address" placeholder="Enter Your Address" /> */}
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ marginRight: "5px", marginLeft: "10px" }} type="number" placeholder="Enter Contact Number" />
                                    </Col>

                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ marginRight: "5px" }} type="email" placeholder="Enter your email" />
                                    </Col>
                                    {/* <Form.Control style={{ margin: "5px" }} type="address" placeholder="Enter Your Address" /> */}
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Form.Control style={{ width: "98%", margin: "8px 8px 0px 8px" }} type="email" as="textarea" rows={3} placeholder="Enter Your Address" />
                                    </Col>
                                </Row>
                                <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Personal Information</h4></Form.Label>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ marginLeft: "5px" }} type="date" placeholder="Date Of Birth" />
                                        <Form.Label style={{ marginLeft: "10px" }}>Date Of Birth</Form.Label>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ marginRight: "20px" }} type="text" placeholder="Prefered languages" />
                                    </Col>
                                </Row>
                                <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Educational Background</h4></Form.Label>
                                <Row>
                                    <Col lg={8} md={8} sm={8} xs={8}>
                                        <Form.Control style={{ marginLeft: "5px" }} type="text" placeholder="Enter Highest Qualification" />
                                    </Col>
                                    <Col lg={4} md={4} sm={4} xs={4}>

                                        <Form.Control style={{ marginLeft: "5px", width: "90%" }} type="date" placeholder="Graduation Date" />
                                        <Form.Label style={{ marginLeft: "10px" }}>Graduation Date</Form.Label>
                                    </Col>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Form.Control style={{ width: "98%", margin: "8px 8px 0px 8px" }} type="email" as="textarea" rows={3} placeholder="Institutes attended" />
                                    </Col>
                                </Row>

                            </Form.Group>

                            <Button style={{
                                width: "100px", margin: "auto", marginBottom: "10px"
                            }} variant="dark" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <Empimg />
                    </Col>
                </Row>
            </div >
        </>
    )
}

export default register
