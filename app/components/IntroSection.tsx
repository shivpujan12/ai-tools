import style from "../styles/introsection.module.css"
import * as React from 'react';

export default function IntroSection() {
    return (
        <div className={`${style.container}`}>
            <div className={`${style.greet}`}>
                Hey there! 👋🏻
            </div>
            <div className={`${style.content}`}>
                Discover 📋 <b>List of AI Tools</b>  and get your tasks done early ! ✅,<br/>
                We’ve curated some great list of Ai tools that your business requires in day-to-day
                operations.
            </div>
        </div>
    );
}