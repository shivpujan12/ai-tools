import {Tool} from "./category";
import style from "../styles/mycards.module.css"
import React, {useState} from "react";
import Image from "next/image"
import LinkPreview from "@/app/components/LinkPreview";
import LinesEllipsis from 'react-lines-ellipsis'

export default function MyCard({data}: { data: Tool }) {
    const [title, setTitle] = useState(`${data.link.slice(0,50)}`);
    const [desc, setDesc] = useState('It seems we were unable to fetch the details for this weblink, you can still visit the weblink by clicking on the card.');

    return (
        <div className={`${style.myCard}`}>
            <div className={`${style.preview}`}>
                <LinkPreview url={data.link} handleTitle={setTitle} handleDesc={setDesc}/>
                {/*<Image alt="preview" width="100" height="100" src="/ai-photo-wizard.webp" />*/}
            </div>
            <div className={`${style.details}`}>
                <div className={`mt-2 ${style.title}`} onClick={() => window.open(data.link, '_blank')}>
                    {title} <Image width={100} height={100} src={'/link_open_icon.svg'} alt={"open in browser"}/>
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
                <div className={`border rounded-full`}>Free</div>
                <div className={`border rounded-full`}>Trial available</div>
                <div className={`border rounded-full`}>Premium</div>
            </div>
        </div>
    );
}
