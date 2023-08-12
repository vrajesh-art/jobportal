import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Empimg from './Empimg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select'


const Workex = () => {

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

    // function hideShowDiv(val) {
    //     if (val == 0) {
    //         document.getElementsByClassName('experienced')[0].style.display = 'none'
    //     }
    //     if (val == 1) {
    //         document.getElementsByClassName('experienced')[0].style.display = 'block'
    //     }
    // }

    return (
        <>
            {/* <Col>
                <div className="btn" style={{ display: "flex", justifyContent: "center" }}>
                    <button style={{ border: "2px solid black", margin: " 10px", padding: "8px 14px", borderRadius: "15px" }}>Fresher</button>

                    <button style={{ border: "2px solid black", margin: " 10px", padding: "8px 14px", borderRadius: "15px" }}>
                        Experienced
                    </button>
                </div>
            </Col> */}
            <div className='PersonalAndEdu' id='div'>
                <Row className="ms-4" >
                    {/* <Col lg={6} md={6} sm={6} xs={6}> */}
                    <Form style={{ borderRadius: "20px", display: "flex", flexDirection: "column" }}>
                        <h3 className="text-center" style={{ marginTop: "80px" }}>Register</h3>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Select The Below Option</h4></Form.Label>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6}>

                                    <input type="radio" name='isyes' onClick={() => setvisible(false)} />Fresher
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <input type="radio" name='isyes' onClick={() => setvisible(true)} />Experienced </Col>


                            </Row>

                            {visible && <div className="experienced">
                                <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Experience</h4></Form.Label>
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Form.Control style={{ marginRight: "5px", marginLeft: "5px" }} type="text" placeholder="Enter Job Position" />
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div style={{ marginTop: "10px", marginLeft: "5px" }}>
                                            <Select options={years} defaultValue={value} placeholder="No of years" onChange={Setvalue} />
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ marginLeft: "5px", marginTop: "10px" }} type="text" placeholder="Name Of Employer" />
                                    </Col>
                                </Row>



                                <Row>
                                    <Form.Label> <p style={{ marginLeft: "10px", marginTop: "6px" }}>Enter your Duration Below</p></Form.Label>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ marginLeft: "5px" }} type="date" />
                                        <Form.Label style={{ marginLeft: "10px" }}>From</Form.Label>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <Form.Control style={{ marginLeft: "5px" }} type="date" />
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
                                    <Form.Control style={{ marginRight: "5px", marginLeft: "5px" }} type="text" placeholder="Enter Job Position" />
                                </Col>

                                {/* <Col lg={6} md={6} sm={6} xs={6}>
                                    <Form.Control style={{ marginTop: "10px", marginLeft: "5px" }} type="email" placeholder="Prefered Location" />
                                </Col> */}

                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <div style={{ marginTop: "10px", marginLeft: "5px" }}>
                                        <Select options={options} defaultValue={value} placeholder="Select Prefered Location" onChange={Setvalue} />
                                    </div>
                                </Col>

                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <div style={{ marginTop: "10px", marginLeft: "5px" }}>
                                        <Select options={Mode} defaultValue={value} placeholder="Select Prefered Mode" onChange={Setvalue} />
                                    </div>
                                </Col>
                                {/* <Form.Control style={{ margin: "5px" }} type="address" placeholder="Enter Your Address" /> */}

                            </Row>
                            <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Upload Resume</h4></Form.Label>
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12}>

                                    <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            {/* <Form.Label>Default file input example</Form.Label> */}
                                            <Form.Control type="file" />
                                        </Form.Group>
                                    </div>
                                </Col>
                            </Row>
                            {/* <Form.Label> <h4 style={{ marginLeft: "10px", marginTop: "6px" }}>Educational Background</h4></Form.Label>
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
                            </Row> */}

                        </Form.Group>



                    </Form>
                    {/* </Col> */}
                    {/* <Col lg={6} md={6} sm={6} xs={6}>
                        <Empimg />
                    </Col> */}
                </Row>
            </div ></>
    )
}

export default Workex

