"use client";
import { useEffect, useRef } from "react";
import style from "../styles/category.module.css";
import Image from "next/image";
import MyCard from "./my-card";
import React from "react";
import Slider from "react-slick";

export interface Tool {
  name: string;
  link: string;
  // description: string;
  // icon: string;
}

export default function Category(props: any) {
  const title = props.title;
  const data: Tool[] = Object.values(props.data[0]);

  const containerRef = useRef();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };
    return (
    <div id={title} className={`${style.category}`}>
      <div className="text-4xl m-6"> {title} </div>
        <div className={`m-5`}>
          <Slider {...settings}>
          {data.map((d: Tool, i) => {
            return <MyCard key={i} data={d} />;
          })}
          </Slider>
        </div>
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
