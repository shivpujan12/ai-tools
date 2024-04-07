import {NextResponse} from "next/server";
import * as cheerio from 'cheerio';

type Query =  {
    link?: string;
}

const getMetaRag = ($: cheerio.CheerioAPI,name:string) =>  {
    return(
        $(`meta[name=${name}]`).attr('content') ||
        $(`meta[name="og:${name}"]`).attr('content') ||
        $(`meta[name="twitter:${name}"]`).attr('content') ||
        $(`meta[property=${name}]`).attr('content') ||
        $(`meta[property="og:${name}"]`).attr('content') ||
        $(`meta[property="twitter:${name}"]`).attr('content')
    );
}

const getFavicon = ($: cheerio.CheerioAPI) => {
    return (
        $('link[rel="icon"]').attr('href')
    )
}

export async function GET(req: Request){
    const { searchParams } = new URL(req.url);
    const obj : Query = Object.fromEntries(searchParams.entries());


    const fetchData = async () => {
        try {
            const url = obj.link || '';
            const html = await fetch(url).then(res => res.text());
            const $ = cheerio.load(html);
            const title = getMetaRag($, "title")
            const  image = getMetaRag($,"image");
            const  description = getMetaRag($,"description");
            const logo = getFavicon($);
            let finalLogo = "";
            if (logo?.includes('http')){
                finalLogo = logo;
            } else {
                finalLogo = "https://" + new URL(obj.link||'').host + logo;
            }
            return  {
                title: title,
                image: image,
                description: description,
                logo: finalLogo,
            }

        } catch (error) {
            console.error(error);
            return {"link": "anything"};
        }
    };

    return NextResponse.json(await fetchData());
}