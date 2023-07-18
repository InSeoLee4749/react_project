import React from "react";
import review from "../scss/review.module.css";

export default function Review(props) {
    return (
        <>
            <section  id={props.idnm}>
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

            </section>
        </>
    );
}
