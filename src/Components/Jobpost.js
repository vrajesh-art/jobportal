import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import './jobpost.css'
import { Container } from 'react-bootstrap';

const Jobpost = () => {
    const [value, setValue] = useState(null)
    const yearsexp = [
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
        { value: "10+", label: "10+" }
    ]
    return (
        <>
            <div className="postmain">
                <h1 className='postheading'>Post Your Job</h1>

                <Container className="postcontent text-center">


                    <Form >
                        <Row className='align-items-center text-center'>

                            <Col lg={6} md={6} sm={12} xs={12}>
                                <div className="postjobrole text-center">
                                    <Form.Control className='postmargin text-center' type="text" placeholder="Enter Job Role" required />
                                </div>
                            </Col >
                            <Col lg={6} md={6} sm={12} xs={12} c>
                                <div className="postjobskills ">
                                    <Form.Control className='postmargin text-center' type="text" placeholder="Enter Skills Required" required />
                                </div>
                            </Col >
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <div className='postyears '>
                                    <Select className='postmargin text-center' options={yearsexp} defaultValue={value} placeholder="Minimum Years Of Experience" onChange={setValue} />
                                </div>
                            </Col >
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <div className='postrange'>
                                    <Form.Control className='postmargin text-center' type="text" placeholder="Enter Salary Range" required />
                                </div>
                            </Col >
                        </Row>
                    </Form>

                </Container>

            </div >
        </>
    )
}

export default Jobpost

