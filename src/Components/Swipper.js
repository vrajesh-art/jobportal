import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './industry.css';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const Swipper = () => {
    return (
        <>
            <h1 className='swipper-text'>Browse Jobs By Industries</h1>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                slidesPerGroupSkip={1}
                fade={true}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{

                    200: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                    },
                    1080: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                    },

                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,

                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper "
            >




                <div className="browser">

                    <SwiperSlide>
                        <div className="slide-container  ">

                            <div className="slide-content ">

                                <div className="card-wraper  ">

                                    <div className="card ">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="./images/media.jpg" alt="" className='card-img' />

                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="field">Media</h2>
                                            <button className="button">Click</button>
                                        </div>
                                    </div>





                                </div>


                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container  ">

                            <div className="slide-content ">

                                <div className="card-wraper  ">

                                    <div className="card ">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="./images/finance.jpg" alt="" className='card-img' />

                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="field">Finance</h2>
                                            <button className="button">Click</button>
                                        </div>
                                    </div>





                                </div>


                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container  ">

                            <div className="slide-content ">

                                <div className="card-wraper  ">

                                    <div className="card ">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="./images/medical.jpg" alt="" className='card-img' />

                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="field">Medical</h2>
                                            <button className="button">Click</button>
                                        </div>
                                    </div>





                                </div>


                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container  ">

                            <div className="slide-content ">

                                <div className="card-wraper  ">

                                    <div className="card ">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="./images/software.jpg" alt="" className='card-img' />

                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="field">Software</h2>
                                            <button className="button">Click</button>
                                        </div>
                                    </div>





                                </div>


                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container  ">

                            <div className="slide-content ">

                                <div className="card-wraper  ">

                                    <div className="card ">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="./images/education.jpg" alt="" className='card-img' />

                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="field">Education</h2>
                                            <button className="button">Click</button>
                                        </div>
                                    </div>





                                </div>


                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container  ">

                            <div className="slide-content ">

                                <div className="card-wraper  ">

                                    <div className="card ">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="./images/textile.jpg" alt="" className='card-img' />

                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="field">Textile</h2>
                                            <button className="button">Click</button>
                                        </div>
                                    </div>





                                </div>


                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container  ">

                            <div className="slide-content ">

                                <div className="card-wraper  ">

                                    <div className="card ">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="./images/Food.jpg" alt="" className='card-img' />

                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="field">Food Processing</h2>
                                            <button className="button">Click</button>
                                        </div>
                                    </div>





                                </div>


                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container  ">

                            <div className="slide-content ">

                                <div className="card-wraper  ">

                                    <div className="card ">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="./images/hospitality.jpg" alt="" className='card-img' />

                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="field">Hospitality</h2>
                                            <button className="button">Click</button>
                                        </div>
                                    </div>





                                </div>


                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container  ">

                            <div className="slide-content ">

                                <div className="card-wraper  ">

                                    <div className="card ">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="./images/Construction.jpg" alt="" className='card-img' />

                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="field">Construction</h2>
                                            <button className="button">Click</button>
                                        </div>
                                    </div>





                                </div>


                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container  ">

                            <div className="slide-content ">

                                <div className="card-wraper  ">

                                    <div className="card ">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="./images/advertising.jpg" alt="" className='card-img' />

                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="field">Advertising</h2>
                                            <button className="button">Click</button>
                                        </div>
                                    </div>





                                </div>


                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container  ">

                            <div className="slide-content ">

                                <div className="card-wraper  ">

                                    <div className="card ">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="./images/Law.jpg" alt="" className='card-img' />

                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="field">Law</h2>
                                            <button className="button">Click</button>
                                        </div>
                                    </div>





                                </div>


                            </div>


                        </div>
                    </SwiperSlide>
                </div>



            </Swiper>
        </>
    )
}

export default Swipper
