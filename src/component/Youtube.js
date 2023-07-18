import React from "react";
import youtube from "../scss/youtube.module.css";

export default function Youtube(props) {
    return (
        <section className="mt-5">
            <div>
                <h3 className={`text-center ${youtube.title}`}>THE BODY SHOP VIDEO </h3>
            </div>
            <div className={`container mt-3 ${youtube.height}`}>
                <iframe className={`${youtube.youtube}`} width="560" height="315" src="https://www.youtube.com/embed/cPu69x2cHT8" title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
        </section>
            
        
    );
}
