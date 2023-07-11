import React from "react";
import solution from "../scss/solution.module.css";

export default function Solution(props) {
    return (
        <>
            <div className={`container bg-light`}>
                <div className="d-flex justify-content-between p-1">
                    <div>
                        <div className="p-3">
                            피부 고민별 The Body Shop의 솔루션
                            <div className={`bg-dark ${solution.from}`}>
                                <p className={`${solution.pw}`}>폼테그 영역</p>
                            </div>
                        </div>
                        <div className="p-3">
                            Thd Body Shop's 추천 아이템
                            <div className="pt-2 row">
                                <div className="border border-2">
                                    <ul className="d-flex">
                                        <div>
                                            <li>
                                                <a href="">
                                                    #예민한 두피를 위한 진저샴푸
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    #라임추출물과 플로럴한 향의 만남
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    #촉촉하게 스며드는 시어버터
                                                </a>
                                            </li>
                                        </div>
                                        <div className="mx-3">
                                            <li>
                                                <a href="">
                                                    #새벽의 이슬을 머금은 블루
                                                    머스크
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    #가볍고 밀키한 샤워크림
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    #섬세한 모링가를 담은 크림 바디
                                                    스크럽
                                                </a>
                                            </li>
                                        </div>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        당신을 위한 더바디의 솔루션 제품은?
                        <div>
                            <div className={`${solution.reimg}`}>solution결과 img</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
