import {NextResponse} from "next/server";

type Query =  {
    link?: string;
}

const getMetaRag = (name:string) =>  {
    return(
        $(`meta[name=${name}]`).attr('content') ||
        $(`meta[name="og:${name}"]`).attr('content') ||
        $(`meta[name="twitter:${name}"]`).attr('content') ||
        $(`meta[property=${name}]`).attr('content') ||
        $(`meta[property="og:${name}"]`).attr('content') ||
        $(`meta[property="twitter:${name}"]`).attr('content')
    );
}

export async function GET(req: Request){
    const { searchParams } = new URL(req.url);
    const obj : Query = Object.fromEntries(searchParams.entries());


    const fetchData = async () => {
        try {
            const url = obj.link || '';
            const response = await fetch(url);
            const data = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const title = doc.querySelector('title')?.textContent || '';
            const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
            const image = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
        } catch (error) {
            console.error(error);
        }
    };


    return NextResponse.json(obj.link);
}