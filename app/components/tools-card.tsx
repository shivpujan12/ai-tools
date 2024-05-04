import style from "../styles/tools-cards.module.css"
import React, {useEffect, useState} from "react";
import {Card, CardContent, CardMedia} from "@mui/material";
import Image from "next/image";
import LinesEllipsis from "react-lines-ellipsis";
import Typography from "@mui/material/Typography";
import {useRouter} from "next/navigation";
import {Tool} from "@/app/api/get-data/route";

export default function ToolsCard({tool}: { tool?: Tool }) {

    const router = useRouter();

    const handleClick = () => {
        window.open(tool?.link, '_blank');
    };

    if (!tool) {
        return (<div onClick={handleClick} style={{cursor: 'pointer'}}>
            <Image alt="404"
                   width={1200} height={1200}
                   src={"/404.jpeg"}/>
        </div>);
    }

    return (
        <Card className={`${style.container} rounded`} onClick={()=>router.push('/' + tool.title)}>
            <CardMedia className={``} component={'img'} image={tool.image}/>
            <CardContent className={`p-4`}>
                <div className={`${style.title}`}>
                    {/*<MyImageComponent width={24} height={24} alt={'icon'} className={``} src={webContent.logo}/>*/}
                    <div>
                        <h6>{tool.title}</h6>
                    </div>
                </div>
                <Typography sx={{mb: 1}} color="text.secondary">

                </Typography>
                <Typography sx={{mb: 1}} variant="body2" color="text.secondary">
                    <LinesEllipsis
                        text={tool.description}
                        maxLine='2'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </Typography>
                <Typography sx={{mb: 1}} color="text.secondary">
                    Tags
                </Typography>
            </CardContent>
        </Card>
        /*<div className={`${style.myCard}`}>
            <div className={`${style.preview}`}>
                <LinkPreview url={data.link} handleTitle={setTitle} handleDesc={setDesc}/>
                {/!*<Image alt="preview" width="100" height="100" src="/ai-photo-wizard.webp" />*!/}
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
        </div>*/
    );
}
