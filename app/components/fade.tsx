'use client';
import React, {useEffect, useState} from "react";
// import {Fade} from "@mui/material";

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

export default Banner;
