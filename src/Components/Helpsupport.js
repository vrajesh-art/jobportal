import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./helpsupport.css";

const Helpsupport = () => {
    return (
        <>
            <div className="Mainsupport">
                <div className="supheading">
                    <h1 className="supportheading">Help And Support</h1>
                </div>
                <Row>
                    <Col lg={4} md={12} sm={12} xs={12}>
                        <div className="formimage">
                            <img src="./images/help.gif" alt="" srcset="" />
                        </div>
                    </Col>
                    <Col lg={8} md={12} sm={12} xs={12}>
                        <Form className="Mainform">
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="fname">
                                        <Form.Control
                                            className="formcontrol"
                                            placeholder="Enter Your first name"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="Sname">
                                        <Form.Control
                                            className="formcontrol"
                                            placeholder="Enter Your last name"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="Email">
                                        <Form.Control
                                            className="formcontrol"
                                            placeholder="Enter Your Email"
                                            type="email"
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="fname">
                                        <Form.Control
                                            className="formcontrol"
                                            placeholder="Enter Your Subject"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="fname">
                                        <Form.Control
                                            className="formcontrol"
                                            placeholder="Enter Your Message"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </Col>
                                <div className="formbutton">
                                    <button className="button">Submit</button>
                                </div>


                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Helpsupport;
