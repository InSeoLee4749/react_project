import React from "react";
import review from "../scss/pick.module.css";
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
            <div className={`${review.content}`}>
                {/* <div className={`${review.title}`}>
                    Best Review
                </div> */}
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={3}
                    // pagination={{
                    //         type: 'progressbar',
                    //         }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={`${review.mySwiper} container`}
                    >
                    <SwiperSlide className={`${review.swiperslide}`}>
                        <div className={`${review.info_top}`}>
                            <p className={`${review.pplen}`}>저자극 비건 바디케어</p>
                            <p className={`${review.emname}`}>SHOWER GEL MORINGA</p>
                            <p className={`${review.krname}`}>모링가 대용량 샤워젤</p>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/1.png" alt="" /></a>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>750ml</span>
                            <span>31,000</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${review.swiperslide}`}>
                    <div className={`${review.info_top}`}>
                            <p className={`${review.pplen}`}>촉촉한 미스트</p>
                            <p className={`${review.emname}`}>BODY MIST ZESTY LIME BL</p>
                            <p className={`${review.krname}`}>제스티 라임 블라썸 바디미스트</p>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/2.png" alt="" /></a>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>100ml</span>
                            <span>21,000</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${review.swiperslide}`}>
                        <div className={`${review.info_top}`}>
                            <p className={`${review.pplen}`}>저자극 비건 선크림</p>
                            <p className={`${review.emname}`}>Vita Tone Up Sun Cream</p>
                            <p className={`${review.krname}`}>비타 톤업 선크림</p>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/3.png" alt="" /></a>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>50ml</span>
                            <span>21,000</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${review.swiperslide}`}>
                        <div className={`${review.info_top}`}>
                            <p className={`${review.pplen}`}>저자극 비건 바디케어</p>
                            <p className={`${review.emname}`}>SHOWER GEL MORINGA</p>
                            <p className={`${review.krname}`}>모링가 대용량 샤워젤</p>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/4.png" alt="" /></a>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>750ml</span>
                            <span>31,000</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${review.swiperslide}`}>
                    <div className={`${review.info_top}`}>
                            <p className={`${review.pplen}`}>저자극 비건 선크림</p>
                            <p className={`${review.emname}`}>Vita Tone Up Sun Cream</p>
                            <p className={`${review.krname}`}>비타 톤업 선크림</p>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/5.png" alt="" /></a>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>50ml</span>
                            <span>21,000</span>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div></div>
            </div>
        </>
        
    );
}
