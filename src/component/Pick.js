import React from "react";
import pick from "../scss/pick.module.css";

export default function Pick(props) {
    return (
        <>
            <div className="container">
                <div>
                    <div>
                        <h2 className="text-center">BEST PICK</h2>
                    </div>
                    <div>
                        <div className="d-flex pt-3">
                            <div>
                                <div>이미지1</div>
                                <p>스트로베리 샤워 볼</p>
                                <span>14,000</span>
                            </div>
                            <div>
                                <div>이미지2</div>
                                <p>스파이스드 오렌지</p>
                                <span>14,000</span>
                            </div>
                            <div>
                                <div>이미지3</div>
                                <p>루시어스 리치 샤워</p>
                                <span>14,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
