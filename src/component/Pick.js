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
                    <div className={`container p-0 mt-3`}>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={false}
                            slidesPerView={4}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                                <SwiperSlide className={`${pick.sw1}`}>
                                    <div>
                                        <img src="./img/pick-1.jpg" alt=""/>
                                        <p className="text-center">루시어스 리치 샤워 크림</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={`${pick.sw2}`}>
                                    <div>
                                        <img src="./img/pick-1.jpg" alt=""/>
                                        <p>루시어스 리치 샤워 크림</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={`${pick.sw3}`}>
                                    <div>
                                        <img src="./img/pick-1.jpg" alt=""/>
                                        <p>루시어스 리치 샤워 크림</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={`${pick.sw4}`}>
                                    <div>
                                        <img src="./img/pick-1.jpg" alt=""/>
                                        <p>루시어스 리치 샤워 크림</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={`${pick.sw5}`}>slide5</SwiperSlide>
                                <SwiperSlide className={`${pick.sw6}`}>slide6</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                
            </section>
        </>
    );
}
