'use client';
import style from "../styles/mainsection.module.css"
import * as React from 'react';
import Slider from 'react-slick';
import Image from "next/image";

export default function MainSection() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        width: 300,
        height: 300,

    };

    return (
        <div className={`${style.container} m-5`}>

        </div>
    );
}

function NextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
        <div className={className}
             style={{ ...style,width:43, height:43}}
             onClick={onClick}>
            <Image
                width={43}
                height={43}
                alt="forward"
                src={"/arrow-right.png"}
            />
        </div>
    )
}

function PrevArrow(props:any){
    const { className, style, onClick } = props;
    return (
        <div className={`${className}`}
             style={{ ...style, width:43, height:43}}
             onClick={onClick}
        >
            <Image width={150} height={150} alt="back" src={"/arrow-left.png"} />
        </div>
    )
}