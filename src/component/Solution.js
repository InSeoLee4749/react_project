import React from "react";
import solution from "../scss/solution.module.css";

export default function Solution(props) {
    return (
        <>
            <div className={`container d-flex bg-light ${solution.height}`}>
                <div>
                    <div>피부 고민별 The Body Shop의 솔루션</div>
                    <div>The Body Shop's 추천 아이템</div>
                </div>
                <div>당신을 위한 더바디의 솔루션 제품은?</div>
            </div>
        </>
    );
}
