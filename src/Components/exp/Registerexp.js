import react, { useState } from "react";
import Personal from './Personal';
import Workex from './Workex';
import Others from './Others';
import Empimg from './Empimg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Registerexp = () => {
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
            return <Others />
        }
    }
    return (
        <>
            <div className="form">
                <div className="Header">

                </div>
                <div className="Body" >
                    <Row style={{ margin: "30px" }}>
                        <Col lg={6} md={6} sm={6} xs={6} style={{ border: "2px solid black", boxShadow: "0 15px 20px rgba(0, 0, 0, 0.2)", width: "50%", borderRadius: "20px" }}>

                            {pageDisplay()}
                            <div className="btn" style={{ display: "flex", justifyContent: "center" }}>
                                <button style={{ border: "2px solid black", margin: " 10px", padding: "8px 14px", borderRadius: "15px" }}
                                    disabled={page == 0}
                                    onClick={() => SetPage((curpage) => curpage - 1)}>Prev</button>

                                <button style={{ border: "2px solid black", margin: " 10px", padding: "8px 14px", borderRadius: "15px" }}
                                    disabled={page == FormTitles.length - 1}
                                    onClick={() => {
                                        SetPage((curPage) => curPage + 1)
                                    }}>Next</button>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <div style={{ position: "sticky", top: "0" }}>
                                <Empimg />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div >

            {/* <button
                disabled={page == 0}
                onClick={() => SetPage((curpage) => curpage - 1)}>Prev</button>

            <button
                disabled={page == FormTitles.length - 1}
                onClick={() => {
                    SetPage((curPage) => curPage + 1)
                }}>Next</button> */}
        </>
    )
}

export default Registerexp