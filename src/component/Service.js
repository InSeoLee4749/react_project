import React from "react";
import service from "../scss/service.module.css";

export default function Service(props) {
    return (
        <section className={`${service.section} container`}>
            <div className={`${service.inner}`}>
                <div className={`${service.title}`}>
                    <h2 className={`${service.h2}`}>미리보는 The Body Shop</h2>
                    <p className={`${service.p}`}>"바디샵"이 다가가는 다채로운 서비스</p>
                </div>
                <ul className={`${service.content}`}>
                    <li>
                        <p><img className={`${service.img}`} src="./img/service-1.jpg" alt="" /></p>
                        <p className={`${service.tit}`}>멤버십</p>
                        <p className={`${service.explain}`}>
                            바디샵의 특별한 멤버십
                            <br></br>
                            등급별로 준비된 다양한 혜택!
                            <br></br>
                            특별한 혜택들을 확인하세요.
                        </p>
                    </li>
                    <li>
                        <p><img className={`${service.img}`} src="./img/service-2.jpg" alt="" /></p>
                        <p className={`${service.tit}`}>회원 선물</p>
                        <p className={`${service.explain}`}>
                            공식앱 회원들에게만 제공하는 
                            <br></br>
                            웰컴 선물과 다양한 샘플들
                            <br></br>
                            깜짝 선물 교환권을 발급해드려요!
                        </p>
                    </li>
                    <li>
                        <p><img className={`${service.img}`} src="./img/service-3.jpg" alt="" /></p>
                        <p className={`${service.tit}`}>선물하기</p>
                        <p className={`${service.explain}`}>
                            선물하는 사람의 주소,연락처를 몰라도
                            <br></br>
                            소중한 선물을 메시지 카드와 함께
                            <br></br>
                            쇼핑백에 담아 선물해 보세요!
                        </p>
                    </li>
                </ul>
            </div>
        </section>
            
        
    );
}
