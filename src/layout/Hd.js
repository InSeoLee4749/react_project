import React from "react";
import hd from "../scss/hd.module.css";

export default function Ft(props) {
    const hddata = {
        gnb: [
            {
                title: "베스트 픽",
                href: "bestpick",
            },
            {
                title: "이벤트&캠페인",
                href: "event",
            },
            {
                title: "베스트 리뷰",
                href: "bestreview",
            },
            {
                title: "상담하기",
                href: "talk",
            },
        ],
    };
    return (
        <header id="hd" className="fixed-top border-bottom bg-transform">
            <div className="container px-0">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>
                        <a href="">
                            <img
                                className="align-items-center"
                                src="./img/logo.jpg"
                                alt=""
                            />
                        </a>
                    </h1>
                    <ul id="gnb" className="d-flex">
                        {hddata.gnb.map(function (v, i) {
                            return (
                                <li className="px-2">
                                    <a href={v.href} className="d-block">
                                        {v.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="sns d-flex">
                        <li className="px-2">
                            <a href="">유튜브</a>
                            <a href="">인스타그램</a>
                            <a href="">페이스북</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
