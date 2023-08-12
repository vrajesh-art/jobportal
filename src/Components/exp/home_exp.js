// import React from "react";
// // import styled from 'styled-components';

// import PropTypes from "prop-types";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Empimg from "./Empimg";
// import { NavLink } from "react-router-dom";


// // #region constants

// // #endregion

// // #region styled-components

// // #endregion

// // #region functions

// // #endregion

// // #region component
// const propTypes = {};

// const defaultProps = {};

// /**
//  *
//  */
// const Home = () => {
//     return (
//         <>
//             <container>

//                 <Row className=" ms-4 " style={{ marginTop: "50px" }}>
//                     <Col lg={6} md={6} sm={6} xs={6} className="mb-4">
//                         <Form style={{ border: "2px solid black", boxShadow: "0 15px 20px rgba(0, 0, 0, 0.2)", borderRadius: "20px", height: "380px", display: "flex", flexDirection: "column" }} >
//                             <h3 className="text-center" style={{ marginTop: "80px" }}>Sign Up</h3>
//                             <Form.Group className="mt-4 " controlId="formBasicEmail">
//                                 <Form.Control type="email" style={{ width: "80%", margin: "auto" }} placeholder="Enter email" required />
//                                 <Form.Text className="justify-content-center d-flex ">
//                                     We'll never share your email with anyone else.
//                                 </Form.Text>
//                             </Form.Group>

//                             <Form.Group className="mt-4 " controlId="formBasicPassword">
//                                 <Form.Control type="text" style={{ width: "80%", margin: "auto" }} placeholder="Password" required />
//                             </Form.Group>
//                             <Button style={{
//                                 width: "100px", margin: "auto"
//                             }} variant="dark" type="submit">
//                                 Submit
//                             </Button>

//                             <p className="mt-3 text-center">not a user please <span><NavLink to="/register">Register</NavLink></span></p>
//                         </Form>

//                     </Col>

//                     <Col lg={6} md={6} sm={6} xs={6} className="mb-4">
//                         {/* <div className="image justify-content-center ">
//                             <img src="./images/emp2.png" style={{ maxWidth: 480 }} alt="not loaded" />
//                         </div> */}
//                         <Empimg />

//                     </Col>
//                     {/* <Button style={{ width: "100px", margin: "auto" }} variant="dark" type="submit">
//                         Submit
//                     </Button> */}
//                 </Row>

//             </container>
//         </>
//     );
// };

// Home.propTypes = propTypes;
// Home.defaultProps = defaultProps;
// // #endregion

// export default Home;