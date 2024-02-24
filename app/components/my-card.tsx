import {Tool} from "./category";
import style from "../styles/mycards.module.css"
import React, {useState} from "react";
import Image from "next/image"
import LinkPreview from "@/app/components/LinkPreview";
import LinesEllipsis from 'react-lines-ellipsis'

export default function MyCard({data}: { data: Tool }) {
    const [title, setTitle] = useState('Title');
    const [desc, setDesc] = useState('description...');

    return (
        <div className={`${style.myCard}`}>
            <div className={`${style.preview}`}>
                <LinkPreview url={data.link} handleTitle={setTitle} handleDesc={setDesc}/>
                {/*<Image alt="preview" width="100" height="100" src="/ai-photo-wizard.webp" />*/}
            </div>
            <div className={`${style.details}`}>
                <div className={`fw-bold ${style.title}`}>
                    <div className={``}>{title}</div>
                    <Image width={100} height={100} src={'/link_open_icon.svg'} alt={"open in browser"}/>
                </div>
                <div className={`${style.description}`}><LinesEllipsis
                    text={desc}
                    maxLine='2'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                /></div>
                <span className={``} style={{color: "#05848d"}}>Read more</span>
            </div>
            <div className={`${style.footer}`}>
                <div className={`border rounded-pill`}>Free</div>
                <div className={`border rounded-pill`}>Trial available</div>
                <div className={`border rounded-pill`}>Premium</div>
            </div>
        </div>
    );
}
