import style from "../styles/introsection.module.css"
import * as React from 'react';
import {useEffect, useState} from "react";

export default function Intro() {
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

function Banner() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        autoplay: true,
    };

    const imgArry = ['abstract01.jpg', 'abstract02.jpg', 'abstract03.jpg', 'abstract04.jpg',]
    const [imgSrc, setImgSrc] = useState('abstract01.jpg');
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setImgSrc(imgArry[(counter) % (imgArry.length)]);
            setCounter(counter + 1);
        }, 4000)
        return () => {
            clearInterval(timer);
        }
    }, [counter])



    return (
        <div className="sliderContainer rounded">
            <div>
                <img className={`rounded`} src={imgSrc}/>
            </div>
        </div>
    );
}
