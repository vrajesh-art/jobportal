import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Availablejobs from './Components/Availablejobs';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import Header from './Components/Header';
import './filter.css'
import { NavLink } from "react-router-dom";
import Footero from './Components/Footero';


const Filter = () => {
    const [salary, setSalary] = useState(1000);

    const handleSalaryChange = (event) => {
        setSalary(event.target.value);
    };
    const [value, Setvalue] = useState(null);
    const years = [
        { value: 1, label: "fresher" },
        { value: 2, label: 1 },
        { value: 3, label: 2 },
        { value: 4, label: 3 },
        { value: 5, label: 4 },
        { value: 6, label: 5 },
        { value: 7, label: "5+" }

    ]

    const locations = [
        { value: "Mumbai", label: "Mumbai" },
        { value: "Delhi", label: "Delhi" },
        { value: "Gurgaon", label: "Gurgaon" },
        { value: "Banglore", label: "Banglore" }
    ]

    const jobtype = [
        { value: "IT", label: "IT" },
        { value: "Sales", label: "Sales" },
        { value: "Marketing", label: "Marketing" },
        { value: "Finance", label: "Finance" },
        { value: "HR", label: "HR" },
        { value: "Engineering", label: "Engineering" },
        { value: "Healthcare", label: "Healthcare" },
        { value: "Hospitality & Tourism", label: "Hospitality & Tourism" },
        { value: "Education & Teaching", label: "Education & Teaching" },
        { value: "Administration", label: "Administration" },
        { value: "Legal", label: "Legal" },
        { value: "Manufacturing and production", label: "Manufacturing and production" },
        { value: "Retail", label: "Retail" },
        { value: "Logistic & Supply-chain", label: "Logistic & Supply-chain" },
        { value: "Media & Communication", label: "Media & Communication" },
        { value: "design & creative", label: "design & creative" }

    ]


    return (
        <>
            <div className="mainfilter">
                <Container>
                    <Row>
                        <div className="header">
                            <Header />
                        </div>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="leftpart">
                                <h4 className="filterheading"><i class="fa-solid fa-filter"></i>Filter </h4>
                                <div className="filteroptions">
                                    <Form>
                                        <Select className='space' options={jobtype} defaultValue={value} placeholder="Select Job type" onChange={Setvalue} />

                                        <Select className='space' options={locations} defaultValue={value} placeholder="Select prefered location" onchange={Setvalue} ></Select>
                                        <div className="check">
                                            <div className="ftime space">
                                                <input type="checkbox" name='isyes' /> Full-Time
                                            </div>

                                            <div className="ptime space">
                                                <input type="checkbox" name='isyes' />Part-Time
                                            </div>
                                            <div className="allintern space">
                                                <input type="checkbox" />Include all jobs
                                            </div>
                                        </div>
                                        <Select className='space' options={years} defaultValue={value} placeholder="Select Years Of Experience" onChange={Setvalue} />
                                        <div className="slider-container">
                                            <input
                                                type="range"
                                                min="1000"
                                                max="40000"
                                                value={salary}
                                                className="slider"
                                                onChange={handleSalaryChange}
                                            />
                                            <p>Select Maximum Stipend Expected: {salary}</p>
                                        </div>

                                        <button className="btn">Apply</button>
                                    </Form>


                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={12} xs={12}>

                            <Availablejobs />
                        </Col>
                    </Row>
                </Container>

            </div>
            <Footero />
        </>
    )
}

export default Filter
