'use client';
import {Tool} from "@/app/api/get-data/route";

export default function ToolDetails({searchParams}:any){


    const cachedData = localStorage.getItem('my-cached-data') || '';
    let data : Tool = JSON.parse(cachedData)[searchParams.pos];

    return (
        cachedData ? (
            <div>
                <div>
                    {data.title}
                </div>
            </div>

            )
            : <div>Data is not Available</div>
    )
}
