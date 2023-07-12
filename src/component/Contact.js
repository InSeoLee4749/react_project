import React from "react";
import  "../scss/contact.scss";

export default function Contact(props) {
    return (
        <>
        <section  id={props.idnm}>
            <div className={`flo container d-flex mt-5`}>
                <div className={`flotext`}>
                    <p>함께 걸으면서 지구를 지켜볼래?</p>
                    <p>The Body Shop과 함께하는 "플로깅 첼린지"</p>
                </div>
                <div></div>
                
            </div>
        </section>
            
        </>
    );
}
