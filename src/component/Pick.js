import React from "react";
import review from "../scss/pick.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

export default function Review(props) {
    return (
        <>
            <section id="pick">
            <div className={`${review.content}`} id="pic">
                {/* <div className={`${review.title}`}>
                    Best Review
                </div> */}
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={5}
                    // pagination={{
                    //         type: 'progressbar',
                    //         }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={`${review.mySwiper} py-5 `}
                    >
                    <SwiperSlide className={`${review.swiperslide}`}>
                        <div className={`${review.info_top}`}>
                            <p className={`${review.pplen} brand`}>저자극 비건 바디케어</p>
                            <p className={`${review.emname}`}>SHOWER GEL MORINGA</p>
                            <p className={`${review.krname}`}>모링가 대용량 샤워젤</p>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>31,000</span>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/1.png" alt="" /></a>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide className={`${review.swiperslide}`}>
                    <div className={`${review.info_top}`}>
                            <p className={`${review.pplen} brand`}>촉촉한 미스트</p>
                            <p className={`${review.emname}`}>BODY MIST ZESTY LIME BL</p>
                            <p className={`${review.krname}`}>제스티 라임 블라썸 바디미스트</p>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>21,000</span>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/2.png" alt="" /></a>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide className={`${review.swiperslide}`}>
                        <div className={`${review.info_top}`}>
                            <p className={`${review.pplen} brand`}>티트리 샴푸와 컨디셔너</p>
                            <p className={`${review.emname}`}>TEA TREE HAIRCARE SET</p>
                            <p className={`${review.krname}`}>티트리 헤어케어 세트</p>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>37,000</span>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/3.png" alt="" /></a>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide className={`${review.swiperslide}`}>
                        <div className={`${review.info_top}`}>
                            <p className={`${review.pplen} brand`}>티트리성분의 토너와 오일</p>
                            <p className={`${review.emname}`}>TEA TREE HERO SET</p>
                            <p className={`${review.krname}`}>티트리 히어로 세트</p>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>31,000</span>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/4.png" alt="" /></a>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide className={`${review.swiperslide}`}>
                    <div className={`${review.info_top}`}>
                            <p className={`${review.pplen} brand`}>보습과 아몬드향의 만남</p>
                            <p className={`${review.emname}`}>BODY LOTION ALMOND MILK</p>
                            <p className={`${review.krname}`}>아몬드 밀크 바디 로션</p>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>24,000</span>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/5.png" alt="" /></a>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide className={`${review.swiperslide}`}>
                        <div className={`${review.info_top}`}>
                            <p className={`${review.pplen} brand`}>티트리성분의 토너와 오일</p>
                            <p className={`${review.emname}`}>TEA TREE HERO SET</p>
                            <p className={`${review.krname}`}>티트리 히어로 세트</p>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>31,000</span>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/4.png" alt="" /></a>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide className={`${review.swiperslide}`}>
                    <div className={`${review.info_top}`}>
                            <p className={`${review.pplen} brand`}>보습과 아몬드향의 만남</p>
                            <p className={`${review.emname}`}>BODY LOTION ALMOND MILK</p>
                            <p className={`${review.krname}`}>아몬드 밀크 바디 로션</p>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>24,000</span>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/5.png" alt="" /></a>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide className={`${review.swiperslide}`}>
                    <div className={`${review.info_top}`}>
                            <p className={`${review.pplen} brand`}>촉촉한 미스트</p>
                            <p className={`${review.emname}`}>BODY MIST ZESTY LIME BL</p>
                            <p className={`${review.krname}`}>제스티 라임 블라썸 바디미스트</p>
                        </div>
                        <div className={`${review.info_box} row`}>
                            <span>21,000</span>
                        </div>
                        <div className={`${review.imgdiv}`}>
                            <a href=""><img className={`${review.img}`} src="./img/2.png" alt="" /></a>
                        </div>
                        
                    </SwiperSlide>

                </Swiper>
                <div></div>
            </div>
            </section>
            
        </>
        
    );
}
