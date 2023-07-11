import React from "react";
import Banner from "../component/Banner";
import Solution from "../component/Solution";
import Pick from "../component/Pick";
import Youtube from "../component/Youtube";
import News from "../component/News";
import Review from "../component/Review";
import Contact from "../component/Contact";

export default function Content(props) {
    console.log(props.dbsrc.gnb)
    return (
        <>
            <Banner></Banner>
            <Solution></Solution>
            <Pick  idnm={props.dbsrc.gnb[0].href}></Pick>
            <Youtube></Youtube>
            <News  idnm={props.dbsrc.gnb[1].href}></News>
            <Review  idnm={props.dbsrc.gnb[2].href}></Review>
            <Contact  idnm={props.dbsrc.gnb[3].href}></Contact>
        </>
    );
}
