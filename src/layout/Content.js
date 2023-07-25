import React from "react";
import Banner from "../component/Banner";
import Service from "../component/Service"
import Solution from "../component/Solution";
import Pick from "../component/Pick";
import Youtube from "../component/Youtube";
import News from "../component/News";
import Contact from "../component/Contact";

export default function Content(props) {
    console.log(props.dbsrc.gnb)
    return (
        <>
            <Banner></Banner>
            <Service></Service>
            <Pick  idnm={props.dbsrc.gnb[2].href}></Pick>
            {/* <Solution></Solution> */}
            {/* <Pick  idnm={props.dbsrc.gnb[0].href}></Pick> */}
            {/* <Youtube></Youtube> */}
            {/* <News  idnm={props.dbsrc.gnb[1].href}></News> */}
            {/* <Contact  idnm={props.dbsrc.gnb[3].href}></Contact> */}
        </>
    );
}
