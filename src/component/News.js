import React from "react";
import news from "../scss/news.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export default function News(props) {
    return (
        <>
            <div className="container">
                <div>
                    <h3 className="text-center">THe Body Shop's NEWS</h3>
                </div>
                <div>
                    <div className={`container p-0 ${news.height}`}>
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
                            <SwiperSlide className={`${news.sw1}`}></SwiperSlide>
                            <SwiperSlide className={`${news.sw2}`}></SwiperSlide>
                            <SwiperSlide className={`${news.sw3}`}></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}
