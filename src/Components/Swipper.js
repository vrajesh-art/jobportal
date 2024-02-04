import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Construction from '../../src/images/Construction.jpg'

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './industry.css';
import { swiperData } from './Data';
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';

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
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                // scrollbar={true}
                // navigation={true}
                pagination={{
                    clickable: true,

                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                className="mySwiper "
            >




                <div className="browser">
                    {
                        swiperData.map((data) => (
                            <SwiperSlide >
                                <div className="slide-container  ">

                                    <div className="slide-content ">

                                        <div className="card-wraper  ">

                                            <div className="card ">
                                                <div className="image-content">
                                                    <span className="overlay"></span>
                                                    <div className="card-image">
                                                        <img src={require(`../../src/images/${data?.img}`)} alt="" className='card-img' />

                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <h2 className="field">{data?.name}</h2>
                                                    <button className="button">Click</button>
                                                </div>
                                            </div>





                                        </div>


                                    </div>


                                </div>
                            </SwiperSlide>
                        ))


                    }

                </div>



            </Swiper >
        </>
    )
}

export default Swipper
