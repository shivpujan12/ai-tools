import data from '../../data.json';
import {NextResponse} from "next/server";
import * as cheerio from "cheerio";


export interface Tool {
    title?: string,
    description?: string,
    image?:string,
    logo?:string,
    link?:string,
}


export async function GET(req: Request) {
    const result: Tool[] = [];
    try {
        const listOfPromise = data.map((item) => fetchData(item.link));
        const fetchedData = await Promise.all(listOfPromise);
        fetchedData.forEach((item) => {
            result.push({
                title: item.title,
                image: item.image,
                description: item.description,
                logo: item.logo,
                link: item.link,
            });
        });
        return NextResponse.json(result);
    } catch(error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}


const fetchData = async (link: string) => {
    try {
        const url = link || '';
        const html = await fetch(url).then(res => res.text());
        const $ = cheerio.load(html);
        const title = getMetaRag($, "title")
        const image = getMetaRag($, "image");
        const description = getMetaRag($, "description");
        const logo = getFavicon($);
        let finalLogo = "";
        if (logo?.includes('http')) {
            finalLogo = logo;
        } else {
            finalLogo = "https://" + new URL(link || '').host + logo;
        }
        return {
            title: title,
            image: image,
            description: description,
            logo: finalLogo,
            link: link,
        }

    } catch (error) {
        console.error("Error: ", error);
        return {"link": "not found"};
    }
}


const getFavicon = ($: cheerio.CheerioAPI) => {
    return (
        $('link[rel="icon"]').attr('href')
    )
}

const getMetaRag = ($: cheerio.CheerioAPI, name: string) => {
    return (
        $(`meta[name=${name}]`).attr('content') ||
        $(`meta[name="og:${name}"]`).attr('content') ||
        $(`meta[name="twitter:${name}"]`).attr('content') ||
        $(`meta[property=${name}]`).attr('content') ||
        $(`meta[property="og:${name}"]`).attr('content') ||
        $(`meta[property="twitter:${name}"]`).attr('content')
    );
}
