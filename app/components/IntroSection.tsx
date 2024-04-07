import style from "../styles/introsection.module.css"
import * as React from 'react';
import Banner from "@/app/components/fade";

export default function IntroSection() {
    return (
        <div className={`${style.container} rounded`}>
            <div className={`${style.contentContainer}`}>
            <div className={`${style.greet}`}>
                Hey there! 👋🏻<br/>
                Discover 📋 List of AI Tools and get your tasks done early ! ✅,<br/>
            </div>
            <div className={`${style.content}`}>
                We’ve curated some great list of Ai tools that your business requires in day-to-day
                operations.
            </div>
            </div>
            <div className={`${style.bannerContainer}`}>
                <Banner />
                {/*<img src={'banner.avif'}  alt={'banner'} />*/}
            </div>
        </div>
    );
}