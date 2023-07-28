import React from "react";
import solution from "../scss/solution.module.css";

export default function Solution(props) {
    return (
        <section className={`${solution.solution}`}>
            <div className={`${solution.section}`}>
                <div className={`${solution.inner}`}>
                    <div className={`${solution.wrap}`}>
                        <div>
                            <span className={`${solution.span}`}>"두피와 모발을 위한 최적의 솔루션"</span>
                            <h3 className={`${solution.h3}`}>
                                The Optimal Solution<br></br>For The Scals And Hair
                            </h3>
                            <p className={`${solution.p}`}>
                                역동적이면서 균형있는 사이클로 채워지는 본연의 힘,<br></br>우리의 모발과 피부가 치유될 수 있는 충분한 시간
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        
    );
}
