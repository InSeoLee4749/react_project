import React from "react";
import youtube from "../scss/youtube.module.css";

export default function Youtube(props) {
    return (
        <>
            <div className={`container bg-light ${youtube.height}`}>
                유튜브 컨텐츠입니다.
            </div>
        </>
    );
}
