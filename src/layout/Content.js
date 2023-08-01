import React from "react";
import Banner from "../component/Banner";
import Service from "../component/Service"
import Pick from "../component/Pick";
import About from "../component/About"
import Solution from "../component/Solution"

import pickdata from "../data/pick_swiper"

export default function Content(props) {
    console.log(props.dbsrc.gnb)
    return (
        <>
            <Banner></Banner>
            <Service></Service>
            <Pick dbsrc={pickdata}></Pick>
            <About></About>
            <Solution></Solution>
        </>
    );
}
// idnm={props.dbsrc.gnb[2].href}