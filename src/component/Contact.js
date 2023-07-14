import React from "react";
import contact from "../scss/contact.module.css";

export default function Contact(props) {
    return (
        <>
        <section  id={props.idnm}>
            <div className={`flo container d-flex mt-5`}>
                <div className={`${contact.text}`}>
                    <p>함께 걸으면서 지구를 지켜볼래?</p>
                    <p className="mt-3">The Body Shop과 함께하는 "플로깅 첼린지"</p>
                </div>
                
                
            </div>
        </section>
            
        </>
    );
}
