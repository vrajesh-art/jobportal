import React from 'react'
import './avcompanies.css'
import philips from '../images/logo-philips.png'
import coca from '../images/logo-coca-cola.png'
import paypal from '../images/logo-paypal.png'
import godrej from '../images/logo-godrej.png'
const Avcompanies = () => {
    return (
        <>

            <div className="offer" id="about">
                <div className="container">
                    <div className="row">
                        <div className="title-container col-12">
                            <h2 className="title">Top Companies At Our Website</h2>
                        </div>
                    </div>
                    <div className="row d-flex text-center ">
                        <div className="col-sm-6 col-md-3 mb-5">
                            <img src={philips} alt="hello" className='img-fluid ' />
                        </div>
                        <div className="col-sm-6 col-md-3 mb-5">
                            <img src={coca} alt="hello" className='img-fluid' />
                        </div>
                        <div className="col-sm-6 col-md-3 mb-5">
                            <img src={paypal} alt="hello" className='img-fluid' />
                        </div>
                        <div className="col-sm-6 col-md-3 mb-5">
                            <img src={godrej} alt="hello" className='img-fluid' />
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Avcompanies
