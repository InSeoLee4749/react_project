import React from "react";
import news from "../scss/news.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export default function News(props) {
    return (
        <>
        <section id={props.idnm}>
            <div className={`container mt-5 ${news.news}`}>
                    <div>
                        <h3 className={`text-center ${news.title}`}>THe Body Shop's NEWS</h3>
                    </div>
                    <div>
                        <div className={`container p-0 mt-2 ${news.height}`}>
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
                                <SwiperSlide className={`${news.sw1}`}>
                                    <div className="d-flex justify-content-between align-items-center bg-white">
                                        <div className={`${news.ment}`}>
                                            <p>플라스틱 공병 수거 캠페인</p>
                                            <p>지구와 나를 위한 작은 실천 #ReturnRecycleRepeat</p>
                                        </div>
                                        <div className={`${news.sw1img}`}>
                                            <img className={`${news.recy}`} src="./img/news.png" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* <SwiperSlide className={`${news.sw2}`}>
                                    <div className="d-flex justify-content-between align-items-center bg-white">
                                        <div className={`${news.ment}`}>
                                            <p>플라스틱 공병 수거 캠페인</p>
                                            <p>지구와 나를 위한 작은 실천 #ReturnRecycleRepeat</p>
                                        </div>
                                        <div className={`${news.sw1img}`}>
                                            <img className={`${news.news-1}`} src="./img/news-1.png" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide> */}
                                <SwiperSlide className={`${news.sw3}`}>

                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
        </section>
            
        </>
    );
}
