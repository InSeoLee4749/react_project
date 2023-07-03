import React from "react";
import Banner from "../component/Banner";
import Solution from "../component/Solution";
import Pick from "../component/Pick";
import Youtube from "../component/Youtube";
import News from "../component/News";
import Review from "../component/Review";
import Contact from "../component/Contact";

export default function Content(props) {
    return (
        <>
            <Banner></Banner>
            <Solution></Solution>
            <Pick></Pick>
            <Youtube></Youtube>
            <News></News>
            <Review></Review>
            <Contact></Contact>
        </>
    );
}
