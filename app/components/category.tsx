"use client";
import { useEffect, useRef } from "react";
import style from "../styles/category.module.css";
import Image from "next/image";
import MyCard from "./my-card";

export interface Tool {
  name: string;
  link: string;
  description: string;
  icon: string;
}

export default function Category(props: any) {
  const title = props.title;
  const data: Tool[] = Object.values(props.data[0]);

  const containerRef = useRef();

  return (
    <div id={title} className={`${style.category}`}>
      <div className="display-6"> {title} </div>

      <div className={`${style.cardContainer}`} >
        <div className={`${style.actions}`}>
          <div
            onClick={()=>{
              console.log("back clicked");
              containerRef.current.scrollLeft -= 200;
            }}
            style={{ backgroundColor: "white", borderRadius: "50%" }}
          >
            <Image width={43} height={43} alt="back" src={"/arrow-left.png"} />
          </div>
          <div
            onClick={()=>{
              console.log("forward clicked")
              containerRef.current.scrollLeft += 200;
            }}
            style={{ backgroundColor: "white", borderRadius: "50%" }}
          >
            <Image
              width={43}
              height={43}
              alt="forward"
              src={"/arrow-right.png"}
            />
          </div>
        </div>

        <div ref={containerRef} className={`${style.categoryContent} {styles.snapsInline}`}>
          {data.map((d: Tool, i) => {
            return <MyCard key={i} data={d} />;
          })}
        </div>
      </div>
    </div>
  );
}
