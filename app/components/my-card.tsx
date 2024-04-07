import {Tool} from "./category";
import style from "../styles/mycards.module.css"
import React, {useEffect, useState} from "react";
import {Card, CardContent, CardMedia} from "@mui/material";
import Image from "next/image";
import LinesEllipsis from "react-lines-ellipsis";
import Typography from "@mui/material/Typography";

export default function MyCard({data}: { data: Tool }) {

    const [webContent, setWebContent] = useState({title: "", description: "", image: "", logo: ""});
    const {link} = data;
    const [loading, setLoading] = useState(true);

    const baseUrl = "https://besticon-demo.herokuapp.com/allicons.json?url=";

    useEffect(() => {
        console.log("Queried on: " + baseUrl + link);
        const fetchData = async () => {
            const logoResponse = await fetch(baseUrl + link, {
                headers: {
                    "Allow-CrossOrigin": "true",
                    "Cache-Control":
                        "public, max-age=3600, stale-while-revalidate=3600, stale-if-error=86400",
                },
            });
            console.log("Logo Response: " + logoResponse);
        }
        // fetchData();
    }, [link]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(link,{
                    headers: {
                        "Allow-CrossOrigin": "true",
                    }
                });
                const data = await response.text();
                console.log('Web Retrieved data: ', data);
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const title = doc.querySelector('title')?.textContent || '';
                const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
                const image = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
                // const logoPath = doc.querySelector('link[rel="icon"]')?.getAttribute('href') || '';
                const logo = link + "/favicon.ico";
                console.log("logo: ", logo);
                setWebContent({title, description, image, logo});
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [link]);

    if (loading) {
        return <p>Loading...</p>;
    }

    const handleClick = () => {
        window.open(link, '_blank');
    };

    if (!webContent) {
        return (<div onClick={handleClick} style={{cursor: 'pointer'}}>
            <Image alt="404"
                   width={1200} height={1200}
                   src={"/404.jpeg"}/>
        </div>);
    }

    return (
        <Card className={`${style.container} rounded`}>
            <CardMedia className={``} component={'img'} image={webContent.logo}/>
            <CardContent className={`p-4`}>
                <Typography gutterBottom variant="h6" component="div">
                    {webContent.title}
                </Typography>
                <Typography sx={{mb: 1}} color="text.secondary">
                    viewed watched
                </Typography>
                <Typography sx={{mb: 1}} variant="body2" color="text.secondary">
                    <LinesEllipsis
                        text={webContent.description}
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
