import React from "react";
import review from "../scss/review.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

export default function Review(props) {
    return (
        <>
            {/* <section  id={props.idnm}>
                <div className="mt-5">
                    <div>
                        <h3 className={`text-center ${review.title}`}>BEST REVIEW</h3>
                        <p className="text-center mt-1">직접 써보고 말하는 생생한 리얼 후기!</p>
                    </div>
                    <div className={`container d-flex mt-2 ${review.box}`}>
                        <div>
                            <img src="./img/review-1.jpg" alt=""/>
                            <p>루시어스 리치 샤워 크림</p>
                            <p>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            4.5</p>
                            <div>
                                리치향이 강하지 않고 은은해요!가격대비 용량도 좋고, 적은 양으로 거품도 많이 나와요~
                            </div>
                        </div>
                        <div>
                            <img src="./img/review-2.jpg" alt=""/>
                            <p>루시어스 리치 샤워 크림</p>
                            <p>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            4.5</p>
                            <div>
                                리치향이 강하지 않고 은은해요!가격대비 용량도 좋고, 적은 양으로 거품도 많이 나와요~
                            </div>
                        </div>
                        <div>
                            <img src="./img/review-3.jpg" alt=""/>
                            <p>루시어스 리치 샤워 크림</p>
                            <p>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            4.5</p>
                            <div>
                                리치향이 강하지 않고 은은해요!가격대비 용량도 좋고, 적은 양으로 거품도 많이 나와요~
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}
            <div className={`${review.content} `}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={4}
                    pagination={{
                                clickable: true,
                            }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                    <SwiperSlide>
                        <div>
                            <p>저자극 비건 선크림</p>
                            <p>Vita Tone Up Sun Cream</p>
                            <p>비타 톤업 선크림</p>
                        </div>
                        <div>
                            <a href=""><img className={`${review.img}`} src="./img/review_1.png" alt="" /></a>
                        </div>
                        <div className="row">
                            <span>50ml</span>
                            <span>21,000</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
                <div></div>
            </div>
        </>
        
    );
}
