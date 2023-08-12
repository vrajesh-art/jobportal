<Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form>

align - items: center;
width: 100px;
margin: auto;
justify - content: center;
d - flex: center;
display: flex;


import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Empimg from './Empimg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Personal from './Personal'
import workex from './Workex'
import others from './other'

const Register = () => {
    const [page, SetPage] = useState(0);
    const FormTitles = ["Personal", "workex", "other"]

    const pageDisplay = () => {
        if (page === 0) {
            return <Personal />
        }
        else if (page === 1) {
            return <Workex />
        }
        else {
            return <OtherInfo />
        }
    }
    return (
        <>
            <div className="form">
                <div className="Personal">
                    {FormTitles[page]}
                </div>
            </div>

            <button>Prev</button>
            <button onClick={() => {
                SetPage((curPage) => curPage + 1)
            }}>Next</button>
        </>
    )
}

export default Register

