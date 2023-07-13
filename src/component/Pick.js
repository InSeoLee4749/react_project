import React from "react";
import pick from "../scss/pick.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export default function Pick(props) {
    return (
        <>
            <section id={props.idnm}>
                <div className="mt-5">
                    <div>
                        <h3 className={`text-center ${pick.title}`}>BEST PICK</h3>
                    </div>
                    <div className={`container p-0 ${pick.height}`}>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide className={`${pick.sw1}`}>slide1</SwiperSlide>
                            <SwiperSlide className={`${pick.sw2}`}>slide2</SwiperSlide>
                            <SwiperSlide className={`${pick.sw3}`}>slide3</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                
            </section>
        </>
    );
}
